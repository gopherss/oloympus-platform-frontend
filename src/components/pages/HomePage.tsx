import React from 'react';
import lexington from '../../assets/images/lexington.png';
import Footer from '../organisms/Footer';
import { LINKS_HOME } from '../../types/';


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
                className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl"
              >
                I'm a digital designer, developer, and surfer from Malibu. In the
                digital world, I craft interfaces and dive into coding intricacies.
                <br />
                <br />
                Beyond screens, I find solace and joy riding waves along Malibu's
                shores. My life blends tech and nature, coding sessions, and catching
                waves.
              </p>
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

            <div className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10  lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 dark:bg-zinc-900 shadow-xl dark:shadow-thick">
              <div className="mt-8">
                <img
                  src={lexington}
                  className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 ring-1 ring-white/10 object-cover"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="md:text-2xl text-center dark:text-amber-500"
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
              <div className="relative p-8 text-center w-full">
                <p
                  className="text-xl tracking-tight font-medium  dark:text-white md:text-6xl"
                >
                  Subscribe <span className="lg:block">to my newsletter</span>
                </p>
                <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    required
                    className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-zinc-800 ring-1 dark:ring-white/10  rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                  <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg  dark:bg-white dark:text-zinc-950 dark:hover:text-white hover: dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                    >Subscribe</button
                    >
                  </div>
                </form>
              </div>
            </div>

            <div className="ring-1 dark:ring-white/10  shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between  dark:bg-zinc-900">
              <p className="text-xl tracking-tight font-medium  dark:text-white md:text-5xl">
                Testimonials
              </p>
              <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
                <div className="mt-4">
                  <p className="text-sm text-pink-500 dark:text-pink-400">
                    "Big fan of your themes. They're well-organized, look clean, and
                    are fast."
                  </p>
                  <p className="text-xs mt-2 text-zinc-500">
                    <span className="block text-xs">Kevin Focke</span>
                    <span className="block text-xs"> Developer</span>
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-orange-500 dark:text-orange-300">
                    "Amazing resource using @astrodotbuild and @tailwindcss! I got it
                    a week ago and have found the contents really useful. 5/5
                  </p>
                  <p className="text-xs mt-2 text-zinc-500">
                    <span className="block text-xs">Alonso</span>
                    <span className="block text-xs"> Entrepreneur</span>
                  </p>
                </div>
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
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>

  );
};

export default HomePage;
