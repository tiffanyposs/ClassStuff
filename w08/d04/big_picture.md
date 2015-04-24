#Big Picture

SPA- Single Page Apps
MPA - Multiple Page Apps

Do you want the whole screen to refresh? 

##SPA- Single Page App
* Trello
* Google Maps
* Chat App

####Applications
* This will allow content to be sent without
* AJAX
* Dom Manipulation
* APIs Can be called from AJAX on the front end and DOM



##MPA- Multi Page App
* Wikipedia
* Reddit

####Applications
* Forms will refresh the browser
* Server Side Rendering, Templates (ERB EJS)
* You can send APIs from the server to this 



##Jobs

Used to be a web developer had to do everything, front end and back end. 

#####Frontend Consumes APIs
#####Backend Makes APIs



## APIs

Some APIs don't allow you to use it on AJAX since its a security risk

So you have to pull the api on your server side. You have to pull your info on the backend then send it to you front end so people can't see your key.

#####Backend  use HTTParty or Request to pull APIs

#####Frontend use Ajax to pull APIs



###Hiding your API Keys

API key will be in a txt file

API_key.txt.gitignore

fs.readFileSync('API_key.txt', 'utf8'), 

read in the text file and read it into your 





