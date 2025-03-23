export default function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    res.json({ password: process.env.API_PASSWORD });
}
