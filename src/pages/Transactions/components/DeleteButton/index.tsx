import * as Tooltip from '@radix-ui/react-tooltip'
import { Trash } from 'phosphor-react'

import { Arrow, Content, DeleteButtonContainer } from './styles'

interface DeleteButtonProps {
  onDelete: () => void
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <DeleteButtonContainer onClick={onDelete}>
            <Trash size={18} />
          </DeleteButtonContainer>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Content sideOffset={5}>
            Delete
            <Arrow />
          </Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
