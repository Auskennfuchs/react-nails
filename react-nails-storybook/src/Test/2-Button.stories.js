import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Box, Text, Inline } from 'react-nails'

export default {
  title: 'Controls/Button',
};

export const text = () => (
  <React.Fragment>
    <Box space="large">
      <Inline itemSpace="large">
        <Button onClick={action('clicked')} primary icon="times" iconLeft="chevron-up">
          <Text>Primary</Text>
        </Button>
        <Button onClick={action('clicked')} primary disabled>
          Disabled
      </Button>
        <Button onClick={action('clicked')} secondary>
          Secondary
      </Button>
        <Button onClick={action('clicked')} secondary disabled>
          Secondary disabled
      </Button>
        <Button>Test</Button>
      </Inline>
    </Box>
    <Box space="large">
      <Inline itemSpace="xsmall">
        <span>Text</span>
        <Button>Button</Button>
        <span>More text</span>
      </Inline>
    </Box>
  </React.Fragment>
)

export const emoji = () => (
  <Box backgroundColor="positive" rounded>
    <Button onClick={action('clicked')} primary>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </Box>
)