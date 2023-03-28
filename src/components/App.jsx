import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { articlesModel } from "../helpers/articlesModel";

export const App = () => {
    const [theme, setTheme] = useState("light");

    const articles = articlesModel;

    const handleClick = () => {
        setTheme((th) => (th === "light" ? "dark" : "light"));
    };

    return (
        <div className={`container ${theme === "light" ? "theme-light" : "theme-dark"}`}>
            <header className="main-header">
                <div className="logo" onClick={() => handleClick()}>
                    <h1>Logo</h1>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__list-item">Home</li>
                        <li className="navbar__list-item">Services</li>
                        <li className="navbar__list-item">Contact</li>
                        <li className="navbar__list-item">About</li>
                    </ul>
                </nav>
            </header>
            <hr className="separator" />
            <main className="main">
                <section className="main-section">
                    {articles.map(({ title, content }) => (
                        <article key={title} className="article">
                            <h3>{title}</h3>
                            <div>
                                <p>{content}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
};
