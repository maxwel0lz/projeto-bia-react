import { ArrowBigDown, LockKeyhole, MailIcon, UserPlus} from "lucide-react";
import React from "react";
import logoReduzida from "../assets/logo-reduzia.svg"
const inputs = "flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center"
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
                    <button className="bg-white text-pink-500 font-bold hover:border-white hover:bg-pink-500 hover:text-white transition-colors rounded-full px-16">LOGIN</button>
                    <a className="text-white hover:underline hover:text-white hover:cursor-pointer">esqueceu a senha?</a>
                </div>

            </div>
            
            
            {/* Formulario */}
            <div className="flex flex-col text-black bg-white h-screen w-[58%] items-center justify-center gap-12">  
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-pink-500 font-serif text-5xl">Crie sua conta</h1>
                    <h2 className="font-serif text-black flex flex-row items-center " >Preencha seus dados <ArrowBigDown  size={20} strokeWidth={1} /></h2>
                </div>
                <form className="flex flex-col items-center gap-16 w-full" action="">
                    <div className="flex flex-col gap-6 font-mono w-full items-center">
                        <span className={inputs}><UserPlus color="#6b7280" size={22}/><input className="bg-transparent outline-none text-gray-60000 placeholder:text-gray-500 w-full h-full " type="text" placeholder="Nome" /></span>
                        <span className={inputs}><MailIcon color="#6b7280" size={22}/><input className="bg-transparent outline-none text-gray-600 placeholder:text-gray-500 w-full h-full " type="email" placeholder="Email" /></span>
                        <span className="flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center "><LockKeyhole color="#6b7280" size={22}/><input className=" bg-transparent outline-none text-gray-600 placeholder:text-gray-500 w-full h-full " type="password" placeholder="Senha" /></span>
                    </div>
                    <button className="bg-pink-500 text-white rounded-full px-12" type="submit">ENTRAR</button>
                </form>
            </div>
        </section>
    )
}

export default Login;