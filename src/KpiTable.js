import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Data from "./kpi.json"; // 追加
import { Box } from "@mui/system";

export const KpiTable = () => {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);

  useEffect(() => {
    setParents(Data);
  }, []);

  // button
  const handleParentClick = (parent) => {
    setSelectedParent(parent);
  };

  // select
  const handleParentSelect = (event) => {
    setSelectedParent(
      parents.find((parent) => parent.id === Number(event.target.value))
    );
  };

  return (
    <>
      <Box display="flex">
        {/* button */}
        <h3>Pick</h3>
        {/* <div>
          {parents.children.map((child) => (
            <button key={child.id} onClick={() => handleParentClick(child)}>
              {child.name}
            </button>
          ))}
        </div> */}
        <div>
          {selectedParent && (
            <div key={selectedParent.id}>
              <h1>{selectedParent.name}</h1>
              {/* <p>{selectedParent.id}</p> */}
              <ul>
                {selectedParent.children.map((child) => (
                  <li key={child.id}>
                    {child.id} - {child.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* FIXME: List */}
          {/* <ul>
            {parents.children.map((parents) => (
              <li key={parents.id}>{parents.title}</li>
            ))}
          </ul> */}
        </div>

        {/* Table */}
        <div>
          <h3>Table Choose</h3>
          <Select
            native
            value={selectedParent ? selectedParent.id : ""}
            onChange={handleParentSelect}
            displayEmpty
          >
            <option value="">-- 親を選択 --</option>
            {parents.map((parent) => (
              <option key={parent.id} value={parent.id}>
                {parent.name}
              </option>
            ))}
          </Select>
          {selectedParent ? (
            <>
              <h1>{selectedParent.name}</h1>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>名前</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedParent.children.map((child) => (
                    <TableRow key={child.id}>
                      <TableCell>{child.id}</TableCell>
                      <TableCell>{child.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>...</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>here...</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>
          )}
        </div>
      </Box>
    </>
  );
};
