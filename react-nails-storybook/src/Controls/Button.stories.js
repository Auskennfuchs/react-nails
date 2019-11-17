import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Box, Text, Inline, Column, Icon } from 'react-nails'

export default {
  title: 'Controls/Button',
};

export const text = () => (
  <React.Fragment>
    <Box space="large" fullScreen>
      <Column lineSpace="large">
        <Inline itemSpace="large" lineSpace="medium">
          <Button onClick={action('clicked')} primary icon="times" iconLeft="bookmark-r">
            <Text>PrimaryP</Text>
          </Button>
          <Button onClick={action('clicked')} primary disabled>Disabled</Button>
          <Button onClick={action('clicked')} secondary>Secondary</Button>
          <Button onClick={action('clicked')} secondary disabled>Secondary disabled</Button>
          <Button onClick={action('clicked')}>Test</Button>
        </Inline>
        <Box>
          <Inline itemSpace="xsmall">
            <span>Text</span>
            <Button onClick={action('clicked')}>Button</Button>
            <span>More text</span>
          </Inline>
        </Box>
        <Inline>
          <Box backgroundColor="infoLight" space="medium" rounded textColor="textColorMedium">
            <Inline itemSpace="medium">
              <Icon icon="smile" />
              <Text>Info Message</Text>
            </Inline>
          </Box>
        </Inline>
      </Column>
    </Box>
  </React.Fragment>
)

export const emoji = () => (
  <Box backgroundColor="infoLight" rounded>
    <Button onClick={action('clicked')} primary>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </Box>
)