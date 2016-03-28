import 'es5-shim';
import Backbone from 'backbone';
import AppView from 'views/app';
import Router from 'routers/router';
import $ from 'jquery';

import 'styles/main.css';
import '../styles/main.scss';

// Init the app view
$(function() {
    new AppView();
});
