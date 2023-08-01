# Angular Router

The Router is a separate module in Angular. It is in its own library package, @angular/router. The Angular Router provides the necessary service providers and directives for navigating through application views.

Using Angular Router you can:

Navigate to a specific view by typing a URL in the address bar

Pass optional parameters (query parameters) to the View

Bind the clickable elements to the View and load the view when the user performs application tasks

Handles back and forward buttons of the browser

Allows you to load the view dynamically

Protect the routes from unauthorized users using Route Guards

# Components of Angular Router

## Router

An Angular Router is a service (Angular Router API) that enables navigation from one component to the next component as users perform application tasks like clicking on menus links, and buttons, or clicking on the back/forward button on the browser. We can access the router object and use its methods like navigate() or navigateByUrl(), to navigate to a route

## Route

Route tells the Angular Router which view to display when a user clicks a link or pastes a URL into the browser address bar. Every Route consists of a path and a component it is mapped to. The Router object parses and builds the final URL using the Route

## Routes

Routes is an array of Route objects our application supports

## RouterOutlet

The outerOutlet is a directive (<router-outlet>) that serves as a placeholder, where the Router should display the view

## RouterLink

The RouterLink is a directive that binds the HTML element to a Route. Clicking on the HTML element, which is bound to a RouterLink, will result in navigation to the Route. The RouterLink may contain parameters to be passed to the route’s component.

## RouterLinkActive

RouterLinkActive is a directive for adding or removing classes from an HTML element that is bound to a RouterLink. Using this directive, we can toggle CSS classes for active RouterLinks based on the current RouterState

## ActivatedRoute

The ActivatedRoute is an object that represents the currently activated route associated with the loaded Component.

## RouterState

The current state of the router includes a tree of the currently activated routes together with convenience methods for traversing the route tree.

## RouteLink Parameters array

The Parameters or arguments to the Route. It is an array that you can bind to RouterLink directive or pass it as an argument to the Router.navigate method.