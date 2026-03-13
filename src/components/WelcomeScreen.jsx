import { Link } from 'react-router-dom';
import './WS.css';

function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden relative">

      {/* Cloud decorations */}
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute top-4 left-6 w-44 opacity-50 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute top-2 right-16 w-60 opacity-35 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute bottom-24 left-10 w-52 opacity-45 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute bottom-6 right-6 w-40 opacity-55 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute top-1/2 right-2 w-32 opacity-25 pointer-events-none" />

      {/* Panpan mascots */}
      <img src="/awscc/panpan1.png" width={180} height={180} className="icon absolute right-[45%] top-10" alt="Panpan" />
      <img src="/awscc/panpan3.png" width={180} height={180} className="icon absolute right-25 bottom-45" alt="Panpan" />
      <img src="/awscc/panpan2.png" width={180} height={180} className="icon absolute right-20 top-25" alt="Panpan" />
      <img src="/awscc/panpan4.png" width={180} height={180} className="icon absolute left-20 top-25" alt="Panpan" />
      <img src="/awscc/panpan5.png" width={180} height={180} className="icon absolute left-40 bottom-40" alt="Panpan" />

      {/* Center content */}
      <div className="flex flex-col justify-center items-center text-center z-10">
        {/* Logo row */}
        {/* <div className="flex flex-row items-center justify-center  gap-x-4 rounded-2xl px-6  ">
          <img src="/awscc/awscclogo.png" height={52} width={52} alt="AWSCC Logo" className="rounded-full" />
          <img src="/awscc/swudevslogosquare.png" height={56} width={56} alt="SWUdevs Logo" className="rounded-full" />
        </div> */}

        <img
          src="/awscc/it_summit_logo.png"
          height={52}
          width={300}
          alt="IT Next Summit Logo"
          className="mb-2"
          style={{ filter: 'drop-shadow(0 10px 8px rgba(236, 106, 64, 0.35))' }}
        />
        <p className="text-[#f58e64] text-2xl font-bold tracking-[0.3em]">2026 · PHOTOBOOTH</p>
        <Link to="/camera">
          <button className="start-btn mt-8"><span>START →</span></button>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 justify-center absolute bottom-8 text-center text-sm font-semibold z-10">
        <p className="text-[#ec6a40]/80 inline-flex items-center gap-2 whitespace-nowrap">
          <span>Powered by</span>
          <img src="/awscc/swudevslogo.png" height={24} width={80} alt="SWUdevs"/>
          <span>&</span>
          <img src="/awscc/awscclogo.png" height={30} width={30} alt="AWSCC" className="rounded-full" />
        </p>
      </div>

    </div>
  );
}

export default WelcomeScreen;
