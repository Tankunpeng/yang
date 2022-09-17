import {CellView} from "./CellView";
import {Cell, Location} from "../cellName";




export function Layer({data, handleClick = () => null}: { data: Cell[], handleClick?: any }) {
    return <div>
        {data.map(item => {
            return <div onClick={(event) => handleClick(event, item)}><PositionedCell cell={item} /></div>
        })}
    </div>
}


export function PositionedCell({cell}: { cell: Cell }) {
    const width = 40;
    const Len = (width: number) => width/8;
    const getPositionStyle = (location: Location) => {
        return {
            left: `${location[0] * Len(width)}px`,
            top: `${location[1] * Len(width)}px`,
        }
    }

    return <div style={{
        position: 'absolute',
        ...getPositionStyle(cell.location)
    }} >
        <CellView name={cell.name} width={width}/>
    </div>
}