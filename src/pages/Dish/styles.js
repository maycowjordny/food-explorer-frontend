import styled from "styled-components";
import arrowSelect from "../../assets/arrowSelect.png"


export const Container = styled.div`

position: relative;
min-height: 100vh;

#button-back{
  padding: 0 3.2rem;
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

  #file{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS};
    border-radius: 0.8rem;
    
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

    #category{
      display: flex;
      flex-direction: column;
    
    
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

  label{
  font-family: 'Roboto';
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }

  textarea{
    margin-top:1.6rem;
  }




  @media(min-width:1000px){
.box-one{
  display: flex;
  align-items: center;
  gap: 3.2rem;

  >#info-dish{
    width: 22.9rem;
  }

  >#name-dish{
    width: 46.3rem;
  }
}

.box-two{
  display: flex;
  align-items: center;
  gap: 3.2rem;
}

  }

`;