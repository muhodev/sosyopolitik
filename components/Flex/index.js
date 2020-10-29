import { Box } from '../'
import {
    alignItems,
    justifyContent,
    flexWrap,
    flexDirection,
} from 'styled-system'

const Flex = Box.extend`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`

export default Flex