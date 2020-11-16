import '../scss/results.scss';
import React from 'react';
import ReactJson from 'react-json-view';
export default function Results({ count, results, headers }) {
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
