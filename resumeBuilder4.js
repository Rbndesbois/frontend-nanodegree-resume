var bio = {
    "name": "Robin Edward Irving",
    "role": "Web Developer",
    "contacts": {
        "mobile": "514-869-6087",
        "email": "robinirving2016@gmail.com",
        "github": "https://github.com/Rbndesbois",
        "twitter": "@RobinEdwardIrv2",
        "location": "Pierrefonds, QC"
    },

    "welcomeMessage": "Welcome to my Resume. Let's connect!",
    "skills": ["Communication", "Language", "Sales", "Management", "Technical"],
    "biopic": "images/Head.jpg"
};

bio.display = function() {
    //if (bio.name.length >0)
    console.log(bio.name);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    //console.log (formattedbioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    $("#topContacts, #footerContacts").append(bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(bio.contacts.email);
    $("#topContacts, #footerContacts").append(bio.contacts.github);
    $("#topContacts, #footerContacts").append(bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(bio.contacts.location);

    $("#header").append(formattedMessage);
    //$("#header").append(bio.contacts);
    //$("#header").append(bio.contacts.mobile);
    //$("#header").append(bio.contacts.email);
    //$("#header").append(bio.contacts.github);
    //$("#header").append(bio.contacts.twitter);
    //$("#header").append(bio.contacts.locations);
    //$("#header").append(bio.url);
    $("#header").append(formattedbioPic);
    $("#header").prepend(bio.role);
    $("#header").prepend(formattedName);
    //$("#header").prepend(bio.role)
};
bio.display();

BioSkills = function() {
    if (bio.skills.length > 0) {
        //$("#header").append(HTMLskillsStart);

        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }

        //var formattedSkill = HTMLskills.replace(
        //"%data%", bio.skills[0]);
        //$("#skills").append(formattedSkill);
        //formattedSkill = HTMLskills.replace("%data%",
        //bio.skills[1]);
        //$("#skills").append(formattedSkill);
        //formattedSkill = HTMLskills.replace("%data%",
        //bio.skills[2]);
        //$("#skills").append(formattedSkill);
        //formattedSkill = HTMLskills.replace("%data%",
        //bio.skills[3]);
        //$("#skills").append(formattedSkill);
        //formattedSkill = HTMLskills.replace("%data%",
        //bio.skills[4]);
    }
};
BioSkills();



var education = {
    "schools": [{
        "name": "Mohawk College",
        "location": "Hamilton, ON",
        "degree": "Diploma 3-year",
        "majors": ["Finance", "Marketing"],
        "dates": "04-30-90",
        "url": "www.mohawkcollege.ca"
    }, {
        "name": "Lester B Pearson SS",
        "location": "Burlington, ON",
        "degree": "High School Diploma",
        "majors": ["General Diploma"],
        "dates": "06-30-84",
        "url": "http://lbphdsb.weebly.com/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "dates": "07-31-16",
        "url": "www.udacity.com"
    }]
};

//function displayEducation(){
//education.forEach(function(school) {
Education = function() {
    for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
        $("#education").append(HTMLschoolStart);
        console.log(indexCount);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);


        $(".education-entry:last").append(formattedName + formattedDegree);

        $(".education-entry:last").append(formattedDates);

        $(".education-entry:last").append(formattedCity);

        //$(".education-entry:last").append(formattedDegree);

        $(".education-entry:last").append(formattedMajor);
    }
};
Education();

OnlineEdu = function() {
    for (var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url);
        $(".education-entry:last").append(HTMLonlineClasses);
        //$(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    }
};
OnlineEdu();


//for [school in education.schools] {
//$("#education").append (HTMLschoolStart);
//var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
//$(".education-entry:last").append(formattedschoolName);

//}

//education();

var work = {
    "jobs": [{
        "employer": "ICAM",
        "title": "Account Executive",
        "location": "Ste-Anne-de-Bellevue, QC",
        "dates": "2012 - 2016",
        "description": "Business Development and Account Management"
    }, {
        "employer": "PCMall",
        "title": "Account Executive",
        "location": "Montreal",
        "dates": "2010 - 2011",
        "description": "Business Development and Account Management"
    }, {
        "employer": "Insight",
        "title": "Account Executive",
        "location": "Montreal",
        "dates": "2000 - 2009",
        "description": "Business Development and Account Management"
    }, {
        "employer": "Various",
        "title": "Contractor",
        "location": "Toronto",
        "dates": "1990 - 2000",
        "description": "short-term contracts marketing, credit and collections, general accounting clerical roles"
    }]
};
var projects = {
    "projects": [{
        "title": "Launch Mastercam Division",
        "dates": "June 2012 - September 2015",
        "description": "started new sales division from zero for Mastercam users",
        "images": ["images/ICAM.jpg"]
    }]
};

projects.display = function() {
    for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
        //for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[indexCount].images.length > 0) {
            //for (image in projects.projects[project].images) {

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount]
                .images);
            $(".project-entry:last").append(formattedImage);
        }

    }
};
projects.display();


Work = function() {
    for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
        var formattedTitle = HTMLworkTitle.replace(
            "%data%", work.jobs[indexCount].title);
        var formattedEmployerTitle = formattedEmployer +
            formattedTitle;

        $(".work-entry:last").append(
            formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(
            "%data%", work.jobs[indexCount].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.
        replace("%data%", work.jobs[indexCount].description);
        $(".work-entry:last").append(
            formattedDescription);
    }
};
Work();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    //for (var indexCount = 0; indexCount < work_obj.jobs.length; indexCount++)
    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));



function inName(name) {
    name = "Robin Irving";
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$(document).click(function(loc) {
    console.log(loc.pageX, loc.pageY);
});

$("#mapDiv").append(googleMap);