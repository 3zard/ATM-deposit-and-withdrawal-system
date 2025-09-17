import express from 'express';
import { openCheckingAccount, openSavingsAccount, transferMoney, getBalance, getTransactionHistory } from '../controllers/userController.js';

const router = express.Router();

// Mở tài khoản thanh toán
router.post('/open-checking-account', openCheckingAccount);

// Mở tài khoản tiết kiệm
router.post('/open-savings-account', openSavingsAccount);

// Chuyển tiền
router.post('/transfer', transferMoney);

// Xem số dư
router.get('/balance', getBalance);

// Lịch sử giao dịch
router.get('/transactions', getTransactionHistory);

export default router;