import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader'
import { Fragment } from 'react';
import { Link, Router } from 'react-router-dom';

function App() {
  const listTmp = [
    { fileName: 'algorithm', file: 'thithithtithithithithithitthithi' },
    { fileName: 'algorithm', file: 'thithithtithithithithithitthithi' },
    { fileName: 'algorithm', file: 'thithithtithithithithithitthithi' },
    { fileName: 'algorithm', file: 'thithithtithithithithithitthithi' },
    { fileName: 'algorithm', file: 'thithithtithithithithithitthithi' },
  ]
  return (
    <Fragment>
      <div>
        <h3>알고리즘 페이지</h3>
      </div>
      <div style={{ width: '100%', margin: '20px auto'}}>
        <div style={{width: '70%', margin: '0 auto'}}>
          {listTmp.map((v, i) => {
            return <div key={i} style={{ width: '25%', height: '200px', background: '#ccc', float: 'left' }}>
              <span>
                알고리즘 문제 풀이
              </span>
              <span>{`${v.fileName}${i}`}</span>
            </div>
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default hot(module)(App);
