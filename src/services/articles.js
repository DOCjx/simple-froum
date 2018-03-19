'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

    const db = server.app.db;
    server.route([{
        method: 'GET',
        path: '/api/articles/{model}',
        handler: function (request, reply) {
            db.articles.find((err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                const articles = docs[0];
                reply(articles && [...articles[request.params.model]]);
            });

        }
    },{
        method: 'GET',
        path: '/api/articles/model/{model}/id/{id}',
        handler: function (request, reply) {
            db.articles.find((err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                const {model, id} = request.params;
                const articles = docs[0][model];
                reply(articles.filter(item => item.id == id)[0] || {});
            });

        }
    }]);
    return next();
};

exports.register.attributes = {
  name: 'routes-articles'
};