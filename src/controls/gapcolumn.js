import {__} from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import {useState} from '@wordpress/element';
import {DesktopIcon, TabletIcon, PhoneIcon} from '../utils/svgicons';
import {useSelect} from '@wordpress/data';

const GapColumnControl = ({
	min,
	max,
	label,
	responsive,
	units,

	unit,
	setUnit,

	gapColumn,
	setGapColumn,

	gapMdColumn,
	setGapMdColumn,

	gapSmColumn,
	setGapSmColumn,
}) => {
	const [lock, setLock] = useState(true);
	const sides = ["Column"];
	const allUnits = units ? units : ["px", "em", "rem"];

	const getView = useSelect(select => {
		const {getView} = select('hash-form/data');
		const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);

	const callFunctionByName = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'setGapColumn':
					return setGapColumn(value);

				case 'setGapMdColumn':
					return setGapMdColumn(value);

				case 'setGapSmColumn':
					return setGapSmColumn(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'setGapColumn':
					return setGapColumn(value);
				default:
					console.error(`Function ${name} not found.`);
			}
		}
	}

	const getGapValue = (name, value) => {
		if (responsive) {
			switch (name) {
				case 'gapColumn':
					return gapColumn;
				case 'gapMdColumn':
					return gapMdColumn;
				case 'gapSmColumn':
					return gapSmColumn;
				default:
					console.error(`Value of ${name} not found.`);
			}
		} else {
			switch (name) {
				case 'gapColumn':
					return gapColumn;
				default:
					console.error(`Value of ${name} not found.`);
			}
		}
	}

	const calcMinVal = () => {
		let ret;
		switch (unit) {
			case 'em':
				ret = 0;
				break;
			case 'vh':
				ret = 0;
				break;
			case 'vw':
				ret = 0;
				break;
			case '%':
				ret = 0;
				break;
			default:
				ret = min;
				break;
		}
		return ret;
	}

	const calcMaxVal = () => {
		let ret;
		switch (unit) {
			case 'em':
				ret = 10;
				break;
			case 'vh':
				ret = 100;
				break;
			case 'vw':
				ret = 100;
				break;
			case '%':
				ret = 100;
				break;
			default:
				ret = max;
				break;
		}
		return ret;
	}

	return <>
		<div className={`hf-field hf-field-gap ${responsive ? 'hf-responsive' : ''}`}>
			<div className="hf-label">
				{label && (<label htmlFor="input">{label}</label>)}
				{responsive && (<ResponsiveDropdown />)}

				{
					responsive ? (
						<>
							<div className="hf-unit-btn-group">
								{allUnits.map((unt, index) => {
									return <button
										className={`${unit === unt ? "active" : ""}`}
										value={unt}
										onClick={(e) => {
											setUnit(e.target.value);
											sides.map((sde, index) => {
												callFunctionByName(`setGap${sde}`, '');
												callFunctionByName(`setGapMd${sde}`, '');
												callFunctionByName(`setGapSm${sde}`, '');
											});
										}}
									>{unt}
									</button>
								})}
							</div>
						</>
					) : (
						<>
							<div className="hf-unit-btn-group">
								{allUnits.map((unt, index) => {
									return <button
										className={`${unit === unt ? "active" : ""}`}
										value={unt}
										onClick={(e) => {
											setUnit(e.target.value);
											sides.map((sde, index) => {
												callFunctionByName(`setGap${sde}`, '');
											});
										}}
									>{unt}
									</button>
								})}
							</div>
						</>
					)
				}

			</div>

			{
				responsive ? (
					<>
						<div className="hf-input-fields">
							<div className="hf-gap-input-group hasLock">
								{getView == 'Desktop' && sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												callFunctionByName(`setGap${side}`, e.target.value);
											}}
											value={getGapValue(`gap${side}`)} />
										<span>
											{side}
										</span>
									</span>
								})}
								{getView == 'Tablet' && sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												callFunctionByName(`setGapMd${side}`, e.target.value);
											}}
											value={getGapValue(`gapMd${side}`)} />
										<span>
											{side}
										</span>
									</span>
								})}
								{getView == 'Mobile' && sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												callFunctionByName(`setGapSm${side}`, e.target.value);
											}}
											value={getGapValue(`gapSm${side}`)} />
										<span>
											{side}
										</span>
									</span>
								})}
							</div>
						</div>
					</>
				) : (
					<>
						<div className="hf-input-fields">
							<div className="hf-gap-input-group hasLock">
								{sides.map((side, index) => {
									return <span>
										<input type="number"
											min={calcMinVal()}
											max={calcMaxVal()}
											key={index}
											onChange={(e) => {
												callFunctionByName(`setGap${side}`, e.target.value);
											}}
											value={getGapValue(`gap${side}`)} />
										<span>
											{side}
										</span>
									</span>
								})}
							</div>
						</div>
					</>
				)
			}

		</div>
	</>;
}

export default GapColumnControl;