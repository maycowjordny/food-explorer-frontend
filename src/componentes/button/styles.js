import styled from "styled-components";

export const Container = styled.button`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 4.8rem;
background-color: ${({ theme }) => theme.COLORS.RED};
border:none;
color: ${({ theme }) => theme.COLORS.WHITE};
border-radius: 0.5rem;


`;