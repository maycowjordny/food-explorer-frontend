import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: relative;
min-height: 100vh;

main{
    padding-bottom: 4.7rem;
}


#button-back button{
    margin: 3.5rem 5.6rem;
    font-size: 2.4rem;
    
    >svg{
        width: 3rem;
        height: 3.2rem;
    }
}

@media (min-width: 1000px) {
    main{
         margin-top: 3.2rem;
         padding-bottom: 15.5rem;
    }
    #button-back{
       margin: 3.3rem 6rem;
    }  
}


`;
