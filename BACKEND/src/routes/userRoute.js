import express from 'express';

const router = express.Router();

// Mở tài khoản thanh toán
router.post('/open-checking-account', (req, res) => {
    // Xử lý mở tài khoản thanh toán
    res.send('Checking account opened');
});

// Mở tài khoản tiết kiệm
router.post('/open-savings-account', (req, res) => {
    // Xử lý mở tài khoản tiết kiệm
    res.send('Savings account opened');
});

// Chuyển tiền
router.post('/transfer', (req, res) => {
    // Xử lý chuyển tiền
    res.send('Transfer completed');
});

// Xem số dư
router.get('/balance', (req, res) => {
    // Xử lý xem số dư
    res.send('Current balance is ...');
});

// Lịch sử giao dịch
router.get('/transactions', (req, res) => {
    // Xử lý lấy lịch sử giao dịch
    res.send('Transaction history ...');
});

export default router;