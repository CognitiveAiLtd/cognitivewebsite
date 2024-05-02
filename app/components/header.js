"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Links from "./links";
import Link from "next/link";
import useDarkMode from "../components/darkmode";
import Image from "next/image";
export default function Header() {
  const [setTheme, theme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const navigation = {
    pages: [
      { name: "Home", href: "/" },
      {
        name: "ABOUT US",
        href: "/#about",
      },

      {
        name: "OUR SERVICES",
        href: "/#our-service",
      },

      {
        name: "OUR TEAM",
        href: "/#team",
      },

      {
        name: "CONTACT US",
        href: "/#contact",
      },
    ],
  };
  return (
    <div className="main-header bg-white dark:bg-black">
      <button
        type="button"
        className="border border-[rgb(249,188,96)] p-2 text-[rgb(249,188,96)] lg:hidden mob-menu"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <Image
          className="hamburger-menu"
          src="/more.png"
          alt="Logo"
          width={32}
          height={32}
          priority
        />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 xl:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>X
                  </button>
                </div>
                <div className="space-y-6 mt-2 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2  text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="z-10  w-full items-center justify-between text-sm lg:flex header-main">
        <div className="container mx-auto">
          <div className="main-head">
            <div className="flex items-center justify-between">
              <div className="left-0 top-0">
                <div className="logo">
                  <Link href="/">
                    {" "}
                    <Image
                      className="logo"
                      src="/logo.png"
                      alt="Logo"
                      width={250}
                      height={24}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="navigation hidden lg:block">
                <Links />
                <div className="flex items-center gap-6">
                  <ion-icon
                    onclick="onToggleMenu(this)"
                    name="menu"
                    className="text-3xl cursor-pointer  
                                    md:hidden text-white"
                  ></ion-icon>
                </div>
              </div>

              <div className="btn btn-subscribe">
                <button className="btn btn-subscribe float-end text-black dark:text-white border-black dark:border-white">
                  <Link
                    href={
                      "https://email.cognitive.ai/subscription?f=HnGIUs81pX56DkZCwxGT2vxE763xkOjn5K90xNmulss892s892WZSnSGERC9UISWOEQs763K"
                    }
                  >
                    Subscribe
                  </Link>
                </button>
              </div>

              <div className="light-dark">
                {theme === "dark" ? (
                  <svg
                    onClick={() => {
                      setTheme("light")
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
