import { Link } from "react-router"

export function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <nav>
                <Link to="/">Index</Link>
            </nav>
        </div>
    )
}