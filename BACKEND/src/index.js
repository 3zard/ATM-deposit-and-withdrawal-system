import express from 'express';
import authorizationRoute from './routes/authorizationRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.use('/auth', authorizationRoute);
app.use('/user', userRoute);


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});