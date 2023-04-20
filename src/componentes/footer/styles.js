import styled from "styled-components";

export const Container = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    height: 7.7rem;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BOLD};

        #logo{
            display: flex;
            align-items: center;
            gap:0.6rem;

                >h6{
                    color: ${({ theme }) => theme.COLORS.GRAY_700};
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 1.5rem;
                }
        }

        #rights-reserved{
            >span{
                font-size:1.2rem;
                color: ${({ theme }) => theme.COLORS.WHITE_LIGTH};
            }
}

@media(min-width:1000px){

    justify-content: space-between;
    padding: 0 12.3rem;

        h6{
            color: ${({ theme }) => theme.COLORS.GRAY_700};
            font-family: 'Roboto';
            font-size: 2.4rem;
            }

        span{
            font-family: 'Roboto';
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE_LIGTH};
            }
}
`;