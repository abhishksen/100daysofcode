
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello Node js\n');
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
