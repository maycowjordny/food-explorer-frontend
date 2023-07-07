import styled from "styled-components";


export const Container = styled.div`

width: 21rem;

padding: 2.2rem;
border: 1px solid  ${({ theme }) => theme.COLORS.DARK};
border-radius: 0.8rem;
flex: none;
background-color: ${({ theme }) => theme.COLORS.DARK};

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
}

#favorite{
    display: flex;
    justify-content: end;
    align-items: end;

}

#buttons-wrapper{
        display: flex;
        flex-direction: column ;
        gap:2.4rem;
}

#quantity{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1.8rem;
    
    

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

    h5{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;
        text-align:center;
    }


    img{
        width: 8.8rem;
        height:8.8rem ;
        border-radius:50%;
    }

    #add-button{
        height: 3.2rem;
    }

   
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

      input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
      }
    
      #input-number{
        background-color: ${({ theme }) => theme.COLORS.DARK};
        width: 5rem;
      }

    
    @media(min-width:1000px){

        width: 30.4rem;
        p{
        font-family: 'Poppins';
        font-size: 2.4rem;
    }

    span{
        font-size: 3.2rem;
    }

    #add-button{
        height: 4.8rem;
    }

    img{
        width: 17.6rem;
        height:17.6rem ;
    }

    h5{
        font-size: 1.4rem;
    }
    
    #buttons-wrapper{
        display: flex;
        flex-direction:row;
        align-items: center;
        gap:1.8rem;
    }

    }


`;