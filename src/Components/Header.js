import React from "react";

function Header(props) {
    return(
        <header>
            <a href="/"><h2>ApaNa</h2></a>
            <div className="searchbar" />
            <div className="country" />
            <div className="greeting">Namaste, Chandra!</div>
            <div className="shopping-bag">
                <a href="/cart"><i className="fas fa-shopping-bag"></i></a>
                <span></span>
            </div>
        </header>
    )
}

export default Header;