import { Link } from "react-router-dom";
import logo from "../assets/logo1.png"

const Header = () => {
  return (
    <header>
      <div>
        <div>
            <Link to={""}><img src={logo} height={80} width={80}/></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
