from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram import ApplicationBuilder, CommandHandler

async def start(update: Update, context) -> None:
    keyboard = [
        [InlineKeyboardButton("🎲 Roll a Dice", web_app={"url": "https://telegram-roller.vercel.app/"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Click below to roll a dice!", reply_markup=reply_markup)

app = ApplicationBuilder().token("7859805957:AAE46fBsLZhHYpnublHZ9Ecz0-xCYK7_8Ro").build()
app.add_handler(CommandHandler("start", start))

app.run_polling()
