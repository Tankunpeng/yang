import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CellView } from '../components/CellView';
import {Cell, CellName} from "../cellName";
import {Layer} from "../components/Layer";
import {Grid} from "../components/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CellView>;


const data: Cell[] = [{
    name: CellName.sheep,
    location: [8, 0]
}, {
    name: CellName.scissor,
    location: [16, 0]
}, {
    name: CellName.wool,
    location: [16, 8]
}]

export const base = () => {
    return <Grid offset={0}/>
}

export const half = () => {
    return <Grid offset={4}/>
}

export const movable = () => {
    const options = [0, 1, 2, 3, 4, 5, 6, 7]
    const [value, setValue] = useState(0)
    return <div>
        <Grid offset={value}/>
        {value}
        <button onClick={() => setValue(value+1)}> 移动 </button>
    </div>
}


function calcClickPos(e: any, item: any) {
    const offsetParent = e.target.offsetParent
    const offsetInner = [e.clientX - 40 - offsetParent.offsetLeft, e.clientY - 20 - offsetParent.offsetTop]
        .map(item => item / 5 > 4 ? 1 : 0).map( item => item * 4)
    return [offsetInner[0] + item.location[0], offsetInner[1] + item.location[1]]
}


export const WidthBackground = () => {
    const [value, setValue] = useState(0)
    const [cells, setCells] = useState<string[]>([])

    const handleClick = (e: any, item: any) => {
        console.log(calcClickPos(e, item))
        setCells([...cells, `{ name: CellName.blank, location: [${calcClickPos(e, item)}], },`])
    }

    const remove = (i: number) => {
        const current = [...cells]
        current.splice(i, 1)
        setCells(current)
    }

    const removeAll = () => {
        setCells([])
    }


    return <div>
        <Background url='./demo1/1-0.PNG'/>
        <Grid offset={value} handleClick={handleClick}/>
        <div>
            <span>选择记录</span><button onClick={removeAll}>清空
        </button>
            {cells.map((item, i) => <div key={item} onDoubleClick={() => remove(i)}>{ item } </div>)}
            { cells.length  ? <span>双击 ⬆️ 文本可删除单条记录</span> : '' }
        </div>

    </div>
}

function Background({ url }: { url: string}) {
    return <div style={{ position: 'absolute', margin: '-112px 0', height: '440px', overflow: 'hidden'}}><img src={url} alt="" width={320}/></div>
}
