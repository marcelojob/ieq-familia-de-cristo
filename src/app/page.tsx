"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ProjectCard from './components/ProjectCard';

const Home: React.FunctionComponent = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="bg-black p-5 lg:py-10">
        <div className="relative isolate">
          <Image
            src="/logo.png"
            alt="IEQ Família de Cristo Logo"
            className="mx-auto"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl uppercase">
              Uma igreja que valoriza
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Venha nos visitar e conhecer melhor esse Deus maravilhoso que servimos!
            </p>
            <Link 
              href="https://www.google.com/maps/dir//ieq+passo+dos+negros/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x951975510bd5fe91:0xd72a2db9ee504f3f?sa=X&ved=2ahUKEwjM9oOAnrD_AhXfCbkGHQ-5BL8Q9Rd6BAg_EAM"
              className="flex items-center justify-center"
            >
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center mr-2 my-3 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                <MapPinIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
                Av. Pres. Getúlio Vargas - Vila Elsa, Alvorada - RS, 94836-193
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 w-full p-10">
        <h2 className=" text-center mb-3 text-4xl font-bold tracking-tight text-gray-300 lg:text-2xl uppercase">
          Acompanhe nossas atividades
        </h2>
        <ChevronDownIcon className="h-6 w-6 text-white mb-3 mx-auto" />
        <div className="flex justify-center align-center flex-col lg:flex-row gap-10 mt-8 justify-center">
         <ProjectCard
          path='/celulas'
          image='/cells-card.jpg'
          title='Células'
          description='Reuniões quinzenais de pequenos grupos fortalecendo a comunhão e crescimento espiritual do grupo.'
         />
         <ProjectCard
          path='/celulas'
          image='/cells-card.jpg'
          title='Células'
          description='Reuniões quinzenais de pequenos grupos fortalecendo a comunhão provendo um crescimento espiritual do grupo.'
         />
         
        </div>
      </div>
    </main>
  )
}

export default Home;