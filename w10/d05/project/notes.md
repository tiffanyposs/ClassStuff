[Link](https://github.com/ga-students/peach/tree/master/w10/d04/walkthrough)

[Link 2](https://github.com/ga-students/peach/tree/master/w10/d05/sessions_lesson)

We have created two tables Users and Entries

secret contoller and session controller


###Things to do

* When an entry is deleted, delete all of the comments that belong to it.
* Have people be able to make a new account
* Admin dashboard be able to see all of the comments made.
* Add likes to it with counters, and/or stars for the articles
* admins be able to create new admin accounts




###comments
id
entry_id 
user_id
title
content

rails generate model Comment title:text content:text entry_id:text user_id: text



item_id TEXT references items,