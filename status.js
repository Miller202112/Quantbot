// api/status.js
// Estado do bot — recebe POST do bot Python para atualizar estado

let botState = {
  rodando:    true,
  ultima_vez: new Date().toISOString(),
  versao:     '2.0.0',
  uptime:     0
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Bot Python envia POST para atualizar estado
  if (req.method === 'POST') {
    const { rodando, uptime } = req.body || {};
    if (typeof rodando === 'boolean') botState.rodando = rodando;
    if (uptime) botState.uptime = uptime;
    botState.ultima_vez = new Date().toISOString();
    return res.status(200).json({ ok: true, state: botState });
  }

  // GET — retorna estado atual
  return res.status(200).json({
    ok: true,
    ...botState,
    ts: new Date().toISOString()
  });
}
