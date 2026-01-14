import next from "../../../public/next logo.jpg"
import react from "../../../public/react logo.jpg"
import express from "../../../public/Express.jpg"
import mysql from "../../../public/mysql logo.jpg"
import mongodb from "../../../public/mongodb-logo.jpg"
import html from "../../../public/html.jpg"
import python from "../../../public/Python.jpg"
import credly from "../../../public/credly.png"
import Image from "next/image";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr"


const brands = [
    { name: "next", logo: next },
    { name: "react", logo: react },
    { name: "express", logo: express },
    { name: "mySQL", logo: mysql },
    { name: "mongoDB", logo: mongodb },
    { name: "html", logo: html },
    { name: "python", logo: python }
]
export function Footer() {
  return (
        <section className="bg-[#e84c3d] py-16 text-white">
            <div className="container px-4 mx-auto">
                
                <div className='border-b border-white/20 pb-8'>
                    <h4 className="text-3xl font-semibold mb-8 text-center">Linguagens que eu mais utilizo</h4>

                    <div className="grid grid-cols-2 md:grid-cols-7">
                        {brands.map((brand, index) => (
                            <div key={index}>
                                <Image 
                                src={brand.logo} 
                                alt={brand.name} 
                                width={150} 
                                height={100} 
                                className="object-contain rounded-3xl mx-auto mb-4"
                                />
                                
                            </div>
                        ))}
                    </div>

                </div>
                        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 pt-5">
                            <div className="text-2xl font-semibold mb-2">
                                <h3>Vinicius Andrade</h3>
                                <p className="mb-4 font-light text-sm">Desenvolvedor Full Stack com foco em tecnologias modernas e soluções inovadoras.</p>
                                
                                    
                                    
                                                                           
                                        
                                
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">Contato</h3>
                                    <p className="font-light text-sm">Email: viniciusandrade.sistemas@gmail.com</p>
                                    <p className="font-light text-sm">Telefone: +55 73 98166-7518</p>
                                    <p className="font-light text-sm">Localização: Ilhéus, Bahia, Brasil</p>
                                    
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold">Redes Sociais</h3>
                                    <div className="flex gap-2">
                                        <a href="https://wa.me/5573981667518?text=Olá%2C%20quero%20mais%20informações" target="_blank"><WhatsappLogoIcon className="w-6 h-6 bg-green-600 rounded-full"/></a>
                                        <a href="https://www.linkedin.com/in/vinicius-andrade-sistemas/" target="_blank"><LinkedinLogoIcon className="w-6 h-6 bg-blue-900"/></a>
                                        <a href="https://github.com/lisboainformatica" target="_blank"><GithubLogoIcon className="w-6 h-6 bg-black rounded-md"/></a>
                                        <a href="https://www.credly.com/users/vinicius-silva-de-andrade/badges" target="_blank"><img src={credly.src} alt="Credly Logo" className="w-6 h-6"/></a>

                                    </div>
                                  
                                
                                                      
                            </div>
                        </footer>
            </div>
        </section>
   
  );
}