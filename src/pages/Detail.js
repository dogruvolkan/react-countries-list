import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Detail = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="details-container">
        <button onClick={() => goHome()}>
          <AiOutlineArrowLeft />
        </button>
        <div className="country-container">
          <div className="flag-area">
            <img src={state.flags.svg}/>
          </div>
          <div className="country-info">
            <h2>{state.name.common}</h2>
            <div className="country-info2">
              <div className="country-info2-left">
                  <h4><span>Native Name: </span>{state.altSpellings[state.altSpellings.length-1]}</h4>
                  <h4><span>Region: </span>{state.region}</h4>
                  <h4><span>Capital: </span>{state.capital}</h4>
                  <h4><span>Population: </span>{state.population}</h4>
              </div>
              <div className="country-info2-right">
                  <h4><span>Currencies: </span>
                  
                  </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
