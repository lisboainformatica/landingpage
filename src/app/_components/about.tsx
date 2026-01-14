import Computador from "../../../public/computador.jpg"
import Code from "../../../public/codigo.jpg"
import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
        
        <div className="container px-4 mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="relative">
                    <div className="relative w-full h-100 rouded-3xl overflow-hidden">
                        <Image
                            src={Computador}
                            alt="Vinicius Andrade"
                            className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-3xl"
                            fill
                            quality={100}
                            priority
                            data-aos="fade-up-right"
                            data-aos-duration="2000"/>
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-2 border-white overflow-hidden shadow-lg">
                        <Image
                            src={Code}
                            alt="Vinicius Andrade"
                            fill
                            quality={100}
                            priority
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            />
                    </div>
                </div>

                <div className="space-y-6 mt-10" data-aos="zoom-in" data-aos-duration="2000"> 
                    <h2 className="text-3xl font-bold mb-6">SOBRE</h2>
                    <p>
                        Desenvolvedor Full Stack e DevOps, com atuação em aplicações web modernas, escaláveis e seguras. Experiência em Node.js, Next.js, APIs, bancos de dados, CI/CD, automação, containers, infraestrutura e segurança. Vivência em ambientes corporativos, Windows Server e redes. Profissional orientado a resultados, qualidade de código, performance e entrega contínua.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="inline-block w-5 h-5 text-red-500 mr-2 mb-1" />
                            Front End - React, Next.js, HTML, CSS, JavaScript
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="inline-block w-5 h-5 text-red-500 mr-2 mb-1" />
                            API's - Node.js, Express.js, RESTful, GraphQL
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="inline-block w-5 h-5 text-red-500 mr-2 mb-1" />
                            Banco de Dados - SQL, NoSQL, MongoDB, PostgreSQL
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="inline-block w-5 h-5 text-red-500 mr-2 mb-1" />
                            DevOps - CI/CD, Docker, Kubernetes, AWS, Azure
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="inline-block w-5 h-5 text-red-500 mr-2 mb-1" />
                            Redes e Infraestrutura - Windows Server, Linux, Virtualização
                        </li>
                    </ul>
                    
                    <div className="flex gap-2 ">
                    
                        <a href="https://wa.me/5573981667518?text=Olá%2C%20quero%20mais%20informações" target="_blank" 
                        className="bg-[#E84c3d] text-white px-5 py-2 rounded-md font-semibold inline-block mt-4">
                            <WhatsappLogoIcon className="w-5 h-5 inline-block mr-2" />
                            Contato via WhatsApp
                        </a>
                        <a href="https://www.google.com/maps/place/Ilh%C3%A9us,+BA/@-14.7924377,-39.1380232,12z/data=!3m1!4b1!4m6!3m5!1s0x7390a3f7b1d2a77:0xfc575920401943ea!8m2!3d-14.7981287!4d-39.0346984!16zL20vMDRzaHRf?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" 
                        className="text-black px-5 py-2 rounded-md font-semibold inline-block mt-4">
                            <MapPin className="w-5 h-5 inline-block mr-2" />
                            Meu Endereço
                        </a>

                    </div>
                </div>
           
            </div>
       
       </div>
    
    </section>
  )
}
   