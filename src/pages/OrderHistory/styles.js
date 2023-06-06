import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    position: relative;

main{
    padding: 1.7rem 3.2rem;
}
`;

export const TableMobile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 11.4rem;
padding: 0 2rem;
color:${({ theme }) => theme.COLORS.GRAY_LIGHT};

border: 2px solid #192227;
border-radius: 0.8rem;


.table-heade{
    display: flex;
    gap: 3.1rem;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
}

.table-body{
    font-size: 1.4rem;
}

`;


export const TableDeskTop = styled.div`

padding: 3.4rem 12.3rem;

h1{
    padding: 3.4rem 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
}


table{
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius:0.8rem 0.8rem 0 0 ;
}

table * {
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAGS_DETAILS};
        font-family: 'Roboto';
        font-size: 1.4rem; 
    }

    td{
        padding: 1.6rem;
        text-align: left;
    }

    th{
        padding: 2.1rem;
        text-align: left;

        font-weight: 700;
        font-size: 1.4rem;
    }

    span{
        border:none;
    }

    select{
        width: 100%;
        
        border: none;
        outline: none;
    }

`;

