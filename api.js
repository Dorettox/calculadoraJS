import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
  {
    id: 1,
    name: "Lucas",
    age: 20,
  },
];

app.get("/", (req, res) => {
  res.send(arrResponse);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
