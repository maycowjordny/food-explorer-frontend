import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100%;
height: 39.2rem;
border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
border-radius: 0.8rem ;

img{
    width:16.51rem;
    height:16.51rem;
    margin: auto;
}

.buttons-wrapper{
    display: flex;
}

.buttons-wrapper button{
    display: flex;
    gap: 1.4rem;
    background: none;
    border: 0.1rem solid  ${({ theme }) => theme.COLORS.BACKGROUND_TAGS} ;
    height: 8.1rem;

    .active {
                background-color:${({ theme }) => theme.COLORS.RED};
                color: #fff;
            }
    
}

#button-credit{
    border-top-left-radius: 0;
    border-bottom-left-radius:0;
    border-bottom-right-radius: 0;
}

#button-pix{
    border-top-right-radius: 0;
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
}



`;