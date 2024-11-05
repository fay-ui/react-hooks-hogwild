
import React from 'react';

function Nav({ setShowGreased, setSortOption }) {
  return (
    <div>
      <button onClick={() => setShowGreased(prev => !prev)}>
        {`Show Greased Hogs`}
      </button>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default Nav;
