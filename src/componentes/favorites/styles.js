import styled from "styled-components";

export const Container = styled.div`

    a{
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-family: 'Poppins';
        font-weight: 500;
        gap: 1.2rem;
        margin-bottom: 1.8rem;
    }
    
    >div{
        h1{
            white-space: nowrap;
        }
        button{    
            font-weight: 400;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        }
    }

    img{
        width:7.2rem;
        height: 7.2rem;
        border-radius: 50%;
    }

#remove-button{
    height: 3.2rem;
    width: 8.2rem;
}
`;