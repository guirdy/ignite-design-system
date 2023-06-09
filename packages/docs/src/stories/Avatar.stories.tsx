import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@guirdy-ds/react/src'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/guirdy.png',
    alt: 'Guilherme Leandro',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
