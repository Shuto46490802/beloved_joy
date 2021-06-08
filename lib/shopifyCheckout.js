import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./auth";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {

    const { cartDetails, isCartEmpty, setIsCartEmpty, isCartAdded, message, addToCart, deleteProduct, increaseQuantity, decreaseQuantity, redirectToCheckout, createCustomer, getCustomer, customer } = useProvideCheckout();

    return (
        <CheckoutContext.Provider value={{ cartDetails, isCartEmpty, setIsCartEmpty, isCartAdded, message, addToCart, deleteProduct, increaseQuantity, decreaseQuantity, redirectToCheckout, createCustomer, getCustomer, customer }}>
            {children}
        </CheckoutContext.Provider>
    )

};

export const useCheckout = () => {
    return useContext(CheckoutContext);
};

const useProvideCheckout = () => {

    const [cartDetails, setCartDetails] = useState([]);
    const [isCartEmpty, setIsCartEmpty] = useState({ state: true, anim: "" });
    const [isCartAdded, setIsCartAdded] = useState(false);
    const [message, setMessage] = useState("");
    const [customer, setCustomer] = useState({});
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        getInitialCartDetails();
    }, [])

    useEffect(() => {

        if (cartDetails.length > 0) {
            setIsCartEmpty({ state: false, anim: "" })
        } else {
            setIsCartEmpty({ state: true, anim: "" })
        }

    }, [cartDetails])

    useEffect(() => {
        getInitialCustomer()
    }, [user])

    const getInitialCartDetails = () => {

        const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

        if (products.length > 0) {
            setCartDetails(products);
        } else {
            localStorage.setItem("products", products)
        };

    };

    const getInitialCustomer = async () => {

        if (!user) {
            return;
        } else {

            await fetch("/api/shopifyCustomers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                })
            })
                .then(async (res) => {
                    const { data } = await res.json();
                    if (data.data.customers.edges.length > 0) {
                        setCustomer(data.data.customers.edges[0].node)
                    } else {
                        return;
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        }

    }

    const addToCart = (e, _product, _quantity) => {
        e.preventDefault();

        let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

        let newProduct = {
            variantId: _product.variantId,
            product: _product,
            quantity: _quantity
        };

        if (products.length > 0) {

            const idList = products.map((product) => product.variantId);

            if (idList.indexOf(newProduct.variantId) !== -1) {

                const targetProduct = products
                    .map((product) => product)
                    .filter(({ variantId }) => variantId === newProduct.variantId)

                if (targetProduct[0].product.inventoryQuantity >= _quantity + targetProduct[0].quantity) {
                    targetProduct[0].quantity += _quantity
                    setCartDetails(products);
                    setMessage(`${newProduct.product.name} added to cart!!`)
                    setIsCartAdded(true);
                    setTimeout(() => {
                        setIsCartAdded(false);
                        setMessage("")
                    }, 1500);
                }


            } else {
                products.push(newProduct);
                setCartDetails(products);
                setMessage(`${newProduct.product.name} added to cart!!`)
                setIsCartAdded(true);
                setTimeout(() => {
                    setIsCartAdded(false);
                    setMessage("")
                }, 1500);
            }

        } else {
            products.push(newProduct);
            setCartDetails(products);
            setMessage(`${newProduct.product.name} added to cart!!`);
            setIsCartAdded(true);
            setTimeout(() => {
                setIsCartAdded(false);
                setMessage("")
            }, 1500);
        }

        localStorage.setItem("products", JSON.stringify(products))
    };

    const deleteProduct = (e, _product) => {
        e.preventDefault();

        let products = JSON.parse(localStorage.getItem("products"));

        products.map((product) => {

            if (product.variantId === _product.variantId) {
                products.splice(products.indexOf(product), 1)
            }

        })

        localStorage.setItem("products", JSON.stringify(products))
        setCartDetails(products)
    };

    const increaseQuantity = (e, _product) => {
        e.preventDefault();

        let products = JSON.parse(localStorage.getItem("products"));

        products.map((product) => {

            if (product.variantId === _product.variantId) {

                if (product.quantity < _product.product.inventoryQuantity) {
                    product.quantity += 1
                    setCartDetails(products)
                }

            }

        })

        localStorage.setItem("products", JSON.stringify(products))
    };

    const decreaseQuantity = (e, _product) => {
        e.preventDefault();

        let products = JSON.parse(localStorage.getItem("products"));

        products.map((product) => {

            if (product.variantId === _product.variantId) {

                if (product.quantity > 1) {
                    product.quantity -= 1
                    setCartDetails(products)
                }

            }

        })

        localStorage.setItem("products", JSON.stringify(products))
    };

    const redirectToCheckout = async (e, _lineItems) => {
        e.preventDefault();

        if (_lineItems.length > 0) {

            const body = {
                query: `
                    mutation checkoutCreate($input: CheckoutCreateInput!) {
                        checkoutCreate(input: $input) {
                            checkout {
                                id
                                webUrl
                            }
                            checkoutUserErrors {
                                field
                                message
                            }
                        }
                    }
            `,
                variables: { input: { lineItems: _lineItems } }
            }

            return await fetch("https://beloved-development-test.myshopify.com/api/2021-04/graphql.json",
                {
                    method: "POST",
                    headers: {
                        'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                })
                .then(async(checkout) => {
                    const {data} = await checkout.json();
                    router.push(data.checkoutCreate.checkout.webUrl)
                    
                    const products = JSON.parse(localStorage.getItem("products"));
                    products.splice(0, products.length);
                    localStorage.setItem("products", products)
                })
                .catch((error) => console.log(error))

        } else {
            return;
        }

    };

    const createCustomer = async (e, _email, _firstName, _lastName) => {
        e.preventDefault();

        const customerId = await fetch("/api/shopifyCustomerCreate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: _email,
                firstName: _firstName,
                lastName: _lastName
            })
        })
            .then(async (res) => {
                const { data } = await res.json();
                return data.data.customerCreate.customer.id;
            })
            .catch((error) => {
                console.log(error)
            })

        await fetch("/api/shopifyCustomer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: customerId
            })
        })
            .then(async (res) => {
                const { data } = await res.json();
                setCustomer(data.data.customer)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const getCustomer = async (e, _email, _firstName, _lastName) => {

        e.preventDefault();

        await fetch("/api/shopifyCustomers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: _email,
                firstName: _firstName,
                lastName: _lastName
            })
        })
            .then(async (res) => {
                const { data } = await res.json();
                setCustomer(data.data.customers.edges[0].node)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return {
        cartDetails,
        isCartEmpty,
        setIsCartEmpty,
        isCartAdded,
        message,
        addToCart,
        deleteProduct,
        increaseQuantity,
        decreaseQuantity,
        redirectToCheckout,
        createCustomer,
        getCustomer,
        customer
    };
}
