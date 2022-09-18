import {CellName} from "../cellName";
import './CellView.css'

export function CellView({ name, width = 50, id }: { name: CellName, width?: number, id?: string}) {
    return <div
        className={'cell'}
        style={{height: `${width}px`, width: `${width}px`, boxSizing: 'border-box', border: '1px solid', color: '#ccc'}}
    >
        <span className={'cell__id'}>{ id ? id : ''}</span>
        { name === 'blank'
            ? ''
            : <img
                src={`./assets/${name}.PNG`} alt=""
                width={width-2}
                height={width-2}
            />
        }
    </div>
}