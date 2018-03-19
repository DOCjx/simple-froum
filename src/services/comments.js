'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

    const db = server.app.db;
    server.route([{
        method: 'GET',
        path: '/api/comments/model/{model}/id/{id}',
        handler: function (request, reply) {
            const {model, id} = request.params;
            db.comments.find({model, articleId: +id}, (err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                reply(docs[0] || []);
            });

        }
    },{
        method: 'POST',
        path: '/api/comments',
        config: {
            payload: {
                output: 'data'
            }
        },
        handler: function (request, reply) {
            const {model, userId, comment, articleId} = request.payload.params;
            db.comments.find({model, articleId: +articleId}, (err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                const date = new Date();
                if(docs.length){
                    const obj = docs[0];
                    const {_id, comments} = obj;
                    comments.push({
                        id: comments.length + 1,
                        userId,
                        comment,
                        time: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
                    });
                    db.comments.update({_id}, {
                        ...obj,
                        comments
                    }, (err, docs) => {
                        return reply(docs["nModified"] ? true : false);
                    });
                }else{
                    const comments = [{
                        id: 0,
                        userId,
                        comment,
                        time: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
                    }];
                    db.comments.insert({
                        model,
                        articleId,
                        comments
                    }, (err, docs) => {
                        return reply(docs ? true : false);
                    });
                }
            });

        }
    }]);
    return next();
};

exports.register.attributes = {
  name: 'routes-comments'
};