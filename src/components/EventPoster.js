import React from 'react';
import PropTypes from 'prop-types';

export default function EventPoster(props) {
  return (
    <section className='event-details__event-poster bg-gray-100 shadow-md p-5 text-center leading-loose mx-auto font-bold'>
      <h2 className='text-purple-900 text-5xl text-uppercase'>{props.title}</h2>
      <p className='text-gray-700 italic text-3xl'>{props.date}</p>
      <p className='text-2xl text-gray-700'>
        <span className='text-teal-600'>{props.startTime}</span> to{' '}
        <span className='text-teal-600'>{props.endTime}</span>
      </p>
      <figure>
        <img alt='Uploaded event' />
      </figure>
      <div className='flex flex-row flex-no-wrap'>
        <figure className='event-poster__branding-container'>
          <img alt='Southside Outside Logo' />
          <figcaption>Some slogan here maybe</figcaption>
        </figure>
        <figure className='event-poster__branding-container'>
          <img alt='Event QR code, generated using API' />
          <figcaption>Event QR code for sharing</figcaption>
        </figure>
      </div>
    </section>
  );
}

EventPoster.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};
