import express from 'express';
import dotenv from 'dotenv';
import songRoutes from './routes/songRoutes.js';
import artistRoutes from './routes/artistRoutes.js';

dotenv.config();
const app = express();

app.use(express.json()); 

// Use song routes
app.use('/api', songRoutes);
app.use('/api', artistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
