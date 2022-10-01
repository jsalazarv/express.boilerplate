import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app:"Express Boilerplate",
        version: "v1.0.0"
    });
});

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
});