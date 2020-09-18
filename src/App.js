import React from 'react';
import { fetchEvents } from './data/api/events';
import EventListContainer from './containers/EventListContainer';
function App() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchEvents('apppUWSIpwCI9AEqJ', 'Schedule', {
        noOfRecords: 25,
        tableView: 'Full schedule',
      })
        .then((fetchedEvents) => {
          setEvents(fetchedEvents);
        })
        .catch((error) => {
          console.error('From fetchEvents in App.js:', error);
        });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div role='feed' aria-label='event list container' className='m-4'>
      <EventListContainer events={events} />
    </div>
  );
}

export default App;
