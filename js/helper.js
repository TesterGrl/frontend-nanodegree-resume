var HTMLheaderStart = '<div id="header-details" class="col-xs-12 col-md-10"></div><div id="header-pic" class="col-md-2 hidden-xs hidden-sm"></div>';
var HTMLbioPic = '<img src="%data%" class="center-block img-responsive biopic" alt="Susanne Abdelrahman">';
var HTMLheaderName = '<h1 id="name" class="light-gray-text">%data%</h1>';
var HTMLheaderRole = '<h3 class="light-gray-text">%data%</h3>';
var HTMLwelcomeMsg = '<div class="light-gray-text">%data%</div>';

var HTMLmobile = '<div class="col-sm-2 col-centered text-center"><span class="green-text">mobile: </span><span class="light-gray-text">%data%</span></div>';
var HTMLemail = '<div class="col-sm-3 col-centered text-center"><span class="green-text">email: </span><span class="light-gray-text">%data%</span></div>';
var HTMLtwitter = '<div class="col-sm-2 col-centered text-center"><span class="green-text">twitter: </span><span class="light-gray-text">%data%</span></div>';
var HTMLgithub = '<div class="col-sm-2 col-centered text-center"><span class="green-text">github: </span><span class="light-gray-text">%data%</span></div>';
var HTMLlocation = '<div class="col-sm-2 col-centered text-center"><span class="green-text">location: </span><span class="light-gray-text">%data%</span></div>';

var HTMLskillsStart = '<h3 id="skills-h3" class="col-sm-12 text-center light-gray-text">Skills at a Glance</h3><ul id="skills" class="col-xs-12 text-center inline-list light-gray-text"></ul>';
var HTMLskills = '<li>&bull; %data%&emsp;&emsp;&emsp;</li>';

var HTMLworkStart = '<div class="col-sm-12 work-entry"></div>';
var HTMLworkEmployer = '<h4 class="col-sm-12">%data%';
var HTMLworkTitle = ' - %data%</h4>';
var HTMLworkLocation = '<div class="col-sm-4 italic gray-text">%data%</div>';
var HTMLworkDates = '<div class="col-sm-4 pull-right text-right italic gray-text">%data%</div>';
var HTMLworkDescription = '<p class="col-sm-12">%data%</p>';

var HTMLprojectStart = '<div class="col-sm-12 project-entry"></div>';
var HTMLprojectTitle = '<h4 class="col-sm-4">%data%</h4>';
var HTMLprojectDates = '<div class="col-sm-4 pull-right text-right italic gray-text">%data%</div>';
var HTMLprojectDescription = '<p class="col-sm-12">%data%</p>';
var HTMLprojectPicStart = '<div class="row-centered project-pictures"></div>';
var HTMLprojectImage = '<img class="col-sm-3 img-responsive center-block col-centered hidden-xs" src="%data%">';

var HTMLschoolStart = '<div class="col-sm-12 education-entry"></div>';
var HTMLschoolName = '<h5 class="col-sm-4">%data%';
var HTMLschoolDegree = ' - %data%</h5>';
var HTMLschoolDates = '<div class="col-sm-4 pull-right text-right italic gray-text">%data%</div>';
var HTMLschoolLocation = '<div class="col-sm-6 pull-right text-right italic gray-text">%data%</div>';
var HTMLschoolMajor = '<div class="col-sm-4 italic">Major: %data%</div>';
var HTMLschoolURL = '<a class="col-sm-12 text-center" href="#">%data%</div>';

var HTMLonlineClasses = '<h3 class="col-sm-12 text-center purple-text">Online Classes</h3>';
var HTMLonlineStart = '<div class="col-sm-12 education-entry"></div>';
var HTMLonlineTitle = '<h5 class="col-sm-4">%data%';
var HTMLonlineSchool = ' - %data%</h5>';
var HTMLonlineDates = '<div class="col-sm-4 pull-right text-right italic gray-text">%data%</div>';
var HTMLonlineURL = '<a class="col-sm-12 text-center" href="#">%data%</div>';

var googleMap = '<div id="map" class="col-sm-12"></div>';

// Collect click locations
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

var map;    // declares a global map variable

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];

    // Adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // Iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // Iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

 // Reads Google Places search results to create map pins and returns placeData
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // Object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // Opens an info window when each map marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);

    });

    // Where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  // Makes sure the search returned results for a location.
  // If so, it creates a new map marker for that location.

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  // Takes in the array of locations created by locationFinder() and fires off
  // Google place searches for each location
  function pinPoster(locations) {

    // Creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      var request = {
        query: locations[place]
      };

      // Searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // Creates pins on the map for each location in the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
