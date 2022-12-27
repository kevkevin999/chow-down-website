import React from "react";
import Navbar from "./components/Navbar";
import Map from "./components/Map";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Map />
            <Navbar />
        </div>
    );
}

export default Home;