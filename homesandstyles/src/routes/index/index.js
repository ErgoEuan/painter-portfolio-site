import { Link } from "react-router-dom";

export default function index() {
    return (
        <div>
            <h1>Index Page</h1>
            <Link to="/contact">Contact</Link>
        </div>
    );
}