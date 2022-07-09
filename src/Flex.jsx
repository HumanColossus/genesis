import styled, { css } from 'styled-components';
import Box from './Box';

const Flex = styled(Box)`
  display: flex;

  ${({ center }) => center && css`
    justify-content: center;
    align-items: center;
  `}
`

export default Flex;