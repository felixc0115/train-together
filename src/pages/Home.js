import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1607914660217-754fdd90041d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p className="mb-5">
              Welcome to Train Together! We believe that everyone has the power
              to be a hero in their own fitness journey. Our app is here to help
              you unlock that potential and reach your goals.
              <br></br>
              With our community uploaded workout plans, you'll be able to see
              progress in no time. Whether you're looking to build muscle, lose
              weight, or just improve your overall fitness, we've got you
              covered.
              <br></br>
              Our app is designed with convenience in mind. With a variety of
              workout options, from bodyweight exercises to gym workouts, you
              can fit your fitness routine into your busy schedule. And with our
              user-friendly interface, tracking your progress has never been
              easier.
              <br></br>
              But what sets us apart is our community. You'll join a supportive
              community of fellow fitness enthusiasts who are all working
              towards their goals. We believe that by supporting each other, we
              can all achieve greatness.
              <br></br>
              So, what are you waiting for? Join our fitness app today and
              become the hero of your fitness journey.
            </p>
            <NavLink to="createAccount">
              <button className="btn btn-primary">Get Started</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
