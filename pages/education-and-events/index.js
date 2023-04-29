import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { PostWidget, EventCard, WorkRequestForm } from "../../components";
import { getPosts } from "../../services";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function index() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getPosts().then((newCategories) => setEvents(newCategories));
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="bg-black lg:px-10 mb-8 pt-28">
      <div className={`flex flex-col lg:flex-row justify-center md:p-16`}>
        <div>
          {user ? (
            <div
              className={`space-y-5 lg:p-5 flex flex-col items-center justify-center`}
            >
              {events
                .filter(
                  (event) => event.node.category.slug === "education-and-events"
                )
                .map((event) => (
                  <div className={`lg:w-[70%]`}>
                    <EventCard event={event.node} />
                  </div>
                ))}
            </div>
          ) : (
            <div className={`space-y-5`}>
              <div
                className={`space-y-5 lg:p-5 flex flex-col items-center justify-center`}
              >
                {events
                  .slice(0, 2)
                  .filter(
                    (event) =>
                      event.node.category.slug === "education-and-events"
                  )
                  .map((event) => (
                    <div className={`lg:w-[70%]`}>
                      <EventCard event={event.node} />
                    </div>
                  ))}
              </div>
              <div className={`flex flex-col items-center justify-center`}>
                <div
                  className={`lg:w-[70%] bg-white rounded-lg shadow-xl w-full py-5 flex flex-col items-center justify-center`}
                >
                  <div>Want to see more events?</div>
                  <Link href={`/login`}>
                    <button className={`slideButton`}>Join us</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`lg:p-5 py-5`}>
          <PostWidget />
          <WorkRequestForm />
        </div>
      </div>
    </div>
  );
}

export default index;
