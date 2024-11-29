//import { ArrowBigDown, LockKeyhole, MailIcon, UserPlus} from "lucide-react";
import React, { useEffect, useState } from "react";
import logoReduzida from "../assets/logo-reduzia.svg"
import FormsLogin from "../components/FormsLogin";
import FormsCadastro from "../components/FormsCadastro";



function Login(){
    //const inputs = "flex gap-5 bg-gray-400 py-5 px-5 rounded-[4px] bg-opacity-25 w-[52%] items-center"
    const  [tipoForm, setTipoForm] = useState(0)
    const logar = () => {tipoForm == 0? setTipoForm(1) : setTipoForm(0)}
    
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        // Função para atualizar a largura
        const atualizarLargura = () => {
        setLargura(window.innerWidth);
        };

        // Adicionar o listener para o evento resize
        window.addEventListener("resize", atualizarLargura);

        // Limpar o listener ao desmontar o componente
        return () => {
        window.removeEventListener("resize", atualizarLargura);
        };
    }, []);

     const stSession = largura < 650? "flex-col items-center":"flex-row "
     const stDivLeft = largura < 650? "hidden":""
     const stForm = largura < 400? "w-[80%]":"w-[58%]"
     
    return(
        <section className={`flex ${stSession} w-full`}>
            {/* Apresentação */}
            <div className={`flex flex-col bg-pink-500 h-screen w-[42%] justify-around items-center ${stDivLeft} `}>
                <div className="flex items-center justify-center bg-white w-full h-20">
                    <img className="w-44 h-full" src={logoReduzida} alt="" />
                </div>
                <div className="flex flex-col items-center  gap-5 text-white font-serif text-center my-10 w-[52%] max-md:w-full">
                    <h1 className=" text-5xl   font-bold">{tipoForm === 0? `Bem-vindo de volta!`:"Vamos criar seu acesso?" }</h1>
                    <h2 className=" text-2xl   ">{tipoForm === 0? "Clique em LOGIN e acesse sua conta":"Clique abaixo e cadastrar-se em nosso site!" }</h2>
                    
                </div>
                <div className="flex flex-col font-serif font-bold gap-2 items-center ">
                    <button 
                        className="bg-white text-pink-500 font-bold hover:border-white hover:bg-pink-500 hover:text-white transition-colors rounded-full px-16"
                        onClick={logar}
                        
                    >
                        {tipoForm === 0? "LOGIN" : "CADASTAR-SE"}
                        
                    </button>
                    <a className="text-white hover:underline hover:text-white hover:cursor-pointer">esqueceu a senha?</a>
                </div>

            </div>
            {largura < 650 &&
                <div className="flex flex-row justify-center gap-5 items-center bg-pink-500 w-full h-16">
                    <span className="flex flex-col justify-center">
                        <h1 className=" text-lg  font-bold">{tipoForm === 0? `Ja possui conta?`:"Vamos criar seu acesso?" }</h1>
                        <h2 className=" text-sm   ">{tipoForm === 0? "Clique em LOGIN e acesse sua conta":"Clique e cadastrar-se em nosso site!" }</h2>
                    </span>
                    <button 
                        className="h-10 bg-white text-xs text-pink-500 font-bold hover:border-white hover:bg-pink-500 hover:text-white transition-colors rounded-lg py-1 px-4"
                        onClick={logar}
                        
                    >
                        {tipoForm === 0? "LOGIN" : "CADASTAR-SE"}
                        
                    </button>
                </div>
            }

            
            {/* Formulario */}
            <div className={`flex flex-col text-black bg-white h-screen ${stForm} items-center justify-center gap-12`}>  
                {tipoForm === 0? <FormsCadastro /> : <FormsLogin /> }
            </div>
        </section>
        
    )
    
}

export default Login;