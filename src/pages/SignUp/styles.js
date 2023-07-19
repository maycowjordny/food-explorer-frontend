import styled from "styled-components";


export const Container = styled.div`
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
    
a{
    margin:  auto ;
    cursor: pointer;
    width: fit-content;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
}
 
section{
    margin-bottom: 7.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg{
        width: 4.3rem;
        height: 4.3rem;
    }

    >h6{
        width: 22.4rem;
        height: 4.4rem;
        font-family: 'Roboto';
        font-size: 3.7rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        
    }

}
@media (min-width: 1000px){
    flex-direction: row;
    align-items: center;
    gap: 300px;
}

`;


export const Form = styled.form`

padding: 1rem;
width: 316px;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 32px;


label{
font-family: 'Roboto';
font-weight: 400;
font-size: 1.6rem;
color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
}



@media (min-width: 1000px){
width: 476px;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
border-radius: 16px;
padding: 64px;

h2{
text-align: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
}

}

`;