import { Header } from "../../components/Header/intex";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForn";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
    return (
        <>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">12.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>24/07/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Hambúrguer</td>
                            <td>
                                <PriceHighLight variant="outcome">- 50,00</PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>24/07/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    )
}
