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

app.get('/image', function(req, res) {
    //const markdown = FS.readFile();

});

app.get('/youtube', function(req, res) {
    res.redirect('https://www.youtube.com/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});


//
// const FS = require('fs');
// const Path = require('path');
// const express = require('express');
// const marked = require('marked');
//
//
// const app = express();
//
//
//
// app.get('/', function(req, res) {
//   res.send('Hello World');
// });
//
// app.get('/cats', function(req, res) {
//   res.json({
//     species: 'cat',
//     call: 'meow meow meow',
//     lovesItsOwner: false
//   })
// });
//
// app.get('/dogs', function(req, res) {
//   res.send('Wooffffff  Woof');
// });
//
//
// app.get('/markdown', function(req, res) {
//   const markdown = `
//   # Hey this is some markdown
//
//   - it can list things
//   - it does it easily
//
//  [OMG}(http://youtube.com)]
//   `;
//   const html = marked(markdown);
//   res.send(html);
// //  res.type(text).send(html);
// });
//
// app.get('/markdown-file', function(req, res) {
//   const path = Path.join(__dirname, 'assets/example.md');
//   const markdown = FS.readFile(path, 'utf8', function(err, markdown) {
//     if (err) {
//       res.json({
//         error: err.message
//       });
//     }
//     else {
//       const html = marked(markdown);
//       res.send(html);
//     }
//
//   }
// });
//
//
// app.listen(3000, function() {
//   console.log('listening on port 3000!')
//
// });
