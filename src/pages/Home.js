import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo3.png";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="h-100 w-80" src={logo} alt="logo" />
        <div>
          <h1 className="text-5xl font-bold">Together we are stronger!</h1>
          <p className="py-6">
            Welcome to Train Together! We believe that everyone has the power to
            be a hero in their own fitness journey. Our app is here to help you
            unlock that potential and reach your goals. <br></br>
            <br></br>
            With our community uploaded workout plans, you'll be able to see
            progress in no time. Whether you're looking to build muscle, lose
            weight, or just improve your overall fitness, we've got you covered.
            <br></br>
            <br></br>
            Our app is designed with convenience in mind. With a variety of
            workout options, from bodyweight exercises to gym workouts, you can
            fit your fitness routine into your busy schedule. And with our
            user-friendly interface, tracking your progress has never been
            easier. <br></br>
            <br></br>
            But what sets us apart is our community. You'll join a supportive
            community of fellow fitness enthusiasts who are all working towards
            their goals. We believe that by supporting each other, we can all
            achieve greatness. <br></br>
            <br></br>
            So, what are you waiting for? Join our fitness app today and become
            the hero of your fitness journey.
          </p>
          {!isLoggedIn && (
            <NavLink to="createAccount" className="btn btn-secondary">
              Get Started
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
