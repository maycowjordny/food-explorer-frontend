import styled from "styled-components";

export const Container = styled.div`

header{
  display: flex;
  flex-direction:row;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
  height:8.4rem;
  padding: 0 2.8rem;
  
  svg{
    width: 2.5rem;
      height:2.5rem;
  }
  
  #button-menu{
    display: flex;
    align-items: center;
    gap:1rem ;
    font-size: 2.1rem;

  }
}

main{
    margin-top:3.6rem ;
    padding: 0 2.8rem;
    
    input{
        border-radius: 0.5rem;
    }

    #button-logout{
        margin-top: 4.6rem;
        font-size: 24px;
        font-weight: 300;
    }

    #line{
        border-bottom: 1px solid #192227;
    }
}

`;