import React from 'react';
import '../css/sidebarOption.css';

function SidebarOption({option, handleOptionClick}) {

  return (
    <div className={option.active ? 'sidebarOption sidebarOption--active' : 'sidebarOption'}
    onClick={() => handleOptionClick(option)}>
      <option.icon/>
      <h2 >{option.label}</h2>
    </div>
  )
}

export default SidebarOption
