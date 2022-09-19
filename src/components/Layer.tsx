import {CellView} from "./CellView";
import {Cell, Location} from "../cellName";
import './Layer.css'


export function Layer({
                          data,
                          handleClick = () => null,
                          stack = 0,
                          faceCells
                      }: { data: Cell[], handleClick?: any, stack?: number, faceCells?: Set<string> }) {
    return <div>
        {data.map((item, index) => {
            return <div onClick={(event) => handleClick(event, item)} key={item.id}
                        className={faceCells && !faceCells.has(item.id || '') ? 'not-face' : ''}>
                <PositionedCell cell={item} isFace={!faceCells || faceCells.has(item.id || '')}/>
            </div>
        })}
    </div>
}


export function PositionedCell({cell, isFace}: { cell: Cell, isFace: boolean }) {
    const width = 40;
    const Len = (width: number) => width / 8;
    const getPositionStyle = (location: Location) => {
        return {
            left: `${location[0] * Len(width)}px`,
            top: `${location[1] * Len(width)}px`,

        }
    }

    return <div style={{
        position: 'absolute',
        ...getPositionStyle(cell.location)
    }}>
        <CellView name={cell.name} width={width} id={cell.id}/>
        {!isFace ? <span className={'back-cover'} ></span>: ''}
    </div>
}

export function LayerWrap({children}: { children: any }) {
    return <div style={{width: '320px', height: '320px', border: '2px solid', position: 'relative',}}  className={'layer-wrap__box'}>
        <div style={{position: 'absolute', left: '20px'}} className={'layer-wrap__content'}>
            {children}
        </div>
    </div>
}