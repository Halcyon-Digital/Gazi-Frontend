'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import './page.scss';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '@/components/button';
import { serviceCardData } from '@/static/serviceCard';
import ServiceCard from '@/components/service-card';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { API_ROOT, API_URL } from '@/constant';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/redux/features/cart/cartSlice';
import axios from 'axios';
import { IService } from '@/types/service';

function Checkout() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const [keyPoints, setKeyPoints] = useState<IService[]>([]);

  const sumWithInitial = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const fetchService = async () => {
    try {
      const data = await axios.get(`${API_URL}/frontend/keypoints/other`);
      setKeyPoints(data.data?.data?.rows);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  useEffect(() => {
    fetchService();
  }, []);

  return (
    <main>
      {cart.length > 0 ? (
        <section className="cart-page">
          <div className="container px-2 md:px-0">
            <div className="grid grid-cols-12 gap-6">
              {/* main content */}
              <div className=" col-span-12 md:col-span-8">
                <div className="direction-area">
                  <div className="flex justify-between item-wrapper">
                    <div className="flex items-center item flex-col">
                      <FaShoppingCart className="icon text-xl" />
                      <h4 className=" font-gotham font-medium text-sm  ">
                        My Cart
                      </h4>
                    </div>
                    <div className="flex items-center item flex-col">
                      <FaShoppingCart className=" icon text-xl" />
                      <h4 className=" font-gotham font-medium text-sm  ">
                        Payment
                      </h4>
                    </div>
                    <div className="flex items-center item flex-col">
                      <MdVerified className="icon text-xl" />
                      <h4 className=" font-gotham font-medium text-sm  ">
                        Confirmation
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="cart-elements">
                  <div className="grid grid-cols-8 gap-1 md:gap-4 product-title">
                    <div className=" col-span-4 flex items-center justify-center">
                      {/* <GoDotFill className="dot-icon" /> */}
                      <h3 className=" font-gotham font-medium text-base text-black text-center">
                        Product
                      </h3>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex items-center ">
                      {/* <GoDotFill className="dot-icon" /> */}
                      <h3 className=" font-gotham font-medium text-base text-black text-center">
                        Price
                      </h3>
                    </div>
                    <div className="col-span-2  items-center hidden md:flex">
                      {/* <GoDotFill className="dot-icon" /> */}
                      <h3 className=" font-gotham font-medium text-base text-black text-center">
                        Quantity
                      </h3>
                    </div>
                    <div className="col-span-1 flex items-center">
                      {/* <GoDotFill className="dot-icon" /> */}
                      <h3 className=" font-gotham font-medium text-base text-black text-center">
                        Subtotal
                      </h3>
                    </div>
                  </div>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-8 gap-1 md:gap-4 items-center product-item"
                    >
                      <div className="col-span-4">
                        <div className="flex items-center">
                          <div
                            className=" cursor-pointer"
                            onClick={() => dispatch(removeFromCart(item))}
                          >
                            <span>
                              <RxCross2 className="text-sm " />
                            </span>
                          </div>
                          <div className="w-[80px] mx-2 md:mx-9">
                            <Image
                              className=" w-full object-cover"
                              src={`${API_ROOT}/images/product/${item.image}`}
                              width={200}
                              height={200}
                              alt="product"
                            />
                          </div>
                          <div>
                            <h3 className=" font-gotham font-medium text-[11px] md:text-sm text-black">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <p className=" font-gotham font-medium text-primary text-sm">
                          ৳ {item.price}
                        </p>
                      </div>
                      <div className="col-span-2 hidden md:block">
                        <div className="flex items-center">
                          <div
                            className="qnt-1"
                            onClick={() => dispatch(incrementQuantity(item))}
                          >
                            <AiOutlinePlus className="text-sm" />
                          </div>
                          <div className="qnt-1 px-4 font-gotham font-light text-sm">
                            {item.quantity}
                          </div>
                          <div
                            className="qnt-1"
                            onClick={() => dispatch(decrementQuantity(item))}
                          >
                            <AiOutlineMinus className="text-sm" />
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-2 md:col-span-1">
                        <p className=" font-gotham font-medium text-primary text-sm">
                          ৳ {item.price * item.quantity}
                        </p>
                      </div>
                      <div className=" flex justify-center col-span-8 md:hidden">
                        <div className="flex items-center">
                          <div
                            className="qnt-1"
                            onClick={() => dispatch(incrementQuantity(item))}
                          >
                            <AiOutlinePlus className="text-sm" />
                          </div>
                          <div className="qnt-1 px-4 font-gotham font-light text-sm">
                            {item.quantity}
                          </div>
                          <div
                            className="qnt-1"
                            onClick={() => dispatch(decrementQuantity(item))}
                          >
                            <AiOutlineMinus className="text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* summery */}
              <div className=" col-span-12 md:col-span-4">
                <div className="py-11 px-9 cart-summery">
                  <h3 className="summery-border font-gotham font-medium text-base text-black pb-2">
                    Cart Summary
                  </h3>

                  <div className="flex justify-between items-center mt-14 summery-border pb-3">
                    <p className=" font-gotham font-medium text-sm text-black">
                      Sub Total
                    </p>
                    <p className=" font-gotham font-medium text-sm text-primary">
                      {sumWithInitial}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-3 summery-border pb-3">
                    <p className=" font-gotham font-medium text-sm text-black">
                      Shipping
                    </p>
                    <p className=" font-gotham font-medium text-sm text-black">
                      Free Shipping
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className=" font-gotham font-medium text-base text-black">
                      Total
                    </p>
                    <p className=" font-gotham font-medium text-base text-primary">
                      ৳ {sumWithInitial}
                    </p>
                  </div>
                  <Link className=" mt-14 block" href={'/checkout'}>
                    <Button className="w-full font-gotham font-medium text-lg py-1">
                      Continue to Shipping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container py-28 font-gotham text-center">
          <Image
            className=" mx-auto"
            src="/assets/images/service/empty-cart.png"
            alt="empty-cart"
            width={100}
            height={100}
          />
          <p>Your cart is Empty</p>
          <Link href={`/`}>
            <Button className="px-2 py-1 mt-2">Continue Shopping</Button>
          </Link>
        </div>
      )}
      {keyPoints.length > 0 && (
        <section className="cart-service">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyPoints.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Checkout;
