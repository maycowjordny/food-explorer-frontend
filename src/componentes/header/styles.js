import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
  height:10.4rem;
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
    }

    svg {
        width: 30px;
        height: 35px;
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

export const DesktopModel = styled.div`
width: 100%;
padding: 0 12.3rem;
display: flex;
gap: 3.2rem;
align-items: center;
justify-content: space-around;

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

   .order-button{
   width: 21.6rem;

   button{
    white-space:nowrap ;
    padding: 1.2rem 3.2rem;
   }
   }

   .search{
    width:100%;
   }

`;