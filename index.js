import cors_proxy from 'cors-anywhere';

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || 'localhost';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 3333;
cors_proxy.createServer({
    originWhitelist: ['note-n-do-alpha-5771f.web.app', 'app.exmind.app'], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});