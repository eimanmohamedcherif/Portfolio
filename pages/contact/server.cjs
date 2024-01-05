const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5173;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/envoyer-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurer le transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prime.height94@gmail.com',
      pass: 'momolakalash',
    },
  });

  // Définir le contenu de l'e-mail
  const mailOptions = {
    from: 'votre-email@gmail.com',
    to: 'suleyman.laarabi.dev@gmail.com',
    subject: 'Nouveau message de votre formulaire de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé :', info.response);
      res.status(200).send('E-mail envoyé avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
