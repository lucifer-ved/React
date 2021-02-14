import React from 'react';

// Stateless functional Component
const NavBar = ({totalCounters})  => {
    console.log('NavBar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span>
                    Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </span>
            </div>
        </nav>
     );
}

 
export default NavBar;