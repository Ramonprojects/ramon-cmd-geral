export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();

  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];

  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];

  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));

  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }

  const links = [
    'https://chat.whatsapp.com/ChtR7AsDkVCGRrUFlbxXoO', // 13
    'https://chat.whatsapp.com/L2WDLpJGv2j8GTOSnzku8v', // 14
    'https://chat.whatsapp.com/HS5C7eFGBrGBuVlw58ySU9', // 15
    'https://chat.whatsapp.com/HS5C7eFGBrGBuVlw58ySU9', // 16
    'https://chat.whatsapp.com/IqLrahuYm7YINXrDvP9mr8', // 65
    'https://chat.whatsapp.com/Isqauvcj4vlDVfK9Rha3Wt', // 73
    'https://chat.whatsapp.com/HKZh7jjQdi67sztn7WbhSx', // 55
  ];

  const dest = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: dest });
  res.end();
}
