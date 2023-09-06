import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {TaskWithRedux} from "../TaskWithRedux";
import { ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";
import {useSelector} from "react-redux";
import {TaskType} from "../Todolist";
import {AppRootStateType} from "../state/store";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskWithRedux> = {
    title: 'TODOLIST/TaskWithRedux',
    component: TaskWithRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        // layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ReduxStoreProviderDecorator],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof TaskWithRedux>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const TaskWithReduxPresent = () => {
    let task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistId1'][0])
    if (!task) task = {id: 'sdsd', title: 'it was finally task', isDone: true}
    return <TaskWithRedux task={task} todoListId={'todolistId1'}/>
}
export const TaskWithReduxStory: Story = {
    render: () => <TaskWithReduxPresent/>
}
