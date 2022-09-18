import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CellView } from '../components/CellView';
import {Cell, CellName} from "../cellName";
import {Layer} from "../components/Layer";
import {Play} from "../components/Play";
import {
    struct1,
    struct10, struct11, struct12, struct13, struct14, struct15, struct16, struct17,
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
import {genId} from "../model/resolution";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CellView>;



export const base = () => {
    return <> <Play struct={[
        struct1, struct2, struct3, struct4, struct5,
        struct6, struct7, struct8, struct9, struct10,
        struct11, struct12, struct13, struct14, struct15,
        struct16, struct17,
    ]} data={genId(data)}/>
    <div style={{ position: 'relative', left: '-320px'}}>
        <RawImg url={currentImg}/>
    </div>

    </>
}
