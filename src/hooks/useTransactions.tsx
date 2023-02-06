import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: Date;
}

interface CreateTransactionSchema {
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionSchema) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query        
      }
    });

    
  }

  async function createTransaction(data: CreateTransactionSchema) {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date().toISOString()
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      { children }
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const transactionsContext = useContext(TransactionContext);
  return transactionsContext;
}