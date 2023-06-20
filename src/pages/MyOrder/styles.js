import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 100vh;

  main{
   
    padding:3.4rem 3.8rem 12rem;
  }

h2{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    margin-bottom: 3.4rem;
}

.amount{
  margin-top: 1.4rem;
}

#button-advance{
  margin-top: 1.4rem;
}

@media(min-width:500px){
  .button-wrapper{
    width: 50%;
}
}


@media(min-width:1000px){
  
  main{
    display: flex;
    justify-content: space-between;
    padding:3.4rem 12.3rem 21rem   ;
  }

  .box-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 11.50rem;
  }

  .box-payment{
    width:53rem;
  }

  .scroll{
    overflow-y:auto;
    padding: 1rem;
  }

  *{
    scrollbar-width: 20rem;
    scrollbar-color: #8f54a0 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  *::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  .box-order{
    max-height: 53.6rem;
  }

  .amount{
    font-size: 2rem;
  }

}

`;