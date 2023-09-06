import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import React from "react";

import {Task} from "../Task";
import {TaskType} from "../Todolist";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLIST/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsDoneStory: Story = {
    args: {
        changeTaskStatus: action('change task status'),
        changeTaskTitle: action('change task title'),
        removeTask: action('remove task'),
        task: {id: '1ds', title: 'Some title', isDone: true},
        todolistId: 'todolistId1'
    }
}

export const TaskIsNotDoneStory: Story = {
    args: {
        changeTaskStatus: action('change task status'),
        changeTaskTitle: action('change task title'),
        removeTask: action('remove task'),
        task: {id: '1ddsdw4s', title: 'Lorem ipsum', isDone: false},
        todolistId: 'todolistId1'
    }
}


