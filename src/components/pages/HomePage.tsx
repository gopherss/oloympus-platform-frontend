import React from 'react';
import Footer from '../organisms/Footer';
import { LINKS_COMUNITIES, LINKS_HOME } from '../../types/';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {

  return (
    <>
      <section>
        <div className="p-4">
          <div
            className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4"
          >

            <div
              className="lg:row-span-2 ring-1 dark:ring-white/10  dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8"
            >
              <div className="relative flex items-center gap-x-4">
                <img
                  src="https://www.svgrepo.com/show/493163/white-hacker-female.svg"
                  alt=""
                  className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 "
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold  dark:text-white">
                    <a href="#" className='text-3xl'>
                      <span className="absolute inset-0"></span>
                      Ulises Diego
                    </a>
                  </p>
                  <p className="text-zinc-400 dark:text-zinc-400">
                    Creative Design &amp;
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <img
                  className="rounded-lg h-auto w-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/47de/d6ae/6580528a1a8c05b8c0bfba4a31d57951?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vw19807H3Ql1tmB0TaKuSmKC4U~Gmp722ukbORjouMO~J05mB50rGLd4sxWfKSSxlqr~UqOM7a~OSep4BxUqB5oOV6wpKFgX6K7JKp~6Luf1DLWVp7d6G0292Ut1C2y9HT5bSAWVsWA~YrTDnlas6V6U1Cj287kFfpYRbH4wBjtGl3iI3C~LvcHmxlepUkUcje4sQ4RyKmh3eUaVShkKSE1WBnzcs0XlDMdTOW8qtMR1sFpzUZ1KEDls-toR~JJoExlE3GW5HUGaXWxEu4pZuVCDZeaFpOOaLtuSuxOO2tYIjMATPMzYULOQIh9tnxcH6khikwBCDlBqrxbmFATa9Q__"
                  alt="img logo home"
                />
              </div>
              <p
                className="text-sm mt-6 lg:text-lg tracking-tight text-center dark:text-amber-500"
              >
                aquí nadie sale sin chisme 🫦!
              </p>
              <p
                className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl text-justify"
              >
                I'm a digital designer, developer, and surfer from Malibu. In the
                digital world, I craft interfaces and dive into coding intricacies.
                Beyond screens, I find solace and joy riding waves along Malibu's
                shores. My life blends tech and nature, coding sessions, and catching
                waves.
              </p>

              <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                {LINKS_COMUNITIES.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                  >
                    <img
                      className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                      src={link.imgSrc}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>

            </div>

            <div
              className="ring-1 dark:ring-white/10  rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full dark:bg-zinc-900"
            >
              <div className="w-full">
                <p
                  className="text-xl font-normal tracking-tight  dark:text-white lg:text-8xl"
                >
                  Anuncio
                </p>
              </div>

              <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                {LINKS_HOME.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                  >
                    <img
                      className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                      src={link.imgSrc}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>
            </div>



            <div className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 dark:bg-zinc-900 shadow-xl dark:shadow-thick">
              <div className="mt-8">
                <img
                  src='https://s3-alpha-sig.figma.com/img/c702/5e10/88e1df134c6e36ebadc22d4c06bb73b9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bU-ZPIPj3juTyUVaKh55ZTuzsKKWVHyvNIplO6woovtI0CzA5OLZE3GFQxEfCU9qqt8iXP0YeVqRHyPBKiZ-hVuDiZXE50k912MyYgOGSSb3YXC68ozs-yl1JHYKNoefOX92pCG2IycNBJJJBTSspAwRt~~1QBkAf-G4h-FuBaBBg-TtK77kMwCLGwO6K4nRsf9wwnxw1kOttOMd1D5mw1uq2YFMYuopiPA7GjT6B7lU4AW8LrS424uAYfmjX8m1aOlPDRAz473IjDfkuRJGYiwFN2StwfxIC7QsSbwsR1X5n6rCVwz2JM5cKSUWXQTx3NxmdmIePWKb1sojEJIO1Q__'
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="md:text-2xl text-center dark:text-amber-500">
                  Comunidades, empresas y personas acorde a tus necesidades, intereses y sentimientos
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 text-justify">
                  Design & development subscriptions for startups.
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                  Design & development subscriptions for startups.
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                  Design & development subscriptions for startups.
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-lg justify-self-end ml-auto">
                  <button className="border-0 bg-gradient-to-r from-purple-700 via-blue-500 to-cyan-400 rounded-lg text-white text-lg p-1 cursor-pointer transition duration-300 transform active:scale-90 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-500 hover:to-blue-600">
                    <Link to="/login" className="flex items-center justify-center px-6 py-3 rounded-md transition duration-300 hover:bg-transparent">
                      Empezar
                    </Link>
                  </button>
                  <button className="ml-auto">
                    <Link to="/community" className='text-white hover:text-blue-700 flex items-center space-x-1 transition-colors duration-300'>
                      Saber Más
                      <img src="https://www.svgrepo.com/show/418140/arrow-right-3.svg" alt="icon arrow" className="h-5 w-5" />
                    </Link>
                  </button>
                  <button className="col-span-2 border-0 bg-gradient-to-r from-purple-700 via-blue-500 to-cyan-400 rounded-lg text-white  text-lg p-1 cursor-pointer transition duration-300 transform active:scale-90 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-500 hover:to-blue-600">
                    <Link to="/register" className="flex items-center justify-center px-6 py-3 rounded-md transition duration-300 hover:bg-transparent text-center">
                      Registrarse
                    </Link>
                  </button>
                </div>

              </div>
            </div>



            <div
              className="ring-1 dark:ring-white/10   flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8 dark:bg-zinc-900 overflow-hidden text-center lg:text-left"
            >
              <div>
                <p className="text-xl  dark:text-white lg:text-7xl tracking-tight">
                  Anuncio
                </p>
              </div>
            </div>

            <div
              className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover: dark:hover:ring-white/20 dark:ring-white/10  relative rounded-3xl overflow-hidden dark:bg-zinc-900 shadow-xl dark:shadow-thick">
              <p className="text-xl   dark:text-white lg:text-2xl mt-6">
                Anuncio
              </p>
            </div>

            <div className="lg:row-span-2 ring-1 dark:ring-white/10  hover: dark:bg-zinc-900  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <p className="ext-xl tracking-tight font-medium  dark:text-white md:text-6xl mt-6">
                  Grupo
                </p>
              </div>
            </div>


            <div className="ring-1 dark:ring-white/10  flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4  dark:bg-zinc-900 shadow-xl dark:shadow-thick">
            <div className="mt-8">
                <p className="ext-xl tracking-tight font-medium  dark:text-white md:text-6xl mt-6">
                  Comunidad
                </p>
              </div>
            </div>

            <div className="ring-1 dark:ring-white/10  shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between  dark:bg-zinc-900">
            <div className="mt-8">
                <p className="ext-xl tracking-tight font-medium  dark:text-white md:text-6xl mt-6">
                  Anuncio
                </p>
              </div>
            </div>


            <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10  dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <p className="ext-xl tracking-tight font-medium  dark:text-white md:text-6xl mt-6">
                  Grupo
                </p>
              </div>
            </div>


            {/* Nuevo contenido */}
            <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <img
                  src='https://ammonralibreria.com/wp-content/uploads/2023/06/9788445445686.jpg'
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="md:text-2xl text-center dark:text-violet-500"
                >
                  Comunidades, empresas y personas
                  acorde a tus necesidades, intereses y sentimientos
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  Design & development subscriptions for startups.
                  <br />
                  <br />
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                </p>

                <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                {LINKS_COMUNITIES.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                  >
                    <img
                      className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                      src={link.imgSrc}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>

              </div>
            </div>

            <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <img
                  src='https://ih1.redbubble.net/image.464974116.4526/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.u2.jpg'
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="md:text-2xl text-center dark:text-blue-500"
                >
                  Comunidades, empresas y personas
                  acorde a tus necesidades, intereses y sentimientos
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  Design & development subscriptions for startups.
                  <br />
                  <br />
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                </p>
                <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                {LINKS_COMUNITIES.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                  >
                    <img
                      className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                      src={link.imgSrc}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>
              </div>
            </div>

            <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <img
                  src='https://i.pinimg.com/474x/e8/08/83/e808831bdd7c31b4a1ad98815466cced.jpg'
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="md:text-2xl text-center dark:text-red-500"
                >
                  Comunidades, empresas y personas
                  acorde a tus necesidades, intereses y sentimientos
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  Design & development subscriptions for startups.
                  <br />
                  <br />
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                </p>
                <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                {LINKS_COMUNITIES.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                  >
                    <img
                      className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                      src={link.imgSrc}
                      alt={link.alt}
                    />
                  </a>
                ))}
              </div>
              </div>
            </div>

            <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 dark:bg-zinc-900 shadow-xl dark:shadow-thick rounded-3xl p-8">
              <div className="mt-8">
                <img
                  src='https://i.pinimg.com/736x/78/6b/37/786b371a4cefdbde1e5a2c94e2f33da4.jpg'
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="md:text-2xl text-center dark:text-green-500"
                >
                  Comunidades, empresas y personas
                  acorde a tus necesidades, intereses y sentimientos
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  Design & development subscriptions for startups.
                  <br />
                  <br />
                  Somos una plataforma libre, creada para personas creativas, influenciadoras y
                  capaces de reunir a muchas personas, compartiendo su estilo de vida, formas
                  de pensar y sus experiencias.
                </p>
                <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
                  {LINKS_COMUNITIES.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-950 dark:hover:bg-primary ring-1 dark:ring-white/10  dark:bg-tertiary rounded-lg hover: dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
                    >
                      <img
                        className="h-6 w-6 group-hover:scale-125 duration-300  dark:text-white group-hover :dark:text-white/50"
                        src={link.imgSrc}
                        alt={link.alt}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className="flex items-center justify-center  mt-10 mb-10">
        <button className="border-0 bg-gradient-to-r from-purple-700 via-blue-500 to-cyan-400 rounded-lg text-white flex text-lg p-1 cursor-pointer transition duration-300 transform active:scale-90">
          <Link to="/community" className="bg-gray-950 px-6 py-4 rounded-md transition duration-300 hover:bg-transparent">
            Buscar Más
          </Link>
        </button>
      </div>

      <Footer />
    </>

  );
};

export default HomePage;
