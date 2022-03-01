import { styled } from '@mui/material/styles'

export const Wrapper = styled('footer')`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing(6, 3, 3)};
  align-items: center;
  color: gray;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  text-align: left;
`
