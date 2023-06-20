import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100%;
min-height: 39.2rem;
border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
border-radius: 0.8rem ;

img{
    width:16.51rem;
    height:16.51rem;
    margin: auto;
}

.buttons-wrapper{
    display: flex;
}

.buttons-wrapper button{
    display: flex;
    gap: 1.4rem;
    background: none;
    border: 0.1rem solid  ${({ theme }) => theme.COLORS.BACKGROUND_TAGS} ;
    height: 8.1rem;

}

#button-credit{
    border-top-left-radius: 0;
    border-bottom-left-radius:0;
    border-bottom-right-radius: 0;
}

#button-pix{
    border-top-right-radius: 0;
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
}

#boxPayment{
            display: flex;
            flex-direction: column;
            gap: 3.7rem;
            padding: 5.3rem 2.7rem 0;

           
    
            #inputPayments{
                display: flex;
                gap: 1.7rem;
            }
                    
            input{
                border: solid 1px ${({ theme }) => theme.COLORS.INPUT_TAG};
                border-radius: 5px;
                            
            }

            input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
            }
            input[type=number] { 
            -moz-appearance: textfield;
            appearance: textfield;

            }
    
            #inputs-Wrapper{
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
    
            button{
                border-radius: 5px;
                margin-bottom: 5.8rem;
                svg{
                    font-size:3.0rem;
                    margin-right: 8px;
                }
            }
        }

        @media(min-width:1000px){
            #boxPayment{
                max-width: 60rem;
                margin: 0 auto;
            }
        }



`;