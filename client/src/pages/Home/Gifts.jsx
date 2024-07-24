import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

import { gifts as idGifts } from "../../pages/Home/translate/id.json";
import { gifts as enGifts } from "../../pages/Home/translate/en.json";

// Assets
// Images/Videos
import ImgForWishes from "../../assets/WeddingPhoto/edit/img-for-wishes.jpg";
import BgFloral from "../../assets/floral-gold-bg.jpg";

export default function Gifts({ contentLng }) {
  return (
    <>
      <div id="gifts" className="relative w-full">
        {/* Background */}
        <div
          className="absolute -z-10 w-full h-full top-0 left-0 bg-no-repeat bg-cover md:bg-[length:150%] lg:bg-[length:130%] bg-right sm:bg-[center_right_40%] md:bg-[center_bottom_70%]"
          style={{ backgroundImage: `url(${ImgForWishes})` }}
        >
          <div className="w-full h-full bg-black/60"></div>
        </div>
        <div className="relative w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] py-[60px] md:py-[80px] lg:py-[100px] flex flex-col gap-[40px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <p className="pt-[32px] text-[16px] font-Lora italic text-white md:text-[18px] xl:text-[20px] tracking-wide">
              {contentLng(idGifts.title, enGifts.title)}
            </p>
          </div>

          <div className="flex justify-center">
            {/* Gifts Btn & Box Modal */}
            <button
              className="btn bg-[#CDAA34] hover:bg-[#AB8D29] w-fit px-[32px] py-[16px] border-0 font-Lora text-[16px] xl:text-[18px] text-white font-semibold italic tracking-[.02em]"
              onClick={() => document.getElementById("modalGift").showModal()}
            >
              <FontAwesomeIcon icon={faGift} />
              {contentLng(idGifts.modal.title, enGifts.modal.title)}
            </button>
            <dialog id="modalGift" className="modal">
              <div className="modal-box font-Lora italic space-y-[16px]">
                {/* Close Box Btn */}
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                {/* Box Content */}

                {/* p1 */}
                <div className="p-[32px] rounded-xl border text-center space-y-[12px]">
                  <h3 className="font-semibold text-[16px] xl:text-[18px]">
                    BRI
                  </h3>
                  <p>0647 0100 0719 564 - a/n Ivan Satrio Pratama</p>
                </div>

                {/* p2 */}
                <div className="p-[32px] rounded-xl border text-center space-y-[12px]">
                  <h3 className="font-semibold text-[16px] xl:text-[18px]">
                    BCA
                  </h3>
                  <p>7800449051 - a/n Gladys Liany Tore</p>
                </div>

                {/* p3 */}
                <div className="p-[32px] rounded-xl border text-center space-y-[12px]">
                  <h3 className="font-semibold text-[16px] xl:text-[18px]">
                    Paypal
                  </h3>
                  <p>gladystoree@gmail.com </p>
                </div>
              </div>

              {/* Close Backdrop */}
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}
