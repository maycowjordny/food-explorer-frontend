import styled from "styled-components";

export const Container = styled.header`

  display: flex;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
  height:10.4rem;

  .show-menu{
    position: fixed;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND};
    width: 100%;

	-webkit-animation: show-menu 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: show-menu 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


@keyframes show-menu {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
}
@keyframes  show-menu {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
}

}

header{
  display: flex;
  flex-direction:row;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
  height:10.4rem;
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

.box-menu{
    margin-top:2.6rem ;
    padding: 0 1.8rem 0rem;
    
    input{
        border-radius: 0.5rem;
    }

  button {
        padding-top:1rem ;
        font-size: 2.4rem;
        font-weight: 300;
    }

    #line{
        border-bottom: 1px solid #192227;
    }
}
  
`;

export const DesktopModel = styled.div`
width: 100%;
padding: 0 12rem;
display: flex;
gap: 2.7rem;
align-items: center;
justify-content: space-around;

    .logo div{

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
        >h6{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            white-space: nowrap;
        }

        p{
            width: 3.4rem;
            height: 2.0rem;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            color:${({ theme }) => theme.COLORS.CYAN};
        }
    }

   .order-button{
    width: 18.7rem;
    
    button{
    white-space:nowrap ;
    padding: 1.2rem 3.2rem;
   }
 }

   .search{
    width:100%;
   }

   .buttons-header{
    font-weight: 400;
    font-size: 1.6rem;  
    white-space:nowrap;
   }


   @media(max-width:1300px){
    .buttons-header{
    font-size: 1.4rem;      
   }

   }

`;

export const MobileModel = styled.div`

    position: relative;
    width: 100%;
    display: flex;
    padding: 0  2.8rem;
    align-items: center;
    justify-content: space-between;

        .logo{

        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        >h6{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2rem;
        }
}

    span{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        width: 1.8rem;
        height: 1.8rem;
        right: 2.2rem;
        top:3.3rem;
        background-color:${({ theme }) => theme.COLORS.RED};
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg {
        width: 3rem;
        height: 3.5rem;
}

.logo div{

display: flex;
align-items: center;
justify-content: end;
gap: 1rem;

    >h6{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        white-space: nowrap;
    }

    p{
        width: 3.4rem;
        height: 2.0rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        color:${({ theme }) => theme.COLORS.CYAN};
    }
}

`;