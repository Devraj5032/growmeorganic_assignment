import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("user_data", user);
    navigate("/");
  };

  return (
    <form
      className="flex flex-col  max-w-[400px] space-y-4"
      onSubmit={handleOnSubmit}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        type="text"
        onChange={handleOnChange}
      />
      <TextField
        label="email"
        variant="outlined"
        name="email"
        type="email"
        onChange={handleOnChange}
      />
      <TextField
        label="phone number"
        variant="outlined"
        name="phone"
        type="number"
        onChange={handleOnChange}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
