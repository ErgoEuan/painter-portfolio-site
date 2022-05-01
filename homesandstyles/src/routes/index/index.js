import { Link } from "react-router-dom";
import Hero from "../../components/Hero"

export default function index() {
    return (
        <div>
            <Hero/>
            <Link to="/contact">Contact</Link>
        </div>
    );
}