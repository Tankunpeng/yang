import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';

import {CellView} from '../components/CellView';
import {Play} from "../components/Play";
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
import {currentImg} from "./day918-demo3/currentImg";
import {RawImg} from "./day918-demo3/RawImg";
import {cacheData, genId, getCacheData} from "../model/resolution";
import {FillStruct} from "../components/FillStruct";

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
    const [struct, setData] = useState([
        struct1, struct2, struct3, struct4, struct5,
        struct6, struct7, struct8, struct9, struct10,
        struct11, struct12, struct13, struct14, struct15,
        struct16, struct17,
    ])

    const [model, setModel] = useState('play')


    const [cacheId, setCacheId] = useState('auto-cache')
    function save(data: any) {
        console.log('cache', data)
        setData(data)
        cacheData(cacheId, data)
    }

    function clear() {
        setData([
            struct1, struct2, struct3, struct4, struct5,
            struct6, struct7, struct8, struct9, struct10,
            struct11, struct12, struct13, struct14, struct15,
            struct16, struct17,
        ])
    }

    function load() {
        console.log(getCacheData(cacheId))
        getCacheData(cacheId) ? setData(getCacheData(cacheId)) : console.log('load failed!', cacheId, +new Date())
    }

    function changeModel() {
        setModel(model === 'play' ? 'fill' : 'play')
    }

    const name = {
        'play': '去填充',
        'fill': '继续游戏'
    }


    const [used, setUsed] = useState<any>([])
    function play(item: any) {
        console.log('used: ', [...used, item])
        setUsed([...used, item])
    }


    return <>
        <div>
            <button onClick={changeModel}>{ name[model] }</button>
        </div>

        {model === 'play' ? <div>
        <Play data={struct} onPlay={play} cacheKey={cacheId} used={used}/>
        <div style={{position: 'relative', left: '-320px'}}>
            <RawImg url={currentImg}/>
        </div>
    </div> : <div>

            <FillStruct struct={struct} onChange={save} used={used}/>
            <input type="text" value={cacheId} onChange={value => {
                setCacheId(value.target.value)
            }}/>
            <button onClick={load}> 加载缓存</button>
            <button onClick={clear}> 清空</button>
            <div style={{position: 'relative', left: '-320px'}}>
                <RawImg url={currentImg}/>
            </div>

    </div>}

    </>
}
