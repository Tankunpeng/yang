enum YangName {
    sheep = 'sheep', // 🐑 1
    milk = 'milk', // 🥛1
    wool = 'wool', // 🧶 1

    grass = 'grass',// 🌿1
    cabbage = 'cabbage', // 🥬 1
    carrot = 'carrot', // 🥕 1
    corn = 'corn', // 🌽 1
    wheat = 'wheat', // 🌾1

    fire = 'fire', // 🔥 1
    wood = 'wood', // 🪵 1
    bell = 'bell', // 🔔 1

    glove = 'glove', // 🧤 1
    bucket = 'bucket', // 🪣 1
    fork = 'fork', // 🍴 1
    scissor = 'scissor', // ✂️ 1
    brush = 'brush', // 🪥 1
}

enum Blank {
    blank = 'blank' // 🈳️
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
    id?: string  // 新增标识符
}
