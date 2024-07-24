import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-40 navbar h-[80px] px-[16px] bg-white shadow-sm text-primary-gold">
        {/* Expand -> Above Laptop Size */}
        <div className="w-full hidden lg:flex justify-center">
          <ul className="flex justify-center items-center gap-[16px]">
            <li>
              <HashLinkCustom to="#" text="Home" />
            </li>
            <li>
              <HashLinkCustom to="#couple" text="Couple" />
            </li>
            <li>
              <HashLinkCustom to="#events" text="Events" />
            </li>
            <li>
              <h1 className="px-[24px] font-DancingScript font-bold text-[28px] xl:text-[32px]">
                I&G
              </h1>
            </li>
            <li>
              <HashLinkCustom to="#prewedding" text="Prewedding" />
            </li>
            <li>
              <HashLinkCustom to="#gifts" text="Gifts" />
            </li>
            <li>
              <HashLinkCustom to="#wishes" text="Wishes" />
            </li>
          </ul>
        </div>

        {/* Expand -> Below Laptop Size */}
        {/* Left-Side */}
        <div className="navbar-start lg:hidden flex">
          <h1 className="font-DancingScript font-bold text-[28px] xl:text-[32px]">
            I&G
          </h1>
        </div>
        {/* Right-Side */}
        <div className="z-50 navbar-end lg:hidden flex font-Lora font-medium italic">
          <div className="dropdown">
            <div tabIndex="0" role="button">
              <FontAwesomeIcon icon={faBars} className="text-[24px]" />
            </div>
            <ul
              tabIndex="0"
              className="menu menu-md dropdown-content mt-2 right-0 w-52 p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <HashLinkDDCustom to="#" text="Home" />
              </li>
              <li>
                <HashLinkDDCustom to="#couple" text="Couple" />
              </li>
              <li>
                <HashLinkDDCustom to="#events" text="Events" />
              </li>
              <li>
                <HashLinkDDCustom to="#prewedding" text="Prewedding" />
              </li>
              <li>
                <HashLinkDDCustom to="#gifts" text="Gifts" />
              </li>
              <li>
                <HashLinkDDCustom to="#wishes" text="Wishes" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const HashLinkCustom = ({ to, text }) => {
  const linkStyle =
    "py-[8px] px-[16px] rounded-xl hover:text-white hover:bg-primary-gold font-Lora font-medium italic text-[18px] xl:text-[20px] transition-all ease-in-out duration-150";
  return (
    <>
      <HashLink smooth to={to} className={linkStyle}>
        {text}
      </HashLink>
    </>
  );
};

const HashLinkDDCustom = ({ to, text }) => {
  const linkStyleDropdown =
    "py-[12px] rounded-xl hover:bg-primary-gold active:bg-primary-gold hover:text-white font-Lora font-medium italic text-[18px]";
  return (
    <>
      <HashLink smooth to={to} className={linkStyleDropdown}>
        {text}
      </HashLink>
    </>
  );
};
