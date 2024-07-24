import { useEffect, useState } from "react";

import { wishes as idWishes } from "../../pages/Home/translate/id.json";
import { wishes as enWishes } from "../../pages/Home/translate/en.json";

import { indexWishes as apiIndexWishes } from "../../api/apiWishes";

// Components
import WishesList from "../../components/Wishes/WishesList/WishesList";
import WishesForm from "../../components/Wishes/WishesForm/WishesForm";
import LoveSymbol from "../../components/LoveSymbol/LoveSymbol";

// Assets
// Images/Videos
import BgFloral from "../../assets/floral-gold-bg.jpg";
import ImgForWishes from "../../assets/WeddingPhoto/edit/img-for-wishes.jpg";

export default function Wishes({ contentLng }) {
  const [isError, setIsError] = useState(null);

  const [wishes, setWishes] = useState([]);

  const indexWishes = async () => {
    try {
      const res = await apiIndexWishes();
      setWishes(res.data);
      // console.log("Fetching");
    } catch (err) {
      setIsError(true);
      // console.error("Can't Fetching");
    }
  };

  useEffect(() => {
    indexWishes();
    console.log("Memuat Ucapan...");
  }, []);

  return (
    <>
      <div id="wishes" className="relative w-full">
        {/* Background */}
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover opacity-10"
          style={{ backgroundImage: `url(${BgFloral})` }}
        ></div>
        {/* Content */}
        <div className="relative w-full max-w-[1280px] mx-auto px-[16px] lg:px-[80px] py-[80px] flex flex-col gap-[80px]">
          {/* Title */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h1 className="font-DancingScript font-semibold text-primary-gold text-[40px] md:text-[48px] xl:text-[56px]">
              {contentLng(idWishes.title, enWishes.title)}
            </h1>
            <LoveSymbol />
            {/* <p className="text-[16px] md:text-[18px] xl:text-[20px]">Optional Tex.</p> */}
          </div>

          {/* Wishes List */}
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div
              className="basis-2/3 max-h-[450px] p-[16px] space-y-[8px] border border-primary-gold/30 rounded-2xl overflow-y-auto"
              onClick={indexWishes}
            >
              {/* Error Message */}
              {isError && (
                <div className="w-fit alert alert-error">
                  <span className="font-Lora italic font-semibold tracking-wide text-white">
                    {contentLng(
                      idWishes.list.message.error,
                      enWishes.list.message.error
                    )}
                  </span>
                </div>
              )}
              {/* List */}
              {wishes.map((data, id) => {
                return (
                  <WishesList
                    key={id}
                    fromWho={data.name}
                    fromWhere={data.address}
                    wishes={data.wishes}
                    contentLng={contentLng}
                  />
                );
              })}
            </div>

            {/* Wishes Form */}
            <div className="basis-1/3 space-y-[16px]">
              <h1 className="font-Lora font-semibold italic text-primary-gold text-[18px] xl:text-[20px]">
                {contentLng(idWishes.form.title, enWishes.form.title)}
              </h1>
              <WishesForm indexWishes={indexWishes} contentLng={contentLng} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
