import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding: 0 5.6rem;

main{
    padding-bottom: 5.4rem;
}


.box-one{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.box-two{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



    img{
            margin:1.6rem 0;
            width: 26.4rem;
            height:26.4rem;
            border-radius: 50%;
        }


#name-dish p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 140%;
   
}

#description p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 140%;  
   margin:2.4rem 0; 
   text-align: center;
}


#tags{
    width:31.6rem;
    display:flex;
    gap:2rem ;
    flex-wrap:wrap;
    justify-content: center;
    margin-bottom:4.8rem;
}

  
input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

      input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
      }
    
      #input-number{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        width: 4.5rem;
        cursor: pointer;
        
      }


#buttons-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    
}


#quantity{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:1.8rem;
    
    svg{
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }
}

#add-button{
    width: 18.8rem;
    height: 3.7rem;
    display: flex;
    gap: 0.7rem;
    border-radius: 0.3rem;
}

#edit-button{
    width: 31.6rem;
    height: 4.8rem;
    margin-right: 1.6rem;
}

@media(min-width:1000px){

main{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.7rem;
    padding-bottom: 15.7rem;
}

.box-one,.box-two{
    align-items:start;
}

img{
    width: 39rem;
    height: 38.9rem;
}

#name-dish p{
    font-size: 4.0rem;
    
}

#description p{
    font-size: 2.4rem;
    text-align: left;
}

#buttons-wrapper{
    justify-content: left;
}

#tags{
    width: 48.8rem;
    flex-direction: row;
    justify-content: flex-start;
       gap: 1.2rem;
}

#add-button{
    width: 16.2rem;
    height: 4.8rem;
   
} 

#edit-button{
    width: 13.1rem;
    height: 4.8rem;
   
}


}

`;