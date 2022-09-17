import {Cell, CellName} from "../../cellName";
import {WidthBackground} from "../Grid.stories";
import {Grid} from "../../components/Grid";
import {Layer} from "../../components/Layer";
import React from "react";

import {ComponentMeta} from '@storybook/react';
import {CellView} from "../../components/CellView";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CellView>;


export const face = () => {
    const test: Cell[] = [
        { name: CellName.sheep, location: [20,4], },
        { name: CellName.wood, location: [28,4], },
        { name: CellName.bucket, location: [4,12], },
        { name: CellName.cabbage, location: [16,12], },
        { name: CellName.brush, location: [24,12], },
        { name: CellName.wool, location: [32,12], },
        { name: CellName.wool, location: [44,12], },
        { name: CellName.fork, location: [4,20], },
        { name: CellName.glove, location: [24,20], },
        { name: CellName.cabbage, location: [44,20], },
        { name: CellName.fork, location: [4,28], },
        { name: CellName.scissor, location: [12,24], },
        { name: CellName.wood, location: [36,24], },
        { name: CellName.carrot, location: [44,28], },
        { name: CellName.grass, location: [20,40], },
        { name: CellName.cabbage, location: [28,40], },
        { name: CellName.milk, location: [0,44], },
        { name: CellName.cabbage, location: [48,44], },
        { name: CellName.glove, location: [16,56], },
        { name: CellName.grass, location: [32,56], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
    </div>
    </>
}