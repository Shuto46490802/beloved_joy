import Image from "next/image";
import Link from "next/link";

import error from "../assets/error.jpg";

export const getStaticProps = async () => {

    const body = {
        query: `
            query  {
              products(first: 250) {
                edges {
                  node {
                    tags
                    productType
                    availableForSale
                  }
                }
              }
            }
          `
      };
    
      const { data } = await fetch("https://beloved-development-test.myshopify.com/api/2021-04/graphql.json",
        {
          method: "POST",
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        })
        .then(async (res) => {
          return await res.json()
        })

    const availabelProducts = data.products.edges.filter((product) => product.node.availableForSale);

    return {
        props: {
            products: availabelProducts.map((product) => ({
                available: product.node.availableForSale,
                category: product.node.productType.split(", "),
                tags: product.node.tags
            }))
        }
    }
}

const FourOhFour = () => {
    return (
        <div className="c-error-page">

            <div className="c-error-image__wrapper position-absolute vh-100 w-100">

                <figure className="fig-wrapper">

                    <Image src={error} layout="fill" />

                </figure>

            </div>

            <div className="d-flex flex-center vh-100">

                <div className="d-flex flex-column align-items-center">

                    <h4 className="ls-2">404</h4>

                    <h4 className="ls-2 mt-2 ml-1">I'm sorry, page not found ...</h4>

                    <Link href="/">

                        <a className="back-button pb-1 d-flex align-items-center mt-2 px-6 h4">

                            <span className="me-2 h4">Back to Home</span>

                            <svg x="0px" y="0px" viewBox="0 0 22 10"><polygon points="17,0.65 16.29,1.35 19.44,4.5 0.65,4.5 0.65,5.5 19.44,5.5 16.29,8.65 17,9.35 21.35,5 "></polygon></svg>
                            
                        </a>

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default FourOhFour;