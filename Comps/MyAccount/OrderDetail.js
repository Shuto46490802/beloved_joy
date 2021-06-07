import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const OrderDetail = ({ orderDetail, setOrderNumber, setOrderDetail }) => {

    const lineItems = orderDetail[0].node.lineItems.edges.map((item) => ({
        image: item.node.image.transformedSrc,
        name: item.node.title,
        quantity: item.node.quantity,
        price: item.node.variant.price,
        details: item.node.name.split(" - ")[1]
    }))

    return (
        <div className="c-order-detail-line-items pb-3">

            <div className="title-wrapper d-flex flex-wrap justify-content-between">

                <div className="d-flex flex-wrap align-items-center mb-1 col-10">

                    <h5 className="m-0">
                        {
                            orderDetail[0].node.fulfillments.length > 0
                                ? "order-shipped"
                                : "order-processing"
                        }
                    </h5>

                    <span className="ms-1">

                        {
                            orderDetail[0].node.name
                        }

                    </span>

                </div>

                <button
                    className="c-login-back-button"
                    onClick={() => {
                        setOrderNumber("")
                        setOrderDetail([])
                    }}
                >
                    <svg className="arrow mirror" x="0px" y="0px" viewBox="0 0 22 10">
                        <polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 " />
                    </svg>
                </button>

                {
                    orderDetail[0].node.fulfillments.length > 0
                        ? <div className="d-flex flex-column pb-1">
                            <span>
                                {orderDetail[0].node.fulfillments[0].trackingInfo[0].company}
                            </span>

                            <Link href={orderDetail[0].node.fulfillments[0].trackingInfo[0].url}>

                                <a>
                                    <span className="line-link">
                                        {
                                            orderDetail[0].node.fulfillments.length > 0
                                                ? orderDetail[0].node.fulfillments[0].trackingInfo[0].number
                                                : null

                                        }
                                    </span>
                                </a>

                            </Link>

                        </div>
                        : null
                }

            </div>

            <div className="mb-1">

                <div className="d-flex flex-column overflow-hidden" >

                    <div className="overflow-auto">

                        <table className="w-100">

                            <tbody>

                                {
                                    lineItems.map((item) =>
                                        <tr>

                                            <td>

                                                <div className="image-wrapper position-relative">

                                                    <figure className="fig-wrapper">

                                                        <Image src={item.image} layout="fill" />

                                                    </figure>

                                                </div>

                                            </td>

                                            <td className="px-6" />

                                            <td>
                                                <div className="c-order-detail-title">
                                                    {item.name}
                                                </div>

                                                <p className="c-order-detail-detail">
                                                    {item.details}
                                                </p>
                                            </td>

                                            <td className="px-6" />

                                            <td>
                                                ${item.price} x {item.quantity}
                                            </td>

                                            <td className="px-6" />

                                            <td>
                                                ${parseInt(item.price) * parseInt(item.quantity)}.00
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>


                    </div>

                </div>

            </div>

            <div>

                <div className="d-flex flex-wrap justify-content-between py-7">

                    <span>subtotal</span>

                    <div className="col-9 d-flex flex-wrap justify-content-between">

                        <span>
                            {lineItems.length}items
                        </span>

                        <span>
                            ${orderDetail[0].node.subtotalPrice}
                        </span>

                    </div>

                </div>

                <div className="d-flex flex-wrap justify-content-between py-7">

                    <span>
                        shipping
                    </span>

                    <div className="col-9 d-flex flex-wrap justify-content-between">

                        <span>
                            {orderDetail[0].node.shippingLine.code}(0.0Kg)
                        </span>

                        <span>
                            ${orderDetail[0].node.shippingLine.price}
                        </span>

                    </div>

                </div>

                <div className="d-flex flex-wrap justify-content-between py-7">

                    <span>
                        tax
                    </span>

                    <div className="col-9 d-flex flex-wrap justify-content-between">

                        <span>
                            {orderDetail[0].node.taxLines[0].title} {orderDetail[0].node.taxLines[0].ratePercentage}%
                        </span>

                        <span>
                            ${orderDetail[0].node.taxLines[0].price}
                        </span>

                    </div>

                </div>

                <div className="d-flex flex-wrap justify-content-between py-7">

                    <span>total</span>

                    <span>
                        ${orderDetail[0].node.totalPrice}
                    </span>

                </div>

            </div>

        </div>
    );
}

export default OrderDetail;