import {Cell, CellName} from "./cellName";

export function createGrid(rows: number, cols: number, offset = [0, 0]): Cell[] {
    if (rows === 0 || cols === 0) return []
    const name = CellName.blank
    const result: Cell[] = []

    for (let i = 0; i < rows * cols; i++) {
        const row = Math.floor(i / cols)
        const col = i % cols
        result.push({
            name,
            location: [col * 8 + offset[0], row * 8 + offset[1]]  // 横轴为 x 对应 n 列, 纵轴为 y 对应 n 行
        })
    }

    return result
}