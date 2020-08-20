var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
require('dotenv/config');

app.get('/', function(req, res){
    res.send(`running under port ${process.env.PORT} and ${process.env.ADJUSTED_DATE}`);
});

io.on('connection', socket => {
    var adjustedDate = process.env.ADJUSTED_DATE;
    socket.on('get_date', () => {
        var date = getDate(adjustedDate);
        socket.emit('get_date', date);
    });

    socket.on("update_date", date => {
        adjustedDate = date;
        socket.emit('update_date');
    });
});

http.listen(process.env.PORT, () => {
    console.log('Server up and running');
});

const getDate = adjustedDate => {
    var date = new Date();
    date = new Date(date.getTime() + adjustedDate*60000);
    
    return date.toLocaleString('pt-BR');
}
