enum YangName {
    sheep = 'sheep', // ๐ 1
    milk = 'milk', // ๐ฅ1
    wool = 'wool', // ๐งถ 1

    grass = 'grass',// ๐ฟ1
    cabbage = 'cabbage', // ๐ฅฌ 1
    carrot = 'carrot', // ๐ฅ 1
    corn = 'corn', // ๐ฝ 1
    wheat = 'wheat', // ๐พ1

    fire = 'fire', // ๐ฅ 1
    wood = 'wood', // ๐ชต 1
    bell = 'bell', // ๐ 1

    glove = 'glove', // ๐งค 1
    bucket = 'bucket', // ๐ชฃ 1
    fork = 'fork', // ๐ด 1
    scissor = 'scissor', // โ๏ธ 1
    brush = 'brush', // ๐ชฅ 1
}

enum Blank {
    blank = 'blank' // ๐ณ๏ธ
}


export enum BlockName {
    black = 'black',
    blue = 'blue',
    github = 'github',
    white = "white",
    yellow = 'yellow',
    homework = 'homework',
}

export const CellName = {
    // ...YangName,
    ...Blank,
    ...BlockName,
}
export type CellName = typeof CellName


export type Location = [x: number, y: number]

export interface Cell {
    name: CellName,
    location: Location,
    id?: string  // ๆฐๅขๆ ่ฏ็ฌฆ
}
