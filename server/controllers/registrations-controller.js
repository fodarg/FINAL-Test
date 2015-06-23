'use strict';

var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var passport = require('passport');
var User = require('../models/user');
var secrets = require('../config/secrets');


// Show Registration Page

exports.getSignup = function(req, res){
  var form = {},
  error = null,
  formFlash = req.flash('form'),
  errorFlash = req.flash('error');

  if (formFlash.length) {
    form.email = formFlash[0].email;
  }
  if (errorFlash.length) {
    error = errorFlash[0];
  }
  res.render('signup', {form: form, error: error});
};
// PLANS
exports.postPlan = function(req, res, next){
  var plan = req.body.plan;
  var stripeToken = null;

  if(plan){
    plan = plan.toLowerCase();
  }

  if(req.user.stripe.plan == plan){
    req.flash('info', {msg: 'The selected plan is the same as the current plan.'});
    return res.redirect(req.redirect.success);
  }

  if(req.body.stripeToken){
    stripeToken = req.body.stripeToken;
  }

  if(!req.user.stripe.last4 && !req.body.stripeToken){
    req.flash('errors', {msg: 'Please add a card to your account before choosing a plan.'});
    return res.redirect(req.redirect.failure);
  }

  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);

    user.setPlan(plan, stripeToken, function (err) {
      var msg;

      if (err) {
        if(err.code && err.code == 'card_declined'){
          msg = 'Your card was declined. Please provide a valid card.';
        } else if(err && err.message) {
          msg = err.message;
        } else {
          msg = 'An unexpected error occurred.';
        }

        req.flash('errors', { msg:  msg});
        return res.redirect(req.redirect.failure);
      }
      req.flash('success', { msg: 'You successfully chosen a plan. Click Home in the menu to view your tips.' });
      res.redirect(req.redirect.success);
    });
  });
};
exports.postSignup = function(req, res, next){
  req.assert('email', 'Please sign up with a valid email.').isEmail();
  req.assert('password', 'Password must be at least 6 characters long').len(6);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    req.flash('form', {
      coupon: req.body.coupon,
      fname: req.body.fname,
      email: req.body.email,
      plan:  req.body.plan
    });
    return res.redirect('/signup');
  }
  // calls next middleware to authenticate with passport
  passport.authenticate('signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash : true
  })(req, res, next);
};
