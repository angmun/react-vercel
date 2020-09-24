import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Event extends Component {
  render() {
    return (
      <section aria-label='an event listing' className='shadow-card'>
        <h2 className='text-teal-900 font-semibold text-2xl pt-2'>
          {this.props.eventTitle}
        </h2>
        <p className='italic text-gray-700 font-semibold'>
          {this.props.startDate} from{' '}
          <span className='text-teal-700'>
            {this.props.startTime} to {this.props.endTime}
          </span>
        </p>
        <p className='py-2 text-gray-900 font-semibold'>
          {this.props.eventType}
          <br />
          Ex duis laborum laboris ad sint eiusmod eu. Ex laborum ullamco do
          magna eiusmod irure aute ut adipisicing ut ut in ut non. Est non
          laborum reprehenderit adipisicing commodo id cillum. Lorem in officia
          ut in. Ex sint velit fugiat amet ad reprehenderit. Aute esse aute in
          consectetur.
        </p>
      </section>
    );
  }
}

Event.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  eventType: PropTypes.string,
};
