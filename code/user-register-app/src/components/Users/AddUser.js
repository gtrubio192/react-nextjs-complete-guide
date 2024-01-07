import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = ({ onAddUser }) => {
  const [input, setInput] = useState({ name: "", age: "" });
  const [isValid, setIsValid] = useState(true);

  const handleInput = (e) => {
    const { id, value } = e.target;
    if (value.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setInput((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onAddUser(input);
    setInput({ name: "", age: "" });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          value={input.name}
          onChange={handleInput}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={input.age}
          onChange={handleInput}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
