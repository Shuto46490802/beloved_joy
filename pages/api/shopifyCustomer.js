import nc from "next-connect";
import cors from "cors";

const handler = nc()
    // use connect based middleware
    .use(cors())
    .post(async (req, res) => {

        const { id } = req.body;

        const body = {
            query: `
                query MyQuery {
                    customer(id: "${id}") {
                    acceptsMarketing
                    acceptsMarketingUpdatedAt
                    addresses(first: 10) {
                        address1
                        address2
                        city
                        company
                        country
                        countryCodeV2
                        firstName
                        formatted
                        formattedArea
                        id
                        lastName
                        latitude
                        longitude
                        name
                        phone
                        province
                        provinceCode
                        zip
                    }
                    createdAt
                    email
                    firstName
                    id
                    lastName
                    ordersCount
                    phone
                    state
                    tags
                    taxExempt
                    taxExemptions
                    totalSpent
                    updatedAt
                    verifiedEmail
                    orders(first: 10) {
                        edges {
                            node {
                                name
                                totalPrice
                                createdAt
                                lineItems(first: 10) {
                                    edges {
                                        node {
                                            quantity
                                            title
                                            name
                                            image {
                                                ransformedSrc
                                            }
                                            variant {
                                                price
                                            }
                                        }
                                    }
                                    fulfillments {
                                        trackingInfo {
                                          number
                                          company
                                          url
                                        }
                                      }
                                      taxLines {
                                        price
                                        rate
                                        ratePercentage
                                        title
                                      }
                                      shippingLine {
                                        price
                                        code
                                      }
                                      subtotalPrice
                                }
                            }
                        }
                    }
                    }
                }
            `
        }

        const response = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_ENDPOINT,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Access-Token": process.env.SHOPIFY_PASSWORD,
                },
                body: JSON.stringify(body)
            });

        const data = await response.json();

        return res.status(201).json({ data: data })
    });

export default handler;