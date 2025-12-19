import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import './WS.css';

function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <Snowfall 
        color="	#c6fbff"
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 100,
        }}
      />
      {/* <img src="/wifi.svg" className="icon icon1" alt="icon" />
      <img src="/camera1.svg" className="icon icon2" alt="icon" />
      <img src="/lock.svg" className="icon icon3" alt="icon" />
      <img src="/chain.svg" className="icon icon4" alt="icon" />
      <img src="/camera2.svg" className="icon icon5" alt="icon" />
      <img src="/gear.svg" className="icon icon6" alt="icon" />
      <img src="/music.svg" className="icon icon7" alt="icon" />
      <img src="/headphone.svg" className="icon icon8" alt="icon" /> */}

      <img src="/pet-elements/element-1.svg" className="icon absolute right-[45%] top-0" alt="icon" />
      <img src="/pet-elements/element-2.svg" className="icon absolute right-25 bottom-15" alt="icon" />
      <img src="/pet-elements/element-3.svg" className="icon absolute right-20 top-10" alt="icon" />
      <img src="/pet-elements/element-4.svg" className="icon absolute left-20 top-10" alt="icon" />
      <img src="/pet-elements/element-5.svg" className="icon absolute left-40 bottom-20" alt="icon" />

      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-row items-center justify-center mb-4 gap-x-2">
          <img src="/logos/mlob_logo.png" height={55} width={55} alt="MLOB Logo" className=" rounded-full" />
          <img src="/logos/official_seal_of_cebu_city_small.png" height={55} width={55} alt="Cebu City Logo" className=" rounded-full" />
          <img src="/logos/dvmf_logo.jpg" height={55} width={55} alt="DVMF Logo" className=" rounded-full" />
          <img src="/logos/sambag_1_logo.jpg" height={55} width={55} alt="Sambag 1 Logo" className=" rounded-full" />
          <img src="/logos/sambag_2_logo.png" height={55} width={55} alt="Sambag 2 Logo" className=" rounded-full" />
          <img src="/logos/saver_logo.png" height={65} width={65} alt="Saver Logo" className=" rounded-full" />
          <img src="/logos/pawtopia_logo.png" height={55} width={55} alt="Pawtopia Logo" className="" />
          <img src="/cite_logo.svg" height={65} width={65} alt="SWU Logo" className="" />
        </div>
        
        {/* <p className="subtitle">Welcome to the</p> */}
        <p className="text-7xl my-6">
          <span className='text-[#00336C] font-bold'>MERRY</span><span className='text-[#D2273A] font-bold'> CHRIST<span className='text-[#F5BE01] font-bold'>MAS</span></span><span className='text-[#00336C] font-bold'> PAWS</span> 
        </p>
        <p className="text-[#D2273A] text-2xl">PHOTOBOOTH</p>
        <Link to="/camera">
          <button className="bg-[#FFBB5F] py-4 px-8 rounded-full font-bold text-white mt-8"><span>START →</span></button>
        </Link>
      </div>
      <div className="flex items-end gap-2 justify-center absolute bottom-20 text-center">
         <p>Powered by</p>
         <img src="/logos/pawtopia_logo.png" height={30} width={30} alt="SWU Logo" className="mx-auto mt-2" />
         <p>Pawtopia</p>
      </div>
     
    </div>
  );
}

export default WelcomeScreen;
