import styled from "styled-components";


export const Container = styled.span`
    border-radius:1rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding: 0.8rem 1.6rem;
    margin-right:0.8rem;
    color:${({ theme }) => theme.COLORS.WHITE};
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
 
`