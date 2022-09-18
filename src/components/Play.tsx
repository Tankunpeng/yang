import {Cell} from "../cellName";
import {Layer, LayerWrap} from "./Layer";
import {useEffect, useState} from "react";
import {faceCellIdsSet} from "../model/resolution";

export function Play({struct, data}: { struct: Cell[][], data: Cell[][] }) {

    const [lastData, setLastData] = useState(data)
    const [faceCells, setFaceCells] = useState(faceCellIdsSet(lastData))

    function handleClick(event: any, item: Cell) {
        console.log(item, faceCells.has(item.id))
        if(faceCells.has(item.id)) {
            const currentData = removeItem(lastData, item)
            setLastData(currentData)
            setFaceCells(faceCellIdsSet(currentData))
            console.log(faceCellIdsSet(currentData))
        }
    }

    useEffect(() => {
        console.log(faceCells)
    }, [])

    return <div>
        <LayerWrap>
            {[...lastData].reverse().map((layer, i) => <Layer
                data={layer}
                key={JSON.stringify(layer)}
                stack={lastData.length - i}
                faceCells={faceCells}
                handleClick={handleClick}
            ></Layer>)}
        </LayerWrap>
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