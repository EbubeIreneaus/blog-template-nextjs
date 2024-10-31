'use client'
import React, { useEffect } from "react";
import Splide from '@splidejs/splide';
import Link from "next/link";

function BlogSectionThree() {
  const mySplidejs = function () {
    // mySplidejs
    const postslider_class = document.querySelector("#post-carousel") as HTMLElement;
    if (postslider_class != null) {
      const postslider = new Splide(postslider_class, {
        rewind: true,
        pagination: true,
        arrows: true,
        type: "loop",
        drag: "free",
        perPage: 3,
        perMove: 1,
        gap: 24,
        breakpoints: {
          768: {
            perPage: 2,
          },
          500: {
            perPage: 1,
          },
        },
      });
      postslider.mount();
    }
  };

  useEffect(() => {
    mySplidejs();
  }, []);
  return (
    <div
      className="relative bg-gray-50"
      style={{
        backgroundImage: "url('/img/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black bg-opacity-70">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-white text-2xl font-bold text-shadow-black">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  American
                </h2>
              </div>
              <div id="post-carousel" className="splide post-carousel">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img14.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img15.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img16.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img17.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img18.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="w-full pb-3">
                        <div className="hover-img bg-white">
                          <Link href="/blog/post">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="/img/dummy/img1.jpg"
                              alt="alt title"
                            />
                          </Link>
                          <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <Link href="/blog/post">
                                5 Tips to Save Money Booking Your Next Hotel
                                Room
                              </Link>
                            </h3>
                            <Link className="text-gray-500" href="/blog/post">
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                              Europe
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSectionThree;
