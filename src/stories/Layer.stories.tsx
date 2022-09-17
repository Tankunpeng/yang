import React from 'react';
import {ComponentMeta} from '@storybook/react';

import {CellView} from '../components/CellView';
import {Cell, CellName} from "../cellName";
import {Layer} from "../components/Layer";
import {Grid} from "../components/Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CellView>;


const data: Cell[] = [
    {
        name: CellName.sheep,
        location: [8, 0]
    }, {
        name: CellName.sheep,
        location: [24, 0]
    }, {
        name: CellName.wool,
        location: [16, 8]
    }, {
        name: CellName.wool,
        location: [16, 8]
    }]

export const base = () => {
    return <Layer data={data}/>
}


export const layerDemo = () => {
    const data: Cell[] = [
        {
            name: CellName.sheep,
            location: [8, 0]
        }, {
            name: CellName.sheep,
            location: [24, 0]
        }, {
            name: CellName.wool,
            location: [16, 8]
        }, {
            name: CellName.wool,
            location: [16, 8]
        }]
    return <div style={{position: 'relative'}}>
        <div style={{ marginLeft: '18px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0'}}><Layer data={data}/></div>
    </div>
}


export const layer1 = () => {
    const data: Cell[] = [
        {
            name: CellName.sheep,
            location: [20, 4]
        }, {
            name: CellName.wood,
            location: [28, 4]
        }, {
            name: CellName.cabbage,
            location: [16, 12]
        }, {
            name: CellName.brush,
            location: [24, 12]
        }, {
            name: CellName.wool,
            location: [32, 12]
        }]
    return <div style={{position: 'relative'}}>
        <div style={{ marginLeft: '18px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0'}}><Layer data={data}/></div>
    </div>
}



export const test1 = () => {
    const test: Cell[] = [
        { name: CellName.blank, location: [20,4], },
    { name: CellName.blank, location: [28,4], },
    { name: CellName.blank, location: [4,12], },
    { name: CellName.blank, location: [16,12], },
    { name: CellName.blank, location: [24,12], },
    { name: CellName.blank, location: [32,12], },
    { name: CellName.blank, location: [44,12], },
    { name: CellName.blank, location: [4,20], },
    { name: CellName.blank, location: [24,20], },
    { name: CellName.blank, location: [44,20], },
    { name: CellName.blank, location: [4,28], },
    { name: CellName.blank, location: [12,24], },
    { name: CellName.blank, location: [36,24], },
    { name: CellName.blank, location: [44,28], },
    { name: CellName.blank, location: [20,40], },
    { name: CellName.blank, location: [28,40], },
    { name: CellName.blank, location: [0,44], },
    { name: CellName.blank, location: [48,44], },
    { name: CellName.blank, location: [16,56], },
    { name: CellName.blank, location: [32,56], },
    ]
    return <div style={{position: 'relative'}}>
        {/* <div style={{ marginLeft: '18px'}}><Grid offset={0}/></div> */}
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0'}}><Layer data={test}/></div>
    </div>
}