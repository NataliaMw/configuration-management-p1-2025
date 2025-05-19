import { Link } from "react-router";

export function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            <nav>
                <Link to="/">Index</Link>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    )
}