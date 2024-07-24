import { events as idEvents } from "../../pages/Home/translate/id.json";
import { events as enEvents } from "../../pages/Home/translate/en.json";

// Components
import Box from "../../components/EventsBox/Box";
import LoveSymbol from "../../components/LoveSymbol/LoveSymbol";

// Assets
// Images/Videos
import BgFloral from "../../assets/floral-gold-bg.jpg";
import ImgForEvents from "../../assets/WeddingPhoto/edit/img-for-events.jpg";

export default function Events({ contentLng }) {
  return (
    <>
      <div id="events" className="relative w-full">
        {/* Background */}
        <div
          className="absolute -z-20 w-full h-full top-0 left-0 bg-cover opacity-10"
          style={{ backgroundImage: `url(${BgFloral})` }}
        ></div>
        {/* Half Background */}
        <div
          className="absolute -z-10 w-full h-3/6 md:h-3/5 top-0 left-0 bg-no-repeat bg-cover sm:bg-cover md:bg-[length:130%] lg:bg-cover bg-center md:bg-[center_bottom_70%]"
          style={{ backgroundImage: `url(${ImgForEvents})` }}
        >
          {/* Background Overlay */}
          <div className="w-full h-full bg-[#161308]/60"></div>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] py-[80px] flex flex-col gap-[80px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h1 className="font-DancingScript font-semibold text-white text-[40px] md:text-[48px] xl:text-[56px]">
              {contentLng(idEvents.title, enEvents.title)}
            </h1>
            <LoveSymbol editColor="brightness-0 invert" />
            {/* <p className="text-[16px] md:text-[18px] xl:text-[20px]">Optional Tex.</p> */}
          </div>

          {/* Info Box */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-[16px] xl:gap-[24px]">
            {/* Box 1 */}
            <Box
              modalId="modalCeremony"
              boxTitle={contentLng(idEvents.box1.title, enEvents.box1.title)}
              boxDetails={
                <>
                  <p className="font-semibold text-[16px] xl:text-[18px] leading-[1.6]">
                    {contentLng(
                      idEvents.box1.desc.part1,
                      enEvents.box1.desc.part1
                    )}
                    <br />
                    {contentLng(
                      idEvents.box1.desc.part2,
                      enEvents.box1.desc.part2
                    )}
                  </p>
                  <p className="font-Lora italic text-[16px] xl:text-[18px]">
                    {contentLng(idEvents.box1.location, enEvents.box1.location)}
                  </p>
                </>
              }
              btnModal={true}
              txtModalBtn={contentLng(
                idEvents.box1.modal.textBtn,
                enEvents.box1.modal.textBtn
              )}
              modalDetails={
                <>
                  <p className="mb-[16px] font-Lora italic text-[16px] xl:text-[18px]">
                    {contentLng(
                      idEvents.box1.modal.title,
                      enEvents.box1.modal.title
                    )}
                  </p>
                  <p className="font-semibold text-primary-gold text-[16px] xl:text-[18px]">
                    Meeting ID : 222 035 2024
                  </p>
                  <p className="font-semibold text-primary-gold text-[16px] xl:text-[18px]">
                    Password : 376269
                  </p>
                </>
              }
            />

            {/* Box 2 */}
            <Box
              modalId="modalReception"
              boxTitle={contentLng(idEvents.box2.title, enEvents.box2.title)}
              boxDetails={
                <>
                  <p className="font-Lora font-medium italic text-[16px] xl:text-[18px]">
                    {contentLng(idEvents.box2.desc, enEvents.box2.desc)}
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
