import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CellView } from '../components/CellView';
import {CellName} from "../cellName";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    // title: 'Example/Cell',
    component: CellView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CellView>;


export const all = () => {
    const items = Object.values(CellName)
    return <>
        <div>count: {  items.length }</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            { items.map(name => {
                return <div >
                    <CellView name={name} />
                    <span>{name}</span>
                </div>
            })}
        </div></>
}



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CellView> = (args) => <div><CellView {...args} /> <span>{args.name}</span></div>;

export const sheep = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
sheep.args = {
    name: CellName.sheep,
};

export const milk = Template.bind({});
milk.args = {
    name: CellName.milk,
};
