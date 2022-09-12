import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { BsSearch } from "react-icons/bs";
import Header from "./Header";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios("https://restcountries.com/v3.1/all").then((res) =>
      setCountries(res.data)
    );
  };

  const searchCountries = (ulke) =>{
    if(ulke.length < 3 || ulke === "") return 
    axios(`https://restcountries.com/v3.1/name/${ulke}`)
    .then((res) => setCountries(res.data));
  }
  
  var kitalar = ["Filter by Region","africa","america","asia","europe","oceania"];

  const filterRegion = (bolge) => {
    if(bolge === "") return
    axios(`https://restcountries.com/v3.1/region/${bolge}`)
    .then((res) => setCountries(res.data));
  }

  

  return (
    <div>
      <div className={`${theme === "dark" ? "dark" : " "}`}>
        <div className="container">
          <Header theme={theme} setTheme={setTheme} />
          <div className="search-menu">
            <form className="input">
              <BsSearch className="searchIcon" />
              <input type="text" placeholder="Bir Ülke Ara" onChange={(ulke) => searchCountries(ulke.target.value)}/>
            </form>
            <form action="">
                
                <select onChange={(bolge) => filterRegion(bolge.target.value)}>            
                   {
                    kitalar.map((kita) =>{
                        return <option value={kita}>{kita}</option>
                    })
                   } 
                </select>
            </form>
          </div>
          <div className="content">
            {countries.map((item) => (
              <div className="card">
                <img src={item.flags.png} />
                <p className="ulkeAdi">{item.name.common}</p>
                <p>
                  <span>Population: </span> {item.population}
                </p>
                <p>
                  <span>Region: </span> {item.region}
                </p>
                <p>
                  <span>Capital: </span> {item.capital}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
