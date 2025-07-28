const { OpenAI } = require('openai');
require('dotenv').config();

const client = new OpenAI({
    /// OPEN AI CONFIG
    apiKey: process.env.OPEN_AI_API_KEY,
    organization: process.env.OPEN_AI_ORGANIZATION
})

module.exports = { client }