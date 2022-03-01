import { styled } from '@mui/material/styles'

export const Container = styled('header')`
  position: fixed;
  width: 100vw;
  z-index: 100;
`

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  height: 54px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(4)};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
