###Oauth

Basically allows the client site to use another site to grab its information.

Ex: using facebook to allow someone to check in. 

Its a series of handshakes between different applications.

#### Things you need.

client_id

client_secret

authorization code

authorization_token 

state

callback URL


###Steps

* Register our app
* Hide Keys
* Sinatra server, get request to Github Oauth server
* Exchange tokens in callback route
* Access resources and put them in the DOM


###Bash profile

Your bash profile allows you 

```

$atom ~/.bash_profile

```
Once that opens, put these into your file

```
export GITHUB_CLIENT_ID="[KEY_NAME]"

export GITHUB_CLIENT_SECRET="[KEY_NAME]"

```

Then put these commands in and if it worked you should see your client id

```

$source ~/.bash_profile
$echo $GITHUB_CLIENT_ID

```