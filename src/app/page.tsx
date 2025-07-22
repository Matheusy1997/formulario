'use client'
// import Image from "next/image";
import Input from "../../components/Input";
import { useState } from "react";

export default function Home() {
  const [currentName, setCurrentName] = useState<string>('')
  const [currentEmail, setCurrentEmail] = useState<string>('')
  const [currentPassword, setCurrentPassword] = useState<number>(0)
  const [currentConfirmPassword, setcurrentConfirmPassword] = useState<number>(0)

  function handleForm() {
    if(currentPassword === currentConfirmPassword) {
      alert('account successfully registered')
      console.log(`Nome: ${currentName} Email: ${currentEmail} Password: ${currentPassword}`)
      setCurrentName('')
      setCurrentEmail('')
      setCurrentPassword(0)
      setcurrentConfirmPassword(0)
    } else {
      alert('confirmation password must be the same as the first password')
    }
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Input onSave={handleForm} changeName={setCurrentName} changeEmail={setCurrentEmail} changePassword={setCurrentPassword} changeConfirmPassword={setcurrentConfirmPassword} currentNameValue={currentName} currentEmailValue={currentEmail} currentPasswordValue={currentPassword} currentConfirmPasswordValue={currentConfirmPassword}/>
      
    </main>
  );
}
