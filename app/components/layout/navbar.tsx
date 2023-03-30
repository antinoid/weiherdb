import { NavLink } from "@remix-run/react";
import { To } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed w-20 h-screen duration-500 ease-out group/nav bg-slate-500 max-sm:h-20 max-sm:w-screen sm:hover:w-64">
      <ul className="flex flex-col items-center h-full p-0 m-0 list-none max-sm:flex-row">
        <li className="w-full mb-3 text-2xl font-bold tracking-wide text-center uppercase">
          <NavLink
            to="/"
            className="flex items-center h-20 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 max-sm:justify-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="mx-6 w-8 min-w-[32px]"
            >
              <g>
                <path fill="#f0f0f0" d={svgPathHome} />
              </g>
            </svg>
            <span className="hidden ml-4 sm:group-hover/nav:inline">Home</span>
          </NavLink>
        </li>
        <hr className="mx-5 mb-1 w-[95%] border-t-2 border-[#f0f0f0] px-5" />
        <li className="w-full">
          <NavLink
            to="/entries"
            className="flex items-center h-20 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 max-sm:justify-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="mx-6 max-h-8 w-8 min-w-[32px]"
            >
              <path fill="white" d={svgPathCalendar} />
            </svg>
            <span className="hidden ml-4 sm:group-hover/nav:inline">
              Einträge
            </span>
          </NavLink>
        </li>
        <li className="w-full last:mt-auto">
          <NavLink
            to="/stock"
            className="flex items-center h-20 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 max-sm:justify-center"
          >
            <span className="hidden ml-4 sm:group-hover/nav:inline">
              Bestand
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function NavElement({ to, text }: { to: To; text: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex w-full cursor-pointer items-center rounded-t-lg px-1"
          : "flex w-full cursor-pointer items-center rounded-t-lg px-1"
      }
    >
      <span className="mx-auto text-sm uppercase pointer-events-none sm:text-lg sm:font-semibold">
        {text}
      </span>
    </NavLink>
  );
}

const svgPathHome =
  "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";

const svgPathCalendar =
  "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"; // viewBox="0 0 448 512"

{
  /* <svg
aria-hidden="true"
focusable="false"
data-prefix="fad"
data-icon="alien-monster"
role="img"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 576 512"
className="mx-6 w-8 min-w-[32px]"
>
<g className="fa-group">
  <path
    fill="currentColor"
    d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
    className="fa-secondary"
  ></path>
  <path
    fill="currentColor"
    d="M160,320h64V224H160Zm192-96v96h64V224Z"
    className="fa-primary"
  ></path>
</g>
</svg> */
}
