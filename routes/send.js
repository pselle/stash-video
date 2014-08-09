var multiparty = require('multiparty');
var request = require('request');
var fs = require('fs');
/*
 * POST file to API.
 */

exports.file = function(req, res, next){
  var form = new multiparty.Form();

  console.log('files', req.files.videoInput.path);

  form.on('error', function() {
    console.log('error');
  });
  
  form.on('close', function(){
    console.log('closed');
  });

  form.on('part', function(part){
    console.log('parsed');
    if (!part.filename) return;
    if (part.name !== 'videoInput') return part.resume();
    var url = "https://api.stash.my/v0/messages/send/file";

    var headers = { 
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
        'Content-Type' : 'application/x-www-form-urlencoded' 
    };
    var form = {
      filename: req.body.name,
      filedata: part,
      recipientId: "7f46085a-ea38-4cc1-b477033861c20d76",
      sessionId: "PvluMOqNN+Aht4MmplXvr1tmLLPWNNg3liBum9y5unpS3XAu+mjD2+iHehI/gXfjDTkU8r8f/ar73FOytxK6IDOVUPHEU9jI/KPu596fDiorIyMr8hihPACnSwXZvU7L"
    };

    request.post({ url: url, form: form, headers: headers }, function (e, r, body) {
        // your callback body
        console.log(body);
    });
  });

  form.parse(req, function(a,b,c) {
    console.log('parsedz');
    console.log(a);
    console.log(b);
    console.log(c);
  });
  // Send file stuff to Stash API

  /*

{
   "betacode": "HackAndStash",
   "passphrase": "sample",
   "email": "pamela.selle+stash2@gmail.com"
}
{
   "ERROR": 0,
   "USERID": "7f46085a-ea38-4cc1-b477033861c20d76",
   "PUBLICKEY": "-----BEGIN PGP PUBLIC KEY BLOCK-----\r\nVersion: BCPG v1.46\r\n\r\nmQGiBFPloY8RBACDTYPdaPOvAW70lbjYBi5afq7Gdp3n727g5X3c6/APApjnAD8W\r\n19AgL+5cosakDz7ta+HBacx8GRETsx9pd9Qi7+It7T1nLg8oCWLJZMVFAYYikzQh\r\nVhFamzZz2ZWQ7Tl0pTJUeXtmRgVqj0Mmnt1VqsheYdNnkCFYLgGQiAh2XwCgmXzZ\r\nYvofQhTVJnOXv9tROQnz5UcD/3d4i+bsMRMX6BrcuyHPGKwlBmSsOc9kH7Qd3jZF\r\nKENwNr0SfhcJQyTy/QoR2rMujqdHfjNjdRNzI/8uGUvfROUzDOMvfgqIKBUUh9sE\r\npL30/TbxYRnZZVCh4c2UbENAO/HPPLf65TjWchbDzuRDTEngjKjkB/dBOL7TpW6G\r\n3LxDA/94jCJWyLqXjAc5APo/e9Yw5SsQWqtMQPUenA7LZyrwz8let+1wqlWrwKmI\r\n4D1dhKCcc66buTNOb0cJuPl44x2KhbqtvJ/xpUnQQJDPvol+9QTQC/H4VqkRpGFD\r\n8mhPJ/rQ/jAGF9FKrF3tphF6twtwYmgdp67ww0W/qssO0IMQfbQdcGFtZWxhLnNl\r\nbGxlK3N0YXNoMkBnbWFpbC5jb22IRgQTEQIABgUCU+WhjwAKCRA6Rwt/YcofGwNH\r\nAJ0WgseaBpqp/yQIaF91Tl4C9kT8RgCcCoC+X1l3NpoHjEegkcXaym7YNLy4zART\r\n5aGPEAIAlJT+wJXzuF7ihlQrODb8gaXdCgNJtMI53Th0TUiM+OMduLy30ztBq7nl\r\nozzKkUSxzvMyyUvwVzvwR6OsqYzfOwH9FT1dYXKttDBFtoro4d4QcLYTcAVobSnT\r\n1zp3SRmWge5bISyblr/c+lsgzV4/0gRIldYJz5tBC3oPEsocuaQozAH/dPuqTyQF\r\ntktkbNs/rPdT9oDYaaZmHZ1WLV7b2+SuYTVXlCkTJyUkuGz3EGk6HQVuvvNfWRp7\r\n3SrMRDJGDCkNGYhGBBgRAgAGBQJT5aGPAAoJEDpHC39hyh8bxlwAnArbguPKiE6y\r\nMYA0X3qr6D4+G2RzAJ4oTitykGH+7npnXY+CA3QQWfznhQ==\r\n=CVYb\r\n-----END PGP PUBLIC KEY BLOCK-----\r\n",
   "PRIVATEKEY": "-----BEGIN PGP PRIVATE KEY BLOCK-----\r\nVersion: BCPG v1.46\r\n\r\nlQHpBFPloY8RBACDTYPdaPOvAW70lbjYBi5afq7Gdp3n727g5X3c6/APApjnAD8W\r\n19AgL+5cosakDz7ta+HBacx8GRETsx9pd9Qi7+It7T1nLg8oCWLJZMVFAYYikzQh\r\nVhFamzZz2ZWQ7Tl0pTJUeXtmRgVqj0Mmnt1VqsheYdNnkCFYLgGQiAh2XwCgmXzZ\r\nYvofQhTVJnOXv9tROQnz5UcD/3d4i+bsMRMX6BrcuyHPGKwlBmSsOc9kH7Qd3jZF\r\nKENwNr0SfhcJQyTy/QoR2rMujqdHfjNjdRNzI/8uGUvfROUzDOMvfgqIKBUUh9sE\r\npL30/TbxYRnZZVCh4c2UbENAO/HPPLf65TjWchbDzuRDTEngjKjkB/dBOL7TpW6G\r\n3LxDA/94jCJWyLqXjAc5APo/e9Yw5SsQWqtMQPUenA7LZyrwz8let+1wqlWrwKmI\r\n4D1dhKCcc66buTNOb0cJuPl44x2KhbqtvJ/xpUnQQJDPvol+9QTQC/H4VqkRpGFD\r\n8mhPJ/rQ/jAGF9FKrF3tphF6twtwYmgdp67ww0W/qssO0IMQff4JAwKsO0hx92Cv\r\namCLOZQPSPOHiYUwdrY9yxXl2iKpqosAaUOws6TGnhzwbXWgB5ZcIOUqf4Zo6no8\r\nOSjjhlbWtC04qzp1tB1wYW1lbGEuc2VsbGUrc3Rhc2gyQGdtYWlsLmNvbYhGBBMR\r\nAgAGBQJT5aGPAAoJEDpHC39hyh8bA0cAnRaCx5oGmqn/JAhoX3VOXgL2RPxGAJwK\r\ngL5fWXc2mgeMR6CRxdrKbtg0vJ0BPwRT5aGPEAIAlJT+wJXzuF7ihlQrODb8gaXd\r\nCgNJtMI53Th0TUiM+OMduLy30ztBq7nlozzKkUSxzvMyyUvwVzvwR6OsqYzfOwH9\r\nFT1dYXKttDBFtoro4d4QcLYTcAVobSnT1zp3SRmWge5bISyblr/c+lsgzV4/0gRI\r\nldYJz5tBC3oPEsocuaQozAH/dPuqTyQFtktkbNs/rPdT9oDYaaZmHZ1WLV7b2+Su\r\nYTVXlCkTJyUkuGz3EGk6HQVuvvNfWRp73SrMRDJGDCkNGf4JAwKnc4l9kTcDKGBq\r\nH3ohhxlsopGbmhL6Ki/lYw1jl6T2WNRFjprZvqLVKxoPUqZiUVZqJ1SJPExr57cZ\r\n5cTP6c6JgEJBwOrbAqX5hstQtprbCXSQohKgNsTojW9+y5w+TGfu8FCSk2qfJZTw\r\nkInfZ9OIRgQYEQIABgUCU+WhjwAKCRA6Rwt/YcofG8ZcAJwK24LjyohOsjGANF96\r\nq+g+PhtkcwCeKE4rcpBh/u56Z12PggN0EFn854U=\r\n=ZOUk\r\n-----END PGP PRIVATE KEY BLOCK-----\r\n"
}

{
   "SESSIONKEY": "PvluMOqNN+Aht4MmplXvr1tmLLPWNNg3liBum9y5unpS3XAu+mjD2+iHehI/gXfjDTkU8r8f/ar73FOytxK6IDOVUPHEU9jI/KPu596fDiorIyMr8hihPACnSwXZvU7L"
}
  */
  // create a form to begin parsing
  // var form = new multiparty.Form();
  // var videoInput;
  // var title;

  // form.on('error', next);
  // form.on('close', function(){
  //   res.send(format('\nuploaded %s (%d Kb) as %s'
  //     , videoInput.filename
  //     , videoInput.size / 1024 | 0
  //     , title));
  // });



  // // listen on field event for title
  // form.on('field', function(name, val){
  //   if (name !== 'title') return;
  //   title = val;
  // });

  // // // listen on part event for videoInput file
  // form.on('part', function(part){
  //   console.log(part);
  //   if (!part.filename) return;
  //   if (part.name !== 'videoInput') return part.resume();
  //   videoInput = {};
  //   videoInput.filename = part.filename;
  //   videoInput.size = 0;
  //   part.on('data', function(buf){
  //     videoInput.size += buf.length;
  //   });
  // });


  // // // parse the form
  // form.parse(req);

  res.render('index', { title: 'Express' });
};