import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Lebanese Bioinformatics Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <div className="flex flex-col justify-center items-center text-center w-full dnaBackground space-y-5">
        <div className="text-4xl md:text-6xl text-white">
          Welcome Bioinformaticians!
        </div>
        <div className="text-xl md:text-2xl text-yellow-300">
          First Lebanese Network for Bioinformatics
        </div>
      </div>

      {/* ABOUT US */}
      <div className="aboutUsBackground flex items-center justify-center px-10 py-40 max-h-[700px]">
        <div className="bg-black flex flex-col justify-center items-center text-center px-10 py-16 w-[650px] space-y-10">
          <div className="text-5xl font-bold text-white">About Us</div>
          <div className="text-white">
            This is a space to tell users about yourself and your business. Let
            them know who you are, what you do, and what this website is all
            about. Double click to start editing.
          </div>
          <div className="bg-lime-300 px-10 py-2 font-thin cursor-pointer border border-lime-300 hover:bg-black hover:text-lime-300 duration-200 transition-all">
            Learn More
          </div>
        </div>
      </div>

      {/* ABOUT BIF */}
      <div className="bg-black h-auto pt-16">
        <div className="text-white text-center text-3xl md:text-5xl pb-24">
          BIOINFORMATICS
        </div>

        <div className="grid md:grid-cols-2 text-white">
          <div>
            <img
              alt="bif-image"
              src="https://media.graphassets.com/WBN8X6cSXONze9eakc9M"
              className="max-h-[450px] w-full object-cover"
            />
          </div>
          <div className="bg-[#191919] flex flex-col items-left justify-center space-y-5 p-10 lg:px-52">
            <div className="font-bold text-lg">WHAT IS BIOINFORMATICS?</div>
            <div>
              Bioinformatics, as related to genetics and genomics, is a
              scientific subdiscipline that involves using computer technology
              to collect, store, analyze and disseminate biological data and
              information, such as DNA and amino acid sequences or annotations
              about those sequences. Scientists and clinicians use databases
              that organize and index such biological information to increase
              our understanding of health and disease and, in certain cases, as
              part of medical care.
            </div>
            <div className="font-semibold text-lg">
              David Adams - March 9, 2023
            </div>
          </div>
          <div className="bg-[#191919] flex flex-col items-left justify-center space-y-5 p-10 lg:px-52">
            <div className="font-bold text-lg">HISTORY OF BIOINFORMATICS</div>
            <div>
              The foundations of bioinformatics were laid in the early 1960s
              with the application of computational methods to protein sequence
              analysis (notably, de novo sequence assembly, biological sequence
              databases and substitution models)
            </div>
            <div className="font-light text-sm">
              Gauthier, J., Vincent, A. T., Charette, S. J., & Derome, N.
              (2019). A brief history of bioinformatics. Briefings in
              bioinformatics, 20(6), 1981–1996.
              https://doi.org/10.1093/bib/bby063
            </div>
          </div>
          <div>
            <img
              alt="bif-image"
              src="https://media.graphassets.com/44qqCQweTiuNA0ycr02a"
              className="max-h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* PURPOSE OF BIF */}
      <div className="bg-black p-16">
        <div className="text-white text-center space-y-5">
          <div className="text-3xl md:text-4xl font-bold">
            Purpose of a Bioinformatician
          </div>
          <div className="">
            Bioinformatics is a subdiscipline of biology and computing that
            serves to acquire, store, analyse and disseminate biological data,
            mostly DNA and amino acid sequences.
          </div>
        </div>
        PURPOSES
        <div className="flex flex-col md:flex-row items-center justify-center text-white text-center py-16">
          <div className="flex flex-col justify-center items-center">
            <img
              alt="one"
              src="https://media.graphassets.com/V3ukxda2S2CA0vxLuGlz"
              className="h-[350px] object-cover"
            />
            <div className="font-bold">Analyze Biological Data</div>
            <div>
              One of the main purposes of bioinformatics is to analyze and
              interpret biological data generated from high-throughput
              experiments such as genomics, transcriptomics, proteomics, and
              metabolomics.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              alt="two"
              src="https://media.graphassets.com/RywHvSJySG2oJ083GUsU"
              className="h-[350px] object-cover"
            />
            <div className="font-bold">Analyze Biological Data</div>
            <div>
              One of the main purposes of bioinformatics is to analyze and
              interpret biological data generated from high-throughput
              experiments such as genomics, transcriptomics, proteomics, and
              metabolomics.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              alt="three"
              src="https://media.graphassets.com/0jFridKUQ8uRaLJHjFpe"
              className="h-[350px] object-cover"
            />
            <div className="font-bold">Analyze Biological Data</div>
            <div>
              One of the main purposes of bioinformatics is to analyze and
              interpret biological data generated from high-throughput
              experiments such as genomics, transcriptomics, proteomics, and
              metabolomics.
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="grid md:grid-cols-2 bg-black text-white text-center px-10 py-52 space-y-10 md:space-y-0">
        <div className="space-y-5">
          <div className="font-bold text-4xl">CONTACT US</div>
          <div>abdullahsrour14@gmail.com</div>
          <div>+96181714414</div>
        </div>
        <div>
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

      {/* MAP */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8693214796194!2d35.475652815537316!3d33.89301923355072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f10cdf86989f9%3A0x920ea62c8299d366!2sLebanese%20American%20University%20-%20LAU!5e0!3m2!1sen!2slb!4v1679249553390!5m2!1sen!2slb"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
