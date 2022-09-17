import {Cell, CellName} from "../cellName";

export function hasResolution(cells: Cell[]) {
    return !!filterCount(cells, ([name, count]) => count > 2).size
}

export function missCell(cells: Cell[]) {
    return filterCount(cells, ([name, count]) => count === 0 && name !== CellName.blank)
}

function filterCount(cells: Cell[], assert: ([name, count]: [string, number]) => boolean) {
    const count = countCell(cells)
    return new Set([...count].filter(assert).map(([name]) => name))
}

export function countCell(cells: Cell[]) {
    const cellMap = new Map(Object.values(CellName).map(key => [key, 0]))
    cells.forEach(cell => cellMap.set(cell.name, (cellMap.get(cell.name) || 0) + 1))
    return cellMap
}

// 假设每一层没有重叠
export function getFaceCells(layers: Cell[][]) {
    const slice = 8
    const rows = 8
    const cols = 7
    const faceCells = Array( rows * slice * cols * slice ).fill(false)
    const result = []
    for(let layer of layers) {
        for(let cell of layer) {
            const [x0, y0] = cell.location
            let conflict = false
            for(let x = 0; x < slice; x++) {
                for(let y = 0; y < slice; y++) {
                    const index = ((y0 + y) * cols * slice) + (x0 + x)
                    if(faceCells[index]) {
                        conflict = true
                        break
                    }

                    faceCells[index] = true
                    debugger
                }
                if(conflict) {
                    break
                }
            }
            debugger
            if (!conflict) {
                result.push(cell)
            }
        }
    }
    return result
}