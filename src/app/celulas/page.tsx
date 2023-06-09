"use client";

import Link from 'next/link';
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';
import { findCells } from '#/api';
import { cellProps } from '#/api/models';
import Loader from '#/components/Loader';
import { roleLabels, weekDayLabels } from '#/utils/labels';

const Cells: React.FunctionComponent = () => {

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
    <main className="flex flex-col items-center justify-between lg:py-10 p-5 bg-black">
      <Loader show={isLoading} />
      <h1 id="celulas" className="text-4xl font-bold tracking-tight text-gray-100 lg:text-4xl uppercase text-center">
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

export default Cells;