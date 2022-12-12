import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const STATES = {
  UNSELECTED: 'unselected',
  CORRECT: 'correct',
  WRONG: 'wrong',
};

const colors = {
  'unselected': 'black',
  'correct': 'green',
  'wrong': 'red',
};

const cursors = {
  'unselected': 'pointer',
  'correct': 'default',
  'wrong': 'default',
};

const StyledTd = styled.td(props => ({
  padding: '25px',
  textAlign: 'center',
  borderSize: '1px',
  borderStyle: 'solid',
  borderColor: props.color,
  color: props.color,
  cursor: props.cursor,
}));

const Letter = ({ letter, onSelect, refresh }) => {
  const [status, setStatus] = useState(STATES.UNSELECTED);

  useEffect(() => {
    setStatus(STATES.UNSELECTED);
  }, [refresh]);

  const handleClick = () => {
    if (status === STATES.UNSELECTED) {
      const correct = onSelect(letter);
      const newStatus = correct ? STATES.CORRECT : STATES.WRONG;
      setStatus(newStatus);
    }
  };


  return (
    <StyledTd 
      onClick={handleClick} 
      color={colors[status]} 
      cursor={cursors[status]}
    >
      {letter}
    </StyledTd>
  );
};

export default Letter;
