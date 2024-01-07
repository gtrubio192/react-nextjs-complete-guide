import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div>
      <ErrorModal title="Whoopsie" message="Something went wrong!" />
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
