import React, { useState, useEffect } from "react";
import harry_potter_api from "./utils/harry_potter_api";

const ASCENDING = "ascending";
const DESCENDING = "descending";

const App = () => {
  const [characters, setCharacters] = useState([]);

  console.log(characters);
  useEffect(() => {
    harry_potter_api.fetchCharacters().then((result) => {
      setCharacters(result);
    });
  }, []);

  // pass comparison function  to sort
  const sortCharacters = (order, field) => {
    const sortedChars = characters.slice(0).sort((a, b) => {
      if (order === ASCENDING) {
        return (a[field] || "").localeCompare(b[field] || "");
      }
      return (b[field] || "").localeCompare(a[field] || "");
    });
    setCharacters(sortedChars);
  };
  // how to compare by name
  //

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Name{" "}
              <span onClick={() => sortCharacters(ASCENDING, "name")}>🔼</span>
              <span onClick={() => sortCharacters(DESCENDING, "name")}>🔽</span>
            </th>
            <th>
              Role{" "}
              <span onClick={() => sortCharacters(ASCENDING, "role")}>🔼</span>
              <span onClick={() => sortCharacters(DESCENDING, "role")}>🔽</span>
            </th>
            <th>
              House{" "}
              <span onClick={() => sortCharacters(ASCENDING, "house")}>🔼</span>
              <span onClick={() => sortCharacters(DESCENDING, "house")}>
                🔽
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {characters.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.role}</td>
              <td>{c.house}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
