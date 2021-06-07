import nc from "next-connect";
import cors from "cors";

const handler = nc()
    // use connect based middleware
    .use(cors())
    .post(async (req, res) => {
        const { email, firstName, lastName } = req.body;

        const body = {
            query: `
                mutation MyMutation {
                    customerCreate(input: {email: "${email}", firstName: "${firstName}", lastName: "${lastName}"}) {
                        userErrors {
                            field
                            message
                        }
                        customer {
                            id
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