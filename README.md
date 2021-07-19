# City Explorer

[Deployed Site](https://mc-city-explorer.netlify.app/) <br>
**Author**: Matt C. <br>
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

**Given** that a user enters a valid location in the input

**When** the user clicks the "Explore!" button

**Then** the latitude and longitude will be displayed on the page

Endpoint:

Region 1: US
GET: `https://us1.locationiq.com/v1/search.php`

Region 2: Europe
GET: `https://eu1.locationiq.com/v1/search.php`

Query parameters:

`key`: YOUR_ACCESS_TOKEN
`q`: SEARCH_STRING
`format`: 'json'


Example Response:

```
[
    {
        "place_id": "218751965",
        "licence": "© LocationIQ.com CC BY 4.0, Data © OpenStreetMap contributors, ODbL 1.0",
        "osm_type": "way",
        "osm_id": "34633854",
        "boundingbox": [
            "40.7479226",
            "40.7489422",
            "-73.9864855",
            "-73.9848259"
        ],
        "lat": "40.7484284",
        "lon": "-73.9856546198733",
        "display_name": "Empire State Building, 350, 5th Avenue, Korea Town, Manhattan Community Board 5, New York County, NYC, New York, 10018, United States of America",
        "class": "tourism",
        "type": "attraction",
        "importance": 0.82289665394454,
        "icon": "https://locationiq.com/static/images/mapicons/poi_point_of_interest.p.20.png"
    },
...
]
```

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

07-19-2021 1:49pm - Initial React App Setup.

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->