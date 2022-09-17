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


export const layer1 = () => {
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
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
    </div>
    </>
}