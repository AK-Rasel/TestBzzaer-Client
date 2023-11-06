import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>

      <footer className="footer footer-center bg-white p-10   mt-10">

        <nav >
          <div >
            <p className="font-bold  normal-case text-3xl">Taste<span className="text-[#f56511]">Bazaar</span></p>
            <hr className="w-full border-[#f56511]" />
          </div>
          <ul className="flex gap-6 md:gap-3 lg:gap-6 flex-row md:flex-col lg:flex-row  ">
            <li className="font-semibold text-base"><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
              }
            >
              Home
            </NavLink></li>
            <li className="font-semibold text-base"><NavLink
              to="/all-food-items"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
              }
            >
              All Food Items
            </NavLink></li>
            <li className="font-semibold text-base"><NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
              }
            >
              Blog
            </NavLink></li>
          </ul>
        </nav>

      </footer>
      <footer className="footer footer-center font-semibold p-4 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by TasteBazaar</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;