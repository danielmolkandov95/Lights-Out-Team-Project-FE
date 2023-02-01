import React, { useEffect, useState } from "react";
import "./Score.css";
import Table from "react-bootstrap/Table";
import { UserContext } from "../context/UserContext";
import React, { useContext } from "react";
import Pagination from "./Pagination";

function Score() {
  const { currentUser } = useContext(UserContext);

  // setting scores
  // const [userScores, setUserScores] = useState([]);
  // const [allScores, setAllScores] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [scoresPerPage, setScoresPerPage] = useState(10);

  // setting quantity of pages depending of quantity of scores
  // const indexOfLastScore = currentPage * scoresPerPage;
  // const indexofFirstScore = indexOfLastScore - scoresPerPage;
  // const currentScores = userScores.slice(indexofFirstScore, indexOfLastScore);

  // change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  const getUserScores = async () => {
    try {
      const currentUserScores = await axios.get(
        `http://localhost:3001/user/scores/${currentUser.userName}`
      );
      console.log("currentUserScores", currentUserScores);
      // setUserScores(currentUserScores)
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getUserScores();
  }, []);

  const getAllScores = async () => {
    try {
      const allScores = await axios.get(
        `http://localhost:3001/user/scores/${currentUser.userName}`
      );
      console.log("allScores", allScores);
      // setAllScores(allScores)
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllScores();
  }, []);

  return (
    <div className="container">
      <h1>Score</h1>
      <Table className="table-score">
        Track your progress:
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>

        {/* // taking each score and putting in on the table */}
        
        {/* <tbody>
          {currentScores.map((score) => (
            <tr>
              <td>{score.date}</td>
              <td>{score.points}</td>
            </tr>
          ))}
        <Pagination scoresPerPage={scoresPerPage} totalScores={userScores.length} paginate={paginate}/>
        </tbody> */}


        <tbody>
          <tr>
            <td>1 Fev 2023</td>
            <td>35</td>
          </tr>
          <tr>
            <td>21 Janv 2023</td>
            <td>50</td>
          </tr>
          <tr>
            <td>19 Janv 2023</td>
            <td>12</td>
          </tr>
        </tbody>
      </Table>

      <Table className="table-score">
        Track players progress:
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>@mdo</td>
            <td>50</td>
          </tr>
          <tr>
            <td>2</td>
            <td>@fat</td>
            <td>30</td>
          </tr>
          <tr>
            <td>3</td>
            <td>@twitter</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>

      <div className="table-score"> Track the highest score: </div>
    <div>
      <div className="container">
      
        <Table className="table-score">
           Your Top Scores:
          <thead>
            <tr>
              <th>Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Fev 2023</td>
              <td>35</td>
            </tr>
            <tr>
              <td>21 Janv 2023</td>
              <td>50</td>
            </tr>
            <tr>
              <td>19 Janv 2023</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>

        <Table className="table-score">
          Top Scores:
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@mdo</td>
              <td>50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>@fat</td>
              <td>30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>@twitter</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>

        <Table className="table-score">
          Top Score:
          <thead>
            <tr>
            <th>User Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>@raph</td>
              <td>100 </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
  );
}

export default Score;
