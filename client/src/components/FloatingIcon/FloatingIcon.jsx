import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

export default function FloatingIcon({
  isReady,
  isPlayingSong,
  togglePlayingSong,
  setChooseLang,
}) {
  const lang = localStorage.getItem("lng");

  return (
    <>
      <div className="fixed z-40 bottom-[20px] right-[20px] flex flex-col items-end gap-[10px] transition-all">
        <div
          className="size-[3.2rem] text-[1.6rem] rounded-full bg-primary-gold text-white opacity-70 font-Lora font-semibold italic flex justify-center items-center hover:scale-110 transition-all duration-150 cursor-pointer"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setChooseLang(true);
          }}
        >
          {lang}
        </div>
        <div className={`${!isReady && "hidden"}`}>
          <div
            className={`size-[4.5rem] text-[4.5rem] text-primary-gold/70 animate-spin origin-center flex justify-center items-center cursor-pointer`}
            onClick={togglePlayingSong}
          >
            <FontAwesomeIcon
              icon={isPlayingSong ? faCompactDisc : faCirclePause}
            />
          </div>
        </div>
      </div>
    </>
  );
}
