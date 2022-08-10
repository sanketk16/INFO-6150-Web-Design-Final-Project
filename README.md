INFO 6150 - Web Design/User Experience Final Project

Title - Bistro Lounges

== Team Members ==

Shriya Dixit
Shreya Gosrani
Ayushi Patel
Harshita
Sanket Khadke

== Description == 

A hotel/lounge room booking website which allows users to
browse various types of rooms from "deluxe" and "non-deluxe"
types. Users can then select the time span for which they want
the room. Alongwith that, our website also features dining 
bookings and food product ordering.

== FEATURES ==

It is a full stack application where you can create an account with the
Register Now page and then login and book a room, book a dining place,
order any food products.

User can cancel a room booking, cuisine table booking from the user profile
section.

You can request an inquiry for a large hall booking for any special
event. After reading your request, we will get back to you.

All the details namely user's info, room info, cuisine restaurants info,
new event hall additions, room bookings, cuisine table bookings,
orders placed as well as their booking/order status is stored and updated
in MongoDB.

Types of users present in our system:
1) Customer
2) Admin

The admin has access to various functionalities like:
Room Management
Cuisine Management
Food Product Management
Event Hall Management


== BACKEND PART ==

Implemented using MongoDb and Node JS.

== FRONTEND PART ==

Implemented using ReactJS and Bootstrap components.

Components Used:

Navbar: Defines the navigation bar

Footer: Defines the footer on the site

CheckoutSteps: Defines the actions while checking out payment for order placed for  food product

HallImages: Defines how event hall is displayed on the screen alongwith its carousel

RestaurantImages: Defines how cuisine restaurants are displayed on the screen alongwith its carousel

RoomCarousel: Defines how the rooms are displayed alongwith its carousel

Search: The search component to find specific resaturant/dining or room.

Loader: The loading component to display to user while something is loading.

Message: The message component to display to user.




APIs used in our project:

JSON Web Tokens (JWT) for Authentication.

Axios for handling external actions.

Stripe API (test mode):
Used as payment gateway for room booking by the user.

PayPal (sandbox mode):
Used as payment gateway for ordering food products.

EmailJS:
Used to receive details entered by the user specifying
their event hall requirements.

Our website is deployed on Heroku, the link is:
https://bistro-lounge-app.herokuapp.com/
