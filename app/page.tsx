export default function Home() {
  const inputStyles =
    "w-full border border-gray-900 invalid:placeholder-shown:border-gray-900 peer invalid:border-invalid sm:text-sm p-2.5 text-black rounded-lg block focus:outline-none focus:border-blue-500";
  const errorMsgStyles =
    "hidden text-sm text-invalid peer-focus:hidden peer-invalid:peer-placeholder-shown:hidden peer-invalid:block";
  const linkStyles = "text-cyan-600 underline";

  return (
    <section className="container mx-auto h-full flex flex-col items-center justify-center ">
      <h1 className="text-4xl w-full text-center my-1 font-bold">Login</h1>
      <form className="p-4 w-[70%] flex flex-col items-center justify-between text-xl ">
        <div className="w-full p-0">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            className={inputStyles}
            required
          />
          <p className={errorMsgStyles}>Not a valid email!</p>
        </div>
        <div className="w-full mt-2 p-0">
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            minLength={8}
            className={inputStyles}
            required
          />
          <p className={errorMsgStyles}>Need to have at least 8 characters!</p>
        </div>

        <button
          type="submit"
          className="w-[70%] bg-sky-700 rounded-3xl text-center font-medium mt-8 px-5 py-2 text-white"
        >
          Sign in
        </button>
        <div className="w-full text-center text-base mt-8">
          <p>
            Forgot{" "}
            <a href="/" className={linkStyles}>
              Username
            </a>{" "}
            /{" "}
            <a href="/" className={linkStyles}>
              Password
            </a>
            ?
          </p>
          <p>
            Don't have an account?{" "}
            <a href="/" className={linkStyles}>
              Sign up
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
