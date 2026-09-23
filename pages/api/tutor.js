import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../lib/auth';

const SYSTEM = "Tu es un professeur d'anglais patient pour un francophone débutant (niveau A1). " +
  "Réponds toujours en français, avec des explications simples et des exemples anglais traduits. " +
  "Reste bref (5-6 lignes maximum) et bienveillant, ne culpabilise jamais l'élève.";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(401).json({ error: 'Non authentifié.' });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Le tuteur IA n'est pas configuré sur ce déploiement (clé API manquante)." });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || !messages.length) {
    return res.status(400).json({ error: 'messages requis.' });
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 500,
        system: SYSTEM,
        messages: messages.map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
      }),
    });
    if (!r.ok) {
      const errText = await r.text();
      console.error('Anthropic API error', r.status, errText);
      return res.status(502).json({ error: "Le tuteur IA n'a pas pu répondre pour le moment." });
    }
    const data = await r.json();
    const text = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
    return res.status(200).json({ text });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: "Le tuteur IA n'a pas pu répondre pour le moment." });
  }
}
