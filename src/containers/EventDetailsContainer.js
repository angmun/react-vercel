import React from 'react';
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs';

import { fetchAnEvent } from '../data/api/events';
import EventDetails from '../components/EventDetails';
import EventPoster from '../components/EventPoster';

export default function EventDetailsContainer() {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});
  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchAnEvent('apppUWSIpwCI9AEqJ', 'Schedule', id)
        .then((fetchedEvent) => {
          setEvent(fetchedEvent);
        })
        .catch((error) => {
          console.error('From fetchAnEvent:', error);
        });
    }
    return () => {
      isMounted = false;
    };
  }, [id]);
  if (event && event.fields) {
    const {
      fields: { Activity, Start, End, Type },
    } = event;
    const dateObject = dayjs(Start);
    const date = dateObject.format('MMMM D, YYYY');
    const start = dateObject.format('h:mm A');
    const end = dayjs(End).format('h:mm A');
    return (
      <div
        role='region'
        aria-label='Event container'
        className='overflow-hidden rounded-md p-6'>
        <EventDetails
          title={Activity}
          date={date}
          startTime={start}
          endTime={end}
          type={Type}
        />
        <EventPoster
          title={Activity}
          date={date}
          startTime={start}
          endTime={end}
        />
      </div>
    );
  } else {
    return null;
  }
}
