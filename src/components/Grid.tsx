// 布局网格

import {Layer, LayerWrap} from "./Layer";
import {Cell, CellName} from "../cellName";
import {createGrid} from "../createGrid";

const grid: Cell[] = [
    {name: CellName.blank, location: [0, 0]},
    {name: CellName.blank, location: [8, 0]}
]

export function Grid({offset = 0, handleClick = () => null}: { offset: number, handleClick?: any }) {
    const rows = offset % 8 > 0 ? 7 : 8
    const cols = offset % 8 > 0 ? 6 : 7
    return <LayerWrap><Layer
            data={createGrid(rows, cols, [offset % 8, offset % 8])}
            handleClick={handleClick}
        /></LayerWrap>
}


