function HomeNotLoggedIn() {
  return (
    <>
      <div className="fs-1 container mt-5 text-center font-weight-bold text-white">
        Hello fellow human
      </div>
      <div className="fs-1 container mt-5 text-center font-weight-bold text-white">
        Wanna play a game?
      </div>
      <div className="fs-1 container mt-5 text-center font-weight-bold text-white">
        Consists of a 5 by 5 grid of lights. When the game starts, a random
        number or a stored pattern of these lights is switched on. Pressing any
        of the lights will toggle it and the adjacent lights. The goal of the
        puzzle is to switch all the lights off, preferably in as few button
        presses as possible.
      </div>
    </>
  );
}

export default HomeNotLoggedIn;
