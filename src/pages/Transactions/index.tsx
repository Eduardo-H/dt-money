import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Salary</td>
              <td>
                <PriceHighlight variant="income">
                  $3,000.00
                </PriceHighlight>
              </td>
              <td>Jobs</td>
              <td>07/02/2023</td>
            </tr>
            <tr>
              <td width="50%">Groceries</td>
              <td>
                <PriceHighlight variant="outcome">
                  - $100.00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>05/02/2023</td>
            </tr>
            <tr>
              <td width="50%">Freelance</td>
              <td>
                <PriceHighlight variant="income">
                  $1,000.00
                </PriceHighlight>
              </td>
              <td>Jobs</td>
              <td>02/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}