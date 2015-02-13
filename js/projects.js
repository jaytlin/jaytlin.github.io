$(document).ready(function() {

  $('.w-inline-block').click(function(){
    if ($(this).attr("id")=='bpsf') {
      var header = "Project: Grant Application and Crowdfunding Platform<br>For: Berkeley Public Schools Fund";
      var content = "The goal of this project was to create a crowdfunding system and administrator \
      backend for the school district's teachers. This took form of a web application that uses \
      the Ruby on Rails framework and PostgreSQL for its backend database. This project was deployed live \
      for the Berkeley school district in Fall 2014, and since raised over $16,000.";
      $('#modal-link').html("<a href='https://schoolsfund-friendsandfamily.herokuapp.com/'>Link to Deployed Website</a>");
    } else if ($(this).attr("id")=='lisa') {
      var header = "Analyzing Log Analysis: An Empirical Study of User Log Mining";
      var content = "This paper presents an in depth study of log analysis queries performed by users \
      of a log analysis platform called Splunk. The purpose of the study is to quantitatively analyze \
      the behavior of modern log analysts in order to suggest improvements for log analysis tools. The paper \
      was presented at the LISA 2014 conference and won Best Student Paper.";
      $('#modal-link').html("<a href='https://www.usenix.org/conference/lisa14/conference-program/presentation/alspaugh'>Link to LISA Conference 2014 Paper</a>");
    } else if ($(this).attr("id")=='retina') {
      var header = "Project: Retinal Video Tracker<br>For: Sight Enhancement Lab";
      var content = "The goal of this project was to analyze the data collected from a\
      vision science experiment that used a scanning laser opthalmascope (SLO) to record \
      retinal activity. The analysis consisted of measuring the accuracy of the \
      experiment by tracking the presented letter E in each frame using MATLAB."
      $('#modal-link').html("");
    } else {
      var header = "Project: Variable Classifier<br>For: Algorithms, Machines, and People Lab";
      var content = "The goal of this project was to classify variables in a relational \
      dataset into five different categories. The program used various machine learning \
      algorithms such as decision trees and cross validation to detect attributes of variables \
      and determine their classification."
      $('#modal-link').html("<a href='https://github.com/jaytlin/variable-classifier'>Link to GitHub</a>");
    }
    $('#modal-header').append(header);
    $('#modal-content').append(content);
    $('#modal-overlay').fadeIn(400);
    $('#modal-box').fadeIn(400);
  });

  $('#modal-overlay').click(function() {
    $('#modal-box').fadeOut(400, function() {
      $('#modal-header').empty();
      $('#modal-content').empty();
    });
    $('#modal-overlay').fadeOut(400);
  });

});
