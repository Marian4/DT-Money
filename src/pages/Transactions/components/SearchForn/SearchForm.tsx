import { SearchButton, SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm () {
    return <SearchFormContainer>
        <input type="text" placeholder="Busque por transações"/>
        <SearchButton>
            <MagnifyingGlass size={20} />
            <span>Buscar</span>
        </SearchButton>
    </SearchFormContainer>
}
