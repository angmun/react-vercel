import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchEvents } from '../data/api/events';
import EventListContainer from './EventListContainer';
import EventDetailsContainer from './EventDetailsContainer';

export default function EventRouting() {
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
          console.error('From fetchEvents:', error);
        });
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/events'>
          <div role='feed' aria-label='event list container' className='m-4'>
            <EventListContainer events={events} />
          </div>
        </Route>
        <Route path='/event/:id'>
          <EventDetailsContainer />
        </Route>
      </Switch>
    </Router>
  );
}
