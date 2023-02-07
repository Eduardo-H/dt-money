import styled from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'

export const DeleteButtonContainer = styled.button`
  background: ${(props) => props.theme['gray-800']};
  border: 0;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
    line-height: 0;
  }

  &:hover {
    background: ${(props) => props.theme['red-300']};
    transition: background-color 0.2s;
  }
`

export const Content = styled(Tooltip.Content)`
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['gray-600']};

  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`

export const Arrow = styled(Tooltip.Arrow)`
  fill: ${(props) => props.theme['gray-600']};
`
