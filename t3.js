const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const sec_key = 'cvr123';
const token = function (payload) {
    return jwt.sign(payload, sec_key, { expiresIn: '1h' });
};
app.get('/login', (req, res) => {
    const payload = { id: 1, name: 'goutham' };
    const generatedToken = token(payload);
    return res.json({ success: true, token: generatedToken });
});
console.log(token);
app.get('/checck', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ success: false, message: 'Token missing.' });
    }
    jwt.verify(token, sec_key, (err, decoded) => {
        if (err) {
            return res.json({ success: false, message: 'Token invalid.' });
        }
        return res.json({ success: true, message: 'Token verified.', user: decoded });
    });
});
app.listen(3000, () => console.log('Server running on port 3000'));