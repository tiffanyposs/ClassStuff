##Bootstrap

Bootstrap was made by Twitter to make responsive sites.


Your browser automatically makes 12 columns so with this you are making each container, the below code is a basic set up. 

"md" stands for medium

```
  <div class = "container">
  	<div class = "row">
  		<div class = "col-md-4">Hello</div>
  		<div class = "col-md-4">Princesss</div>
  		<div class = "col-md-4">Peach</div>
  	</div>
  </div>
  
```


If you want something inside the be offset you can add the additional offset class, but you have to subtract that number from the overall count of 12. Heres a heading that will take up an entire row of 12 but will be offset by 5.

```
  <div class= "row">
    <div class= "col-md-7 col-md-offset-5">
        <h1>Pulp Fiction</h1>
    </div>
  </div>

```

####Modals

Modals are pop ups triggered by buttons. See the code below. The button has a data-target that triggers

[Bootstrap Button Documentation](http://getbootstrap.com/css/?#buttons)

```
    <div class= "row">
      <div class= "col-md-12">
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#quote">
            Quote
        </button>
        <!-- Modal -->
        <div class="modal fade" id="quote">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Quotes</h4>
            </div>
            <div class="modal-body">
              <p>"Describe what Marsellus Wallace looks like!"</p>
              <p><i>-Jules</i></p>

              <p>"I'm American, honey. Our names don't mean shit."</p>
              <p><i>-Butch</i></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
```