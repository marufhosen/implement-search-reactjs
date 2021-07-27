import React, { useEffect, useState } from "react";
import "./Main.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FoodDetail from "../FoodDetail/FoodDetail";

const Main = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const handlChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [search]);

  return (
    <div style={{ marginTop: 20 }}>
      <Container maxWidth="md">
        <div>
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
              Food Blog
            </Box>
            <Box p={1}>
              <input
                onChange={handlChange}
                className="input-field"
                type="text"
                placeholder="Search Your Choise"
              />
            </Box>
          </Box>
        </div>
        <div className="food-item">
          {foods?.map((fd) => (
            <FoodDetail FoodDetails={fd}></FoodDetail>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Main;
