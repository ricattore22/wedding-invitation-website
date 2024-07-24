export default function Footer({ ImgBg, ImgFloralDecor }) {
  return (
    <>
      <div className="relative w-full" id="footer-section">
        {/* Background */}
        <div
          className="absolute -z-10 w-full h-full top-0 left-0 bg-no-repeat bg-cover sm:bg-[length:130%] md:bg-[length:100%] lg:bg-cover bg-center sm:bg-[center_bottom_55%] md:bg-[center_bottom_55%] xl:bg-[center_bottom_50%]"
          style={{ backgroundImage: `url(${ImgBg})` }}
        >
          {/* Background Overlay */}
          <div className="w-full h-full bg-[#161308]/60"></div>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] py-[60px] md:py-[80px] flex flex-col gap-[80px]">
          {/* Title */}
          <div className="w-full flex flex-col items-center gap-[16px] text-center">
            <h1 className="font-DancingScript font-semibold text-white text-[24px] sm:text-[32px] xl:text-[40px]">
              &#35;GLADtohaveVan
            </h1>
          </div>

          {/* Decoration */}
          <img
            className="hidden md:flex absolute bottom-[20px] left-[20px] size-[40px] md:size-[50px] xl:size-[60px] -scale-y-100"
            src={ImgFloralDecor}
          />
          <img
            className="hidden md:flex absolute bottom-[20px] right-[20px] size-[40px] md:size-[50px] xl:size-[60px] transform -scale-x-100 -scale-y-100"
            src={ImgFloralDecor}
          />
        </div>
      </div>
    </>
  );
}
