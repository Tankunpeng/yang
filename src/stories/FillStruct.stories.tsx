import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';

import {CellView} from '../components/CellView';
import {FillStruct} from "../components/FillStruct";
import {
    struct1,
    struct10,
    struct11,
    struct12,
    struct13,
    struct14,
    struct15,
    struct16,
    struct17,
    struct2,
    struct3,
    struct4,
    struct5,
    struct6,
    struct7,
    struct8,
    struct9
} from "../model/day918/struct";
import {data} from "../model/day918/data1";
import {currentImg} from "./day918-demo3/currentImg";
import {RawImg} from "./day918-demo3/RawImg";
import {cacheData, genId, getCacheData} from "../model/resolution";
import {CellSelect} from "../components/CellSelect";
import {CellName} from "../cellName";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CellView>;


export const base = () => {
    return <> <FillStruct struct={[
        struct1, struct2, struct3, struct4, struct5,
        struct6, struct7, struct8, struct9, struct10,
        struct11, struct12, struct13, struct14, struct15,
        struct16, struct17,
    ]} data={genId(data)}/>
        <div style={{position: 'relative', left: '-320px'}}>
            <RawImg url={currentImg}/>
        </div>

    </>
}

export const savable = () => {

    const [initData, setInitData] = useState([
        struct1, struct2, struct3, struct4, struct5,
        struct6, struct7, struct8, struct9, struct10,
        struct11, struct12, struct13, struct14, struct15,
        struct16, struct17,
    ])

    return <>
        <input type="text" value={cacheId} onChange={value => setCacheId(value.target.value)}/>
        <button onClick={load}> 加载缓存</button>
        <button onClick={clear}> 清空</button>
        <FillStruct struct={initData} onChange={save}/>
        <div style={{position: 'relative', left: '-320px'}}>
            <RawImg url={currentImg}/>
        </div>
    </>
}


export const cellSelect = () => {
    const [name, setName] = useState(CellName.blank)

    function onChange(name: CellName) {
        setName(name)
    }

    return <CellSelect value={name} onChange={onChange}/>
}
