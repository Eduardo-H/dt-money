import * as Tooltip from '@radix-ui/react-tooltip'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

import { Arrow, Content, DeleteButtonContainer } from './styles'

interface DeleteButtonProps {
  onDelete: () => void
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    setIsDeleting(true)

    try {
      onDelete()
    } catch (err) {
      console.error(err)
      setIsDeleting(false)
    }
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <DeleteButtonContainer onClick={handleDelete} disabled={isDeleting}>
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
