"use client";

import UseEmblaCarouselType from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Computer, NetworkIcon, KeyIcon, Lamp } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
    {
        title: "Desenvolvimento Web Full Stack",
        description: "Criação de aplicações web completas, desde o front-end até o back-end, utilizando tecnologias modernas como React, Next.js, Node.js e bancos de dados SQL e NoSQL.",
        icon: <Computer className="w-8 h-8" />
    },
    {
        title: "Desenvolvimento de Aplicações Mobile",
        description: "Criação de aplicativos móveis nativos e híbridos para iOS e Android, utilizando tecnologias como React Native e Flutter.",
        icon: <NetworkIcon className="w-8 h-8" />
    },
    {
        title: "Consultoria em Tecnologia",
        description: "Assessoria especializada em soluções tecnológicas para impulsionar a transformação digital da sua empresa.",
        icon: <KeyIcon className="w-8 h-8" />
    },
    {
        title: "Manutenção e Suporte Técnico",
        description: "Manutenção contínua e suporte técnico para garantir o funcionamento ideal dos sistemas desenvolvidos.",
        icon: <Lamp className="w-8 h-8" />
    }
];

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "( min-width: 768px )": { slidesToScroll: 3 }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

  return (
    <section className="bg-white py-16">
        <div className="container px-4 mx-auto">
            <div>
                <h2 className="text-3xl font-bold mb-12">SERVIÇOS</h2>

                <div className="relative">
                    
                    <div className='overflow-hidden' ref={emblaRef}>
                    
                        <div className="flex">
                            {services.map((service, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{service.icon}</span>
                                                <div className="select-none">
                                                    <h3 className="font-bold text-xl mb-1 my-1">{service.title}</h3>
                                                    <p className="text-grey-400 text-sm">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-center">

                                            <a 
                                            href="https://wa.me/5573981667518?text=Olá%2C%20quero%20mais%20informações" target="_blank" 
                                            className="font-semibold flex items-center justify-center w-fit gap-2 border-2 rounded-md hover:bg-red-500 px-4 py-1 duration-300">
                                                <WhatsappLogoIcon className="w-5 h-5 inline-block mr-2 border" />Contato via WhatsApp
                                            </a>
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