import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../lib/axios';

interface Transaction {
    id: number;
    description: string;
    value: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[],
    fetchTransactions: (query?:string) => Promise<void>,
    createTransaction: (transaction: CreateTransaction) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface CreateTransaction {
    description: string,
    category: string,
    value: number,
    type: 'income' | 'outcome'
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function createTransaction (transaction: CreateTransaction) {
        const response = await api.post('/transactions', transaction)

        setTransactions(state => [response.data, ...state])
    }

    async function fetchTransactions (query?:string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
                _sort: "createdAt",
                _order: "desc" 
            }
        })

        setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, fetchTransactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
