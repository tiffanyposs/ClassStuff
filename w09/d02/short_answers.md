
####What is the difference between an API and a server?

An API is information and/or data available in a raw state that can be accessed and manipulated by developers to create interesting uses for the data. 

A server hosts various files and accepts requests from "clients" When someone goes to a website, they are the client requesting information(files) from a website.

####What does a DNS server do when you type "www.google.com" into an address bar?

When you type in www.google.com in the address bar it goes to a DNS server which hosts all the domain names and ip addresses. So a user doesn't have to remember an IP address, the domain name is used for ease of use. The the DNS server looks up the IP address from the domain name then sends a call to that IP address at google.

####What are some differences between a single page application and a multipage application? List one example of each.

SPA is a site that there is no reload on the page as you navigate through the site, in contrast a MPA is a site in which the page reloads every time you navigate to a new page. SPA sites usually use AJAX.

Examples of Single Page Apps:
 
 * Trello
 * Google Maps

Examples of Multipage Apps:

 * Wikipedia
 * Reddit

####Why do we use RESTful routes?

RESTful stands for Representational State Transfer. We use Restful routes because it is smarter and uses more of the HTTP methods so you can control exactly what they do.

Instead of having to make multiple routes for different CRUD executions  /create /read /update /delete that only use POST and GET, you can use /posts or /posts/1 for all of them and use POST, GET, DELETE, and PUT. 

####What is an API key and why are they used?

API keys are codes used in some APIs in order to gain access for your web app. Not all APIs require them, but most do. The key must be added to the url of the API you are trying to access. API keys are used so the company providing the service can track your use of it. Some may charge you for over a certain amount of hits. 