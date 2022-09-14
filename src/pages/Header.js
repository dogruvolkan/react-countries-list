
import { Link } from "react-router-dom";


const Header = ({theme , setTheme}) => {
 
  return (
    <div>
      <div className="header">
        <h1>
          <Link className="title-link" to="/">
            COUNTRIES
          </Link>
        </h1>
        <button onClick={() => setTheme(!theme)}>
            {theme ? <span>🌙 Dark Mode</span> : <span> 🌞 Light Mode</span>}
        </button>
      </div>
    </div>
  );
};

export default Header;
