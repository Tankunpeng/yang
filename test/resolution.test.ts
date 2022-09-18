import {describe, expect, it} from "vitest";
import {Cell, CellName} from "../src/cellName";
import {countCell, faceCellIdsSet, genId, getFaceCells, hasResolution, missCell} from "../src/model/resolution";
import {data} from "../src/model/day918/data1";


export const face1: Cell[] = [
    {name: CellName.sheep, location: [20, 4],},
    {name: CellName.wood, location: [28, 4],},
    {name: CellName.bucket, location: [4, 12],},
    {name: CellName.cabbage, location: [16, 12],},
    {name: CellName.brush, location: [24, 12],},
    {name: CellName.wool, location: [32, 12],},
    {name: CellName.wool, location: [44, 12],},
    {name: CellName.fork, location: [4, 20],},
    {name: CellName.glove, location: [24, 20],},
    {name: CellName.cabbage, location: [44, 20],},
    {name: CellName.fork, location: [4, 28],},
    {name: CellName.scissor, location: [12, 24],},
    {name: CellName.wood, location: [36, 24],},
    {name: CellName.carrot, location: [44, 28],},
    {name: CellName.grass, location: [20, 40],},
    {name: CellName.cabbage, location: [28, 40],},
    {name: CellName.milk, location: [0, 44],},
    {name: CellName.cabbage, location: [48, 44],},
    {name: CellName.glove, location: [16, 56],},
    {name: CellName.grass, location: [32, 56],},
]

describe('find one layer possible result', () => {
    it('should calc whether has resolution', () => {
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

    it('should get miss cells', () => {
        expect([...missCell(face1)]).toEqual(['corn', 'wheat', 'fire', 'bell'])
    })
})

describe('find multi layer possible result', () => {

    it('should get blank face cells count', () => {
        expect(getFaceCells([])).toEqual([])
    })

    it('should get one face cells count', () => {
        expect(getFaceCells([[{name: CellName.sheep, location: [0, 0],}]])).toEqual([{
            name: CellName.sheep,
            location: [0, 0],
        },])
        expect(getFaceCells([[
            {name: CellName.blank, location: [4, 12],},
        ], [
            {name: CellName.blank, location: [20, 4],},
            {name: CellName.bucket, location: [4, 12],},
        ], [
            {name: CellName.sheep, location: [20, 4],},
            {name: CellName.blank, location: [28, 4],},
            {name: CellName.bucket, location: [4, 12],},
        ]],)).toEqual([
            {name: CellName.blank, location: [4, 12],},
            {name: CellName.blank, location: [20, 4],},
            {name: CellName.blank, location: [28, 4],},
        ])
    })

    it('should get right face cells set', () => {
        console.log([...faceCellIdsSet(genId(data))])
        expect([...faceCellIdsSet(genId(data))]).toEqual([
            '1-1', '1-2', '1-3', '1-4',
            '3-3', '3-4',
            '4-2', '4-3', '4-4', '4-5',
            '6-2', '6-3', '6-4', '6-5',
            // '8-2', '8-3', '8-4', '8-5', '8-6', // error
            '10-1', '10-2',
            '11-3',
            '12-2', '12-3', '12-4', '12-5'
        ])
    })
})


