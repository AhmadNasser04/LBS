import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Lebanese Bioinformatics Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <div className="flex flex-col text-[#EEEEEE] justify-center items-center text-center h-screen w-screen space-y-2">
        <video
          autoPlay
          loop
          className="w-full h-full absolute object-cover -z-10"
        >
          <source
            src="https://media.graphassets.com/TcdvZSYASlWjuluvgmnH"
            type="video/mp4"
          />
        </video>
        <h3 className="font-extralight text-xl">THE FIRST LEBANESE</h3>
        <h1 className="font-semibold text-6xl">BIOINFORMATIONS</h1>
        <h3 className="font-extralight text-xl">NETWORK</h3>
      </div>

      {/* ABOUT US */}
      <div className="w-screen h-screen flex flex-col lg:flex-row">
        <div className="flex flex-col  justify-center xl:pl-48 p-16 lg:w-1/2 space-y-8">
          <h1 className="font-bold text-5xl">
            The future starts with Bioinformaticians
          </h1>
          <p className="text-lg font-light">
            Now is the time to embark on your journey to contribute to the
            development of bioinformatics. Join LBS and optimize your progress
            through exchanging with a community of inspired scientists
          </p>
          <Link href="/login">
            <button className="slideButton w-1/3">
              <span>Join today</span>
            </button>
          </Link>
        </div>
        <div className="w-full h-full hidden lg:inline-block">
          <video autoPlay loop className="w-full h-full">
            <source
              src="https://media.graphassets.com/CiB8OMNOQTyIKwCIyS1b"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* ABOUT BIF */}
      <div className="bg-black h-auto pt-16">
        <div className="text-white text-center text-xl md:text-5xl pb-24">
          Bioinformatics: Where it started & where we are now
        </div>

        <div className="grid xl:grid-cols-2 text-white">
          <div>
            <img
              alt="bif-image"
              src="https://media.graphassets.com/IBswPI03QxytL0T2wyyL"
              className="max-h-[450px] w-full object-cover"
            />
          </div>
          <div className="bg-[#191919] flex flex-col items-left justify-center space-y-5 p-12">
            <div className="font-bold text-lg">HISTORY</div>
            <div>
              Margaret Dayhoff was a pioneering biochemist who played a key role
              in the early development of bioinformatics. She began her work in
              bioinformatics by compiling and analyzing the then-available
              protein sequences by hand, creating a database known as the "Atlas
              of Protein Sequence and Structure." Dayhoff then worked with
              computer programmers to develop computational methods for
              analyzing and comparing protein sequences, including the use of
              mathematical algorithms and statistical methods. Dayhoff's work
              laid the foundation for modern bioinformatics, and her database
              and methods were widely adopted by researchers in the field. She
              was a true trailblazer and her contributions continue to influence
              the field of bioinformatics today.
            </div>
          </div>
          <div className="bg-[#191919] flex flex-col items-left justify-center space-y-5 p-12">
            <div className="font-bold text-lg">LATEST ADVANCES - COVID-19</div>
            <div>
              There has been a lot of skepticism surrounding how scientific
              processes were able to move so quickly during the COVID-19
              pandemic, bringing treatments, vaccines and prevention solutions
              to the public sphere in record time. While this was very much a
              collaborative effort from the pharmaceutical industry, healthcare
              systems, regulators, academia and government, it was initiated,
              informed and progressed through the generation and application of
              data. To leverage big data, from the first publicly available
              SARS-CoV-2 genome sequence and computational models to understand
              the virus and predict mutations, through to screens for potential
              therapies and vaccines - bioinformaticians have had a crucial role
              to play every step of the way. These bioinformatic methods have
              dramatically reduced experimental lab time and enabled the
              communication of key information between the aforementioned
              collaborators, and to the public both on a national and worldwide
              scale.
            </div>
            {/* Make the link open a new tab */}
            <Link
              href="https://www.future-science.com/doi/10.2144/btn-2022-0039"
              target="_blank"
            >
              <button className="w-1/5 slideButton">Read More</button>
            </Link>
          </div>
          <div>
            <img
              alt="bif-image"
              src="https://media.graphassets.com/jVVv8ioqS2KX532wpPfO"
              className="max-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* JOIN US */}
      <div className="h-auto w-screen p-16 flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-5 items-center justify-center">
        <div className="text-xl font-light">
          Join the Lebanese Bioinformaticians Society Today
        </div>
        <Link href="/login">
          <button className="slideButton">
            <span>Join today</span>
          </button>
        </Link>
      </div>

      {/* CONTACT */}
      <div className="bg-black text-white text-center px-10 py-16 space-y-10">
        <div className="space-y-5 py-16">
          <div className="font-bold text-4xl">CONTACT US</div>
        </div>
        <div className="md:px-44 lg:px-56">
          <form>
            <div className="flex flex-col justify-center items-center space-y-5">
              <div className="grid grid-cols-2 space-x-2 w-full">
                <div className="w-full flex flex-col text-left">
                  <label>Name *</label>
                  <input
                    className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="w-full flex flex-col text-left">
                  <label>Email *</label>
                  <input
                    className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-2 w-full">
                <div className="w-full flex flex-col text-left">
                  <label>Phone</label>
                  <input
                    className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="w-full flex flex-col text-left">
                  <label>Address</label>
                  <input
                    className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div className="flex flex-col text-left w-full">
                <label>Subject *</label>
                <input
                  className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                  placeholder="Type the subject"
                  required
                />
              </div>
              <div className="flex flex-col text-left w-full">
                <label>Message</label>
                <input
                  className="bg-black border-0 outline-none border-b-[1px] border-white hover:border-[1px] focus:border-[1px] px-1 py-4"
                  placeholder="Type your message here..."
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full bg-white text-black text-lg h-[50px] cursor-pointer hover:bg-gray-400 hover:border-gray-400 hover:text-white transition-all border border-solid"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
