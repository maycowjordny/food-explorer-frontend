import styled from "styled-components";

export const Container = styled.div`
position: relative;
min-height: 100vh;

  main{
    padding:1.4rem 1.6rem 7.4rem 1.6rem ;
  }

section h1{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 140%;
  margin-bottom: 2.4rem;
  padding: 0 2.4rem;
}


.btn-carousel{
  display: flex;
  align-items: center;
  gap:0.5rem;  
  padding-bottom: 4.6rem;


  .carousel{
    width: 100%;
    display: flex;
    gap: 1.6rem; 
    overflow-x: auto;
    scroll-behavior: smooth;
    
    
    ::-webkit-scrollbar{
  display:none;
    }
}


}



@media (min-width: 1000px) {
    main{
        padding: 14rem 8.5rem 15rem 8.5rem ;
        section{
            #buttonsCarousel{
                display: flex;
                .carousel{
                    display: flex;
                    gap: 2.7rem;     
                }
            }
        }
    }

   section h1{
      font-size: 3.2rem;
    }
}
`;