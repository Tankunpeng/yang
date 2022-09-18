import {Cell, CellName} from "../cellName";

/**
 * 是否有解
* */
export function hasResolution(cells: Cell[]) {
    return !!filterCount(cells, ([name, count]) => count > 2).size
}


/**
 * 未出现的卡片
 * */
export function missCell(cells: Cell[]) {
    return filterCount(cells, ([name, count]) => count === 0 && name !== CellName.blank)
}

/**
 * 按数量过滤卡片
 * */
function filterCount(cells: Cell[], assert: ([name, count]: [string, number]) => boolean) {
    const count = countCell(cells)
    return new Set([...count].filter(assert).map(([name]) => name))
}


/**
 * 统计各类卡片的数量
 * */
export function countCell(cells: Cell[]) {
    const cellMap = new Map(Object.values(CellName).map(key => [key, 0]))
    cells.forEach(cell => cellMap.set(cell.name, (cellMap.get(cell.name) || 0) + 1))
    return cellMap
}

/**
 * 获取当前堆叠的表层（可立即选中的）卡片
 * */
export function getFaceCells(layers: Cell[][]) {
    const slice = 8
    const rows = 8
    const cols = 7
    const faceCells = Array( rows * slice * cols * slice ).fill(false)
    const result = []


    let index= 0
    for(let layer of layers) {
        index++
        for(let cell of layer) {
            const [x0, y0] = cell.location
            let conflict = false
            for(let x = 0; x < slice; x++) {
                for(let y = 0; y < slice; y++) {
                    const index = ((y0 + y) * cols * slice) + (x0 + x)
                    if(faceCells[index]) {
                        conflict = true
                    }

                    faceCells[index] = true
                }
            }
            if (!conflict) {
                result.push(cell)
            }
        }
    }
    return result
}

export function faceCellIdsSet(cells: Cell[][]) {
    return new Set(getFaceCells(cells).map(item => item.id))
}

/**
 * 根据堆叠结构为 Cell 设置唯一 id
 * */
export const genId = (data: Cell[][]) => {
    return data.map((layer, stackIndex) => layer.map((cell, index) => {
        cell.id = cell.id || `${stackIndex + 1}-${index + 1}`
        return cell
    }))
}


/**
 * 卡片选中消除逻辑
 * */
export function addToHome(cells: Cell[], item: Cell) {
    cells = [...cells]
    if (cells.length > 6) {
        return cells
    }

    const cellCount = countCell(cells)
    if(cellCount.get(item.name) === 2) {
        return cells.filter(cell => cell.name !== item.name)
    }
    cells.push(item)
    return cells
}