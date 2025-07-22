import { FormEvent } from "react"

interface InputProps {
    onSave: () => void
    changeName: (name: string) => void
    changeEmail: (name: string) => void
    changePassword: (name: number) => void
    changeConfirmPassword: (name: number) => void
    currentNameValue:string
    currentEmailValue:string
    currentPasswordValue:number
    currentConfirmPasswordValue:number
}
export default function Input(props: InputProps) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        props.onSave()
    }
  return (
    <div className="flex flex-col w-md p-5 shadow-md">
      <h1 className=" font-medium text-3xl text-center mb-9">
        Create your account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col font-medium text-xl">
          <label htmlFor="inName">Name</label>
          <input
            value={props.currentNameValue}
            onChange={e => props.changeName(e.target.value)}
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400
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
          value={props.currentEmailValue}
          onChange={e => props.changeEmail(e.target.value)}
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400
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
          value={props.currentPasswordValue === 0 ? 
            '':props.currentPasswordValue}
          onChange={e => props.changePassword(Number(e.target.value))}
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400
                    shadow-sm"
            type="password"
            name="password"
            id="inPassword"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex flex-col font-medium text-xl">
          <label htmlFor="inPassword">Confirm Password</label>
          <input
          value={props.currentConfirmPasswordValue == 0 ?
            '':props.currentConfirmPasswordValue}
          onChange={e => props.changeConfirmPassword(Number(e.target.value))}
            className=" border border-zinc-200 p-2.5 w-full my-2.5
                    focus:outline-none
                    focus:border-blue-400
                    shadow-sm"
            type="password"
            name="password"
            id="inPassword"
            placeholder="Confirm Password"
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

        <button type="submit" className="w-full bg-blue-600 text-2xl text-white font-light p-2 cursor-pointer hover:bg-blue-700 transition mb-8">Create Free Account</button>
      </form>
    </div>
  );
}
