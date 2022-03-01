import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;

  padding: ${({ theme }) => theme.spacing(14)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: ${({ theme }) => theme.spacing(14, 2)};
  }
`

export const Heading = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    font-weight: 500;
  }

  p {
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  }

  .link {
    background-color: transparent;
    border: 0;
    box-shadow: 0 1px 0 0 currentColor;
    cursor: pointer;
    padding: 0;
    position: relative;
    text-align: initial;
    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s ease;

    &:hover {
      box-shadow: 0 2px 0 0 currentColor;
      color: #171a20;
    }
  }
`

export const Buttons = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > button {
    text-transform: uppercase;
    margin: 0 10px;
    padding: 12px 10px;
    border-radius: 32px;
    border: none;
    min-width: calc(8px * 32);
    max-width: 260px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    cursor: pointer;

    &.black {
      color: #fff;
      background-color: #393c41;
    }

    &.white {
      color: #393c41;
    }
  }
`
