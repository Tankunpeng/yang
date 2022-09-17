import {Cell, CellName} from "../../cellName";
import {WidthBackground} from "./background.stories";
import {Grid} from "../../components/Grid";
import {Layer} from "../../components/Layer";
import React from "react";

import {ComponentMeta} from '@storybook/react';
import {CellView} from "../../components/CellView";
import {currentImg} from "./currentImg";
import {RawImg} from "./RawImg";


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
        { name: CellName.corn, location: [12,24], },
        { name: CellName.sheep, location: [36,24], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer2 = () => {
    const test: Cell[] = [
        { name: CellName.sheep, location: [16,28], },
        { name: CellName.cabbage, location: [32,28], },
        { name: CellName.scissor, location: [0,44], },
        { name: CellName.carrot, location: [48,44], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer3 = () => {
    const test: Cell[] = [
        { name: CellName.corn, location: [20,32], },
{ name: CellName.cabbage, location: [28,32], },
{ name: CellName.milk, location: [4,44], },
{ name: CellName.grass, location: [44,44], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer4 = () => {
    const test: Cell[] = [
        { name: CellName.carrot, location: [16,12], },
{ name: CellName.cabbage, location: [24,12], },
{ name: CellName.wool, location: [32,12], },
{ name: CellName.scissor, location: [16,20], },
{ name: CellName.bucket, location: [24,20], },
{ name: CellName.wood, location: [32,20], },
{ name: CellName.blank, location: [16,28], },
{ name: CellName.brush, location: [24,28], },
{ name: CellName.blank, location: [32,28], },
{ name: CellName.bell, location: [8,44], },
{ name: CellName.glove, location: [40,44], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}
// 有错误
export const layer5 = () => {
    const test: Cell[] = [
        { name: CellName.scissor, location: [12,8], },
        { name: CellName.fire, location: [36,8], },
        { name: CellName.sheep, location: [4,12], },
        { name: CellName.grass, location: [44,12], },
        { name: CellName.grass, location: [12,16], },
        { name: CellName.milk, location: [36,16], },
        { name: CellName.brush, location: [4,20], },
        { name: CellName.cabbage, location: [44,20], },
        { name: CellName.fire, location: [12,24], },
        { name: CellName.sheep, location: [36,24], },
        { name: CellName.wood, location: [4,28], },
        { name: CellName.bucket, location: [44,28], },
        { name: CellName.brush, location: [12,32], },
        { name: CellName.corn, location: [36,32], },
        { name: CellName.wool, location: [12,40], },
        { name: CellName.fire, location: [20,40], },
        { name: CellName.corn, location: [28,40], },
        { name: CellName.grass, location: [36,40], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer6 = () => {
    const test: Cell[] = [
        { name: CellName.brush, location: [0,8], },
        { name: CellName.cabbage, location: [0,16], },
        { name: CellName.wood, location: [0,24], },
        { name: CellName.wood, location: [0,32], },
        { name: CellName.wood, location: [8,8], },
        { name: CellName.blank, location: [8,16], },
        { name: CellName.blank, location: [8,24], },
        { name: CellName.wool, location: [8,32], },
        { name: CellName.sheep, location: [40,8], },
        { name: CellName.blank, location: [40,16], },
        { name: CellName.blank, location: [40,24], },
        { name: CellName.wood, location: [40,32], },
        { name: CellName.grass, location: [48,8], },
        { name: CellName.bell, location: [48,16], },
        { name: CellName.sheep, location: [48,24], },
        { name: CellName.milk, location: [48,32], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer7 = () => {
    const test: Cell[] = [
        { name: CellName.cabbage, location: [12,4], },
        { name: CellName.bell, location: [20,4], },
        { name: CellName.bell, location: [28,4], },
        { name: CellName.bucket, location: [36,4], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer8 = () => {
    const test: Cell[] = [
        { name: CellName.bell, location: [12,0], },
        { name: CellName.brush, location: [20,0], },
        { name: CellName.scissor, location: [28,0], },
        { name: CellName.bell, location: [36,0], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}