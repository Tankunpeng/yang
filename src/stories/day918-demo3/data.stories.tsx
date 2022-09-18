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
        { name: CellName.bell, location: [0,4], },
        { name: CellName.corn, location: [48,4], },
        { name: CellName.fork, location: [0,12], },
        { name: CellName.wool, location: [48,12], },
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
        { name: CellName.blank, location: [48,4], },
        { name: CellName.blank, location: [48,12], },    
        { name: CellName.blank, location: [0,4], },
{ name: CellName.blank, location: [0,12], },
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
        { name: CellName.cabbage, location: [48,20], },
{ name: CellName.wool, location: [0,20], },
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
        { name: CellName.wood, location: [4,8], },
        { name: CellName.bucket, location: [12,8], },
        { name: CellName.wool, location: [20,8], },
        { name: CellName.sheep, location: [28,8], },
        { name: CellName.milk, location: [36,8], },
        { name: CellName.grass, location: [44,8], },
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
        { name: CellName.cabbage, location: [4,24], },
        { name: CellName.corn, location: [12,24], },
        { name: CellName.grass, location: [20,24], },
        { name: CellName.glove, location: [28,24], },
        { name: CellName.carrot, location: [36,24], },
        { name: CellName.grass, location: [44,24], },
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
        { name: CellName.milk, location: [8,28], },
        { name: CellName.sheep, location: [16,28], },
        { name: CellName.cabbage, location: [24,28], },
        { name: CellName.sheep, location: [32,28], },
        { name: CellName.bucket, location: [40,28], },   
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
        { name: CellName.bell, location: [4,32], },
        { name: CellName.grass, location: [12,32], },
        { name: CellName.carrot, location: [20,32], },
        { name: CellName.sheep, location: [28,32], },
        { name: CellName.wool, location: [36,32], },
        { name: CellName.fire, location: [44,32], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer9 = () => {
    const test: Cell[] = [
        { name: CellName.fire, location: [0,32], },
        { name: CellName.wood, location: [48,32], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer10 = () => {
    const test: Cell[] = [
        { name: CellName.fire, location: [12,16], },
{ name: CellName.scissor, location: [36,16], },
{ name: CellName.wool, location: [0,28], },
{ name: CellName.glove, location: [48,28], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer11 = () => {
    const test: Cell[] = [
        { name: CellName.milk, location: [8,16], },
        { name: CellName.wood, location: [16,16], },
        { name: CellName.milk, location: [24,16], },
        { name: CellName.bucket, location: [32,16], },
        { name: CellName.wood, location: [40,16], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer12 = () => {
    const test: Cell[] = [
        { name: CellName.bucket, location: [4,0], },
        { name: CellName.glove, location: [12,0], },
        { name: CellName.brush, location: [20,0], },
        { name: CellName.scissor, location: [28,0], },
        { name: CellName.carrot, location: [36,0], },
        { name: CellName.sheep, location: [44,0], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer13 = () => {
    const test: Cell[] = [
        { name: CellName.bucket, location: [0,0], },
        { name: CellName.carrot, location: [48,0], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}