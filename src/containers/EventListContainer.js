'use es6';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';

import Event from '../components/Event';
import EventMap from '../components/EventMap';

export default class EventListContainer extends Component {
  render() {
    return (
      <div
        role='region'
        aria-label='List of events'
        className='overflow-hidden rounded-md p-6'>
        <EventMap />
        {this.props.events.map((event) => {
          const {
            fields: { Activity, Start, End, Type },
          } = event;
          const dateObject = dayjs(Start);
          const date = dateObject.format('MMMM D, YYYY');
          const start = dateObject.format('h:mm A');
          const end = dayjs(End).format('h:mm A');
          return (
            <Event
              eventTitle={Activity || 'No event title found'}
              startDate={date || 'TBD'}
              startTime={start || ''}
              endTime={end || ''}
              eventType={`This is a "${Type}" event`}
            />
          );
        })}
      </div>
    );
  }
}

EventListContainer.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};
