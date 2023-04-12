import React from "react";

function index() {
  return (
    <div>
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
          relationships with others in the field. By joining us, you'll have the
          opportunity to connect with like-minded individuals, share your
          expertise, and contribute to the growth and success of bioinformatics
          in Lebanon.
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          alt="about-image"
          src="https://media.graphassets.com/ScBO75vST1ugv4Kpijhn"
          className="w-full object-cover h-[600px]"
        />
      </div>
    </div>
  );
}

export default index;
