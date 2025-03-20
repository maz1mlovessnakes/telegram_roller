import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Make sure the token is set correctly
TOKEN = "7859805957:AAE46fBsLZhHYpnublHZ9Ecz0-xCYK7_8Ro"

# Raise an error if the token is missing (for debugging purposes)
if not TOKEN:
    raise ValueError("Bot token is missing! Set the TELEGRAM_BOT_TOKEN environment variable.")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("🌐 Open Web App", web_app=WebAppInfo(url="https://telegram-roller.vercel.app/"))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Click the button below to open the app!", reply_markup=reply_markup)

# Create the application and add handlers
app = ApplicationBuilder().token(TOKEN).build()
app.add_handler(CommandHandler("start", start))

# Run the bot
app.run_polling()
