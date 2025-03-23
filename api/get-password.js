export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { secret } = req.body;

    if (secret !== process.env.UPDATE_SECRET) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    res.json({ password: process.env.API_PASSWORD });
}
