import styled from 'styled-components'

const CustomButton = styled.button`
  border: 2px solid ${p => p.theme.colors.brand};
  background: ${p => p.theme.colors.brand};  
  color: ${p => p.theme.colors.textInvert};
  padding: ${p => p.theme.spaces.small} ${p => p.theme.spaces.medium};
`

export default CustomButton