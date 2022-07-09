import styled from "styled-components";

import {
  space,
  layout,
  flexbox,
  position,
  border,
  background,
  color,
  typography,
  shadow,
} from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  margin: 0;
  z-index: 0;
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${border}
  ${background}
  ${color}
  ${typography}
  ${shadow}
`

export default Box

// https://github.com/styled-system/styled-system/blob/master/docs/table.md