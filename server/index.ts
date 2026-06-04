import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { contactRouter } from './routes/contact';
 
const app = express();
const PORT = process.env.PORT || 3001;
 
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}));
app.use(express.json());
 
// Убеждаемся что папка для логов существует
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}
 
app.use('/api', contactRouter);
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 