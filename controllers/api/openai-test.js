const OpenAI = require("openai");

const apiKey = "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"; // Replace with your actual OpenAI API key

const openai = new OpenAI({
  apiKey: apiKey,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

main();
