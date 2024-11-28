import { ArrowBigDown, LockKeyhole, MailIcon, UserPlus } from "lucide-react"
import React from "react"


const inputs = "flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center"
function FormsLogin(){
    return(
        <>
            <div className="flex flex-col gap-3 items-center">
                <h1 className="text-pink-500 font-serif text-5xl">Faça login na sua conta</h1>
                <h2 className="font-serif text-black flex flex-row items-center " >Preencha seus dados <ArrowBigDown  size={20} strokeWidth={1} /></h2>
            </div>
            <form className="flex flex-col items-center gap-16 w-full" action="">
                <div className="flex flex-col gap-6 font-mono w-full items-center">
                   
                    <span className={inputs}><MailIcon color="#6b7280" size={22}/><input className="bg-transparent outline-none text-gray-600 placeholder:text-gray-500 w-full h-full " type="email" placeholder="Email" /></span>
                    <span className="flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center "><LockKeyhole color="#6b7280" size={22}/><input className=" bg-transparent outline-none text-gray-600 placeholder:text-gray-500 w-full h-full " type="password" placeholder="Senha" /></span>
                </div>
                <button className="bg-pink-500 text-white rounded-full px-12" type="submit">ENTRAR</button>
            </form>
        </>
    )
}

export default FormsLogin