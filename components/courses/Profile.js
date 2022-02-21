import React from 'react';
import Image from 'next/image';

// title, subtext, rating, name, date, aboutClass, content
const Profile = () => {
  return (
    <div>
      Profile
      <Image
        src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184"
        width="400px"
        height="260px"
        alt="painting"
      />
    </div>
  );
};

export default Profile;
