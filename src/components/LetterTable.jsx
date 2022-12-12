import Letter from './Letter';

const LetterTable = ({ selectLetter, refresh }) => (
  <table>
    <tbody>
      <tr>
        <Letter letter='A' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='B' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='C' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='D' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='E' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='F' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='G' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='H' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='I' onSelect={selectLetter} refresh={refresh} />
      </tr>
      <tr>
        <Letter letter='J' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='K' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='L' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='M' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='N' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='O' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='P' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='Q' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='R' onSelect={selectLetter} refresh={refresh} />
      </tr>
      <tr>
        <Letter letter='S' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='T' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='U' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='V' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='W' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='X' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='Y' onSelect={selectLetter} refresh={refresh} />
        <Letter letter='Z' onSelect={selectLetter} refresh={refresh} />
      </tr>
    </tbody>
  </table>
);

export default LetterTable;