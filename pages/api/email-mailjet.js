const Mailjet = require('node-mailjet');

export default function handler(req, res) {
  const mailjet = new Mailjet({
    apiKey: process.env.MAIL_JET_API_KEY,
    apiSecret: process.env.MAIL_JET_API_SECRET,
  });

  console.log(mailjet);

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'mirthis@gmail.com',
          Name: 'Andrea',
        },
        To: [
          {
            Email: 'mirthis@gmail.com',
            Name: 'Andrea',
          },
        ],
        Subject: 'Greetings from Mailjet.',
        TextPart: 'My first Mailjet email',
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: 'AppGettingStartedTest',
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200).end(JSON.stringify({ message: 'Send Mail' }));
}
