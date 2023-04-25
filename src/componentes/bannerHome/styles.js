import styled from "styled-components";

export const Container = styled.div`

        border-radius:0.3rem;
        height:12rem;
        margin:4.3rem 3rem 5.2rem 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BANNER};
         transition: 500ms;

            img{
                margin-bottom:3rem;
                margin-left: -3rem;
                width: 19.1rem;
                height: 14.9rem;
            }
            
            #text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-family: 'Poppins';
            }

            h1{
            font-family: 'Poppins';
            font-size: 1.8rem;
            line-height: 100%;
            margin-bottom: 1.0rem;
        }
        p{
            font-family: 'Poppins';
            padding-right:0.6rem;
            font-size: 1rem;
            line-height: 100%;
        }
    


    @media (min-width: 1000px) {

            height: 26rem;
            
            transition: 500ms;

            img{
            margin-left: -5rem;
            margin-bottom:14.6rem;
            width: 63.2rem;
            height: 40.6rem;
            }
            
            #text{
               padding:1rem;
            }

            h1{
                font-size: 4rem;
        }
        p{
            font-size: 1.6rem;
          
        }

    }

`;