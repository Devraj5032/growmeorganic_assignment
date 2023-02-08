import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ tableData }) => {
  const columns = [
    { field: "userId", headerName: "userId" },
    {
      field: "id",
      headerName: "id",
    },
    {
      field: "title",
      headerName: "title",
      editable: true,
      width: 610,
    },
    {
      field: "body",
      headerName: "body",
      editable: true,
      width: 910,
    },
  ];

  const rows = tableData;

  return (
    <div className="w-auto ">
      <Box sx={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Table;
