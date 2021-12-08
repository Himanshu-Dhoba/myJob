import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="showcase">
                <header className="header">
                </header>
                <div className="overlay"></div>
                <div className="text">
                    <h2>WelCome to </h2>
                    <h3>My <span>Job</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <NavLink to ="/signup">SignUp</NavLink>
                </div>
            </section>
        </>
    );
};

export default Home;