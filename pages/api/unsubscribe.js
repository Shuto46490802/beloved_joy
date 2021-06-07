import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});

export default async (req, res) => {

    const { subscriber_hash } = req.body;

    if (!subscriber_hash) {
        return res.status(400).json({ error: "Hash is required" })
    }

    try {

        await mailchimp.lists.deleteListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            subscriber_hash
        )

        return res.status(201).json({ error: '' });

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }

};