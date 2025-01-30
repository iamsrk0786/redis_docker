import express from 'express';
import cors from 'cors';
import Redis from 'ioredis';
import { configDotenv } from 'dotenv';
import connectDB from './config/Db';
import Userroutes from './routes/User';
import productRoutes from './routes/Productrou'
configDotenv();
const port = process.env.PORT || 3000;
const app = express();
connectDB();
export const redis = new Redis(
// {
//   host: "redis", 
//   port: 6379
// }
  process.env.REDIS_URL || 'redis://localhost:6379'
)
redis.on('connect', () => {
  console.log('Redis connected');
});
redis.on('error', (err) => {
  console.log('Redis error: ', err);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', Userroutes);
app.use('/api/product', productRoutes);

app.route('/').get((req, res) => {
  res.send('Hello World from shahrukh');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});