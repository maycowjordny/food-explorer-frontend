import styled from "styled-components";


export const Container = styled.div`

position: relative;
min-height: 100vh;


  main{
    padding:1.1rem 3.2rem 7.5rem 3.2rem;

    >h2{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      margin-bottom:3.6rem ;
    }
  }

  #file{
    display: flex;
    flex-direction: column;
    width: 36.4rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS};
    border-radius: 0.8rem;

  }

  input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
      
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }

  #category{
    display: flex;
    flex-direction: column;
    
    select{
      background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      color:${({ theme }) => theme.COLORS.WHITE};
      outline: none;
      border: none;
      padding: 1.6rem;
      border-radius: 0.5rem;
    }
  }


#input-tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    height: 4.8rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS} ;
    
    div{
      width: 10.5rem;
    }
   
}

#button-save-delete{
  margin-top:2.4rem;
  display: flex;
  gap: 3.2rem;
  margin-bottom: 5rem;
}

#button-save-delete button:nth-child(1){
  background-color:${({ theme }) => theme.COLORS.RED_LIGTH} ;
}

#button-save-delete button:nth-child(2){
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS}
}

`;