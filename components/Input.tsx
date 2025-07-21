export default function Input() {
  return (
    <div className="flex flex-col w-md border rounded p-5 shadow-2xl">
      <h1 className=" font-medium text-3xl text-center mb-9">
        Create your account
      </h1>
      <form action="">
        <div className="flex flex-col font-medium text-xl">
          <label htmlFor="inName">Name</label>
          <input
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400 shadow-2xs
                    shadow-sm"
            type="text"
            name="name"
            id="inName"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex flex-col font-medium text-xl">
          <label htmlFor="inEmail">Email Address</label>
          <input
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400 shadow-2xs
                    shadow-sm"
            type="email"
            name="email"
            id="inEmail"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="flex flex-col font-medium text-xl">
          <label htmlFor="inPassword">Password</label>
          <input
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400 shadow-2xs
                    shadow-sm"
            type="password"
            name="password"
            id="inPassword"
            placeholder="Password"
            required
          />
        </div>
        <div className="my-6">
          <input className="mr-2.5" type="checkbox" name="accpt" required />{" "}
          Accept our{" "}
          <a href="#" className="text-blue-500">
            Terms and Conditions
          </a>
        </div>
        <div>
            <button className="w-full bg-blue-600 text-2xl text-white font-light p-2 cursor-pointer hover:bg-blue-700 transition mb-8">Create Free Account</button>
        </div>
      </form>
    </div>
  );
}
