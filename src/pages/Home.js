import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { BsSearch } from "react-icons/bs";
import Header from "./Header";
import { Link } from "react-router-dom";
import CardDetails from "../components/CardDetails";

const Home = () => {

  const getTheme = () =>{
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [theme , setTheme] =useState(getTheme);

  useEffect(() =>{
    localStorage.setItem("theme", JSON.stringify(theme))
  },[theme])


  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios("https://restcountries.com/v2/all").then((res) =>
      setCountries(res.data)
    );
  };

  const searchCountries = (ulke) => {
    if (ulke.length < 3 || ulke === "") return;
    axios(`https://restcountries.com/v2/name/${ulke}`).then((res) =>
      setCountries(res.data)
    );
  };

  const filterRegion = (bolge) => {
    if (bolge === "all") {
      return axios("https://restcountries.com/v2/all").then((res) =>
        setCountries(res.data)
      );
    } else {
      return axios(`https://restcountries.com/v2/region/${bolge}`).then((res) =>
        setCountries(res.data)
      );
    }
  };

  return (
    <div>
      <div className={theme ? "dark" : ""}>
        <div className="container">
          <Header theme={theme} setTheme={setTheme}/>
          <div className="search-menu">
            <form className="input">
              <BsSearch className="searchIcon" />
              <input
                type="text"
                placeholder="Bir Ülke Ara"
                onChange={(ulke) => searchCountries(ulke.target.value)}
              />
            </form>
            <form action="">
              <select onChange={(bolge) => filterRegion(bolge.target.value)}>
                <option value="all">All Countries</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </form>
          </div>
          <div className="content">
            {countries.map((item, index) => (
              <Link
                className="card-link"
                to="details"
                state={item}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <CardDetails
                  title={item.name}
                  image_url={item.flags.png}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
