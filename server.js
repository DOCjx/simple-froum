'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

//连接数据库
server.app.db = mongojs('forum', ['articles', 'comments', 'users']);

server.register([
    require('./src/services/articles'),
    require('./src/services/comments'),
    require('./src/services/users')
], (err) => {
    if (err) {
      throw err;
    }
});


server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/{controller}/{action}.js',
        handler: function (request, reply) {
            reply.file(request.params.controller+'/'+request.params.action+'.js');
        }
    });
});

server.register(require('vision'), (err) => {
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'public'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.view('index.html');
        }
    });
    // server.route({
    //     method: 'GET',
    //     path: '/{controller}/{action}.html',
    //     handler: function (request, reply) {
    //         reply.view(request.params.controller+'/'+request.params.action+'.html');
    //     }
    // });
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});