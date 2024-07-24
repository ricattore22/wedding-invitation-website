import { HashLink } from "react-router-hash-link";

import { hero as idHero } from "../../pages/Home/translate/id.json";
import { hero as enHero } from "../../pages/Home/translate/en.json";

// Assets
// Images/Videos
import ImgForHero from "../../assets/WeddingPhoto/edit/img-for-hero.jpg";

export default function Hero({ enableScroll, contentLng }) {
  return (
    <>
      <div
        id="hero"
        className="hero h-screen bg-cover sm:bg-[length:160%] md:bg-[length:120%] lg:bg-[length:140%] xl:bg-[length:110%] bg-[bottom_right_30%] sm:bg-[center_right_38%] lg:bg-[bottom_40%_right_65%] xl:bg-[bottom_44%_right_80%] overflow-none"
        style={{
          backgroundImage: `url(${ImgForHero})`,
        }}
      >
        {/* Background Overlay */}
        <div className="hero-overlay bg-black/60"></div>

        {/* Hero Content */}
        <div className="flex w-full h-full lg:px-[80px] px-[16px] lg:py-[80px] py-[40px] flex-col justify-start items-center lg:items-start gap-[24px]">
          {/* Title/Invitation */}
          <div className="text-white font-medium lg:text-left text-center">
            <h3 className="font-Lora text-[20px] md:text-[26px] xl:text-[32px]">
              The Wedding Of
            </h3>
            <h2 className="font-DancingScript text-[48px] md:text-[72px] xl:text-[80px]">
              Ivan & Gladys
            </h2>
            <p className="pt-[8px] font-Lora text-[20px] md:text-[22px] xl:text-[24px] tracking-[0.17em]">
              03&nbsp;.&nbsp;05&nbsp;.&nbsp;2024
            </p>
          </div>

          <HashLink
            smooth
            to="#couple"
            className="btn bg-[#CDAA34] hover:bg-[#AB8D29] w-fit px-[32px] py-[16px] border-0 font-Lora text-[16px] xl:text-[18px] text-white font-semibold italic tracking-[.02em]"
            onClick={enableScroll}
          >
            {contentLng(idHero.textBtnOpen, enHero.textBtnOpen)}
          </HashLink>
        </div>
      </div>
    </>
  );
}
