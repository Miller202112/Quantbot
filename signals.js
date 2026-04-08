// api/signals.js
// API de Sinais IA — QuantBot MT5
// Em produção, este endpoint recebe dados reais do bot Python via webhook

export default function handler(req, res) {
  // CORS — permite acesso do frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Simula dados reais (substitui com dados do teu bot Python em produção)
  const agora = new Date();
  const seed  = Math.floor(Date.now() / 15000); // muda a cada 15s

  // Gerador pseudo-aleatório determinístico por seed
  const rand = (s) => {
    let x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  const sinais = [
    {
      id:        'XAUUSD',
      nome:      'OURO',
      simbolo:   'XAUUSD',
      emoji:     '🥇',
      timeframe: 'M15',
      preco:     (2310 + rand(seed+1) * 40).toFixed(2),
      sl:        (2290 + rand(seed+2) * 10).toFixed(2),
      tp:        (2350 + rand(seed+3) * 20).toFixed(2),
      decisao:   rand(seed+4) > 0.35 ? 'COMPRAR' : rand(seed+4) > 0.2 ? 'VENDER' : 'AGUARDAR',
      conf_xgb:  (0.60 + rand(seed+5) * 0.30).toFixed(2),
      conf_lstm: (0.58 + rand(seed+6) * 0.32).toFixed(2),
      rsi:       (30 + rand(seed+7) * 40).toFixed(1),
      adx:       (20 + rand(seed+8) * 25).toFixed(1),
      macd:      (rand(seed+9) - 0.5).toFixed(4),
      atr:       (10 + rand(seed+10) * 8).toFixed(2),
      lote:      '0.05',
      modelo:    'XGBoost + LSTM',
      atualizado: agora.toISOString()
    },
    {
      id:        'USOIL',
      nome:      'PETRÓLEO',
      simbolo:   'USOIL',
      emoji:     '🛢️',
      timeframe: 'M15',
      preco:     (82 + rand(seed+11) * 6).toFixed(2),
      sl:        (80 + rand(seed+12) * 2).toFixed(2),
      tp:        (86 + rand(seed+13) * 4).toFixed(2),
      decisao:   rand(seed+14) > 0.4 ? 'AGUARDAR' : rand(seed+14) > 0.2 ? 'COMPRAR' : 'VENDER',
      conf_xgb:  (0.45 + rand(seed+15) * 0.35).toFixed(2),
      conf_lstm: (0.48 + rand(seed+16) * 0.30).toFixed(2),
      rsi:       (35 + rand(seed+17) * 35).toFixed(1),
      adx:       (15 + rand(seed+18) * 20).toFixed(1),
      macd:      (rand(seed+19) - 0.5).toFixed(4),
      atr:       (0.8 + rand(seed+20) * 0.6).toFixed(2),
      lote:      '0.08',
      modelo:    'XGBoost + LSTM',
      atualizado: agora.toISOString()
    },
    {
      id:        'EURUSD',
      nome:      'EUR/USD',
      simbolo:   'EURUSD',
      emoji:     '💶',
      timeframe: 'M15',
      preco:     (1.0800 + rand(seed+21) * 0.012).toFixed(5),
      sl:        (1.0750 + rand(seed+22) * 0.005).toFixed(5),
      tp:        (1.0900 + rand(seed+23) * 0.010).toFixed(5),
      decisao:   rand(seed+24) > 0.3 ? 'VENDER' : rand(seed+24) > 0.15 ? 'COMPRAR' : 'AGUARDAR',
      conf_xgb:  (0.55 + rand(seed+25) * 0.30).toFixed(2),
      conf_lstm: (0.52 + rand(seed+26) * 0.35).toFixed(2),
      rsi:       (40 + rand(seed+27) * 30).toFixed(1),
      adx:       (22 + rand(seed+28) * 18).toFixed(1),
      macd:      (rand(seed+29) * 0.002 - 0.001).toFixed(5),
      atr:       (0.0008 + rand(seed+30) * 0.0006).toFixed(4),
      lote:      '0.10',
      modelo:    'XGBoost + LSTM',
      atualizado: agora.toISOString()
    },
    {
      id:        'GBPUSD',
      nome:      'GBP/USD',
      simbolo:   'GBPUSD',
      emoji:     '💷',
      timeframe: 'M15',
      preco:     (1.2600 + rand(seed+31) * 0.015).toFixed(5),
      sl:        (1.2540 + rand(seed+32) * 0.005).toFixed(5),
      tp:        (1.2720 + rand(seed+33) * 0.010).toFixed(5),
      decisao:   rand(seed+34) > 0.45 ? 'COMPRAR' : rand(seed+34) > 0.2 ? 'AGUARDAR' : 'VENDER',
      conf_xgb:  (0.50 + rand(seed+35) * 0.35).toFixed(2),
      conf_lstm: (0.53 + rand(seed+36) * 0.30).toFixed(2),
      rsi:       (38 + rand(seed+37) * 28).toFixed(1),
      adx:       (18 + rand(seed+38) * 22).toFixed(1),
      macd:      (rand(seed+39) * 0.003 - 0.0015).toFixed(5),
      atr:       (0.0010 + rand(seed+40) * 0.0008).toFixed(4),
      lote:      '0.08',
      modelo:    'XGBoost + LSTM',
      atualizado: agora.toISOString()
    },
    {
      id:        'PETR4',
      nome:      'PETR4',
      simbolo:   'PETR4',
      emoji:     '🇧🇷',
      timeframe: 'M15',
      preco:     (38 + rand(seed+41) * 4).toFixed(2),
      sl:        (36 + rand(seed+42) * 2).toFixed(2),
      tp:        (42 + rand(seed+43) * 3).toFixed(2),
      decisao:   rand(seed+44) > 0.35 ? 'COMPRAR' : rand(seed+44) > 0.15 ? 'VENDER' : 'AGUARDAR',
      conf_xgb:  (0.58 + rand(seed+45) * 0.28).toFixed(2),
      conf_lstm: (0.55 + rand(seed+46) * 0.32).toFixed(2),
      rsi:       (32 + rand(seed+47) * 38).toFixed(1),
      adx:       (24 + rand(seed+48) * 20).toFixed(1),
      macd:      (rand(seed+49) - 0.5).toFixed(3),
      atr:       (0.5 + rand(seed+50) * 0.8).toFixed(2),
      lote:      '100',
      modelo:    'XGBoost + LSTM',
      atualizado: agora.toISOString()
    }
  ];

  // Calcula ensemble e dados de conta
  const conta = {
    saldo:         (10000 + rand(seed+60) * 800).toFixed(2),
    lucro_dia:     (rand(seed+61) * 400 - 50).toFixed(2),
    operacoes:     Math.floor(rand(seed+62) * 3) + 1,
    drawdown:      (rand(seed+63) * 8).toFixed(1),
    trades_hoje:   Math.floor(rand(seed+64) * 8) + 1,
    win_rate:      (60 + rand(seed+65) * 20).toFixed(1),
    atualizado:    agora.toISOString()
  };

  return res.status(200).json({
    ok:      true,
    ts:      agora.toISOString(),
    conta,
    sinais
  });
}
