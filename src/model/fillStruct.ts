import {Cell, CellName} from "../cellName";

/**
 * 根据 struct Id 获取初始化数据
 * 约定 struct 目录结构： ./model/[id]/struct.ts -> export const struct
 * */
export function getInitStruct(id: string) {
    return import(`./../../src/model/${id}/struct.ts`).then(data => {
        return data.struct
    })
}

/**
 * 更换名称，参数支持 layer 或 struct
 * */
export function changeName(cells: (Cell | Cell[])[], request: { id: string, name: CellName }) {
    const change = (item: Cell) => {
        return request.id === item.id ? {
            ...item,
            name: request.name
        } : item
    }
    return cells.map(cell => {
        if (Array.isArray(cell)) {
            return cell.map(change)
        }
        return change(cell)
    })
}

/**
 * 获取 cell，参数支持 layer 或 struct
 * */
export function getItem(cells: (Cell | Cell[])[], id: string): Cell | null {
    return cells.flat().find(cell => cell.id === id) || null
}