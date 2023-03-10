import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>

          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>${priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>

          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>${priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>${priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
