"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';
import { findCells } from '#/api';
import { cellProps } from '#/api/models';
import Loader from '#/components/Loader';
import { roleLabels, weekDayLabels } from '#/utils/labels';

const Home: React.FunctionComponent = () => {

  const [cells, setCells] = useState<cellProps[]>()
  const [isLoading, setisLoading] = useState(false)

  const getCells = useCallback(async () => {
    setisLoading(true);
    try {
      const { data } = await findCells();
      setCells(data)
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setisLoading(false);
    }
  },[])

  useEffect(() => {
    getCells();
  }, [getCells])

  return (
    <main className="flex flex-col items-center justify-between lg:p-20 p-5 bg-black">
      <Loader show={isLoading} />
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
            <button type="button" className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center mr-2 my-3 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
              <MapPinIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
              Av. Pres. Getúlio Vargas - Vila Elsa, Alvorada - RS, 94836-193
            </button>
          </Link>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <h1 id="celulas" className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl uppercase mt-20 text-center">
        Conheça nossas células
      </h1>
      <div id="accordion-collapse" data-accordion="collapse" className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {cells && 
          cells.map( cell => {
            return (
              <>
                <div  className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{cell.title}</h5>
                  <h3 className="mt-7 text-lg font-bold tracking-tight text-gray-900 dark:text-white"> Próximo encontro: </h3>
                  { weekDayLabels[cell.location.weekDay] || ""} | {cell.location.nextMeeting}
                  <h3 className="mt-7 text-lg font-bold tracking-tight text-gray-900 dark:text-white"> Endereço da célula: </h3>
                  <Link 
                    href={cell.location.map}
                    className="flex-initial items-center"
                  >
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center mr-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-900">
                      <MapPinIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
                      {cell.location.address}
                    </button>
                  </Link>
                  <h3 className="mt-7 text-lg font-bold tracking-tight text-gray-900 dark:text-white"> Participantes: </h3>
                  <div className="grid grid-cols-2">
                    {cell.members.map( member => {
                      return (
                        <>
                          <div className="flex items-center space-x-4 m-3 m-3 bg-gray-200 dark:bg-gray-600 p-3 rounded ">
                            <UserIcon className="w-5 h-5 rounded-full hidden md:block" aria-hidden="true" />
                            <div className="font-medium dark:text-white">
                              <div>{member.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{roleLabels[member.role] || ""}</div>
                            </div>
                          </div>
                        </>
                      )
                    })}  
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home;