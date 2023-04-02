import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <div className="h-[90vh] w-full flex items-center justify-center text-white font-Roboto">
        <div className="flex items-center justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'I code cool <span style="color:#61ce70;">Websites</span>'
                )
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  'I develop <span style="color:#61ce70;">Web Apps</span>'
                )
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .pauseFor(1000)
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
        {/* <div className="text-xl font-normal">
          Hello! I'm <span className="text-[#61ce70]">Ehsan Ellahi</span>
          ,Frontend Developer based in Pakistan.
        </div> */}
      </div>
    </>
  );
};

export default Hero;
