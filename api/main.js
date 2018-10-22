const Express = require('express');
var MongoClient = require('mongodb').MongoClient;

const app = Express();
const port = 3000;
const dbUrl = "mongodb://username:password@mlab.com/wecp"; 

app.get('/store_activity/:id', record);

app.get('/get_activity/:id', retrieve);

function record(req, res){
    console.log('Inserting...');

    MongoClient.connect(dbUrl, { useNewUrlParser: true } ,function (err, client) {
        var myobj = { id: req.params['id'], data: req.query.data };
        var db = client.db('wecp')
        db.collection("activity").insertOne(myobj, function(err, result) {
            // console.log(res);
            if (err) {
                res.json({'message' : 'error' });
            }
            res.json({'message' : 'recorded' });
            console.log("1 document inserted");
        });
        client.close();
    }); 
}

function retrieve(req, res){
    console.log(req.params);

    MongoClient.connect(dbUrl, { useNewUrlParser: true } ,function (err, client) {
        if (err) {
          res.json({'message' : 'error' });
        } 
        
        var db = client.db('wecp')
        db.collection('activity').find({'id' : req.params['id'] }).toArray(function (err, result) {
            if (err) {
                res.json({'message' : 'error' });
            } 
            var filtered = [];
            result.forEach(element => {
                filtered.push(element['data']);
            });
            res.json({activity : filtered});
        });
        client.close();
    });

    // const dummy = [ { _id: "5bce4299fb6fc060274b3cb9", id: 'netthis', data: 'oops' },
    // { _id: "5bce42c2fb6fc060274b3cc8", id: 'netthis', data: 'super' } ];
    // // var filtered = [];
    // dummy.forEach(element => {
    //     filtered.push(element['data']);
    // });
    // res.json({ts : filtered});

    // var results = ["User id did this","User id did that"];
    
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));