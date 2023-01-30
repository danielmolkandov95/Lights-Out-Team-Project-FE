import React from 'react';
import "./Game.css";
import { Table } from "react-bootstrap";


function Game() {
  return (
    <div>
    <div className='score'>Your score: 100 points </div>
     <Table className='table' striped bordered hover>
      <tbody>
        <tr>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
        </tr>
        <tr>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
        </tr>
        <tr>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
        </tr>
        <tr>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
        </tr>
        <tr>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
          <td><button className="light-on"></button></td>
        </tr>
      </tbody>
    </Table>

    </div>
   
  )
}

export default Game