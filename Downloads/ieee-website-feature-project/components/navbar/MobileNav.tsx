import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";
import { SponsorshipBtnNav } from "../buttons/SponsorshipBtn";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="pr-6"
        onClick={() => setOpen(true)} // Open the menu when the button is clicked
      >
        <span className="sr-only">Open menu</span>
        <MdMenu size={35} color="black" aria-hidden="true" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 flex px-2 pt-4 sm:px-4">
                        <button
                          type="button"
                          className=""
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <MdClose size={35} aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
                        <ul className="flex flex-col items-start font-raleway text-display-s font-bold gap-6 pt-8">
                          <li>
                            <Link href="/">Home</Link>
                          </li>

                          <li>
                            <Link href="/about">About Us</Link>
                          </li>

                          <li>
                            <Link href="/events">Events</Link>
                          </li>

                          <li>
                            <Link href="/projects">Projects</Link>
                          </li>

                          <li>
                            <Link href="contact">Contact us</Link>
                          </li>
                          <li className="w-full">
                            <SponsorshipBtnNav />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
