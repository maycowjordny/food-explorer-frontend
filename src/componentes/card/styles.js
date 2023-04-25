import styled from "styled-components";


export const Container = styled.div`

width: 21rem;
padding: 2.2rem;
border: 1px solid  ${({ theme }) => theme.COLORS.DARK};
border-radius: 0.8rem;


background-color: ${({ theme }) => theme.COLORS.DARK};

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
}

#favorite{
    display: flex;
    justify-content: end;
    align-items: end;

}

#quantity{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1.8rem ;
    margin-bottom: 3rem;
    

    svg{
        cursor: pointer;
        width: 1.8rem;
        height: 1.8rem;
    }
}

    span{
    margin-bottom:2rem;
    color: ${({ theme }) => theme.COLORS.CYAN};
    }

    p{
        font-family: 'Poppins';
        font-size: 1rem;
    }


    img{
        width: 8.8rem;
        height:8.8rem ;
    }


    
`;