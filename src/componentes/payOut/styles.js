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
    
    .active{
        background-color: ${({ theme }) => theme.COLORS.RED};
    }
}

.buttons-wrapper button{
    display: flex;
    gap: 1.4rem;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_BOLD};
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

        img{
            width: 17.9rem;
            height: 17.9rem;
            margin-top: 7rem;
        }

        #boxPayment{
            display: flex;
            flex-direction: column;
    
            gap: 3.7rem;
            padding: 0 2.6rem;
            margin-top: 5.7rem;
    
            #inputPayments{
                display: flex;
                gap: 1.7rem;
            }
                    
            input{
                border: solid 1px ${({ theme }) => theme.COLORS.INPUT_TAG};
                border-radius: 5px;
                            
            }
    
            #inputs-Wrapper{
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
    
            button{
                border-radius: 5px;
    
                svg{
                    font-size:3.0rem;
                    margin-right: 8px;
                }
            }
        }

        .paymentProcess{
            height: 100%;
    
            .process{
                width: 100%;
                height: 100%;
                margin-top: 7rem;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;         
                    
                p{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2rem;
                    margin-top: 3.3rem;
                }
    
                svg{
                    font-size: 10.0rem;
                }
            }
    
        }

        .PaymentProcess{
        display: flex;
        justify-content: center;
        }
        
    
        @media (min-width: 1000px) {
            #box{
                width: 53.0rem;
                height: 44.5rem;
                    
                img{
                    width: 27.0rem;
                    height: 27.0rem;
                    margin-top: 4.5rem;
                }
            
                #boxPayment{
                    padding: 0 9.1rem;
                    margin-top: 4.5rem;
                }           
            }
        }
                
`;

