import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(request: NextRequest) {
  const { name, address, floor, totalFloors, square, livingSquare, kitchenSquare } = await request.json();

  const message = `
    «Лабецкий Недвижимость»
    Новая заявка:
    Название объекта: ${name}
    Адрес: ${address}
    Этаж: ${floor}
    Количество этажей в доме: ${totalFloors}
    Площадь: ${square}
    Жилая площадь: ${livingSquare}
    Площадь кухни: ${kitchenSquare}
  `;

  try {
    await axios.post(TELEGRAM_API_URL, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    return NextResponse.json({ message: 'Данные успешно отправлены в Telegram' });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при отправке данных в Telegram' }, { status: 500 });
  }
}