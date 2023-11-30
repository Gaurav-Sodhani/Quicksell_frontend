import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggling}>
        {"Display"}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map(option => (
            <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
