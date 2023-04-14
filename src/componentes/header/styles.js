import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
    width: 100%;
    height:10.4rem;
    display: flex;
    padding: 0  2.8rem;
    align-items: center;
    justify-content: space-between;

    .logo{

        display: flex;
        align-items: center;
        gap: 0.8rem;

        >h6{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2rem;
        }
    }

    span{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        width: 2.0rem;
        height: 2.0rem;
        right: 2.0rem;
        top:1.5rem;
        background-color:${({ theme }) => theme.COLORS.RED};
        border-radius: 50%;
    }
`;