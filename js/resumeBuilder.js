var bio = {
	"name" : "Susanne Abdelrahman",
	"role" : "QA Manager",
	"contacts" : {
		"mobile" : "347-922-8040",
		"email" : "s.abdelrahman@gmail.com",
		"github" : "TesterGrl",
		"twitter" : "@TesterGrl",
		"location" : "Brooklyn, NY"
	},
	"welcomeMessage" : "Agile QA professional with experience in Web and Mobile testing. Spent the last nine years at TheLadders, supporting quality efforts across six scrum teams, thirteen applications, and three business lines. <br> #qa &emsp; #qualityassurance &emsp; #softwaretesting &emsp; #agiletesting &emsp; #agiletester",
	"skills" : [
		"Functional Testing",
		"Test Strategy",
		"Business Analysis",
		"Problem Solving",
		"Planning & Estimation",
		"Agile / Scrum"
	],
	"biopic" : "images/Susanne.jpg",
	"display" : function() {
		$("#header-info").append(HTMLheaderStart);

		$("#header-details").append(HTMLheaderName.replace("%data%", bio.name));
		$("#header-details").append(HTMLheaderRole.replace("%data%", bio.role));
		$("#header-details").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header-pic").append(HTMLbioPic.replace("%data%",bio.biopic));


		$("#top-contacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#top-contacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#top-contacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#top-contacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#top-contacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

		if (bio.skills.length !== 0) {
			$("#header").append(HTMLskillsStart);
			var allSkills = "";

			for(var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				allSkills = allSkills + formattedSkill;
			}

			$("#skills").append(allSkills);
		}

		$("#footer-contacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footer-contacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footer-contacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#footer-contacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#footer-contacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	}
};

bio.display();

var education = {
	"schools" : [
		{
			"name" : "SUNY Albany",
			"location" : "Albany, NY",
			"degree" : "Bachelors",
			"majors" : ["Mathematics"],
			"dates" : 2006,
			"url" : "http://www.albany.edu/undergraduate_bulletin/department_mathematics_statistics.html"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Web Development",
			"school" : "Udacity",
			"date" : 2016,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	"display" : function() {
		for(var school in education.schools) {
			if(education.schools[school]) {
				$("#education").append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").prepend(formattedNameDegree);

				var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDate);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				for(var major in education.schools[school].majors) {
					if(education.schools[school].majors[major]) {
						var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(formattedMajor);
					}
				}

				var formattedURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
				$(".education-entry:last").append(formattedURL);
			}
		}

		for (var course in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);

			if(education.onlineCourses[course]) {
				$("#education").append(HTMLonlineStart);

				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				$(".education-entry:last").append(formattedTitleSchool);

				var formattedScoolDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				$(".education-entry:last").append(formattedScoolDate);

				var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedSchoolURL);
			}
		}
	}
};

education.display();

var work = {
	"jobs" : [
	{
		"employer" : "TheLadders",
		"title" : "QA Manager",
		"location" : "New York, NY",
		"dates" : "2012-2016",
		"description" : "Currently I lead testing efforts for all of our websites and iOS apps, partnering with and assisting developers in meeting quality goals and producing rock-solid products.",
	},
	{
		"employer" : "TheLadders",
		"title" : "QA Lead",
		"location" : "New York, NY",
		"dates" : "2009-2012",
		"description" : "As a key member of three self-directed scrum teams supporting three different business lines, I worked hand-in-hand with the development teams and stakeholders to break down communication barriers and ensure high quality delivery at the end of every iteration.",
	},
	{
		"employer" : "TheLadders",
		"title" : "QA Analyst",
		"location" : "New York, NY",
		"dates" : "2007-2009",
		"description" : "Developed accurate estimates for projects - duration, effort, scope, schedule, resources. Reviewed all requirements and documentation for clarity, completeness and testability. Designed, developed, and executed test cases based on new requirements and analysis of past reported defects for all releases/product launches. Coordinated and monitor entire testing process. Tracked defect fixes and releases. Verified MySQL data consistency with all new projects. Proactively identified potential issues on the website and worked with the Customer Service teams to troubleshoot potential website issues and find workarounds.",
	}
	],
	"display" : function() {
		for(var job in work.jobs) {
			if(work.jobs[job]) {
				$("#work-experience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedTitleAndEmpl = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedTitleAndEmpl);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);

				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);

				var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDesc);

			}
		}
	}

};

work.display();

var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique nec eros sit amet porta. Nullam vel ligula at est tempor accumsan. Sed vel libero rutrum mauris tincidunt dignissim. Nunc egestas laoreet semper. Quisque a arcu quam.",
		"images" : [
		"images/cutebaby1.jpg",
		"images/cutebaby2.jpg"
		]
	},
	{
		"title" : "Sample Project 2",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique nec eros sit amet porta. Nullam vel ligula at est tempor accumsan. Sed vel libero rutrum mauris tincidunt dignissim. Nunc egestas laoreet semper. Quisque a arcu quam.",
		"images" : [
		"images/cutebaby2.jpg",
		"images/cutebaby1.jpg"
		]
	}
	],
	"display" : function() {
		for(var project in projects.projects) {
			if(projects.projects[project]) {
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDesc);

				$("#projects").append(HTMLprojectPicStart);


				for(var image in projects.projects[project].images) {
					if(projects.projects[project].images[image]) {
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-pictures:last").append(formattedImage);
					}
				}
			}
		}
	}
};

projects.display();

$("#map-div").append(googleMap);