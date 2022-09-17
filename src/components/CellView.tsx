import {CellName} from "../cellName";

export function CellView({ name, width = 50 }: { name: CellName, width?: number}) {
    return <div style={{height: `${width}px`, width: `${width}px`, boxSizing: 'border-box', border: '1px solid', color: '#ccc'}}>
        { name === 'blank'
            ? '?'
            : <img
                src={`./assets/${name}.PNG`} alt=""
                width={width-2}
                height={width-2}
            />
        }
    </div>
}