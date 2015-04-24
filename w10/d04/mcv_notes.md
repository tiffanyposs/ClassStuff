##MVC

###Models Views Controllers

#####Models

Models manage the data for an application. They are concerned with neither the user-interface nor presentation layers but instead represent unique forms of data that an application may require. When a model changes (e.g when it is updated), it will typically notify its observers (e.g views, a concept we will cover shortly) that a change has occurred so that they may react accordingly.

Persistence allows us to edit and update models with the knowledge that its most recent state will be saved in either: memory, in a user's localStorage data-store or synchronized with a database.

So to summarize, models are primarily concerned with business data.

#####Views

The actual task of updating the model falls to controllers (which we will be covering shortly).

One may wonder where user-interaction comes into play here. When users click on any elements within the view, it's not the view's responsibility to know what to do next. It relies on a controller to make this decision for it.

A view is an object which observes a model and keeps the visual representation up-to-date.

To summarize, views are a visual representation of our application data.


#####Controllers

Controllers are an intermediary between models and views which are classically responsible for updating the model when the user manipulates the view.

Controllers are traditionally responsible for updating the model when the user updates the view

####More

For developers interested in knowing more about the decoupled nature of MVC (once again, depending on the implementation), one of the goals of the pattern is to help define one-to-many relationships between a topic (data object) and its observers. When a topic changes, its observers are updated. Views and controllers have a slightly different relationship. Controllers facilitate views to respond to different user input and are an example of the Strategy pattern.