import Header from "../Header/Header";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
    return (
     <div className="hero-container">
    <Header />

    <div className="hero-content">
        <h1>A Frontend developer <br /> thats creates free  <br /> quality content</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Esse rerum possimus delectus nesciunt iure, expedita et laudantium?</p>
    <button>Explore Page {" "}
        <FaArrowUp 
        style={{
        transform:"rotate(40deg)",
    }}
    />
    </button>
    </div>
    </div>

    );
};

export default Home;