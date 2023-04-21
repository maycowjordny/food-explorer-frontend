import styled from "styled-components";

export const Container = styled.textarea`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS};
    border-radius: 0.8rem;
    font-family: 'Roboto';
    outline: none;
    border: none;
    padding: 1.4rem;
    width: 100%;
    height: 17.2rem;
    resize: none;

        ::placeholder{
            font-size: 1.6rem;
        }

`;