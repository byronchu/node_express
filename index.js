const FS = require('fs');
const Path = require('path');
const express = require('express');
const marked = require('marked');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello, world');
});

app.get('/cats', function(req, res) {
    res.json({
        species: 'cat',
        call: 'meow meow meow',
        lovesItsOwner: false
    });
});

app.get('/dogs', function(req, res) {
    res.json({
        species: 'dog',
        call: 'woof woof woof',
        lovesItsOwner: true
    });
});

app.get('/markdown', function(req, res) {
    const markdown = `
# Hey it's some Markdown

- I can make lists so easily
- Yes I can
- Whoah last item!

[OMG](https://youtube.com/)
`;

    const html = marked(markdown);
    res.send(html);
});

app.get('/markdown-file', function(req, res) {
    const path = Path.join(__dirname, 'assets/example.md');
    const markdown = FS.readFile(path, 'utf8', function(err, markdown) {
        if (err) {
            res.json({
                error: err.message
            });
        }
        else {
            const html = marked(markdown);
            res.send(html);
        }
    });
});

app.get('/such-wow.jpg', function(req, res) {
  const path= Path.join(__dirname, 'assets/doge.jpg');
    FS.readFile(path,function(err, data) {

      if (err) {
          res.json({
              error: err.message
          });
      }
      else {
          res.type('image/jpeg').send(data);
      }


    });

});

app.get('/youtube', function(req, res) {
    res.redirect('https://www.youtube.com/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});
