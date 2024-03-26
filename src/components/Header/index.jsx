import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Survey">Questionnaire</Link>
        </nav>
    )
}

export default Header