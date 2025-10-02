# Capstone
Capstone end of course project for the Institute of Data - Software Engineering

FrontEnd Applicaton - This is a website application for Accommodation Businesses focusing in the Wanaka Region.

Working Application

The website has a simple clean layout with a navigation button for mobile view top left, and a dropdown menu for larger screens along the top. The site is made up of 6 visual pages.  Home, Accommodation, Booking, Activities, Reviews and Contact. There is a login/signup button on the far right of the NavBar.  Users can search the site and send a query through the contact page without Signing up.  However if a user would like to go ahead and place a booking or leave a review, they need to be registerd in the system. Users can access this on the NavBar, or when they place a booking for one of the three accommodation offerings, the Book button will open up the Login/Signup window first to capture their username/password and their personal details for the User table.  Once this is complete the user will return to the bookings page.  Here the user can select their accommodation choice, the number of guests and the dates of their stay. This will populate the Bookings Table. If the dates are available then the intention is to add a BUY button with payment gateway to process the reservation.

Once registered, a user will have the ability to edit their Profile details and alter a reservation.

The Reviews page is where previously registered users can log back in and leave a review. This Review table links to both the booking and user table through a foreign key.  The Submit Reviews form will allow users to place a review, and then post this straight to the Review Page in the Cards Componant Layout currently being displayed using a JSON data file.

Implementing the Build.

1. Initially I constructed the page layout for the application and Routes so I had the basic infrastructure setup.  I then used Mui to create my Nav Bar and added three dropdown pages under the Accommodation. In my Figma plan I had individual pages for each accommodation option.  I realised however I was running out of time, so decided to combine these onto one page instead using the Cards Componant to display each individally.  I imported from MUI the arrowback/forward componant so I could display 6 images for each accommodation choice.  I then added these to the JSON data file to display.

2. Design - I used Mui for a number of features such as Forms, Text Fields, Calender, Cards, Grids, NavBar all of which got a lot easier to use as I understood more.  I made a video for the Home Page using an app called Splice.  I then uploaded this into the site.

3. Functionality - I tried to keep the interface clean and simple.  The functionality has been challenging in areas, esp the Bookings page, however will continue to work on these. The user flow is also really important and issues arise once you have an interface up and running and really get the User Experience happening.  I am still completing the functionality behind some of the buttons.  The Json data file has displayed successfully.

4. Backend Integration - 