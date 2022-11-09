import React from "react";
import "./header.css"
import logo from "../../images/logo/logo-1.png"
const Header = () => {
    return <div>
        <header>
            <div className="h-container">
                <div className="logo">
                    <div className="logo-1">
                        <img src={logo} alt="/" />
                    </div>
                </div>
                <div className="search">
                    <div className="search-1">
                        <div className="search-2">
                            <input type="search" placeholder="Та хайх утгаа оруулна уу" />
                        </div>
                        <div className="search-i">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div className="h-icon">
                    <div className="profile">
                        <div className="wishlist">
                            <div className="wishlist-h">
                                <h1 className="roboto">Хүслийн жагсаалт</h1>
                            </div>
                        </div>
                        <div className="w-i">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className="sags">
                        <div className="sags-1">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <div className="me">
                        <div className="me-1">
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>;
};

export default Header;