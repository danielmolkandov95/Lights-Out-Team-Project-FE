import "./Homepage.css";

function HomeNotLoggedIn() {
  return (
    <div className=" d-flex justify-content-center">
      <div className=" w-75 text-center font-weight-bold text-white home ">
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
