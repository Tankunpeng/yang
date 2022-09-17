import { describe, it, expect } from "vitest";
import {Cell, CellName} from "../src/cellName";


export const face1: Cell[] = [
    { name: CellName.sheep, location: [20,4], },
    { name: CellName.wood, location: [28,4], },
    { name: CellName.bucket, location: [4,12], },
    { name: CellName.cabbage, location: [16,12], },
    { name: CellName.brush, location: [24,12], },
    { name: CellName.wool, location: [32,12], },
    { name: CellName.wool, location: [44,12], },
    { name: CellName.fork, location: [4,20], },
    { name: CellName.glove, location: [24,20], },
    { name: CellName.cabbage, location: [44,20], },
    { name: CellName.fork, location: [4,28], },
    { name: CellName.scissor, location: [12,24], },
    { name: CellName.wood, location: [36,24], },
    { name: CellName.carrot, location: [44,28], },
    { name: CellName.grass, location: [20,40], },
    { name: CellName.cabbage, location: [28,40], },
    { name: CellName.milk, location: [0,44], },
    { name: CellName.cabbage, location: [48,44], },
    { name: CellName.glove, location: [16,56], },
    { name: CellName.grass, location: [32,56], },
]

describe('find possible result', () => {
    it('should calc weather has resolution', () => {
        expect(hasResolution(face1)).toBe(true)
    })

    it('should get cells count', () => {
        expect(Object.fromEntries(countCell(face1))).toEqual({
            sheep: 1,
            milk: 1,
            wool: 2,
            grass: 2,
            cabbage: 4,
            carrot: 1,
            corn: 0,
            wheat: 0,
            fire: 0,
            wood: 2,
            bell: 0,
            glove: 2,
            bucket: 1,
            fork: 2,
            scissor: 1,
            brush: 1,
            blank: 0
        })
    })
})

function hasResolution(faceLayer: Cell[]) {
    const count = countCell(face1)
    return !![...count].filter(([name, count]) => count > 2).length
}

function countCell(cells: Cell[]) {
    const cellMap = new Map(Object.values(CellName).map(key => [key, 0]))
    cells.forEach(cell => cellMap.set(cell.name, (cellMap.get(cell.name) || 0 ) + 1))
    return cellMap
}


