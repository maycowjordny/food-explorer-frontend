import styled from "styled-components";
import arrowSelect from "../../assets/arrowSelect.png"


export const Container = styled.div`

position: relative;
min-height: 100vh;


  #button-back{
    display: flex;
    margin-top: 1.1rem;
    
    >button{
      font-size: 1.6rem;
    }
  }

  h2{
    display: flex;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    margin-bottom:2.4rem;
  }

  main{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 0 3.2rem 11.5rem;

  }

  #info-dish{
    display: flex;
      flex-direction: column;
      gap:1.6rem ;
  }

  #file{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS};
    border-radius: 0.8rem;
    margin-bottom: 2.4rem;
    
    >input[type="file"] {
      display: none;
    }
    
    label {
    color:${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

      svg{
        width: 2.4rem;
        height: 2.4rem;
      }
}
    
  }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

      input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
      }

    #name-dish{
        display: flex;
        flex-direction: column;
        gap:1.6rem ;
        margin-bottom: 2.4rem;
    }
    
    
    select{
      cursor: pointer;
      font-family: 'Roboto';
      font-size: 1.4rem;
      color:${({ theme }) => theme.COLORS.GRAY_LIGHT};
      outline: none;
      border: none;
      padding: 1.6rem;
      border-radius: 0.5rem;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url(${arrowSelect}) no-repeat ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      background-position: center  right 1.2rem;
      padding-right:3rem;
      cursor: pointer;
  }
  
      #category{
        display: flex;
        flex-direction: column;
        gap:1.6rem ;
        
}

  .ingradients-wrapper{
        display: flex;
        flex-direction: column;
        gap:1.6rem ;
        margin-bottom: 2.4rem;
  }

  #price{
      display: flex;
      flex-direction: column;
      gap:1.6rem ;
  }


#input-tags {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      height: 48%;
      padding: 0.8rem;
      border-radius: 0.8rem;
      background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS} ;
      
      div{
        width: 10.8rem;
      }
    
  }

  #buttons{
    display: flex;
    gap:3.2rem;
    margin-top: 2.4rem;
  }

  #button-save{
    background-color:${({ theme }) => theme.COLORS.RED_LIGTH} ;
  }

  #buttonDelete{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS}
  }

  label{
  font-family: 'Roboto';
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }

  #inputTextArea{
      margin-bottom: 2.4rem;
  }


  @media(min-width:1000px){

    #button-back button{
      font-size: 1.8rem;
    }   

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 12.3rem 11.6rem;
  }

  .box-title{
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .box-one{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    >#info-dish{
      width: 22%;
    }

    >#name-dish{
      width: 46%;
    }

    >#category{
      width: 32%;
      margin-bottom: 2.4rem;
    }
  }

  .box-two{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;


    >.ingradients-wrapper{
      width:80%;
    }


    >#price{
      width: 20%;
      margin-bottom: 2.4rem;
    }
  }

  .box-three{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
  #inputTextArea{
      width: 100%;
  }

  button{
      width: 20.0rem;
      border-radius: 5px;
  }
  }

  #buttons{
  display: flex;
  gap: 3.2rem;
  }
  }

 
`;