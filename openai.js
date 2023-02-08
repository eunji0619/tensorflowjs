const TelegramBot = require("node-telegram-bot-api");
const invariant = require("tiny-invariant");
const { Configuration, OpenAIApi } = require("openai");

// const { brotliCompressSync } = require("zlib");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const token = process.env.botid;
console.log(token)
const openai = new OpenAIApi(configuration);

invariant(token, "Couldn't read the token the enviroment variable");

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const baseCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${msg.text}.\n`,
        temperature: 0.8,
        max_tokens: 1000,
    });

    const chatId = msg.chat.id;

    //   bot.sendMessage(chatId, "please wait a few seconds");

    const basePromptOuput = baseCompletion.data.choices.pop();

    if (!basePromptOuput?.text) {
        return bot.sendMessage(
            chatId,
            "please try again, AI couldn't send the data"
        );
    }

    bot.sendMessage(chatId, basePromptOuput?.text);
});

bot.on("error", (err) => console.log(err));