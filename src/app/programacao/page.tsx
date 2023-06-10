"use client";

import { useCallback, useEffect, useState } from 'react';
import { findSchedule } from '#/api';
import { ScheduleProps } from '#/api/models';
import Loader from '#/components/Loader';

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

    <main className="flex flex-col items-center justify-between lg:py-10 p-5 bg-black">
      <Loader show={isLoading} />
      <h1>{schedule?.title}</h1>
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