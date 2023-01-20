import { Configuration, OpenAIApi } from "openai"
import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'


const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

const configuration = new Configuration({
    organization: "org-CAKTm7AtAqQ9dRtYkJDx98L3",
    apiKey: "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"
})

const openai = new OpenAIApi(configuration)

app.post("/", async (req, res) => {
    const {message, model} = req.body

    let temp = 0.5

    switch (model) {
        case model === "code-cushman-001":
            temp = 0
        case model === "text-ada-001":
            temp = 1
        default:
            temp = 0.5
            break
    }

    const response = await openai.createCompletion({
        model: `${model}`,
        prompt: `${message}`,
        max_tokens: 100,
        temperature: temp,
    })

    res.json({ message: response.data.choices[0].text, temp: temp })
})

app.listen(port, () => {
    console.log(port)
})
