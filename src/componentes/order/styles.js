import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap:1.3rem ;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    
}

span{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2rem;
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

`;