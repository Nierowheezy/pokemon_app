import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>

                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">POKÉDEX</NavLink>
                                </li>

                            </ul>


                            <ul className="navbar-nav ml-10 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/add-pokemon">Add Pokemon</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Header
