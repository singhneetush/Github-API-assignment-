import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faMapPin, faComment } from '@fortawesome/free-solid-svg-icons';

const UserDetailsComponent = ({
  avatarURL,
  link,
  name,
  bio,
  location,
  twitter,
  setQuery,
  setPage,
}) => {
  const [userName, setUserName] = useState();
  return (
    <div className='user-detail-wrapper'>
      <div className='image-wrapper'>
        <img className='avatar-image' src={avatarURL} alt='Github Avatar' />
        <div className='link-wrapper'>
          <FontAwesomeIcon icon={faLink} />
          <a className='link' href={link}>
            {link}
          </a>
        </div>
      </div>
      <div className='desc-wrapper'>
        <h2>{name}</h2>
        <div className='flex-row'>
          <FontAwesomeIcon icon={faComment} />
          <p>{bio}</p>
        </div>
        <div className='flex-row'>
          <FontAwesomeIcon icon={faMapPin} style={{ marginRight: '10px' }} />
          <p>{location}</p>
        </div>
        {twitter === 'not found' ? (
          <p>Twitter not found</p>
        ) : (
          <div className='flex-row'>
            <p style={{ marginRight: '10px' }}>Twitter:</p>

            <a
              href={`https://twitter.com/${twitter}`}
              style={{ color: 'black' }}>
              https://twitter.com/{twitter}
            </a>
          </div>
        )}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(userName);
          setPage(4);
        }}
        className='search-name'>
        <input
          type='text'
          placeholder='Enter a username '
          onChange={(event) => setUserName(event.target.value)}
          style={{ marginRight: '5px' }}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
