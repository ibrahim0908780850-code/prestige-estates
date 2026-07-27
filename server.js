const express = require('express');
const path = require('path');
const app = express();

// خدمة الملفات الثابتة (CSS, JS, صور)
app.use(express.static(path.join(__dirname)));

// أي طلب مش موجود، يروح لـ index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});