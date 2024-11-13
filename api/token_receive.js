export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { refresh_token } = req.body;

        if (!refresh_token) {
            return res.status(400).json({ message: 'Refresh token is missing' });
        }

        console.log('Received refresh token:', refresh_token);
        localStorage.setItem("refresh_token", refresh_token)
        res.status(200).json({ message: 'Token received successfully' });
    } catch (error) {
        console.error('Error handling token:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}