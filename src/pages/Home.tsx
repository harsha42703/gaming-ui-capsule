import { Link } from "react-router-dom";
import '../style.css';

const Home = () => {
  return (
    <div>
      <div className="hero h-screen overflow-hidden w-screen mybg">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl antialiased text-white font-semi">
              Hello there! welcome to <span className='decoration-yellow-600 underline text-shadow-lg decoration-2 decoration-double font-bold'>RollRush...</span>
            </h1>
            <p className="py-6 text-shadow-lg antialiased font-cls2 font-semibold text-white">
              We showcase the casino roulette game where players
              can place bets and spin the roulette to win or lose. Watch the
              Loom to see the gameplay and learn more about our plans to develop
              this into an actual product.
            </p>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="m-1 text-white py-2 px-4 bg-yellow-600 rounded-full font-bold ">
                Get Started ..
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-gray-800 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="bg-gray-700 text-yellow-600 mb-2 hover:text-white hover:bg-yellow-600"  to="/games/rollrush">Roll Rush</Link>
                </li>
                <li>
                  <Link className="bg-gray-700 text-yellow-600 hover:text-white hover:bg-yellow-600" to="/games/diceup">Dice Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
