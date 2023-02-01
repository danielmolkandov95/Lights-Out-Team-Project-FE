import React, { useEffect, useState, useContext } from "react";
import "./Score.css";
import Table from "react-bootstrap/Table";
import { UserContext } from "../context/UserContext";
import Pagination from "./Pagination";
import axios from "axios";
import uuid from "react-uuid";

function Score() {
  const { currentUser } = useContext(UserContext);

  // console.log("currentUser", currentUser);

  // setting scores
  const [userScores, setUserScores] = useState([]);
  const [allScores, setAllScores] = useState([]);
  const [userHighestScore, sertUserHighestScore] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [scoresPerPage, setScoresPerPage] = useState(4);

  const indexOfLastScore = currentPage * scoresPerPage;
  const indexofFirstScore = indexOfLastScore - scoresPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getAllScores = async () => {
    try {
      const allScores = await axios.get(`http://localhost:3001/scores`, {
        withCredentials: true,
      });
      setAllScores(allScores.data);
    } catch (err) {
      alert(err);
    }
  };
  // const allScoresData = allScores.data;
  let sortedScores = [];

  if (allScores) {
    sortedScores = [...allScores];
    sortedScores.sort((a, b) => {
      return b.score - a.score;
    });
  }

  useEffect(() => {
    getAllScores();
  }, []);

  const getUserScores = async () => {
    try {
      const currentUserScores = await axios.get(
        `http://localhost:3001/scores/${currentUser.email}`,
        { withCredentials: true }
      );

      setUserScores(currentUserScores.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getUserScores();
  }, []);

  const getUserHighestScore = async () => {
    try {
      const userHighestScore = await axios.get(
        `http://localhost:3001/scores/high/${currentUser.email}`,
        { withCredentials: true }
      );
      console.log("highest USer Score", userHighestScore.data);

      sertUserHighestScore(userHighestScore.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getUserHighestScore();
  }, []);

  return (
    <div className="container">
      {userScores && (
        <Table className="table-score">
          <h1 className="title-score">{currentUser.userName} history:</h1>
          <h1 className="title-score">(last 4 results)</h1>
          <thead>
            <tr>
              <th>Date</th>
              <th>Score</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {userScores
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(-4)
              .map((score) => (
                <tr>
                  <td>
                    {new Date(score.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                  <td>{score.score}</td>
                  <td>{score.clicks}</td>
                </tr>
              ))}
          </tbody>
         
        
        </Table>
        
      )}

      <Table className="table-score">
        <h1 className="title-score">My highest score</h1>
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
            <th>Clicks</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {new Date(userHighestScore.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
            <td>{userHighestScore.score}</td>
            <td>{userHighestScore.clicks}</td>
          </tr>
        </tbody>
      </Table>

      {sortedScores && (
        <Table className="table-score">
          <h1 className="title-score">Ranking:</h1>

          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Score</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.slice(indexofFirstScore, indexOfLastScore).map((score, index) => (
              <tr key={uuid()}>
                <td>{index + 1 + (currentPage - 1) * scoresPerPage}</td>
                <td>{score.email}</td>
                <td>{score.score}</td>
                <td>{score.clicks}</td>
              </tr>
            ))}
          </tbody>
          <Pagination
              scoresPerPage={scoresPerPage}
              totalScores={sortedScores.length}
              paginate={paginate}
            />
        </Table>
      )
      }
        
    </div>
  );
}

export default Score;

{
  /* <h1>Score</h1>
<Table className="table-score">

//currentUser scores

  Track your progress:
  <thead>
    <tr>
      <th>Date</th>
      <th>Score</th>
    </tr>
  </thead> */
  /* <tbody>
    {currentUserScores.map((score) => (
      <tr>
        <td>{score.date}</td>
        <td>{score.points}</td>
      </tr>
    ))}
  <Pagination scoresPerPage={scoresPerPage} totalScores={userScores.length} paginate={paginate}/>
  </tbody>
</Table>

<Table className="table-score">
  {/* all the users scores */
}
//    Track players progress:
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Username</th>
//       <th>Score</th>
//     </tr>
//   </thead>
//   <tbody>
//    {allScoresData.map((score) => (
//       <tr>
//         <td>{score.email}</td>
//         <td>{score.score}</td>
//       </tr>
//     ))}
//      <tr>
//       <td>1</td>
//       <td>@mdo</td>
//       <td>50</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>@fat</td>
//       <td>30</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>@twitter</td>
//       <td>10</td>
//     </tr>
//   </tbody>
// </Table>
