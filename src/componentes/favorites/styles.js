import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 1.2rem;
font-size: 1rem;
margin-bottom: 1.8rem;
font-family: 'Poppins';
font-weight: 500;

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
        width:7rem;
        height: 7rem;
        border-radius: 50%;
    }

#remove-button{
    height: 3.2rem;
    width: 8.2rem;
}
`;