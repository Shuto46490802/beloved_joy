import React from "react";

const OrderHitory = ({ ordersDetail, getOrderDetail }) => {

    const handleTime = (_time) => {

        const date = new Date(_time).toString();
        let month = date.slice(4, 7);

        switch (month) {
            case "Jan":
                month = "01";
                break;
            case "Feb":
                month = "02";
                break;
            case "Mar":
                month = "03";
                break;
            case "Apr":
                month = "04";
                break;
            case "May":
                month = "05";
                break;
            case "Jun":
                month = "06";
                break;
            case "Jul":
                month = "07";
                break;
            case "Aug":
                month = "08";
                break;
            case "Sep":
                month = "09";
                break;
            case "Oct":
                month = "10";
                break;
            case "Nov":
                month = "11";
                break;
            case "Dec":
                month = "12";
                break;
            default:
        }

        const day = date.slice(8, 10);
        const year = date.slice(11, 15)

        return month + "/" + day + "/" + year
    }

    return (
        <table className="w-100">

            <thead>

                <tr>

                    <th>#order</th>

                    <th className="px-6" />

                    <th>date</th>

                    <th className="px-6" />

                    <th>items</th>
                    <th className="px-6" />

                    <th>status</th>

                    <th className="px-6" />

                    <th>total</th>

                    <th className="px-6" />

                </tr>

            </thead>

            <tbody>

                {
                    ordersDetail.map((order, i) =>
                        <tr key={i} >

                            <td>
                                {order.node.name}
                            </td>

                            <td className="px-6" />

                            <td>{handleTime(order.node.createdAt)}</td>

                            <td className="px-6" />

                            <td>{order.node.lineItems.edges.length}</td>

                            <td className="px-6" />

                            <td>
                                {
                                    order.node.fulfillments.length > 0
                                        ? "order-shipped"
                                        : "order-processing"
                                }
                            </td>

                            <td className="px-6" />

                            <td>${order.node.totalPrice}</td>

                            <td className="px-6" />

                            <button
                                name="button"
                                onClick={() => getOrderDetail(order.node.name)}
                            >

                                <span className="line-link view-all">
                                    view-detail
                                    </span>

                            </button>

                            <td className="px-6" />

                        </tr>
                    )
                }

            </tbody>

        </table>
    );
}

export default OrderHitory;