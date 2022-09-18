import './FillStruct.css'
import {Cell, CellName} from "../cellName";
import {Layer, LayerWrap} from "./Layer";
import {useEffect, useState} from "react";
import {faceCellIdsSet} from "../model/resolution";
import {CellSelect} from "./CellSelect";
import {changeName} from "../model/fillStruct";
import {removeItem} from "./Play";

export function FillStruct({struct, onChange, used }: { struct: Cell[][], used?: Cell[], onChange?: (data: Cell[][]) => void }) {
    const [lastData, setLastData] = useState(struct)
    const [faceCells, setFaceCells] = useState(faceCellIdsSet(lastData))
    const [active, setActive] = useState<Cell | null>(null)

    function handleClick(e: any, item: Cell) {
        setActive(item)
    }

    useEffect(() => {
        setLastData(struct)
    }, [struct])

    function change(name: CellName) {
        const id = active!.id || ''
        const data = changeName(lastData, {id, name}) as unknown as Cell[][]
        setLastData(data)
        setActive(null)
        onChange && onChange(data)
        console.log(data)
    }

    const [usedLen, setUsedLen] = useState(used.length || 0)
    useEffect(() => {
        setUsedLen(used!.length)
        const filted = used!.reduce((result, item) => removeItem(result, item), lastData)
        setFaceCells(faceCellIdsSet(filted))
    }, [used])

    function isNotUsed(cell: Cell) {
        return !(used || [])?.find(item => item.id === cell.id)
    }

    return <><LayerWrap>
        {[...lastData].reverse().map((layer, i) => <Layer
            data={layer.filter(isNotUsed)}
            key={JSON.stringify(layer)}
            stack={lastData.length - i}
            faceCells={faceCells}
            handleClick={handleClick}
        ></Layer>)}
    </LayerWrap>
        <div>12312 { used!.length }</div>
        {active ? <PopBox><CellSelect value={active.name} onChange={change}></CellSelect></PopBox> : ''}
    </>
}

function PopBox({children}: { children: any }) {
    return <div className={'pop-box'}>
        {children}
    </div>
}