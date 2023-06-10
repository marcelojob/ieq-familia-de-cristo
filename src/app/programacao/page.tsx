"use client";

import { useCallback, useEffect, useState } from 'react';
import { findSchedule } from '#/api';
import { ScheduleProps } from '#/api/models';
import Loader from '#/components/Loader';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
      <h2 className=" text-center mb-3 mt-5 text-2xl font-bold tracking-tight text-gray-300 uppercase">
        {schedule?.title}
      </h2>
      <ChevronDownIcon className="h-6 w-6 text-white mb-3 mx-auto" />
      {schedule?.schedule.map( (event, index) => {
        return (
          <div key={index}> 
              <span> {event.event}</span>
          </div>
        )
      })}
    </main>
  )
}

export default Schedule;