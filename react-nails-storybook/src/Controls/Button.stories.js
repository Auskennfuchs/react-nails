import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { Button, Box, Text, Inline, Column, Icon, HeaderText, Types, Row } from 'react-nails'

const { HeaderTextSizeType } = Types

export default {
  title: 'Controls/Button',
};

const CustomButton = styled.button`
  border: 2px solid ${p => p.theme.colors.brandColor};
  background: ${p => p.theme.colors.brandColor};  
  color: ${p => p.theme.colors.textInvert};
  padding: ${p=>p.theme.spaces.small} ${p=>p.theme.spaces.medium};
`

export const text = () => (
  <React.Fragment>
    <Box space="large" fullScreen>
      <Column lineSpace="large">
        <Inline itemSpace="large" lineSpace="medium">
          <Button onClick={action('clicked')} primary icon="times" iconLeft="bookmark-r">
            <Text>Primary</Text>
          </Button>
          <Button onClick={action('clicked')} primary disabled>Disabled</Button>
          <Button onClick={action('clicked')} secondary>Secondary</Button>
          <Button onClick={action('clicked')} secondary disabled>Secondary disabled</Button>
          <Button onClick={action('clicked')}>Test</Button>
        </Inline>
        <Box>
          <Inline itemSpace="xsmall">
            <span>Text</span>
            <Button onClick={action('clicked')}>Default inline Button</Button>
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
      <HeaderText size={HeaderTextSizeType.Large}>Custom Rendering</HeaderText>
      <Row space="medium">
        <Button as={CustomButton}>CustomButton</Button>
      </Row>
    </Box>
  </React.Fragment>
)