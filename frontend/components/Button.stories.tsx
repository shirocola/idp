// components/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<{ label: string }> = (args) => (
  <Button {...args} onClick={() => alert('Button clicked!')} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};
