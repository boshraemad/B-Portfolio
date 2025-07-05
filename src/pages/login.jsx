import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-[100vh] w-full  flex items-center justify-center bg-pink-50">
      <form className="md:w-[450px] w-[350px] mx-auto p-10 rounded-md bg-white">
      <h1 className="text-xl mb-5 font-bold text-pink-300">Login</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-pink-500 focus:border-pink-500 block w-full px-3 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-pink-500 focus:border-pink-500 block w-full px-3 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="Enter Your password"
            required
          />
        </div>
        <div  className="flex items-center gap-2">
        <button
          type="submit"
          className=" flex items-center gap-2 cursor-pointer text-white bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Submit
        </button>
        <p className="text-sm">no account? <Link to="/signup" className="text-pink-300">create one</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
