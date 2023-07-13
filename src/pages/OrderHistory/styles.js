import styled from "styled-components";
import arrowSelect from "../../assets/arrowSelect.png"

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    position: relative;

 
main{
    padding:3.5rem 3rem 10rem;
}

h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
}

select{
    width: 100%;
    height: 48px;
    background:${({ theme }) => theme.COLORS.BACKGROUND_INPUT_TAGS};;
    color: white;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${arrowSelect}) no-repeat ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    background-position: center  right 1.2rem;
    padding-right:3rem;
    cursor: pointer;
}

`;

export const TableMobile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    
padding: 2.4rem 1rem;
color:${({ theme }) => theme.COLORS.GRAY_LIGHT};
margin-bottom: 1.7rem;

border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAGS_DETAILS};
border-radius: 0.8rem;


.table-heade{
    display: flex;
    align-items: center;
    gap: 3.1rem;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
}

.table-heade div{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.3rem;
}

.table-body{
    font-size: 1.3rem;
}

select{
    margin-top: 1.6rem;
    border-radius: 0.5rem;
    padding-left: 1.6rem;
}

@media(max-width:380px){
    padding: 2.4rem 1rem;
}
`;


export const TableDeskTop = styled.div`

padding: 0 12.3rem;


table{
    width: 100%;
    border-collapse: collapse;
    position: relative;
    margin-top: 3.4rem;
}

table * {
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAGS_DETAILS};
        font-family: 'Roboto';
        font-size: 1.4rem; 
    }

    td{
        padding: 1.6rem;
        text-align: left;

        >h6{
            white-space: nowrap;
            border: none;
            color:${({ theme }) => theme.COLORS.GRAY_LIGHT};
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.4rem;
        }
    }


    th{
        padding: 2.1rem;
        text-align: left;
        font-weight: 700;
        font-size: 1.4rem;
    }

    span{
        border:none;
        color:${({ theme }) => theme.COLORS.GRAY_LIGHT};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
    }

    select{
        border: none;
    }

`;

