'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const remoteServer = {
    host: '192.168.56.129',
    remotePath: '/data/website/website1',
    user: 'root',
    pass: 'web'
};

gulp.task('upload', function () {
    var sftp = require('gulp-sftp');
    return gulp.src(__dirname + './dist/**')
               .pipe(sftp(remoteServer));
})