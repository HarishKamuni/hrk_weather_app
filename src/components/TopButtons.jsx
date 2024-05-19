import React from 'react';

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      city: 'Pune',
    },
    {
      id: 2,
      city: 'Solapur',
    },
    {
      id: 3,
      city: 'Mumbai',
    },
    {
      id: 4,
      city: 'Hyderabad',
    },
    {
      id: 5,
      city: 'Bangolore',
    },
  ];
  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((city, i) => (
        <button key={i} className="text-white text-lg font-medium">
          {city.city}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
