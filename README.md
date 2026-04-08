# ⚡ QuantBot IA — Trading Automático MT5

Painel mobile-first para controlo do bot de trading com IA pura.  
Deploy no Vercel em menos de 5 minutos.

---

## 🚀 Deploy Rápido no Vercel

### Opção A — Via CLI (recomendado)

```bash
# 1. Instala o Vercel CLI
npm install -g vercel

# 2. Entra na pasta
cd quantbot

# 3. Login no Vercel
vercel login

# 4. Deploy!
vercel --prod
```

O Vercel vai dar-te um URL como: `https://quantbot-ia.vercel.app`

---

### Opção B — Via GitHub (mais fácil)

1. Cria um repositório no GitHub e faz upload desta pasta
2. Entra em [vercel.com](https://vercel.com) → **New Project**
3. Importa o repositório do GitHub
4. Clica em **Deploy** — pronto!

---

## 📁 Estrutura do Projeto

```
quantbot/
├── public/
│   └── index.html        ← Painel mobile (frontend)
├── api/
│   ├── signals.js        ← API de sinais IA
│   └── status.js         ← Estado do bot
├── vercel.json           ← Configuração Vercel
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

| Método | Endpoint       | Descrição                        |
|--------|---------------|----------------------------------|
| GET    | /api/signals  | Sinais IA + dados da conta       |
| GET    | /api/status   | Estado do bot                    |
| POST   | /api/status   | Atualizar estado (do bot Python) |

---

## 🤖 Ligar o Bot Python ao Vercel

No teu `botia_mt5.py`, adiciona este código para enviar dados reais ao painel:

```python
import requests

VERCEL_URL = "https://quantbot-ia.vercel.app"  # substitui pelo teu URL

def enviar_sinal_ao_painel(simbolo, decisao, conf, sl, tp, lote):
    """Envia sinal ao painel Vercel em tempo real"""
    try:
        requests.post(f"{VERCEL_URL}/api/signals", json={
            "simbolo": simbolo,
            "decisao": decisao,
            "confianca": conf,
            "sl": sl,
            "tp": tp,
            "lote": lote
        }, timeout=5)
    except Exception as e:
        print(f"Erro ao enviar sinal: {e}")

def atualizar_status_bot(rodando=True, uptime=0):
    """Atualiza estado do bot no painel"""
    try:
        requests.post(f"{VERCEL_URL}/api/status", json={
            "rodando": rodando,
            "uptime": uptime
        }, timeout=5)
    except:
        pass
```

---

## ⚠️ Importante

- Testa sempre em **conta demo** primeiro
- Nunca arrisques dinheiro que não podes perder
- O bot precisa de um PC ou VPS Windows ligado 24/7
- Para VPS barato: [Contabo](https://contabo.com) ~€4/mês

---

## 📱 Acesso no Telemóvel

Depois do deploy, abre o URL do Vercel no Chrome/Safari do telemóvel.  
Para instalar como app: **Menu → Adicionar ao ecrã inicial**
