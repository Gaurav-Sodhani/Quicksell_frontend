import React, { useEffect, useState } from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';


const App = () => {

  const [data, setData] = useState(null);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="app">
      <div className="dropdown-container">
        <div className="dropdown">
          <label htmlFor="grouping">Grouping:</label>
          <select id="grouping" value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">Name</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <div className="dropdown">
          <label htmlFor="ordering">Ordering:</label>
          <select id="ordering" value={ordering} onChange={(e) => setOrdering(e.target.value)}>
            <option value="priority">priority</option>
            <option value="title">title</option>
          </select>
        </div>
      </div>
    </div>
      <KanbanBoard tickets={data['tickets']} users={data['users']} grouping={grouping} ordering={ordering} /> 
    </div>
  );
};

export default App;
