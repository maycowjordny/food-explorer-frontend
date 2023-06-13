import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    gap: 1.2rem;
    margin-bottom: 1.8rem;
    
    >div{
        h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 2.0rem;

            white-space: nowrap;
        }
    
        p{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.2rem;

            color: ${({ theme }) => theme.COLORS.GRAY};
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


`;