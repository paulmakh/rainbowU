﻿/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
            'lodash': 'npm:lodash',
            'rxjs': 'npm:rxjs',
            'ng2-table': 'npm:ng2-table',
            'ng2-bootstrap': 'node_modules/ng2-bootstrap'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            lodash: {
                main: 'index.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-jwt': {
                defaultExtension: 'js',
            },
            'ng2-bootstrap': {
                format: 'cjs',
                main: 'bundles/ng2-bootstrap.umd.js',
                defaultExtension: 'js'
            },
            'ng2-table': {
                main: 'ng2-table.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);