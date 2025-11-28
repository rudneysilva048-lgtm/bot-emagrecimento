import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot de emagrecimento rodando!");
});

app.post("/pergunta", (req, res) => {
  const pergunta = req.body.pergunta?.toLowerCase() || "";

  let resposta = "Não entendi sua pergunta. Pode reformular?";

  if (pergunta.includes("emagrecer")) {
    resposta = "Para começar a emagrecer, você precisa de 3 pilares: déficit calórico, regularidade e descanso. Quer saber por onde começar?";
  }

  if (pergunta.includes("dieta")) {
    resposta = "A base da dieta para perda de peso é proteína + vegetais + carbo controlado. Quer que eu monte algo simples pra você?";
  }

  if (pergunta.includes("treino")) {
    resposta = "Treino ideal: musculação 3x por semana + caminhada. Quer um treino para iniciantes?";
  }

  res.json({ resposta });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
