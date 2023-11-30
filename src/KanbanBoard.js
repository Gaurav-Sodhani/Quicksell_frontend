import React, { useState } from 'react';
import './KanbanBoard.css';
import FeatureRequestCard from './FeatureRequestCard';


const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
  var content = new Map();
  var user_map = new Map();
  users.map((user) => {
    user_map.set(user['id'], user['name']);
  })
  tickets.map((ticket) => {
    if (grouping === "status") {
      if (content.has(ticket['status'])) {
        content.get(ticket['status']).push(ticket);
      } else {
        content.set(ticket['status'], [ticket]);
      }
    } else if (grouping === "user") {
      if (content.has(ticket['userId'])) {
        content.get(ticket['userId']).push(ticket);
      } else {
        content.set(ticket['userId'], [ticket]);
      }
    } else {
      if (content.has(ticket['priority'])) {
        content.get(ticket['priority']).push(ticket);
      } else {
        content.set(ticket['priority'], [ticket]);
      }
    }
  });
  var sortedContent = new Map();
  if (ordering === "priority") {
    content.forEach((value, key) => {
      sortedContent.set(key, value.sort((a, b) => b['priority'] - a['priority']));
    });
  }
  if (ordering === "title") {
    content.forEach((value, key) => {
      sortedContent.set(key, value.sort((a, b) => a['title'] - b['title']));
    });
  }
  const pro = ["Urgent", "High", "Medium", "Low", "No priority"]
  return (
    <div className="kanban-board">
      {Array.from(sortedContent.keys()).map((key) => {
        return (
          <div className="kanban-column">
            <div className='float-container'>
            <img className="float-child" src={'https://popslider.com/wp-content/uploads/2020/10/untitled-3-1024x768.jpg'} style={{
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: grouping === "user" ? "block": "none"
            }} alt="image" />
            <div className="kanban-column-title">{grouping === "priority" ? pro[pro.length - key - 1] : ((grouping === "user") ? user_map.get(key) : key)}</div>
            </div>
            {sortedContent.get(key).map((ticket) => {
              return (
                <div>
                  <FeatureRequestCard ticket={ticket} user={ticket} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
