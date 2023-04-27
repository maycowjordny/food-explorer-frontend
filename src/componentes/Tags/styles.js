import styled from "styled-components";


export const Container = styled.span`
   font-family: 'Poppins';
   font-weight: 500;
   font-size: 1.4rem;
   line-height: 2.4rem;
   border-radius:5px;
   
   padding:4px 8px;
   
   color:${({ theme }) => theme.COLORS.WHITE};
   background-color:${({ theme }) => theme.COLORS.BACKGROUND_TAGS_DETAILS};
 
`