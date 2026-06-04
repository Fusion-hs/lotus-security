const TELEGRAM_BOT_TOKEN = "8061531004:AAEBoTnVgI969A6agh-i3y99tMeVUZp6ujY";
const TELEGRAM_CHAT_ID = "183180555";
 
interface FormData {
  email: string;
  phone: string;
  company_name: string;
  case_description: string;
}
 
export async function sendToTelegram(data: FormData): Promise<void> {
  const message = `
📬 <b>Новая заявка с сайта</b>
 
📧 <b>Email:</b> ${data.email}
📞 <b>Телефон:</b> ${data.phone}
🏢 <b>Компания:</b> ${data.company_name}
📝 <b>Описание:</b> ${data.case_description}
  `.trim();
 
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
 
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }),
  });
 
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Telegram API error: ${error}`);
  }
}
