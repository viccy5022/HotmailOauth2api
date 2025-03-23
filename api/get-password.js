export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const body = await req.json(); // ✅ 解析 JSON body
        if (body.secret !== process.env.UPDATE_SECRET) {
            return res.status(403).json({ error: "Unauthorized" });  // 这里返回 `403`
        }

        res.json({ password: process.env.API_PASSWORD });
    } catch (error) {
        res.status(400).json({ error: "Invalid JSON format" });
    }
}
