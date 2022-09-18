import {Cell} from "../cellName";
import {Layer, LayerWrap} from "./Layer";
import {useEffect, useState} from "react";
import {addToHome, countCell, faceCellIdsSet, getFaceCells, hasResolution, missCell} from "../model/resolution";
import './Play.css'
import {CellView} from "./CellView";

export function Play({struct, data}: { struct: Cell[][], data: Cell[][] }) {

    const [lastData, setLastData] = useState(data)
    const [faceCells, setFaceCells] = useState(faceCellIdsSet(lastData))

    const [record, setRecord] = useState<Cell[]>([])

    const [home, setHome] = useState<Cell[]>([])


    function handleClick(event: any, item: Cell) {
        console.log(item, faceCells.has(item.id))
        if(faceCells.has(item.id)) {
            const currentData = removeItem(lastData, item)
            setLastData(currentData)
            setFaceCells(faceCellIdsSet(currentData))
            console.log(faceCellIdsSet(currentData))
            setRecord([...record, item])
            setHome(addToHome(home, item))
        }
    }

    useEffect(() => {
        console.log(faceCells)
    }, [])

    return <div className={'play'}>
        <LayerWrap>
            {[...lastData].reverse().map((layer, i) => <Layer
                data={layer}
                key={JSON.stringify(layer)}
                stack={lastData.length - i}
                faceCells={faceCells}
                handleClick={handleClick}
            ></Layer>)}
        </LayerWrap>
        <div className={'play__record'}>
            <div>
                <div>HOME: { 7 - home.length} 空<div  className={'play__record-box'}>{home.map(cell => <CellView id={'X'} name={cell.name}></CellView>)}</div></div>
                <div><span>{hasResolution(getFaceCells(lastData)) ? <span className={'play__pass'}>pass</span> : <span className={'play__fail'}>should guess</span>}</span></div>
                <div>可选集合 <div  className={'play__record-box'}>{[...countCell(getFaceCells(lastData))].filter(a => a[1]).sort((a,b) => b[1] - a[1]).map(([name, count]) => <span key={`${name}-${count}`} className={`play__record-count play__record-count${count}`}><CellView id={`${count}个`} name={name}></CellView></span>)}</div></div>
                <div>未出现: <div className={'play__record-box'}>{[...missCell(getFaceCells(lastData))].map(name => <CellView id={'X'} name={name}></CellView>)}</div></div>
            </div>
        </div>
    </div>
}


function removeItem(cells: Cell[][], item: Cell) {
    const result = []
    for(let layer of cells) {
        const current = []
        for(let cell of layer) {
            if(cell.id !== item.id) {
                current.push(cell)
            } else {
                console.log('remove', item)
            }
        }
        result.push(current)
    }

    return result
}