import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { sendToTelegram } from '../services/telegram';
 
export const contactRouter = Router();
 
const LOG_FILE = path.join(__dirname, '../../logs/submissions.log');
 
function writeLog(data: object) {
  const entry = JSON.stringify({ timestamp: new Date().toISOString(), ...data }) + '\n';
  fs.appendFileSync(LOG_FILE, entry, 'utf8');
}
 
contactRouter.post('/contact', async (req: Request, res: Response) => {
  const { email, phone, company_name, case_description } = req.body;
 
  // Базовая валидация
  if (!email || !phone || !company_name || !case_description) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }
 
  const formData = { email, phone, company_name, case_description };
 
  try {
    await sendToTelegram(formData);
    writeLog({ status: 'success', ...formData });
    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    writeLog({ status: 'error', error: message, ...formData });
    console.error('Contact submission error:', message);
    return res.status(500).json({ error: 'Не удалось отправить заявку' });
  }
});
