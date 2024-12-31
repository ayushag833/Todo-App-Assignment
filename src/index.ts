import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import express from 'express';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

connectDB();

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

const PORT = process.env.PORT!;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
