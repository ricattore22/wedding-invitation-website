import LoveSymbolIcon from "../../assets/love-symbol-outline.png";

export default function LoveSymbol({ editColor = "" }) {
  return (
    <>
      <img
        className={`w-[40px] ${editColor}`}
        src={LoveSymbolIcon}
        alt="love-symbols"
      />
    </>
  );
}
