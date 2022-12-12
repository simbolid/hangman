import { useState } from 'react';

const WaitingPage = ({ gameId }) => {
  const [users, setUsers] = useState(['user1', 'user2', 'user3']);

  const userList = users.map((user, idx) => {
    <li key={idx}>
      {user}
    </li>
  });

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1>{`Game ID: ${gameId}`}</h1>
      <ul>{userList}</ul>
      <button>Play</button>
    </>
  );
};

export default WaitingPage;
