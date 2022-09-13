import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { BsSearch } from "react-icons/bs";
import Header from "./Header";
import {Link} from "react-router-dom"
import CardDetails from "../components/CardDetails";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios("https://restcountries.com/v3.1/all").then((res) =>
      setCountries((res.data).sort((a, b) => a.name.common > b.name.common ? 1 : -1))
    );
  };

  const searchCountries = (ulke) =>{
    if(ulke.length < 3 || ulke === "") return 
    axios(`https://restcountries.com/v3.1/name/${ulke}`)
    .then((res) => setCountries((res.data).sort((a, b) => a.name.common > b.name.common ? 1 : -1)));
  }
  
  

  const filterRegion = (bolge) => {
    if(bolge === "all"){
      return  axios("https://restcountries.com/v3.1/all").then((res) =>
      setCountries((res.data).sort((a, b) => a.name.common > b.name.common ? 1 : -1))
    );
    }
    else{
      return  axios(`https://restcountries.com/v3.1/region/${bolge}`)
      .then((res) => setCountries((res.data).sort((a, b) => a.name.common > b.name.common ? 1 : -1)));
    }
   
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
                  <option value="all">All Countries</option>
                  <option value="africa">Africa</option>
                  <option value="america">America</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="oceania">Oceania</option>
                   
                </select>
            </form>
          </div>
          <div className="content">
              {countries.map((item, index) => 
              <Link  to="details" state={item} key={index}>
                <CardDetails
                 title={item.name.common}
                image_url={item.flags.png}
                population={item.population}
                region={item.region}
                capital={item.capital}                 
                />
              </Link>)}
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Home;
