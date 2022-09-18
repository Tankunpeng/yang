import React, {useState} from "react";
import {Grid} from "../../components/Grid";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CellView } from '../../components/CellView';
import {calcClickPos} from "../Grid.stories";
import {currentImg} from "./currentImg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CellView>;


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
        <Background url={currentImg}/>
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