import { useNavigate } from "react-router-dom";
import { showLoginPopup } from "./utils";

const Home = () => {

    const navigate = useNavigate();

    return (
        <button 
        onClick={()=> {showLoginPopup(navigate, "/Resource")

         }}>
            Login
         </button>
    );

   
}

export default Home;