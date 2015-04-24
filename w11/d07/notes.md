#Design

###SVG files

In Illustrator, draw some shapes, then save as an svg file. Then if you open that in the browser and open to inspect element, you see that it is in svg tags, you can use that code or alter it. 

Great for logos since they will scale to any size and not get pixelated. 

###Other notes


* Always use rgb for web design


* Start with Black/Dark Grey and White with one other color, add more colors only if they have a job, ex: links are blue.

* Adobe kuler, color lovers, pintrest

* Typography
	* Use one Serif and one Sans Serif
	* Play with the sizes of the font, tracking, and line height
	* Consistancy builds street cred (a brand)
	
###Layout

* Make something dominate

###Coding

* First do a wireframe
* then write down what tags where you're going to need it
* Then use a text editor and add all the code you need
	* [Use This!](http://docs.emmet.io/abbreviations/syntax/) This Emmet allows you to quickly type out base html with shortcuts
	* Eric Mayer reset stylesheet
* [Skeleton](http://getskeleton.com/) Similar to bootstrap, you can download it, and you can delete all the styling included that you don't need.
	* He wanted only the grid system so he deleted all of the premade styling
* Using 'em' for font if you want:
	* ems are calculated whatever the body's default is font size is. Below the h1 font will be 32px, but if you changed the body to 20px, the h1 will be 40px.
	
	```
	body{
	font-size: 16px
	}
	
	h1{
		font-size: 2em;
	}
	```
* line height 1.62 is the ideal  
* for margins you always want to do margin bottom wherever you can to move things
* You can use the font-weight (lighter, light, bold, bolder), you can also use numbers, if you go to google fonts you can see the numbers that come with some fonts, like 300 etc. 
* [Nice Colors](http://flatuicolors.com/)
* text-transform: uppercase will make your code be uppercase
* Hint: if you use rgba and put opacity to .7/.8 it makes things look more sunken in instead of sitting on top. 


###contact
Larry Buch

New York Times Graphics

larrybuch@gmail.com

[Link to Class files](https://github.com/larrybuch/wdi-rapid-code)