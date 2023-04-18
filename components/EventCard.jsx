import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div className={`items-center justify-center flex`}>
        <img
          src={event.featuredImage.url}
          alt={event.title}
          className="object-cover w-full"
        />
      </div>
      <div className={`text-center space-y-3 p-10`}>
        <h2 className={`font-bold text-2xl`}>{event.title}</h2>
        <p>{event.excerpt}</p>
        <p>{event.location}</p>
        <p>{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
