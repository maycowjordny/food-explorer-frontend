import styled from "styled-components";

export const Container = styled.div`

.modal{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3.35rem;
    
}

span{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.5rem;
    white-space:nowrap;
}

img{
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
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