import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
export function Hero() {
  return (
    <section className="bg-[#E84c3d] text-white relative overflow-hidden">

        <div>
            <Image
                src="/Vinicius2.png"
                alt="Eu de fundo"
                fill
                sizes="100vw"
                quality={100}
                priority
                className="object-cover opacity-60 md:hidden"
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden">

            </div>
        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="space-y-6">
                    <h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    >
                        Você quer um programador Full Stack?</h1>
                    <p 
                    className="lg:text-lg"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    >Você acabou de encontrar o profissional ideal para sua equipe!</p>
                
                <div data-aos="fade-up" data-aos-duration="2000">
                    <a 
                    href="https://wa.me/5573981667518?text=Olá%2C%20quero%20mais%20informações" target="_blank" 
                    className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                        <WhatsappLogoIcon className="w-5 h-5" /> 
                        Contato via WhatsApp
                        </a>
                </div>
                <div className="mt-8">
                    <p className="text-sm mb-4">
                        <b className="bg-black text-white px-2 py-1 rounded-md">100%</b> dedicado, comprometido e focado em entregar soluções de alta qualidade para sua empresa.
                    </p>
                        
                </div>
            </div>

            <div className="hidden md:block h-full relative">
                   <Image
                    src="/Vinicius2.png"
                    alt="Vinicius Andrade" 
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 0vw, 50vw"
                    quality={100}
                    priority
                    />                 
                   
            </div>

            </article>


        </div>
      
    </section>
  )
}