import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1>Project Home</h1>
            <Link to={"./list"}>
                <button variant="raised">Go To My List</button>
            </Link>
        </div>
    );
};

export default Home;
