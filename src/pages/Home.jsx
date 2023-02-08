import React, { useCallback, useEffect, useState } from "react";
import Table from "../components/Table";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const ifUserExist = () => {
    localStorage.getItem("user_data") === null ? navigate("/login") : "";
    alert("Enter details berfore login");
  };
  console.log(localStorage.getItem("user_data"));
  const fetchData = useCallback(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    setTableData(response);
  }, [tableData]);

  const onLogoutClick = () => {
    localStorage.removeItem("user_data");
    navigate("/Login");
  };

  useEffect(() => {
    ifUserExist();
    fetchData();
  }, []);

  return (
    <div className="min-w-[90%] min-h-[90%] flex flex-col justify-center ">
      <Table tableData={tableData} />
      <div className="flex justify-center items-center pt-4">
        <Button
          variant="contained"
          className="w-[5rem]"
          onClick={onLogoutClick}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
