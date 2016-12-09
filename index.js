const express = require('express');
const marked = require('marked');


const app = express();



app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/cats', function(req, res) {
  res.json({
    species: 'cat',
    call: 'meow meow meow',
    lovesItsOwner: false
  })
});

app.get('/dogs', function(req, res) {
  res.send('Wooffffff  Woof');
});


app.get('/markdown', function(req, res) {
  const markdown = `
  # Hey this is some markdown

  - it can list things
  - it does it easily

 [OMG}(http://youtube.com)]
  `;
  const html = marked(markdown);
  res.send(html);
//  res.type(text).send(html);
});


app.listen(3000, function() {
  console.log('listening on port 3000!')

});
