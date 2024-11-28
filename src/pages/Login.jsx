import { ArrowBigDown, LockKeyhole, MailIcon, UserPlus} from "lucide-react";
import React, { useState } from "react";
import logoReduzida from "../assets/logo-reduzia.svg"
import FormsLogin from "../components/FormsLogin";
import FormsCadastro from "../components/FormsCadastro";
const inputs = "flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center"
const [tipoForm, setTipoForm] = useState(0)
const logar = () => {tipoForm == 0? setTipoForm(1) : setTipoForm(0)}
function Login(){

    return(
        <section className="flex flex-row w-full ">
            {/* Apresentação */}
            <div className="flex flex-col bg-pink-500 h-screen w-[42%] justify-around items-center ">
                <div className="flex items-center justify-center bg-white w-full h-20">
                    <img className="w-44 h-full" src={logoReduzida} alt="" />
                </div>
                <div className="flex flex-col gap-5 text-white font-serif text-center my-10">
                    <h1 className=" text-5xl  font-bold">Bem-vindo <br/> de volta!</h1>
                    <h2 className=" text-2xl   ">Acesse sua conta <br /> agora e aproveite!</h2>
                </div>
                <div className="flex flex-col font-serif font-bold gap-2 items-center ">
                    <button 
                        className="bg-white text-pink-500 font-bold hover:border-white hover:bg-pink-500 hover:text-white transition-colors rounded-full px-16"
                        onClick={logar}
                    >
                        LOGIN
                    </button>
                    <a className="text-white hover:underline hover:text-white hover:cursor-pointer">esqueceu a senha?</a>
                </div>

            </div>
            
            
            {/* Formulario */}
            <div className="flex flex-col text-black bg-white h-screen w-[58%] items-center justify-center gap-12">  
                <FormsLogin />
                <FormsCadastro />
            </div>
        </section>
    )
}

export default Login;