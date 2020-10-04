import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Event extends Component {
  render() {
    return (
      <section aria-label='an event listing' className='shadow-card'>
        <h2 className='text-purple-900 font-semibold text-2xl pt-2'>
          {this.props.eventTitle}
        </h2>
        <p className='italic text-gray-700 font-semibold'>
          {this.props.startDate} from{' '}
          <span className='text-purple-700'>
            {this.props.startTime} to {this.props.endTime}
          </span>
        </p>
        <p className='pt-2 text-gray-900 font-semibold'>
          {this.props.eventType}
          <br />
          Ex duis laborum laboris ad sint eiusmod eu. Ex laborum ullamco do
          magna eiusmod irure aute ut adipisicing ut ut in ut non. Est non
          laborum reprehenderit adipisicing commodo id cillum. Lorem in officia
          ut in. Ex sint velit fugiat amet ad reprehenderit. Aute esse aute in
          consectetur.
          <br />
          <Link className='event__link' to={`/event/${this.props.eventId}`}>
            Learn more about this event
          </Link>
        </p>
      </section>
    );
  }
}

Event.propTypes = {
  eventId: PropTypes.string.isRequired,
  eventTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  eventType: PropTypes.string,
};
