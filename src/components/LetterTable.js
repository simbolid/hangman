import styled from '@emotion/styled';

const LetterBox = styled.td`
  padding: 30px;
  border: 1px solid black;
`;

const LetterTable = () => (
  <table>
    <tr>
      <LetterBox>A</LetterBox>
      <LetterBox>B</LetterBox>
      <LetterBox>C</LetterBox>
      <LetterBox>D</LetterBox>
      <LetterBox>E</LetterBox>
      <LetterBox>F</LetterBox>
      <LetterBox>G</LetterBox>
      <LetterBox>H</LetterBox>
      <LetterBox>I</LetterBox>
    </tr>
    <tr>
      <LetterBox>J</LetterBox>
      <LetterBox>K</LetterBox>
      <LetterBox>L</LetterBox>
      <LetterBox>M</LetterBox>
      <LetterBox>N</LetterBox>
      <LetterBox>O</LetterBox>
      <LetterBox>P</LetterBox>
      <LetterBox>Q</LetterBox>
      <LetterBox>R</LetterBox>
    </tr>
    <tr>
      <LetterBox>S</LetterBox>
      <LetterBox>T</LetterBox>
      <LetterBox>U</LetterBox>
      <LetterBox>V</LetterBox>
      <LetterBox>W</LetterBox>
      <LetterBox>X</LetterBox>
      <LetterBox>Y</LetterBox>
      <LetterBox>Z</LetterBox>
    </tr>
  </table>
);

export default LetterTable;