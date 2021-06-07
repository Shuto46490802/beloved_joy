import { useEffect, useState } from "react";
import OrderDetail from "./OrderDetail";
import OrderHitory from "./OrderHistory";

import { Transition, TransitionGroup } from "react-transition-group";
import { gsap } from "gsap";

const Orders = ({ ordersDetail }) => {

    const [orderNumber, setOrderNumber] = useState("");
    const [orderDetail, setOrderDetail] = useState([]);

    const getOrderDetail = (_orderName) => {

        setOrderNumber(_orderName);


        const filteredOrderDetail = ordersDetail.filter((order) => {
            let orderName = order.node.name
            return orderName === _orderName
        })

        setOrderDetail(filteredOrderDetail)
    }

    const onEnter = (node) => {

        gsap.fromTo(node,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.75,
                delay: 0.4
            })

    }

    const onExit = (node) => {

        gsap.fromTo(node,
            {
                opacity: 1
            },
            {
                opacity: 0,
                duration: 0.75
            })

    }

    return (
        <div className="c-orders position-absolute w-100">

            <div className="d-flex align-items-center mb-3">

                <div className="text-left text-lg-left pe-2 pe-lg-0">

                    <h4>
                        orders
                    </h4>

                </div>

            </div>

            <TransitionGroup className="w-100 position-relative" >

                <Transition
                    timeout={750}
                    key={orderNumber}
                    onEnter={onEnter}
                    onExit={onExit}
                >

                    <div className="w-100 overflow-hidden position-absolute">

                        <div className="overflow-auto">

                            {
                                ordersDetail.length === 0
                                    ? <h5 className="pb-1 no-orders">no-orders</h5>
                                    : orderNumber === ""
                                        ? <OrderHitory getOrderDetail={getOrderDetail} ordersDetail={ordersDetail} />
                                        : <OrderDetail orderDetail={orderDetail} setOrderNumber={setOrderNumber} setOrderDetail={setOrderDetail} />
                            }

                        </div>

                    </div>

                </Transition>

            </TransitionGroup>

        </div>
    );
}

export default Orders;