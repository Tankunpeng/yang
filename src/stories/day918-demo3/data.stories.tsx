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
        { name: CellName.scissor, location: [0,8], },
        { name: CellName.bell, location: [48,8], },
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
        { name: CellName.bell, location: [0,12], },
        { name: CellName.fire, location: [48,12], },
        { name: CellName.wool, location: [0,20], },
        { name: CellName.cabbage, location: [48,20], },
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
        { name: CellName.fork, location: [0,16], },
        { name: CellName.glove, location: [48,16], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer5 = () => {
    const test: Cell[] = [
        { name: CellName.corn, location: [0,20], },
        { name: CellName.scissor, location: [48,20], },
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
        { name: CellName.corn, location: [20,32], },
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
        { name: CellName.bell, location: [8,32], },
        { name: CellName.wool, location: [16,32], },
        { name: CellName.milk, location: [24,32], },
        { name: CellName.carrot, location: [32,32], },
        { name: CellName.carrot, location: [40,32], },
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
        { name: CellName.sheep, location: [8,28], },
        { name: CellName.fire, location: [16,28], },
        { name: CellName.milk, location: [24,28], },
        { name: CellName.glove, location: [32,28], },
        { name: CellName.glove, location: [40,28], },
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
        { name: CellName.fire, location: [8,24], },
        { name: CellName.grass, location: [16,24], },
        { name: CellName.bell, location: [24,24], },
        { name: CellName.grass, location: [32,24], },
        { name: CellName.fork, location: [40,24], },
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
        { name: CellName.milk, location: [4,16], },
        { name: CellName.bell, location: [12,16], },
        { name: CellName.fire, location: [20,16], },
        { name: CellName.wood, location: [28,16], },
        { name: CellName.sheep, location: [36,16], },
        { name: CellName.glove, location: [44,16], },
        { name: CellName.sheep, location: [4,24], },
        { name: CellName.wood, location: [12,24], },
        { name: CellName.bucket, location: [20,24], },
        { name: CellName.wool, location: [28,24], },
        { name: CellName.wool, location: [36,24], },
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


export const layer13 = () => {
    const test: Cell[] = [
        { name: CellName.bucket, location: [0,0], },
        { name: CellName.carrot, location: [8,0], },
        { name: CellName.grass, location: [16,0], },
        { name: CellName.brush, location: [24,0], },
        { name: CellName.scissor, location: [32,0], },
        { name: CellName.bell, location: [40,0], },
        { name: CellName.carrot, location: [48,0], },
        { name: CellName.milk, location: [0,8], },
        { name: CellName.milk, location: [8,8], },
        { name: CellName.scissor, location: [16,8], },
        { name: CellName.carrot, location: [24,8], },
        { name: CellName.carrot, location: [32,8], },
        { name: CellName.milk, location: [40,8], },
        { name: CellName.brush, location: [48,8], },

        { name: CellName.corn, location: [8,16], },
        { name: CellName.bucket, location: [40,16], },

        { name: CellName.grass, location: [4,28], },
        { name: CellName.wood, location: [12,28], },
        { name: CellName.cabbage, location: [20,28], },
        { name: CellName.wood, location: [28,28], },
        { name: CellName.fire, location: [36,28], },
        { name: CellName.brush, location: [44,28], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}


export const layer14 = () => {
    const test: Cell[] = [
        { name: CellName.brush, location: [4,8], },
        { name: CellName.scissor, location: [12,8], },
        { name: CellName.sheep, location: [20,8], },
        { name: CellName.corn, location: [28,8], },
        { name: CellName.sheep, location: [36,8], },
        { name: CellName.wood, location: [44,8], },
        { name: CellName.fork, location: [12,16], },
        { name: CellName.bell, location: [20,16], },
        { name: CellName.scissor, location: [28,16], },
        { name: CellName.grass, location: [36,16], },
        { name: CellName.sheep, location: [8,24], },
        { name: CellName.cabbage, location: [40,24], },
        { name: CellName.wool, location: [8,32], },
        { name: CellName.cabbage, location: [40,32], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}

export const layer15 = () => {
    const test: Cell[] = [
        { name: CellName.sheep, location: [8,4], },
        { name: CellName.corn, location: [16,4], },
        { name: CellName.scissor, location: [24,4], },
        { name: CellName.fork, location: [32,4], },
        { name: CellName.corn, location: [40,4], },
        { name: CellName.milk, location: [8,12], },
        { name: CellName.sheep, location: [16,12], },
        { name: CellName.carrot, location: [24,12], },
        { name: CellName.wool, location: [32,12], },
        { name: CellName.fire, location: [40,12], },
        { name: CellName.wool, location: [12,24], },
        { name: CellName.brush, location: [20,24], },
        { name: CellName.milk, location: [28,24], },
        { name: CellName.grass, location: [36,24], },
        { name: CellName.sheep, location: [12,32], },
        { name: CellName.fire, location: [20,32], },
        { name: CellName.brush, location: [28,32], },
        { name: CellName.scissor, location: [36,32], },
    ]
    return <><div style={{position: 'relative'}}>
        <WidthBackground></WidthBackground>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>
        <div style={{ marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={test}/></div>
        <RawImg url={currentImg}/>
    </div>
    </>
}