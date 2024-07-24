import { couple as idCouple } from "../../pages/Home/translate/id.json";
import { couple as enCouple } from "../../pages/Home/translate/en.json";

// Components
import LoveSymbol from "../../components/LoveSymbol/LoveSymbol";

// Assets
// Images/Videos
import BgFloral from "../../assets/floral-gold-bg.jpg";
import GroomPicture from "../../assets/WeddingPhoto/edit/groom4.jpg";
import BridePicture from "../../assets/WeddingPhoto/edit/bride.jpg";
// Icons/Symbols
import RingsIcon from "../../assets/rings.png";
import FloralIcon from "../../assets/floral-design.png";

export default function Couple({ contentLng }) {
  return (
    <>
      <div id="couple" className="relative w-full">
        {/* Background */}
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover opacity-10"
          style={{ backgroundImage: `url(${BgFloral})` }}
        ></div>
        <div className="relative w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] pb-[60px] md:pb-[80px] lg:pb-[100px] pt-[100px] md:pt-[120px] lg:pt-[140px] flex flex-col gap-[80px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <div>
              <h1 className="font-DancingScript font-semibold text-primary-gold text-[40px] md:text-[48px] xl:text-[56px]">
                {contentLng(idCouple.title, enCouple.title)}
              </h1>
            </div>
            <LoveSymbol />
          </div>

          {/* Groom & Bride Desc */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[24px]">
            {/* Groom */}
            <div className="hidden md:flex flex-col text-right">
              <h3 className="font-DancingScript font-medium text-[32px] xl:text-[40px] text-primary-gold">
                Ivan Pratama
              </h3>
              <p className="font-Lora text-[16px] xl:text-[18px] leading-[1.6]">
                <span className="font-semibold">
                  {contentLng(
                    idCouple.coupleDesc.groom,
                    enCouple.coupleDesc.groom
                  )}
                </span>
                <br />
                Sutarno &#40;Alm&#41; & <br />
                Evy Kambey
              </p>
            </div>

            {/* Couple Pictures */}
            <div className="flex flex-initial justify-center items-center gap-[16px]">
              <img
                className="mask mask-circle w-[50%] h-full md:max-h-[230px] md:-mr-[40px] transform -scale-x-100"
                src={GroomPicture}
                alt="groom-picture"
              />
              <div className="hidden md:flex flex-none z-10 w-fit h-fit p-[20px] rounded-full bg-primary-gold">
                <img
                  className="w-[40px] h-[40px] shrink md:shrink-0 brightness-0 invert"
                  src={RingsIcon}
                  alt="rings-symbols"
                />
              </div>
              <img
                className="mask mask-circle w-[50%] h-full md:max-h-[230px] md:-ml-[40px]"
                src={BridePicture}
                alt="bride-picture"
              />
            </div>

            {/* Bride */}
            <div className="hidden md:flex flex-col text-left">
              <h3 className="font-DancingScript font-medium text-[32px] xl:text-[40px] text-primary-gold">
                Gladys Tore
              </h3>
              <p className="font-Lora text-[16px] xl:text-[18px] leading-[1.6]">
                <span className="font-semibold">
                  {contentLng(
                    idCouple.coupleDesc.bride,
                    enCouple.coupleDesc.bride
                  )}
                </span>
                <br />
                Bertie Tore & <br />
                Kristanti
              </p>
            </div>

            {/* Below Tablet Size */}
            <div className="w-full md:hidden flex justify-between">
              {/* Groom */}
              <div className="text-left">
                <h3 className="font-DancingScript font-medium text-[32px] text-primary-gold">
                  Ivan Pratama
                </h3>
                <p className="font-Lora text-[14px]/[1.6]-">
                  <span className="font-semibold">
                    {contentLng(
                      idCouple.coupleDesc.groom,
                      enCouple.coupleDesc.groom
                    )}
                  </span>
                  <br />
                  Sutarno &#40;Alm&#41; & <br />
                  Evy Kambey
                </p>
              </div>

              {/* Bride */}
              <div className="text-right">
                <h3 className="font-DancingScript font-medium text-[32px] text-primary-gold">
                  Gladys Tore
                </h3>
                <p className="font-Lora text-[14px]/[1.6]-">
                  <span className="font-semibold">
                    {contentLng(
                      idCouple.coupleDesc.bride,
                      enCouple.coupleDesc.bride
                    )}
                  </span>
                  <br />
                  Bertie Tore & <br />
                  Kristanti
                </p>
              </div>
            </div>
          </div>

          {/* Bible Quote */}
          <div className="flex justify-center">
            <div className="relative w-full md:w-fit px-[80px] py-[30px] md:px-[120px] md:py-[40px] xl:px-[140px] xl:py-[50px] rounded-xl border border-primary-gold/50 shadow-sm shadow-primary-gold/50">
              <img
                className="absolute left-[10px] top-[10px] size-[40px] md:size-[50px] xl:size-[70px]"
                src={FloralIcon}
                alt="rings-symbols"
              />
              <p className="font-Lora font-medium text-[16px] md:text-[18px] xl:text-[20px] text-center">
                {contentLng(idCouple.bibleQuote.text, enCouple.bibleQuote.text)}
                <br />
                {contentLng(
                  idCouple.bibleQuote.books,
                  enCouple.bibleQuote.books
                )}
              </p>
              <img
                className="absolute right-[10px] bottom-[10px] size-[40px] md:size-[50px] xl:size-[70px] rotate-180"
                src={FloralIcon}
                alt="rings-symbols"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
