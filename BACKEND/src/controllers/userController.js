export const openCheckingAccount = (req, res) => {
    // Xử lý mở tài khoản thanh toán
    res.status(200).send('Checking account opened');
}

export const openSavingsAccount = (req, res) => {
    // Xử lý mở tài khoản tiết kiệm
    res.status(200).send('Savings account opened');
}

export const transferMoney = (req, res) => {
    // Xử lý chuyển tiền
    res.status(200).send('Transfer completed');
}

export const getBalance = (req, res) => {
    // Xử lý xem số dư
    res.status(200).send('Current balance is ...');
}

export const getTransactionHistory = (req, res) => {
    // Xử lý lấy lịch sử giao dịch
    res.status(200).send('Transaction history ...');
}