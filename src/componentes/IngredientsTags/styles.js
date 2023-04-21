import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_TAGS};
color: ${({ theme }) => theme.COLORS.WHITE};
border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};
border-radius: 1rem;

button{
    border:none;
    background:none;
}
input{
    width:100%;
    font-weight: 400;
    font-size: 1.6rem;
    font-family: 'Roboto';
    padding-left:1.6rem;
    border:none;
    background: transparent;
    outline: none;
    height:3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
svg{
  display:flex;
  color: ${({ theme }) => theme.COLORS.WHITE};
    width:2rem;
    height:2rem;
    padding-right:0.6rem;
}


`;