import { useContext } from "react";
import { Header } from "../../components/Header/intex";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForn";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions () {
    const { transactions } = useContext(TransactionsContext)

    return (
        <>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => {
                            return (
                                <tr>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(transaction.value)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}
