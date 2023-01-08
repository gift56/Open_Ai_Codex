### OPEN_AI_CODEX

This is a simple openaicodex project built with Node.js and Express that uses [Natural language to OpenAI API](https://beta.openai.com/playground/p/default-openai-api?model=text-davinci-003) to generate Code Anwsers by inputing Natural language.

<img src="public/img/Screen.png" width="500">

## Usage

Rename the `example.env` file to `.env`.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm run dev
```

Visit `http://localhost:5000` in your browser.

The endpoint is at `POST http://localhost:5000/openai/generateimage`.
