import styled from 'styled-components'
import Box from '../Box'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`

export default Flex