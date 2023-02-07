import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isNewTransactionModalOpen}
          onOpenChange={setIsNewTransactionModalOpen}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal closeModal={handleCloseNewTransactionModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
