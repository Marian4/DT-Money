import { createContext, ReactNode, useState, useEffect } from 'react'

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
    fetchTransactions: (query?:string) => void
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions (query?:string) {
        const url = new URL('http://localhost:3333/transactions?_sort=createdAt&_order=desc')
        
        if(query){
            url.searchParams.append('q', query)
        }

        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, fetchTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}
