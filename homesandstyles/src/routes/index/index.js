import { Link } from "react-router-dom";
import Hero from "../../components/Hero"
import Ratings from "../../components/Ratings"

export default function index() {
    return (
        <div>
            <Hero/>
            <Ratings/>
            <Link to="/contact">Contact</Link>
        </div>
    );
}