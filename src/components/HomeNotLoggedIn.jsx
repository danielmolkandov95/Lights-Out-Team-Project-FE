import "./Homepage.css";

function HomeNotLoggedIn() {
  return (
    <div className="homepage">
      <h1 className="ms-5 fs-1 ">Lights Out!</h1>
      <div className="fs-1 w-75 container text-center font-weight-bold text-white">
        The game consists of a 5 by 5 grid of lights. When the game starts, a random
        number of lights is switched on. Pressing any
        of the lights will toggle it and the adjacent lights. The goal of the
        game is to switch off all the lights, preferably in as few button
        presses as possible.
      </div>
    </div>
  );
}

export default HomeNotLoggedIn;
