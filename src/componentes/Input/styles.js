import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
border-radius: 0.8rem;

>input{
    height: 4.8rem;
    width:100%;
    background: transparent;
    font-size: 1.4rem;
    font-family: 'Roboto';
    outline: none;
    padding: 1.2rem 1.4rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
}

::placeholder{
    font-family: 'Roboto';
}

svg{
    margin-left:1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

`;