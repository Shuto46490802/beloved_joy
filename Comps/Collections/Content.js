import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const Content = ({ products, scrollerRef }) => {

    return (
        <div ref={scrollerRef} className="collections__content__inner over-flow-hidden ">

            <div className="collections__content__list h-100">

                <div className="collections__content__list__inner pt-xl-4 pt-md-5 pe-md-2 pe-lg-3 ps-md-3 ps-lg-0">

                    <div className="collections__content__items d-flex flex-wrap pb-3">

                        {
                            products.map((data, i) => {

                                return <div key={i} className="collections__content__item col-sm-6 col-12 p-xl-3">

                                    <Link ariaLabel="to product page" href={`/products/[slug]`} as={`/products/${data.slug}`}>

                                        <a className="collections__content__item__link d-block">

                                            <div className="collections__content__item__img position-relative mb-1">

                                                <figure className="fig-wrapper">

                                                    <Image src={data.images[0].src} layout="fill" alt="" />

                                                </figure>

                                                <figure className="fig-wrapper c-product-thumb__overlay">

                                                    <Image src={data.images[1].src} layout="fill" alt="" />

                                                </figure>

                                            </div>

                                            <div className="collections__content__item__text">

                                                <h6 className="collections__content__item__name text-white m-0">{data.name}</h6>

                                                <span className="collections__content__item__price text-white">${data.price}</span>

                                            </div>

                                        </a>

                                    </Link>

                                </div>

                            })
                        }

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Content;