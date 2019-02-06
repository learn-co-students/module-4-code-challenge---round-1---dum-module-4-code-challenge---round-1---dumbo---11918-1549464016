import React, { Fragment } from 'react';

const SearchBar = (props) => {
  return (
    <div>
        <div className="ui slider checkbox">
          <input type="checkbox" name="example" checked={props.check} onChange={props.activateFilter}/>
          <label>Search by class:</label>
        </div>
        <select onChange={props.filter}>
          <option value="Assault">Assault</option>
          <option value="Support">Support</option>
          <option value="Defender">Defender</option>
        </select>
    </div>
  );
}


export default SearchBar;