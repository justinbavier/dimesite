const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello froam the custom server!"}');
  console.log('you');
});

var mailchimpInstance   = process.env.MAILCHIMP_INSTANCE, 
    listUniqueId        = process.env.NEWSLETTER_ID,
    mailchimpApiKey     = process.env.MAILCHIMP_API_KEY;

app.post('/api/signup', function (req, res) {
  request
      .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
      .set('Content-Type', 'application/json;charset=utf-8')
      .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
      .send({
        'email_address': req.body.email,
        'status': 'pending',
        'merge_fields': {
          'FNAME': req.body.FNAME,
          'LNAME': req.body.LNAME
        }
      })
          .end(function(err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
              res.redirect('/success');
            } else {
              // res.send('Sign Up Failed :(')
              // .then(console.log(err))
              res.redirect('/fail');
            }
        });
});

// All remaining requests return the React app, so it can handle routing.
app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
