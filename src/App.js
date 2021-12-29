import "./styles.css";
import { useState } from "react";
import { data } from "./data";
export default function App() {
  const [api, setapi] = useState(data);
  const [search, setSearch] = useState("");
  const [hover, sethover] = useState(false);
  // button search
  const handlesearch = (abc) => {
    const up = data.filter((elem) => {
      return elem.Title.toLocaleLowerCase().includes(abc.toLocaleLowerCase());
    });
    setapi(up);
  };

  // check

  console.log(hover);
  return (
    <div className="App">
      <div className="header_flex">
        <h1>Movie App</h1>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={() => handlesearch(search)}>Search</button>
        </div>
        <div className="checks"></div>
      </div>
      <hr />
      <div
        className="cardflex"
        onMouseOver={() => {
          sethover(true);
        }}
      >
        {api.map((elem) => {
          return (
            <div
              className="card"
              onMouseOver={() => {
                sethover(true);
              }}
              onMouseUp={() => {
                sethover(false);
              }}
            >
              <img
                src={elem.Poster}
                alt="hello"
                width="250px"
                height="200px"
                className="image"
              />

              <h5>{elem.Title}</h5>
              <p
                style={{
                  marginTop: "-20px",
                  display: hover ? "block" : "none"
                }}
                className="rating"
              >
                Ratings: {elem.imdbRating}
              </p>
              <p>{elem.totalSeasons}</p>
              <p style={{ marginTop: "-15px" }}>{elem.Genre}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
