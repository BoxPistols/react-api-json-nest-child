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
import Data from "./kpi.json";
import { Box } from "@mui/system";

export const KpiTable = () => {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState();

  useEffect(() => {
    setParents(Data);
  }, []);

  const handleParentSelect = () => {
    const parent = parents.find((p) => p.id === Number(event.target.value));
    setSelectedParent(parent ?? null);
  };

  return (
    <>
      <Box display="flex">
        <div>
          <h3>ネストの子要素のchildrenのListを表示</h3>
          {parents.map((parent) => (
            <div key={parent.id}>
              {parent.children?.map((child, index) => (
                <p key={index}>{child.title}</p>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h3>選択されたParentに応じたテーブル</h3>
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
                  {selectedParent.children?.map((child) => (
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
