'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

    const db = server.app.db;
    server.route({
        method: 'GET',
        path: '/api/users/pwd/{pwd}/id/{id}',
        handler: function (request, reply) {
            const {pwd, id} = request.params;
            db.users.find({pwd, userId: id}, (err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                reply(docs[0]);
            });

        }
    });
    return next();
};

exports.register.attributes = {
  name: 'routes-users'
};