export default function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    // 安全验证
    if (req.query.secret !== process.env.UPDATE_SECRET) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    res.json({ password: process.env.API_PASSWORD });
}
