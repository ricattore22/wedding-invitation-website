// Components
import LoveSymbol from "../../components/LoveSymbol/LoveSymbol";
import VideoPlayer from "../../components/VideoPlayer";

// Assets
// Images/Videos
import BgFloral from "../../assets/floral-gold-bg.jpg";
import VideoPrewedding from "../../assets/WeddingPhoto/edit/slide-video-for-wedding.mp4";

export default function Prewedding() {
  return (
    <>
      <div id="prewedding" className="relative w-full">
        {/* Background */}
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover opacity-10"
          style={{ backgroundImage: `url(${BgFloral})` }}
        ></div>

        <div className="relative w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] py-[60px] md:py-[80px] lg:py-[100px] flex flex-col gap-[80px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h1 className="font-DancingScript font-semibold text-primary-gold text-[40px] md:text-[48px] xl:text-[56px]">
              Prewedding
            </h1>
            <LoveSymbol />
            {/* <p class="text-[16px] md:text-[18px] xl:text-[20px]">Optional Tex.</p> */}
          </div>

          {/* Galeri (Video Slideshow) */}
          <div>
            <VideoPlayer srcVideo={VideoPrewedding} />
          </div>
        </div>
      </div>
    </>
  );
}
