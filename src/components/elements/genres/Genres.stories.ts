import Genres from './Genres'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Genres> = {
  title: 'Genres',
  component: Genres,
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    genres: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror'],
  },
}
