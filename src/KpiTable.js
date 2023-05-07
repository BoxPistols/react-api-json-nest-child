import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import Data from "./kpi.json";
import { Box } from "@mui/system";

export const KpiTable = () => {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    setParents(Data);
  }, []);

  const handleChildClick = (child) => {
    setSelectedChild(child);
  };

  const handleParentSelect = (event) => {
    const parent = parents.find((p) => p.id === Number(event.target.value));
    setSelectedParent(parent ?? null);
    setSelectedChild(null);
  };

  return (
    <>
      <Box display="flex" gap={3}>
        <Box>
          <Typography variant="h5">特徴量セットリスト</Typography>
          {selectedParent &&
            selectedParent.children.map((child, index) => (
              <MenuItem key={index} onClick={() => handleChildClick(child)}>
                {child.title}
              </MenuItem>
            ))}
        </Box>
        <Box>
          <Typography variant="h5">
            選択されたParentとChildに応じたテーブル
          </Typography>
          <Select
            native
            value={selectedParent ? selectedParent.id : ""}
            onChange={handleParentSelect}
            displayEmpty
          >
            <option value="">-- KPIを選択 --</option>
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
                    {selectedParent.columns.map((column, index) => (
                      <TableCell key={index}>{column}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedChild.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{item.growth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : selectedParent ? (
            <p>子要素を選択してください</p>
          ) : (
            <p>KPIを選択してください</p>
          )}
        </Box>
      </Box>
    </>
  );
};
