import React, { useState, useContext } from "react";
import "./Game.css";
import { Table } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

function Game() {
  const { currentUser, updateInBE } = useContext(UserContext);

  const [grid, setGrid] = useState({
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    A5: false,
    B1: false,
    B2: false,
    B3: false,
    B4: false,
    B5: false,
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    D1: false,
    D2: false,
    D3: false,
    D4: false,
    D5: false,
    E1: false,
    E2: false,
    E3: false,
    E4: false,
    E5: false,
  });

  const handleClick = (id) => {
    setGrid({
      ...grid,
      [id]: !grid[id],
    });
    updateInBE(currentUser.userName);
  };

  return (
    <div>
      <div className="score">Your score: 100 points</div>
      <Table className="table">
        <tbody>
          <tr>
            <td>
              <button
                className="light-on"
                name="A1"
                style={{
                  backgroundColor: grid.A1 ? "#0151B0" : "white",
                  boxShadow: grid.A1
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>

            <td>
              <button
                className="light-on"
                name="A2"
                style={{
                  backgroundColor: grid.A2 ? "#0151B0" : "white",
                  boxShadow: grid.A2
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A3"
                className="light-on"
                style={{
                  backgroundColor: grid.A3 ? "#0151B0" : "white",
                  boxShadow: grid.A3
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A4"
                className="light-on"
                style={{
                  backgroundColor: grid.A4 ? "#0151B0" : "white",
                  boxShadow: grid.A4
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A5"
                className="light-on"
                style={{
                  backgroundColor: grid.A5 ? "#0151B0" : "white",
                  boxShadow: grid.A5
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                name="B1"
                className="light-on"
                style={{
                  backgroundColor: grid.B1 ? "#0151B0" : "white",
                  boxShadow: grid.B1
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B2"
                className="light-on"
                style={{
                  backgroundColor: grid.B2 ? "#0151B0" : "white",
                  boxShadow: grid.B2
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B3"
                className="light-on"
                style={{
                  backgroundColor: grid.B3 ? "#0151B0" : "white",
                  boxShadow: grid.B3
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B4"
                className="light-on"
                style={{
                  backgroundColor: grid.B4 ? "#0151B0" : "white",
                  boxShadow: grid.B4
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B5"
                className="light-on"
                style={{
                  backgroundColor: grid.B5 ? "#0151B0" : "white",
                  boxShadow: grid.B5
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                name="C1"
                className="light-on"
                style={{
                  backgroundColor: grid.C1 ? "#0151B0" : "white",
                  boxShadow: grid.C1
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C2"
                className="light-on"
                style={{
                  backgroundColor: grid.C2 ? "#0151B0" : "white",
                  boxShadow: grid.C2
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C3"
                className="light-on"
                style={{
                  backgroundColor: grid.C3 ? "#0151B0" : "white",
                  boxShadow: grid.C3
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C4"
                className="light-on"
                style={{
                  backgroundColor: grid.C4 ? "#0151B0" : "white",
                  boxShadow: grid.C4
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C5"
                className="light-on"
                style={{
                  backgroundColor: grid.C5 ? "#0151B0" : "white",
                  boxShadow: grid.C5
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                name="D1"
                className="light-on"
                style={{
                  backgroundColor: grid.D1 ? "#0151B0" : "white",
                  boxShadow: grid.D1
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D2"
                className="light-on"
                style={{
                  backgroundColor: grid.D2 ? "#0151B0" : "white",
                  boxShadow: grid.D2
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D3"
                className="light-on"
                style={{
                  backgroundColor: grid.D3 ? "#0151B0" : "white",
                  boxShadow: grid.D3
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D4"
                className="light-on"
                style={{
                  backgroundColor: grid.D4 ? "#0151B0" : "white",
                  boxShadow: grid.D4
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D5"
                className="light-on"
                style={{
                  backgroundColor: grid.D5 ? "#0151B0" : "white",
                  boxShadow: grid.D5
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                name="E1"
                className="light-on"
                style={{
                  backgroundColor: grid.E1 ? "#0151B0" : "white",
                  boxShadow: grid.E1
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E2"
                className="light-on"
                style={{
                  backgroundColor: grid.E2 ? "#0151B0" : "white",
                  boxShadow: grid.E2
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E3"
                className="light-on"
                style={{
                  backgroundColor: grid.E3 ? "#0151B0" : "white",
                  boxShadow: grid.E3
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E4"
                className="light-on"
                style={{
                  backgroundColor: grid.E4 ? "#0151B0" : "white",
                  boxShadow: grid.E4
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E5"
                className="light-on"
                style={{
                  backgroundColor: grid.E5 ? "#0151B0" : "white",
                  boxShadow: grid.E5
                    ? "0 0 7px #0151B0, 0 0 10px #0151B0"
                    : "0 0 7px #fff, 0 0 10px #fff",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Game;