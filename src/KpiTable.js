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
  const [selectedChild, setSelectedChild] = useState();

  useEffect(() => {
    setParents(Data);
  }, []);

  const handleChildClick = (child) => {
    setSelectedChild(child);
  };

  const handleParentSelect = () => {
    const parent = parents.find((p) => p.id === Number(event.target.value));
    setSelectedParent(parent ?? null);
  };

  return (
    <>
      <Box display="flex" gap={2}>
        <Box>
          <h3>ネストの子要素のchildrenのListを表示</h3>
          {selectedParent &&
            parents.map((parent) => (
              <Box key={parent.id}>
                {parent.children?.map((child, index) => (
                  <p key={index} onClick={() => handleChildClick(child)}>
                    {child.title}
                  </p>
                ))}
              </Box>
            ))}
        </Box>
        <Box>
          <h3>選択されたParentとChildに応じたテーブル</h3>
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
          {selectedChild ? (
            <>
              <h3>
                {selectedParent.name} - {selectedChild.title}
              </h3>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>名前</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedChild.children?.map((child) => (
                    <TableRow key={child.id}>
                      <TableCell>{child.id}</TableCell>
                      <TableCell>{child.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : selectedParent ? (
            <p>子要素を選択してください</p>
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
        </Box>
      </Box>
    </>
  );
};
