var bio = {
  "name": "Kyle Sarvas",
  "role": "FE Web Developer",
  "contacts": {
    "mobile": "630-485-9336",
    "email": "kylesarvas@gmail.com",
    "github": "ksarvas",
    "twitter": "@ksarvas",
    "location": "Chicago, IL"
  },
  "welcomeMessage": "Welcome to my Online Resume. Check back soon for more updates",
  "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  "skills": [
    "Adobe Photoshop", "Web Design", "Maya", "ZBrush", "Game Development"
  ],
  "biopic": "images/fry.jpg"
};

bio.display = function() {

  var formattedHeaderPic = HTMLheaderPic.replace("%data%", bio.biopic);
  $("#header").append(formattedHeaderPic);

  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedHeaderName);

  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedHeaderRole);
  
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#welcome").append(formattedWelcomeMsg);

  $("#about").append(HTMLaboutStart);

  var formattedAbout = HTMLabout.replace("%data%", bio.about);
  $("#about").append(formattedAbout);

  $("#contact").append(HTMLcontactStart);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedGitHub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);

  $("#skills").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {

    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skillList").append(formattedSkill);

  });
};

bio.display();

var work = {
  "jobs": [{
    "employer": "38 Studios",
    "title": "Character Artist",
    "location": "Providence, RI",
    "dates": "2011 - 2013",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  }, {
    "employer": "Sears Holdings Corporation",
    "title": "Product Manager",
    "location": "Chicago, IL",
    "dates": "June 2014 - Current",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  }]
};

work.display = function() {

  work.jobs.forEach(function(job) {

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
    
    // TODO: Add URLs to Work object and figure out how to append URL value in the A tag HREF

  });
};

work.display();

var projects = {
  "projects": [{
    "title": "LeagueUpp",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur.",
    "images": [
      "images/FantasySportsApp_Small.jpg",
      "images/FantasySportsApp_Small.jpg"
    ]
  }, {
    "title": "Frontier FX",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur.",
    "images": [
      "images/DigitalDomain_Small.jpg",
      "images/DigitalDomain_Small.jpg"
    ]
  }, {
    "title": "Ascension",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur.",
    "images": [
      "images/Blizzard_Small.jpg",
      "images/Blizzard_Small.jpg"
    ]
  }]
};

projects.display = function() {

  projects.projects.forEach(function(project) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectDescription);
    
    project.images.forEach(function(image) {
      
      var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedProjectImage);
      
    });
    
    // TODO: Add URLs to Projects object and figure out how to append URL value in the A tag HREF

  });
};

projects.display();

var education = {
  "schools": [{
    "name": "Gnomon School of Visual Effects",
    "degree": "Certificate Program",
    "dates": "2017 - 2019",
    "location": "Hollywood, CA",
    "majors": [ "Visual Effects Animation" ],
    "url": "http://www.gnomon.edu"
  }, {
    "name": "Rhode Island School of Design",
    "degree": "BFA",
    "dates": "2007 - 2011",
    "location": "Providence, RI",
    "majors": [ "Illustration" ],
    "url": "http://www.risd.edu"
  }],
  "onlineCourses": [{
    "title": "Intro to Environment Art",
    "school": "CGMA",
    "dates": "2016",
    "url": "http://www.cgma.com"
  }, {
    "title": "FE Web Development Nanodegree",
    "school": "Udacity",
    "dates": "2016",
    "url": "http://www.udacity.com"
  }, {
    "title": "Look Development and Image Based Lighting Fundamentals",
    "school": "CGWorkshops",
    "dates": "2015",
    "url": "http://www.cgworkshops.com"
  }, {
    "title": "Hard Surface Modeling",
    "school": "Gnomon School of Visual Effects",
    "dates": "2014",
    "url": "http://www.gnomon.edu"
  }]
};

education.display = function() {

  education.schools.forEach(function(school) {

    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

    var formattedSchool = formattedSchoolName + formattedSchoolDegree;
    $(".education-entry:last").append(formattedSchool);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    
    school.majors.forEach(function(major) {
      
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedSchoolMajor);
      
    });
    
    // TODO: Figure out how to append URL value in the A tag HREF

  });

  // Online Courses is an Optional Section for the Resume
  if (education.onlineCourses.length > 0) {

    $("#education").append(HTMLonlineClasses);

  }

  education.onlineCourses.forEach(function(course) {

    $("#education").append(HTMLonlineClassesStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);

    var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
    $(".course-entry:last").append(formattedOnlineCourse);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".course-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
    $(".course-entry:last").append(formattedOnlineURL);
    
    // TODO: Figure out how to append URL value in the A tag HREF

  });
};

education.display();

$("#mapDiv").append(googleMap);