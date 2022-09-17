// 布局网格

import {Layer} from "./Layer";
import {Cell, CellName} from "../cellName";
import {createGrid} from "../createGrid";

const grid: Cell[] = [
    {name: CellName.blank, location: [0, 0]},
    {name: CellName.blank, location: [8, 0]}
]

export function Grid({offset = 0}: { offset: number }) {
    const rows = offset % 8 > 0 ? 7 : 8
    const cols = offset % 8 > 0 ? 6 : 7
    return <div style={{ width: '320px', height: '320px', border: '2px solid', position: 'relative', }}>
        <div style={{ position: 'absolute', left: '20px' }}><Layer data={createGrid(rows, cols, [offset % 8, offset % 8])}/></div>
    </div>
}