import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import HogForm from "./HogForm";

function App() {
    const [greasedOnly, setGreasedOnly] = useState(false);
    const [sortOption, setSortOption] = useState("none");
    const [hiddenHogs, setHiddenHogs] = useState([]);
    const [hogList, setHogList] = useState(hogs);

    // Function to hide a hog by adding it to the hiddenHogs array
    const hideHog = (hogName) => {
        setHiddenHogs((prevHiddenHogs) => [...prevHiddenHogs, hogName]);
    };

    // Function to add a new hog
    const addHog = (newHog) => {
        setHogList((prevHogList) => [...prevHogList, newHog]);
    };

    // Filter and sort hogs based on greased filter, hidden state, and sort option
    const filteredHogs = hogList
        .filter((hog) => (greasedOnly ? hog.greased : true))
        .filter((hog) => !hiddenHogs.includes(hog.name));

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "weight") {
            return a.weight - b.weight;
        }
        return 0; // Default case when no sorting is selected
    });

    // Inline styles for container, tiles, and quote
    const appStyle = {
        backgroundColor: "#f0f8ff", // Light blue background for the entire page
        minHeight: "100vh", // Full screen height
        fontFamily: "Arial, sans-serif", // Font for the entire app
        color: "#333", // Text color
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem"
    };

    const containerStyle = {
        display: "flex",
        flexWrap: "wrap", // Allow items to wrap to the next row
        justifyContent: "center", // Center items horizontally
        gap: "1rem", // Space between items
        padding: "1rem"
    };

    const tileStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#fff", // White background for each tile
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "150px", // Fixed width for each hog tile
    };

    const imageStyle = {
        width: "100%",
        height: "auto",
        maxWidth: "150px", // Ensure images don't grow too large
        borderRadius: "8px"
    };

    const quoteStyle = {
        fontStyle: "italic",
        fontSize: "1.2rem",
        color: "#555",
        marginTop: "2rem",
        textAlign: "center",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "#ffe4b5", // Light yellow background for the quote
        maxWidth: "80%",
        border: "2px solid #ffcc00", // Yellow border around the quote
    };

    return (
        <div className="App" style={appStyle}>
            <Nav />
            <div className="navWrapper">
                <h1 className="headerText largeHeader">Welcome to the Pigpen!</h1>
                <div className="filterWrapper">
                    <label>
                        <input
                            type="checkbox"
                            checked={greasedOnly}
                            onChange={() => setGreasedOnly(!greasedOnly)}
                        />
                        Show only greased hogs
                    </label>
                    <label style={{ marginLeft: "1em" }}>
                        Sort by:
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="none">None</option>
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </label>
                </div>
            </div>

            <HogForm addHog={addHog} />

            {/* Displaying a quote */}
            <div style={quoteStyle}>
                <p>"Pigs are smarter than dogs, but they don't have the same PR team."</p>
            </div>

            {/* Use the containerStyle and tileStyle for flexbox layout */}
            <div style={containerStyle}>
                {sortedHogs.length > 0 ? (
                    sortedHogs.map((hog) => (
                        <div key={hog.name} style={tileStyle}>
                            <h3>{hog.name}</h3>
                            <img src={hog.image} alt={hog.name} style={imageStyle} />
                            <button onClick={() => hideHog(hog.name)}>Hide</button>
                        </div>
                    ))
                ) : (
                    <p>No hogs available</p>
                )}
            </div>
        </div>
    );
}

export default App;

