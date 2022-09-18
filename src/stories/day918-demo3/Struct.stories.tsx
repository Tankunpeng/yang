import {WidthBackground} from "./background.stories";
import {Layer} from "../../components/Layer";
import React from "react";

import {ComponentMeta} from '@storybook/react';
import {CellView} from "../../components/CellView";
import {currentImg} from "./currentImg";
import {RawImg} from "./RawImg";
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
    struct18,
    struct19,
    struct2,
    struct20,
    struct3,
    struct4,
    struct5,
    struct6,
    struct7,
    struct8,
    struct9
} from "../../model/day918/struct";


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

    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct1}/>
            </div>
            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer2 = () => {

    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct2}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer3 = () => {

    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct3}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}


export const layer4 = () => {

    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct4}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer5 = () => {

    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct5}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}
export const layer6 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct6}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}
export const layer7 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct7}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer8 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct8}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer9 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct9}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer10 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct10}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer11 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct11}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer12 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct12}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer13 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct13}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer14 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct14}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer15 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct15}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer16 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct16}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer17 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct17}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}


export const layer18 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct18}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer19 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct19}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}

export const layer20 = () => {
    return <>
        <div style={{position: 'relative'}}>
            <WidthBackground></WidthBackground>
            {/*<div style={{ marginLeft: '40px', position: 'absolute', top: '0', left: '282px'}}><Grid offset={0}/></div>*/}
            <div style={{marginLeft: '40px', position: 'absolute', top: '2px', left: '304px'}}><Layer data={struct20}/>
            </div>

            <RawImg url={currentImg}/>
        </div>
    </>
}