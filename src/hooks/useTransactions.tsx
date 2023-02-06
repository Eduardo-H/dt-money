import { createContext, ReactNode, useContext, useState } from 'react';

type Transaction = {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: Date;
}

interface TransactionContextType {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      { children }
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const transactionsContext = useContext(TransactionContext);
  return transactionsContext;
}