import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState ,useEffect } from "react";

const Detail = () => {

  const getTheme = () =>{
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [theme , setTheme] =useState(getTheme);

  useEffect(() =>{
    localStorage.setItem("theme", JSON.stringify(theme))
  },[theme])


  let { state } = useLocation();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={theme ? "dark" : ""}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="details-container">
        <button onClick={() => goHome()}>
          <AiOutlineArrowLeft />
        </button>
        <div className="country-container">
          <div className="flag-area">
            <img src={state.flags.svg} />
          </div>
          <div className="country-info">
            <h2>{state.name}</h2>
            <div className="country-info2">
              <div className="country-info2-left">
                <h4>
                  <span>Native Name: </span>
                  {state.nativeName}
                </h4>
                <h4>
                  <span>Region: </span>
                  {state.region}
                </h4>
                <h4>
                  <span>Subegion: </span>
                  {state.subregion}
                </h4>
                <h4>
                  <span>Capital: </span>
                  {state.capital}
                </h4>
                <h4>
                  <span>Population: </span>
                  {state.population}
                </h4>
              </div>
              <div className="country-info2-right">
                <h4>
                  <span>Currencies: </span>
                  {state.currencies.map((cur) => cur.name)}
                </h4>
                <h4>
                  <span>Language: </span>
                  {state.languages.map((lang) => lang.name)}
                </h4>
                <h4>
                  <span>TopLevelDomain: </span>
                  {state.topLevelDomain}
                </h4>
                <h4>
                  <span>Area: </span>
                  {state.area}
                </h4>
                <h4>
                  <span>Calling Code: </span>+{state.callingCodes}
                </h4>
              </div>
            </div>

            <div className="borders">
              <div className="border-title">
                <h4>Borders</h4>
              </div>

              <div className="border">
                {state.borders == null ? 
                  <p>Komşu ülkesi yok</p>
                : <>
                  {state.borders.map(bor => 
                    <span>{bor}</span>
                  )}  
                </>    
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
