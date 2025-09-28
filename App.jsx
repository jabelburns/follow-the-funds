import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Follow the Funds</h1>
      <SearchBar />
    </div>
  );
}

export default App;