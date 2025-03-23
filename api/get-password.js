export default function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    // 打印 SECRET 进行调试（仅用于测试）
    console.log("Received Secret:", req.query.secret);
    console.log("Expected Secret:", process.env.UPDATE_SECRET);

    if (req.query.secret !== process.env.UPDATE_SECRET) {
        return res.status(403).json({ error: "Unauthorized", received: req.query.secret });
    }

    res.json({ password: process.env.API_PASSWORD });
}
