import styled from "styled-components"

const Root=styled.div`
width: 150px;
border: 1px solid red;
display: flex;
justify-content: space-between;
flex-wrap: wrap`;

const Knopka=styled.p`
width: 20px;
  height: 20px;
  border: 1px solid green;
`;
const Total=styled.div`
border: 1px solid gray;
  width: 100px;
  height: 70px;
  margin-bottom: 30px;
`;



export const Styled={Root, Knopka, Total}