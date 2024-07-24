import { useState } from "react";

import { wishes as idWishes } from "../../../pages/Home/translate/id.json";
import { wishes as enWishes } from "../../../pages/Home/translate/en.json";

import { addWishes as apiAddWishes } from "../../../api/apiWishes";

export default function WishesForm({ contentLng, indexWishes }) {
  const [isLoading, setIsLoading] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(null);

  const [guestWishes, setGuestWishes] = useState({
    name: "",
    address: "",
    wishes: "",
  });

  const handleChange = (e) => {
    setGuestWishes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    document.body.style.overflow = "hidden";

    try {
      await apiAddWishes(guestWishes);
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      document.body.style.overflow = "scroll";

      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);

      indexWishes();
    }
  };

  if (isLoading) {
    return (
      <>
        <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-primary-gold"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[16px]">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder={contentLng(idWishes.form.name, enWishes.form.name)}
            className="input input-bordered w-full border-primary-gold focus:border-primary-gold focus:outline-primary-gold"
            required
          />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder={contentLng(
              idWishes.form.address,
              enWishes.form.address
            )}
            className="input input-bordered w-full border-primary-gold focus:border-primary-gold focus:outline-primary-gold"
            required
          />
          <textarea
            name="wishes"
            onChange={handleChange}
            placeholder={contentLng(idWishes.form.wishes, enWishes.form.wishes)}
            className="textarea textarea-bordered h-[120px] text-[16px] border-primary-gold focus:border-primary-gold focus:outline-primary-gold"
            required
          ></textarea>
          <button
            className="btn bg-[#CDAA34] hover:bg-[#AB8D29] w-fit px-[32px] py-[16px] border-0 font-Lora text-[16px] xl:text-[18px] text-white font-semibold italic tracking-[.02em]"
            type="submit"
          >
            {contentLng(
              idWishes.form.textBtnSubmit,
              enWishes.form.textBtnSubmit
            )}
          </button>
        </div>
      </form>

      <div className="toast toast-bottom toast-start">
        {isSuccess && (
          <div className="alert alert-success">
            <span className="font-Lora italic font-semibold tracking-wide text-white">
              {contentLng(
                idWishes.form.message.success.part1,
                enWishes.form.message.success.part1
              )}
              <br />
              {contentLng(
                idWishes.form.message.success.part2,
                enWishes.form.message.success.part2
              )}
            </span>
          </div>
        )}
        {isError && (
          <div className="alert alert-error">
            <span className="font-Lora italic font-semibold tracking-wide">
              {contentLng(
                idWishes.form.message.error,
                enWishes.form.message.error
              )}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
