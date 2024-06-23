import video1 from "../assets/2078587-hd_1920_1080_24fps.mp4";
import video2 from "../assets/3936463-hd_1920_1080_25fps.mp4";
import {Link} from "react-router-dom";
import styles from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className={styles.websitename}>
        Nirvana
        
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        The World's No.1 Matchmaking Service
      </p>
      <div className="flex justify-center my-10">
        <Link to="/userForm"
          className="bg-gradient-to-r from-pink-400 to-rose-600 py-3 px-4 mx-3 text-transparent bg-clip-text rounded-md"
        >
          Register Now
        </Link>
        <Link to="./matches"
         className="py-3 px-4 mx-3 rounded-md border">
          Matchmaking
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#B76E79] shadow-sm shadow-[#E8B7B7] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#B76E79] shadow-sm shadow-[#E8B7B7] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
