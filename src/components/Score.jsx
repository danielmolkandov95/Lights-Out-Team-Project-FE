import React from "react";
import "./Score.css";
import Table from "react-bootstrap/Table";

function Score() {
  return (
    <div>
      <div className="container">
      
        <Table className="table-score">
          Track your progress:
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

        <Table className="table-score">
          Track the highest score:
          <thead>
            <tr>
            <th>Username</th>
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
}

export default Score;
