import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 100vh;

main{
    padding-bottom: 4.9rem;
}


#button-back button{
    margin-top:3.6rem;
    font-size: 2.4rem;
    

    >svg{
        width: 3rem;
        height: 3.2rem;
    }
}

@media (min-width: 1000px) {
    main{
         margin-top: 3.2rem;
         padding-bottom: 0rem;
    }
    #button-back{
        margin-top: 2.4rem;
        margin-bottom: 4.2rem;
        margin-left: 11.0rem;
    }  
}


`;
