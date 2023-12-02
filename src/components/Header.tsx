"use client";
import React, { Fragment } from "react";
import Link from "../../node_modules/next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover, Transition, Disclosure, Dialog } from "@headlessui/react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState();
  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            {/* //this is a server only component, push or website on seo rankings */}
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
              alt=""
            />
          </Link>
        </div>
        {/* burgerMenu */}
        {/* on large screen it will hide, it is monile only by default */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon className="h-6 w-6" area-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
