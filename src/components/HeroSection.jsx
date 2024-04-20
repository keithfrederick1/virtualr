import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import demo from "../assets/demo.png"
import demo2 from '../assets/demo2.jpg'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-pink-300 to-orange-700 text-transparent bg-clip-text">
        LongevityRx
        </span>
        <span className="bg-gradient-to-r from-purple-100 to-blue-300 text-transparent bg-clip-text">
          {" "}
          Online directory for injectable anti-psychotic medications
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
{/* Certified EPCS eRx Software */}
A safer approach to prescribing,
LongevityRx software offers a secure method for prescribing medications to your patients whether you're in the office or on the move. Accessible from anywhere, our cloud-based system is intuitive, cost-effective, and fully certified. Benefit from features like medication history, controlled substance management, automatic interaction checks, ePAs, comprehensive reporting, and more! Gain direct entry to your state's Prescription Drug Monitoring Program (PDMP/PMP) for added convenience and oversight.
Empowering Stability: Navigate Your Long-Term Journey with Ease
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-30 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          How it Works
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Request Demo
        </a>
      </div>
      <div className="flex mt-10 justify-center max-h-96 max-w-80">
      <img src={demo} alt="demo"/>
       <img src={demo2} alt="demo"/>
      </div>
    </div>
  );
};

export default HeroSection;
