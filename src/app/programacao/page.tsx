"use client";

import { useCallback, useEffect, useState } from 'react';
import { findSchedule } from '#/api';
import { ScheduleProps } from '#/api/models';
import Loader from '#/components/Loader';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { weekDayDateLabel } from '#/utils/labels';

const Schedule: React.FunctionComponent = () => {
  
  const [schedule, setSchedule] = useState<ScheduleProps>()
  const [isLoading, setisLoading] = useState(false)

  const getSchedule = useCallback(async () => {
    setisLoading(true);
    try {
      const { data } = await findSchedule();
      setSchedule(data)
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setisLoading(false);
    }
  },[])

  useEffect(() => {
    getSchedule();
  }, [getSchedule])


  return (

    <main className="flex flex-col items-center justify-between lg:pb-10 pt-0 pt-5 pb-5 bg-black">
      <Loader show={isLoading} />
      <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill w-full bg-black bg-opacity-75 bg-blend-multiply" style={{backgroundImage: `url("${schedule?.theme.image}")`}}>
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Tema do mês</p>
          <p className="text-4xl font-bold">{schedule?.theme.title}</p>
          <p className="text-lg mb-2 mt-5 leading-normal">{schedule?.theme.text}</p>
          <p className="font-bold text-sm">{schedule?.theme.reference}</p>
        </div>  
      </div>
      <h2 className=" text-center mb-3 mt-10 text-2xl font-bold tracking-tight text-gray-300 uppercase">
        {schedule?.title}
      </h2>
      <ChevronDownIcon className="h-6 w-6 text-white mb-3 mx-auto" />
      {schedule?.schedule.map( (event, index) => {

        const date = new Date(event.date);
        
        return (
          <div key={index} className="flex items-center bg-white w-11/12 lg:w-2/3 rounded-lg my-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
            <div className="flex flex-col items-center justify-center w-16 lg:w-24 bg-gray-300 dark:bg-gray-600 p-5 rounded-l-lg">
              <span className='text-4xl font-bold'>{date.getDate()}</span>
              <span className='text-lg font-bold uppercase'>{weekDayDateLabel[date.getDay()] || ""}</span>
            </div>
            <div className="grow p-3 text-lg lg:text-2xl">
              <h2>{event.event} </h2>
            </div>
            <div className="flex-none p-3 border-1 border-gray-200 text-lg lg:text-2xl">
              <h3> {date.getHours() ? `${date.getHours()}h` : ""}{date.getMinutes() ? date.getMinutes() : ""}</h3>               
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Schedule;