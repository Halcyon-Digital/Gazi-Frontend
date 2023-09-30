'use client';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
import './index.scss';
import { RiArrowDropRightLine } from 'react-icons/ri';

const MegaMenu = () => {
  return (
    <div className="py-2 shadow">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="flex">
            {/* main Item */}
            <div className="mr-2 text-left relative heading">
              <div className="py-1  md:cursor-pointer px-5 font-gotham font-medium text-sm flex justify-between items-center  pr-5 group border border-black text-black hover:border-primary hover:text-white hover:bg-primary transition-all">
                Home Appliance
                <span className=" text-xs md:hidden inline">
                  <BsChevronDown className=" text-[5px]" />
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden">
                  <BsChevronDown className=" text-[9px]" />
                </span>
              </div>
              <div className=" absolute z-10 sub-heading shadow">
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Gas Stove
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Cookware
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ======= */}
              </div>
            </div>
            {/* main Item */}
            <div className="mr-2 text-left relative heading">
              <div className="py-1  md:cursor-pointer px-5 font-gotham font-medium text-sm flex justify-between items-center  pr-5 group border border-black text-black hover:border-primary hover:text-white hover:bg-primary  transition-all">
                Bathware
                <span className=" text-xs md:hidden inline">
                  <BsChevronDown className=" text-[5px]" />
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden">
                  <BsChevronDown className=" text-[9px]" />
                </span>
              </div>
              <div className=" absolute z-10 sub-heading shadow">
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Gas Stove
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Cookware
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ======= */}
              </div>
            </div>
            {/* main Item */}
            <div className="mr-2 text-left relative heading">
              <div className="py-1  md:cursor-pointer px-5 font-gotham font-medium text-sm flex justify-between items-center  pr-5 group border border-black text-black hover:border-primary hover:text-white hover:bg-primary  transition-all">
                Pumps & Motors
                <span className=" text-xs md:hidden inline">
                  <BsChevronDown className=" text-[5px]" />
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden">
                  <BsChevronDown className=" text-[9px]" />
                </span>
              </div>
              <div className=" absolute z-10 sub-heading shadow">
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Gas Stove
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Cookware
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Heading item */}
                <div>
                  <div className=" relative flex justify-between items-center sub-item">
                    <Link
                      className=" font-gotham font-medium my-2 text-sm text-black sub-element"
                      href={'/category/gas-stove'}
                    >
                      Kitchen Hood
                    </Link>
                    <span>
                      <RiArrowDropRightLine className=" text-xl" />
                    </span>
                    <div className=" absolute children-item shadow">
                      <ul>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Tempered Glass
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Stainless Steel
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Gst
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" font-gotham font-medium text-sm  text-black"
                            href={'/category/gas-stove'}
                          >
                            Single Burner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ======= */}
              </div>
            </div>
          </div>
          <div>
            <Link
              className=" font-gotham font-medium text-sm text-black hover:text-primary "
              href={'/videos'}
            >
              Videos
            </Link>
            <Link
              className=" font-gotham font-medium text-sm text-black hover:text-primary ml-14"
              href={'/blogs'}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
