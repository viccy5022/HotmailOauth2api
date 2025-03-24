let currentPassword = generateNewPassword(); // 初始密码

setInterval(() => {
    currentPassword = generateNewPassword(); // 每 20 秒更新密码
}, 20000); // 20 秒

export default function handler(req, res) {
    if (req.method === "GET") {
        return res.json({ password: currentPassword });
    }
    res.status(405).json({ error: "Method Not Allowed" });
}

function generateNewPassword() {
    return Math.random().toString(36).slice(-10); // 生成随机密码
}
