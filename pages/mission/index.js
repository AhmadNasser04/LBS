import Link from "next/link";
import React from "react";
import SlideIconButton from "../../components/buttons/SlideIconButton";
import { AboutPerson } from "../../components/AboutPerson";

function index() {
  return (
    <div className="pt-16">
      {/* ABOUT */}
      <div className="bg-black w-full h-auto p-5 lg:p-36 flex flex-col justify-center items-center text-center text-white space-y-5">
        <div className="text-5xl font-bold">A BIT ABOUT US</div>
        <div className="max-w-[750px] text-lg">
          Our community is dedicated to connecting bioinformaticians in Lebanon
          who are interested in collaborating, sharing knowledge, and staying
          up-to-date with the latest trends and developments in the field.
          Whether you are a student, researcher, or industry professional, we
          welcome you to join us as we explore the exciting world of
          bioinformatics. Through regular events, workshops, and online
          discussions, our community aims to foster a supportive and inclusive
          environment where members can learn, network, and build meaningful
          relationships with others in the field.
        </div>
        <div>
          <Link href="#more" scroll={false}>
            <button className="bg-white text-black rounded-lg px-8 py-2 border-2 font-bold border-white hover:bg-black hover:text-white transition-all">
              More about us
            </button>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center p-5 space-y-5 text-center"
        id="more"
      >
        <div className="space-y-5">
          <div className="text-3xl font-bold">What we want</div>
          <div className="space-y-5 flex flex-col items-center justify-center cursor-default">
            <div className="grid lg:grid-cols-2 container gap-5">
              <div className="shadow-xl w-full p-5 rounded-lg space-y-5 paintOneBackground bg-cover">
                <h1 className="text-2xl font-bold uppercase text-white">
                  Promote bioinformatics research and education in Lebanon.
                </h1>
                <div className="flex items-center justify-center">
                  <SlideIconButton message="CHECK IT OUT" />
                </div>
              </div>
              <div className="shadow-xl w-full p-5 rounded-lg space-y-5 paintTwoBackground bg-cover">
                <h1 className="text-2xl font-bold uppercase text-white">
                  Facilitate networking and collaboration among bioinformatics
                  researchers and practitioners.
                </h1>
                <div className="flex items-center justify-center">
                  <SlideIconButton message="CHECK IT OUT" />
                </div>
              </div>
              <div className="shadow-xl w-full p-5 rounded-lg space-y-5 paintThreeBackground bg-cover">
                <h1 className="text-2xl font-bold uppercase text-white">
                  Provide opportunities for training and professional
                  development in bioinformatics.
                </h1>
                <div className="flex items-center justify-center">
                  <SlideIconButton message="CHECK IT OUT" />
                </div>
              </div>
              <div className="shadow-xl w-full p-5 rounded-lg space-y-5 paintFourBackground bg-cover">
                <h1 className="text-2xl font-bold uppercase text-white">
                  Increase public awareness and understanding of bioinformatics
                  and its applications.
                </h1>
                <div className="flex items-center justify-center">
                  <SlideIconButton message="CHECK IT OUT" />
                </div>
              </div>
            </div>

            <div>
              <div className="p-5 shadow-xl space-y-5 hover:bg-[#003B36] hover:text-white hover:-translate-y-2 transition-all cursor-pointer">
                <h1 className="tracking-widest text-red-500 uppercase text-xl">
                  Our society guides you to a variety of events and activities
                  throughout the year, including:
                </h1>
                <ul>
                  <li>
                    Seminars and workshops on cutting-edge bioinformatics
                    research and techniques
                  </li>
                  <li>
                    Conferences and symposia featuring local and international
                    experts in bioinformatics.
                  </li>
                  <li>
                    Networking events and social gatherings to connect
                    bioinformatics researchers and practitioners in Lebanon.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container space-y-5">
          <div className="text-3xl font-bold">Who are we</div>
          <div>
            The Lebanese Bioinformatics Society is a professional organization
            that aims to promote and advance the field of bioinformatics in
            Lebanon, catering to scientists, educators, and health
            professionals. With a focus on impacting lives through
            bioinformatics, the society seeks to bring together passionate
            scientists to establish life-saving initiatives, inspire the next
            generation of bioinformaticians, and contribute to addressing
            pressing global health challenges.
          </div>
          <div className="text-xl font-bold">The Team</div>
          <div className="text-xl font-bold">Want to join?</div>
          <div>
            We appreciate your ideas and feedback. If you believe you possess
            the qualifications to become a part of our team, please feel free to
            send us an email. We would be happy to discuss how you can make a
            valuable contribution to LBS!
          </div>
          <button className="bg-white text-black rounded-lg px-8 py-2 border-2 font-bold border-black hover:bg-black hover:text-white transition-all">
            Join Us
          </button>
          <div className="grid lg:grid-cols-2"></div>
        </div>
        <div>
          <div className="text-3xl font-bold">Where are we</div>
          <div>
            The Lebanese Bioinformatics Society is an emerging network
            established in Lebanon that aims to connect with a worldwide
            audience.
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.12475663411!2d35.48368273934206!3d33.88925221106644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1681409891066!5m2!1sen!2slb"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default index;
