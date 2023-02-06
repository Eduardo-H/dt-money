import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>

          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>$ 7,000.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>

          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>$ 2,000.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>$ 5,000.00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}