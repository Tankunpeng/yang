import {describe, expect, it} from "vitest";
import {CellName} from "../src/cellName";
import {createGrid} from "../src/createGrid";

describe('spike', () => {
    // TODO
    // TODO

    it('create blank grid when both row & col equals 0', () => {
        expect(createGrid(0, 0)).toEqual([])
    })


    it('create 1 cell grid when row = 1 & col = 1', () => {
        expect(createGrid(1, 1)).toEqual([{ name: CellName.blank, location: [0, 0]}])
    })

    it('create 1 line grid when row = 1 & col > 1', () => {
        expect(createGrid(1, 2)).toEqual([
            { name: CellName.blank, location: [0, 0]},
            { name: CellName.blank, location: [0, 8]},
        ])
    })

    it('create 2 line grid when row > 1 & col > 1', () => {
        expect(createGrid(2, 3)).toEqual([
            { name: CellName.blank, location: [0, 0]},
            { name: CellName.blank, location: [8, 0]},
            { name: CellName.blank, location: [16, 0]},
            { name: CellName.blank, location: [0, 8]},
            { name: CellName.blank, location: [8, 8]},
            { name: CellName.blank, location: [16, 8]},
        ])
    })

    it('create 2 line grid with offest when row > 1 & col > 1', () => {
        expect(createGrid(2, 3, [4,4])).toEqual([
            { name: CellName.blank, location: [4, 4]},
            { name: CellName.blank, location: [12, 4]},
            { name: CellName.blank, location: [20, 4]},
            { name: CellName.blank, location: [4, 12]},
            { name: CellName.blank, location: [12, 12]},
            { name: CellName.blank, location: [20, 12]},
        ])
    })
})



