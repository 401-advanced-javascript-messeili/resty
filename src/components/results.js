import React from 'react';
import '../scss/results.scss';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';

function Results({ count, results, headers, error }) {
  return (
    <div className='container'>
      {console.log(error)}
      <If condition={error.error}>
        <Then>
          <div className='row'>
            <h1>{error.errorBody}</h1>
          </div>
        </Then>
        <Else>
          <div id='item'>
            <p>count: {count}</p>
            <p>
              <ReactJson name='Headers' src={headers} />
            </p>
            <p>
              <ReactJson name='Results' src={results} />
            </p>
          </div>
        </Else>
      </If>
    </div>
  );
}

export default Results;
