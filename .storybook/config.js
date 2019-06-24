import { configure } from '@storybook/react'

function loadStories() {
  require('../src/stories')
  require('../src/components/counter/story')
}

configure(loadStories, module)
