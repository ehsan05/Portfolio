import Image from 'next/image';
const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row h-[90vh] pt-[7rem]">
      <div className="font-Poppins text-white md:w-[50%] h-full">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-left">
          Readme.
        </h1>
        <p className="mt-[1rem] text-base md:text-lg">
          Happiest when I'm <span>learning, building and contributing</span> to
          meaningful projects. I love building high-quality products and
          bringing them to life through design and code. I am highly motivated
          and thrive in fast-paced, collaborative environments where I can work
          with my team to continuously ship, learn, and iterate. <br />
          My strong communication and problem-solving skills allow me to
          contribute effectively to any project, and I thrive on the opportunity
          to learn and grow alongside my team. When I'm not in front of a
          screen, you can find me at the gym, tweeting, reading, traveling, or
          exploring nature.
          <br /> <span>Let's build cool things!</span>
        </p>
        <br />
        <br />
        The main area of my expertise are front-end & backend like:
        <div className="flex flex-col md:flex-row pt-[10px] p-8 md:items-center justify-center ">
          <div className="lg:w-[50%]">
            <ul className="list-disc">
              <span>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
              </span>
            </ul>
          </div>
          <div className="lg:w-[50%]">
            <ul className="list-disc">
              <span>
                <li>TypeScript</li>
                <li>Tailwind</li>
                {/* <li>Node.js</li> */}
                {/* <li>Express.js</li> */}
                {/* <li>MySQL</li> */}
                {/* <li>MongoDb</li> */}
                <li>Git/GitHub</li>
              </span>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] flex items-center justify-center lg:pt-[2rem]">
        <Image src="/about.svg" width={350} height={350}></Image>
      </div>
    </div>
  );
};

export default About;
