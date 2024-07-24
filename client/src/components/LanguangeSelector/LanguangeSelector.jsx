const lang = [
  { langCode: "id", langName: "Indonesia" },
  { langCode: "en", langName: "English" },
];

export default function LanguangeSelector({ setChooseLang }) {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full h-full">
        <div className="flex w-full h-full p-[40px] bg-black/90 flex-col md:flex-row justify-center items-center gap-[40px]">
          {lang.map((lng, i) => {
            return (
              <button
                key={i + 1}
                onClick={() => {
                  localStorage.setItem("lng", lng.langCode);

                  document.body.style.overflow = "scroll";
                  setChooseLang(false);
                }}
                className="btn h-[3.5rem] px-[3rem] btn-ghost btn-lg rounded-xl hover:bg-primary-gold text-[24px] xl:text-[32px] text-white"
              >
                {lng.langName}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
