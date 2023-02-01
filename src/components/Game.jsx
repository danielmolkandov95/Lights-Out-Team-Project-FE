import React, { useContext, useState, useEffect } from "react";
import "./Game.css";
import { Table } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { changeLights, startGame } from "../logic/gameLogic";
import axios from "axios";

function Game() {
  const { currentUser } = useContext(UserContext);
  const [grid, setGrid] = useState(startGame());
  const [clicks, setClicks] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let count = 0;
    for (const light in grid) {
      !grid[light] && count++;
    }
    setScore((count * 150) / 25);
    if (count === 25) {
      //CREATE WIN MODAL
    }
  }, [grid]);

  // const getUsersMove = async (id, email) => {
  //   const userClick = { id: id, email: email };
  //   const newMove = await axios.post("http://localhost:3001/grid", userClick, {
  //     withCredentials: true,
  //   });
  //   return newMove.data;
  // };

  const handleClick = (id) => {
    setClicks(clicks + 1);

    // setGrid(getUsersMove(id, currentUser.email));
    setGrid(changeLights(id, grid, currentUser.userName));
  };

  const saveScore = async () => {
    try {
      const date = new Date();
      const userScore = {
        email: currentUser.email,
        score: score,
        clicks: clicks,
        date: date,
      };
      const res = await axios.post(`http://localhost:3001/scores`, userScore, {
        withCredentials: true,
      });
      return res ? true : false;
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div>
      <div className="two-players">
        <div className="player1">PLAYER 1</div>
        <div className="player2">PLAYER 2</div>
      </div>
      <div className="score">
        Your score: {score} | #Clicks: {clicks}
      </div>
      <button className="save-score" onClick={saveScore}>
        Save Score
      </button>
      <Table className="table">
        <tbody>
          <tr>
            <td>
              <button
                className="light-on"
                name="A1"
                style={{
                  backgroundColor: grid.A1 ? "#59CFFE" : "grey",
                  boxShadow: grid.A1
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>

            <td>
              <button
                className="light-on"
                name="A2"
                style={{
                  backgroundColor: grid.A2 ? "#59CFFE" : "grey",
                  boxShadow: grid.A2
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A3"
                className="light-on"
                style={{
                  backgroundColor: grid.A3 ? "#59CFFE" : "grey",
                  boxShadow: grid.A3
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A4"
                className="light-on"
                style={{
                  backgroundColor: grid.A4 ? "#59CFFE" : "grey",
                  boxShadow: grid.A4
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="A5"
                className="light-on"
                style={{
                  backgroundColor: grid.A5 ? "#59CFFE" : "grey",
                  boxShadow: grid.A5
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
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
                  backgroundColor: grid.B1 ? "#59CFFE" : "grey",
                  boxShadow: grid.B1
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B2"
                className="light-on"
                style={{
                  backgroundColor: grid.B2 ? "#59CFFE" : "grey",
                  boxShadow: grid.B2
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B3"
                className="light-on"
                style={{
                  backgroundColor: grid.B3 ? "#59CFFE" : "grey",
                  boxShadow: grid.B3
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B4"
                className="light-on"
                style={{
                  backgroundColor: grid.B4 ? "#59CFFE" : "grey",
                  boxShadow: grid.B4
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="B5"
                className="light-on"
                style={{
                  backgroundColor: grid.B5 ? "#59CFFE" : "grey",
                  boxShadow: grid.B5
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
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
                  backgroundColor: grid.C1 ? "#59CFFE" : "grey",
                  boxShadow: grid.C1
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C2"
                className="light-on"
                style={{
                  backgroundColor: grid.C2 ? "#59CFFE" : "grey",
                  boxShadow: grid.C2
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C3"
                className="light-on"
                style={{
                  backgroundColor: grid.C3 ? "#59CFFE" : "grey",
                  boxShadow: grid.C3
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C4"
                className="light-on"
                style={{
                  backgroundColor: grid.C4 ? "#59CFFE" : "grey",
                  boxShadow: grid.C4
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="C5"
                className="light-on"
                style={{
                  backgroundColor: grid.C5 ? "#59CFFE" : "grey",
                  boxShadow: grid.C5
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
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
                  backgroundColor: grid.D1 ? "#59CFFE" : "grey",
                  boxShadow: grid.D1
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D2"
                className="light-on"
                style={{
                  backgroundColor: grid.D2 ? "#59CFFE" : "grey",
                  boxShadow: grid.D2
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D3"
                className="light-on"
                style={{
                  backgroundColor: grid.D3 ? "#59CFFE" : "grey",
                  boxShadow: grid.D3
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D4"
                className="light-on"
                style={{
                  backgroundColor: grid.D4 ? "#59CFFE" : "grey",
                  boxShadow: grid.D4
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="D5"
                className="light-on"
                style={{
                  backgroundColor: grid.D5 ? "#59CFFE" : "grey",
                  boxShadow: grid.D5
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
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
                  backgroundColor: grid.E1 ? "#59CFFE" : "grey",
                  boxShadow: grid.E1
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E2"
                className="light-on"
                style={{
                  backgroundColor: grid.E2 ? "#59CFFE" : "grey",
                  boxShadow: grid.E2
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E3"
                className="light-on"
                style={{
                  backgroundColor: grid.E3 ? "#59CFFE" : "grey",
                  boxShadow: grid.E3
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E4"
                className="light-on"
                style={{
                  backgroundColor: grid.E4 ? "#59CFFE" : "grey",
                  boxShadow: grid.E4
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
                }}
                onClick={(e) => handleClick(e.target.name)}
              />
            </td>
            <td>
              <button
                name="E5"
                className="light-on"
                style={{
                  backgroundColor: grid.E5 ? "#59CFFE" : "grey",
                  boxShadow: grid.E5
                    ? "0 0 15px #59CFFE, 0 0 15px #59CFFE"
                    : "",
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
