import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function EventDetails(props) {
  return (
    <section aria-label='an event listing' className='shadow-card'>
      <h2 className='text-purple-900 font-semibold text-2xl pt-2'>
        {props.title}
      </h2>
      <p className='italic text-gray-700 font-semibold'>
        {props.date} from{' '}
        <span className='text-purple-700'>
          {props.startTime} to {props.endTime}
        </span>
      </p>
      <p className='pt-2 text-gray-900 font-semibold'>
        {props.type}
        <br />
        Ex duis laborum laboris ad sint eiusmod eu. Ex laborum ullamco do magna
        eiusmod irure aute ut adipisicing ut ut in ut non. Est non laborum
        reprehenderit adipisicing commodo id cillum. Lorem in officia ut in. Ex
        sint velit fugiat amet ad reprehenderit. Aute esse aute in consectetur.
        <br />
        <Link className='event__link' to={'/events'}>
          Back to home page
        </Link>
      </p>
    </section>
  );
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  type: PropTypes.string.isRequired,
};
