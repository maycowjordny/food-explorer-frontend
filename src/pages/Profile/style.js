import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    position: relative;
    padding:0 0 15rem;

header{
    display: flex;
    align-items: center;
    height:14.4rem ;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BOLD};

    #button-back{
        margin: 0 3rem;
        display: flex;        
        justify-content: center;
        height: 4rem;
        width: 4rem;
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 50%;
    }

    svg{
        height: 2.5rem;
        width: 3rem;
    }
 
}



`;

export const Form = styled.form`

max-width:34.0rem;
margin: 3.0rem auto 0 ;
display: flex;
flex-direction: column;
gap: 0.8rem;


div:nth-child(4){
    margin-top: 1.6rem;
}



@media(max-width:500px){
padding: 0 3rem 0;
}

`;

export const ProfileImg = styled.div`

position: relative;
margin: -12.4rem  auto  0 ;

img{
    border-radius: 50%;
    width:18.6rem;
    height:18.6rem;
}


>label{
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: center ;
    
    
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.RED};
    
    input{
        display: none;
    }

    
    svg{
        width: 2.0rem;
        height: 2.0rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media(max-width:500px){
    
        width: 3.8rem;
        height: 3.8rem;
    
        svg{
            width: 1.8rem;
            height: 1.8rem;
    }
}

}


@media(max-width:500px){
    img{
        width:14.6rem;
        height:14.6rem;
    }
}


`;