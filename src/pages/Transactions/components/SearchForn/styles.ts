import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 2rem;

    input {
        flex: 1;
        background-color: ${(props) => props.theme["gray-900"]};
        padding: 1rem;
        border: 0;
        border-radius: 6px;
        color: ${(props) => props.theme["gray-300"]};

        &::placeholder {
            color: ${(props) => props.theme["gray-500"]};
        }
    }
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background-color: transparent;
    border: 0;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color:${(props) => props.theme["green-300"]};
    font-weight: bold;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        color:${(props) => props.theme.white};
        background-color: ${(props) => props.theme["green-500"]};
        border-color: ${(props) => props.theme["green-500"]};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
`
