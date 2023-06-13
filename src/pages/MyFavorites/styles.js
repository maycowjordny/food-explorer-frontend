import styled from "styled-components";


export const Container = styled.div`

    position: relative;
    min-height: 100vh;

    main{
        padding: 0 3.5rem 10rem;

        h2{
            margin-top: 5.6rem;
            margin-bottom: 2.7rem;
    
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 3.2rem;
        }
    }

@media(min-width: 1000px) {

    main{
        width: 100%;
        padding: 0 12.3rem 15rem;

        h2{
            margin-bottom: 3.2rem;
        }
        
        section{ 
            width: 100%;

            display: flex;
            flex-wrap:wrap;

            gap:4.8rem;
        }
    } 
}



`;