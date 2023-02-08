import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const [user, setUser] = useState("");

  const handleOnChange =(e) => {
    setUser({
        ...user , [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <form
      className="flex flex-col border-black p-4 max-w-[400px] space-y-4"
      onSubmit={handleOnSubmit}
    >
      <TextField label="Name" name="name" variant="outlined" type="text" onChange={handleOnChange}/>
      <TextField label="email" variant="outlined" name="email" type="email" onChange={handleOnChange}/>
      <TextField label="phone number" variant="outlined" name="phone" type="number" onChange={handleOnChange}/>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
