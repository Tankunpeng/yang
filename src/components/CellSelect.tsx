import {CellName} from "../cellName";
import {CellView} from "./CellView";
import './CellSelect.css'

export function CellSelect({value, onChange}: { value: CellName, onChange: (name: CellName) => void }) {
    const names = Object.keys(CellName) as unknown as CellName[]
    return <div>
        <div className={'cell-select__options'}>
            {names.map(name => <div onClick={() => onChange(name)}
                                    className={'cell-select__item ' + (name === value ? ' cell-select__current' : '')}>
                <CellView key={name} name={name}></CellView></div>)}
        </div>
    </div>
}