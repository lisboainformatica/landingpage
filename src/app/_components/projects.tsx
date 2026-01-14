"use client";

import UseEmblaCarouselType from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Computer, NetworkIcon, KeyIcon, Lamp } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const projects = [
  {
    Title: "Site Rádio Cidade Nova FM",
    Description: "Desenvolvimento de um site responsivo para a Rádio Cidade Nova FM, com integração de streaming ao vivo, programação de shows e eventos, e seção de notícias.",
    Link: "https://cidadenovafm.com.br/"
  },
  {
    Title: "Sistema de Gestão",
    Description: "Desenvolvimento de um sistema de gestão financeira, Gestão de Frota, Gestão de Materiais e Protocolo, para prefeitura Municipal de Itajuípe, com funcionalidades de controle de receitas e despesas, relatórios financeiros e integração com contabilidade.",
    Link: "-"
  },
  {
    Title: "API de Pedidos",
    Description: "Desafio proposto pela empresa Jitterbit para desenvolver uma API RESTful para gerenciamento de pedidos, com funcionalidades de criação, leitura, atualização e exclusão de pedidos, autenticação de usuários e documentação da API.",
    Link: "https://github.com/lisboainformatica/jitterbit-order-api"
  },
  {
    Title: "Logo Marca Rádio Cidade Nova FM",
    Description: "Desenvolvimento de um logo para a Rádio Cidade Nova FM, com elementos visuais que representem a identidade da marca e o conteúdo da rádio.",
    Link: "https://cidadenovafm.com.br/"
  },
  {
    Title: "Sistema Para Agendamento em Unidades de Saúde",
    Description: "Desenvolvimento de um sistema para agendamento de consultas e procedimentos em unidades de saúde, com funcionalidades de cadastro de pacientes, agendamento online, lembretes por SMS e relatórios de atendimentos.",
    Link: "https://github.com/lisboainformatica/UBS_Saude"
  }, 
  {
    Title: "Jogo em CSS",
    Description: "Desenvolvimento de um jogo em CSS, com animações e interatividade, utilizando apenas HTML e CSS.",
    Link: "https://github.com/lisboainformatica/Jogo"
  }, 
  {
    Title: "Sistema de Gestão Escolar",
    Description: "Desenvolvimento de um sistema de gestão escolar, com funcionalidades de cadastro de alunos, professores, turmas e disciplinas.",
    Link: "https://github.com/lisboainformatica/escola_nextjs"
  },
  {
    Title: "Landing Page para Empresa de Tecnologia",
    Description: "Desenvolvimento de uma landing page para uma empresa de tecnologia, com design moderno e responsivo, apresentando os serviços oferecidos e um formulário de contato.",
    Link: "https://lisboainformatica.github.io/lisboainfo/"
  }
];

export function Projects() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

  return (
    <section className="bg-[#ffd449] py-16">
        <div className="container px-4 mx-auto">
            <div>
                <h2 className="text-3xl font-bold mb-12">PROJETOS</h2>

                <div className="relative max-w-4xl mx-auto">
                    
                    <div className='overflow-hidden' ref={emblaRef}>
                    
                        <div className="flex">
                            {projects.map((project, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        
                                        <div className="flex-1 flex flex-col">
                                            <div className="select-none text-center">
                                                <h3 className="font-bold text-xl mb-1 my-1">{project.Title}</h3>
                                                <p className="text-gray-300">{project.Description}</p>
                                                <p className="font-semiboldtext-grey-400 mt-6 pt-4 border-t border-gray-700"><Link href={project.Link} target="_blank">{project.Link}</Link></p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    
                    </div>
                    <button
                    className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />

                    </button>

                    <button
                    className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />

                    </button>
                </div>
                     
            </div>
        </div>
    </section>
  )
}