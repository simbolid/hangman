import Letter from './Letter';

const LetterTable = ({ selectLetter }) => (
  <table>
    <tbody>
      <tr>
        <Letter letter='A' onSelect={selectLetter} />
        <Letter letter='B' onSelect={selectLetter} />
        <Letter letter='C' onSelect={selectLetter} />
        <Letter letter='D' onSelect={selectLetter} />
        <Letter letter='E' onSelect={selectLetter} />
        <Letter letter='F' onSelect={selectLetter} />
        <Letter letter='G' onSelect={selectLetter} />
        <Letter letter='H' onSelect={selectLetter} />
        <Letter letter='I' onSelect={selectLetter} />
      </tr>
      <tr>
        <Letter letter='J' onSelect={selectLetter} />
        <Letter letter='K' onSelect={selectLetter} />
        <Letter letter='L' onSelect={selectLetter} />
        <Letter letter='M' onSelect={selectLetter} />
        <Letter letter='N' onSelect={selectLetter} />
        <Letter letter='O' onSelect={selectLetter} />
        <Letter letter='P' onSelect={selectLetter} />
        <Letter letter='Q' onSelect={selectLetter} />
        <Letter letter='R' onSelect={selectLetter} />
      </tr>
      <tr>
        <Letter letter='S' onSelect={selectLetter} />
        <Letter letter='T' onSelect={selectLetter} />
        <Letter letter='U' onSelect={selectLetter} />
        <Letter letter='V' onSelect={selectLetter} />
        <Letter letter='W' onSelect={selectLetter} />
        <Letter letter='X' onSelect={selectLetter} />
        <Letter letter='Y' onSelect={selectLetter} />
        <Letter letter='Z' onSelect={selectLetter} />
      </tr>
    </tbody>
  </table>
);

export default LetterTable;