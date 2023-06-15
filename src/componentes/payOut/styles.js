import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

width: 100%;
height: 392px;
border: 1px solid #76797B;
border-radius: 8px ;

img{
    width:166.51px;
    height:166.51px;
    margin: auto;
}

.buttons-wrapper{
    display: flex;
    
    

}

.buttons-wrapper button{
    display: flex;
    gap: 1.4rem;
    background: none;
    border: 1px solid #76797B ;
    
    height: 81px;
}

#button-credit{
    border-top-left-radius: 0px;
    border-bottom-left-radius:0px;
    border-bottom-right-radius: 0px;
}

#button-pix{
    border-top-right-radius: 0px;
    border-bottom-right-radius:0px ;
    border-bottom-left-radius:0px;
}

`;