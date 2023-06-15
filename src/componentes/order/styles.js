import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap:1.3rem ;
    margin-bottom: 3.19rem;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    
}

span{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.5rem;
}

img{
    width: 10.81rem;
    height: 10.81rem;
}

#button-delete{
    color: ${({ theme }) => theme.COLORS.RED_BUTTON_DELETE};
}

b{  
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
}

@media(min-width:1000px){

    span{
    font-size: 2rem;
}

.info{
    flex-direction: row;
    align-items: baseline;
    gap:1rem ;
}

} 

`;