import React from 'react';
import '../scss/results.scss';
import ReactJson from 'react-json-view';
import { If, Then, Else } from './if';

function Results({ count, results, headers }) {
  return (
    <div className="container">
      <div id="item">
        <p>count: {count}</p>
        <p>
          <ReactJson name="Headers" src={headers} />
        </p>
        <p>
          <ReactJson name="Results" src={results} />
        </p>
      </div>
    </div>
  );
}

export default Results;
