import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="max-w-full w-96 bg-gray-100 p-4 rounded">
        <h4 className="pb-4 text-xl">Signup to Mimie Workouts</h4>
        <div className="mb-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email address</span>
            </div>
            <input
              type="email"
              placeholder="enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="border rounded-md py-2 px-2 w-full"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="***********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="border rounded-md py-2 px-2 w-full"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Signup
        </button>
            <div className="pt-4">
                <p>Already have an account? <Link to='/' className="text-blue-700 font-bold">Login</Link></p>
            </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default SignupForm;
