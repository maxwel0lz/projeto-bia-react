import { ArrowBigDown, Bold, UserPlus} from "lucide-react";
import React from "react";

function Login(){
    return(
        <section className="flex flex-row w-full ">
            <div className="bg-pink-600 h-screen w-[40%]"> awda</div>
            <div className="flex flex-col text-black bg-white h-screen w-[60%] items-center">
                <h1>Crie sua conta</h1>
                <h2 className="text-black flex flex-row items-center" >Preencha seus dados <ArrowBigDown size={20} strokeWidth={1} /></h2>
                <form className="w-full" action="">
                    <div className="flex flex-col gap-3 font-mono w-full items-center">
                        <span className="flex gap-5 bg-gray-400 py-3 px-5 "><UserPlus size={20}/><input className="bg-transparent outline-none text-black placeholder:text-black " type="text" placeholder="Nome" /></span>
                        <input className="bg-gray-400 outline-none placeholder:text-black" type="email" placeholder="Email" />
                        <input className="bg-gray-400 outline-none placeholder:text-black" type="password" placeholder="Senha" />
                    </div>
                        <button type="submit"></button>
                </form>
            </div>
        </section>
    )
}

export default Login;