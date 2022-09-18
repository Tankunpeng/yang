import {Cell} from "../cellName";
import {Layer, LayerWrap} from "./Layer";
import {getFaceCells} from "../model/resolution";
import {useEffect, useState} from "react";

export function Play({struct, data}: { struct: Cell[][], data: Cell[][] }) {

    const [lastData, setLastData] = useState(genId(data))
    const [faceCells, setFaceCells] = useState(faceCellIdsSet(lastData))

    function handleClick(event: any, item: Cell) {
        console.log(item, faceCells.has(item.id))
        if(faceCells.has(item.id)) {
            const currentData = removeItem(lastData, item)
            setLastData(currentData)
            setFaceCells(faceCellIdsSet(lastData))
            console.log(faceCellIdsSet(lastData))
        }
    }

    useEffect(() => {
        console.log(faceCells)
    }, [])

    return <div>
        <LayerWrap>
            {lastData.reverse().map((layer, i) => <Layer
                data={layer}
                key={JSON.stringify(layer)}
                stack={lastData.length - i}
                faceCells={faceCells}
                handleClick={handleClick}
            ></Layer>)}
        </LayerWrap>
    </div>
}

const genId = (data: Cell[][]) => {
    return data.map((layer, stackIndex) => layer.map((cell, index) => {
        cell.id = cell.id || `${stackIndex + 1}-${index + 1}`
        return cell
    }))
}

function faceCellIdsSet(cells: Cell[][]) {
    return new Set(getFaceCells(cells).map(item => item.id))
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