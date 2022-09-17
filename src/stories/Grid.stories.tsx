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



export const widthBackground = () => {
    const options = [0, 1, 2, 3, 4, 5, 6, 7]
    const [value, setValue] = useState(0)
    return <div>
        <Background url='./demo1/1-0.PNG'/>
        <Grid offset={value}/>
        {value}
        <button onClick={() => setValue(value+1)}> 移动 </button>
    </div>
}

function Background({ url }: { url: string}) {
    return <div style={{ position: 'absolute', margin: '-112px 0', height: '440px', overflow: 'hidden'}}><img src={url} alt="" width={320}/></div>
}
