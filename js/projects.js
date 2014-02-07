$(document).ready(function() {

  $('.w-inline-block').click(function(){
    if ($(this).attr("id")=='bpsf') {
      var header = "Project: Grant Application and Crowdfunding Platform<br>For: Berkeley Public Schools Fund";
      var content = "The goal of this project was to create crowdfunding system and administrator \
      backend for the Schools Fund's grant application process. This took form of a web application \
      that uses the Ruby on Rails framework and PostgreSQL for its backend database.";
      $('#modal-link').html("<a href='http://bpsf-staging.herokuapp.com'>Link to Project</a>");
    } else if ($(this).attr("id")=='pacman') {
      var header = "Project: PacMan Multi-Agent Search<br>For: Artificial Intelligence (CS 188) Project";
      var content = "The goal of this project was to create multiple search agents that \
      would search a PacMan puzzle and solve it in the most optimal way possible. The project \
      utilizes simple searches as well as A* search and heuristics.";
      $('#modal-link').html("<a href='http://inst.eecs.berkeley.edu/~cs188/pacman/html/navigation.html?page=overview'>Link to Project Description</a>");
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