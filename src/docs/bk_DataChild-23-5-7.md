# DataChild.js

23-5-7

```js
import React, { useState, useEffect } from "react";
import Data from "./child.json"; // JSONファイルをインポートします
import {
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const DataChild = () => {
  const [parents, setParents] = useState([]);
  // select
  const [selectedParent, setSelectedParent] = useState(null);

  useEffect(() => {
    // JSONファイルを直接使用します
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
      <div>
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

        {/* button */}
        <h3>Pick</h3>
        <div>
          {parents.map((parent) => (
            <button key={parent.id} onClick={() => handleParentClick(parent)}>
              {parent.name}
            </button>
          ))}
        </div>
        <div>
          {selectedParent && (
            <div key={selectedParent.id}>
              <h1>{selectedParent.name}</h1>
              {/* <p>{selectedParent.id}</p> */}
              <ul>
                {selectedParent.children.map((child) => (
                  <li key={child.id}>
                    <ul>
                      <li>{child.id}</li>
                      <li>{child.name}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* all map */}
        {/*
        <h3>Test</h3>
        {parents.map((parent) => (
          <div key={parent.id}>
            <h1>{parent.name}</h1>
            <ul>
              {parent.children.map((child) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          </div>
        ))} 
        */}
      </div>
    </>
  );
};
```

## child.json

```
[
  {
    "id": 1,
    "name": "parent1",
    "children": [
      {
        "id": 2,
        "name": "Alice"
      },
      {
        "id": 3,
        "name": "Bob"
      },
      {
        "id": 4,
        "name": "Charlie"
      },
      {
        "id": 5,
        "name": "David"
      },
      {
        "id": 6,
        "name": "Eva"
      }
    ]
  },
  {
    "id": 7,
    "name": "parent2",
    "children": [
      {
        "id": 8,
        "name": "Frank"
      },
      {
        "id": 9,
        "name": "Grace"
      },
      {
        "id": 10,
        "name": "Hannah"
      },
      {
        "id": 11,
        "name": "Igor"
      },
      {
        "id": 12,
        "name": "Jasmine"
      }
    ]
  }
]
```