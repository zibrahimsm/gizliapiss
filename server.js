const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const fs = require("fs").promises;
const config = require('./config.json');

const app = express();
const path = require('path');
const { WebhookClient } = require('discord.js');

app.get('/', (req, res) => {
  res.json({
    status: true,
    message: "api work",
    apidev: "RedRose Project"
  });
});


app.use(express.json({limit: "900mb"}));
app.use(express.static('uploads'));

app.use(express.urlencoded({ extended: true }));
const errorlog = config.session.errorurl;

const webhookUrls = {
error: errorlog
};

const webhookClients = {};
for (const key in webhookUrls) {
  webhookClients[key] = new WebhookClient({ url: webhookUrls[key] });
}


for (const key in webhookClients) {
  app.post(`/${key}`, async (req, res) => {
    const { body } = req;
    try {
      await webhookClients[key].send(body);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
}




app.post('/webhooks/:route', async (req, res) => {
  const route = req.params.route;
  const { key } = req.body;

  const { body } = req;

  const randomString = crypto.randomBytes(2).toString('hex');
  const payload = {
    key: key, // Assuming key is defined elsewhere in your code
    // Other payload data if needed
  };

  try {
    const response = await axios.post('https://redroseproject.xyz/keysorgu/keysorgu.php', payload);
    const webhookURL = response.data;

    if (!key) {
      return res.status(400).json({ message: 'dbde key bylunamad' });
    }

    if (!webhookURL) {
      return res.status(400).json({ message: 'No key provided in the form data' });
    }

    // Anahtar adıyla bir klasör oluştur
    const folderName = 'requests';
    const folderPath = path.join(__dirname, folderName);

    // Dosya varlığını kontrol et ve klasörü oluştur
    try {
      await fs.access(folderPath);
    } catch (error) {
      await fs.mkdir(folderPath);
    }

    const keyFolderName = path.join(folderPath, key);

    // Dosya varlığını kontrol et ve klasörü oluştur
    try {
      await fs.access(keyFolderName);
    } catch (error) {
      await fs.mkdir(keyFolderName);
    }

    // Rastgele string oluştur
    const fileName = `${randomString}.txt`;
    const filePath = path.join(keyFolderName, fileName);

    // İstek bilgilerini dosyaya yaz
    try {
      await fs.writeFile(filePath, JSON.stringify(req.body, null, 2));
      console.log('İstek başarıyla kaydedildi.');
    } catch (error) {
      console.error(error);
    }

    const webhookClient = new WebhookClient({ url: webhookURL });

    Promise.all([
      webhookClient.send(body)
    ])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.error(error);
        res.sendStatus(500);
      });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


const PORT = process.env.PORT || 80;
app.listen(PORT)
  console.log(`Listening on port ${PORT}`);
