import styled from "styled-components";
import arrowSelect from "../../assets/arrowSelect.png"


export const Container = styled.div`

position: relative;
min-height: 100vh;

  #button-back{
    display: flex;
    padding: 0 3.2rem;
    font-size: 16.5rem;
    margin-bottom:3.5rem;
    margin-top: 1.1rem;
  }

  h2{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    padding: 0 3.2rem;
    margin-bottom:2.4rem ;
  }

  main{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 0 3.2rem 7.5rem;

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
      padding-right:30px ;
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
      height: 4.8rem;
      padding: 0.8rem;
      border-radius: 0.8rem;
      background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS} ;
      
      div{
        width: 10.8rem;
      }
    
  }

  textarea{
    margin-top:1.6rem;
  }

  .button-wrapper{
    display: flex;
    gap:3.2rem;
    margin-bottom: 5.3rem;
  }

  .button-save{
    background-color:${({ theme }) => theme.COLORS.RED_LIGTH} ;
  }

  #button-delete{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS}
  }

  label{
  font-family: 'Roboto';
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }


  @media(min-width:1000px){

    #button-back button{
      font-size: 1.8rem;
    
    }   

  main,#button-back,h2{
  padding: 0 12.3rem;
  }

  main{
    padding-bottom:11.6rem;
  }

  .box-one{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    >#info-dish{
      width: 22.9rem;
    }

    >#name-dish{
      width: 46.3rem;
    }

    >#category{
      width: 36.4rem;
      margin-bottom: 2.4rem;
    }
  }

  .box-two{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;


    >.ingradients-wrapper{
      width:83.7rem;
    }


    >#price{
      width: 25.1rem;
      margin-bottom: 2.4rem;
    }
  }
  
  .button-wrapper{
    justify-content: end;
    } 

  .button-save{
    width: 17.2rem;
    }

    #button-delete{
      width: 13.5rem;
    }

    }

`;