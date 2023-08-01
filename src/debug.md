# Angular Devtools

First thing’s first, if you don’t have the Angular Devtools already, then you should download them. The Angular Devtools does many things such as allowing you to view the component tree live as your application runs, view the state of components in your application, and profile your application.

Below, I have an Angular application loaded, and I can view the internal state and configuration of the various components present.

There is also a “Profiler” tab that can be used for measuring the performance of your individual components. You may ask what performance profiling has to do with debugging. Performance issues are problematic like any bug, and can lead to a detrimental user experience. Being able to identify these issues will make it easier for you to fix these issues, and improve the application.

The profiler gives us a breakdown of the resources used by each component. This is very useful for identifying performance bottlenecks in your application.

One last thing I should mention is the ability to jump to the source code of the component you currently have selected. The button looks like a pair of angle brackets in the top-right corner. This is useful if you need to use the built-in debugger provided by the browser. 

# Using a JavaScript Debugger

Do not forget that your browser has a built-in debugger. Angular application dev builds are very debuggable as source maps are provided by webpack. If you’re using the Angular CLI for your developer server, then you should already be good to go!

You can access your source code through the “Sources” tab, and it will be available under the “webpack://” dropdown. However, it isn’t very convenient to navigate your source code like this. Instead, you can search for your TypeScript files using CTRL+P (or CMD+P on mac), or use the Angular Devtools to jump to the source code of your components.

Once you’re in the source file, you can place breakpoints directly in your TypeScript files! Do note that debugging the original TypeScript files is not available in production builds.

You should try to use the debugger over “console.log” in most situations. It will be much easier to view the state of your application here, and understand what is going on.

# Redux Devtools

Lots of Angular applications are using NgRx for state management now. One important thing to keep in mind is that NgRx is compatible with the Redux devtools browser extension. Although NgRx is not based on Redux, that does not stop it from being compatible with its developer tools! Isn’t that neat?

You can install the Redux devtools from your browser’s respective extension marketplace. Once it’s installed, you should see a new tab when you open devtools (F12).

Before we dig in deeper, I should mention that the application has to do some extra setup to ensure that Redux Devtools works. Out of the box, your application will not work with Redux Devtools until you import the StoreDevTools module. That can easily be done by adding another import to your module.ts file.

There are a few things to describe on this screen. Let’s talk about the left sidebar. It is here that you will find a list of actions that have been emitted throughout the lifetime of the application. The first 5 actions are emitted by NgRx after performing initialization of the store and the router. Everything after those are from the application code for the particular example we’re using.

Clicking on one of the actions and having the “Diff” view action on the right-hand side will show what state was changed by it. In the TODO MVC example I used, there are two actions that happen upon initialization. The first just updates a loading flag to true. Then, the second one adds the TODO entries and flips the loading flag back to false.

You can also view the contents of individual actions through “Action”, the overall state at that point in time with “State”, generate Jest tests that replay the creation of the state with “Test”, and use “Trace” to find the callstack of whatever triggered the action in the first place. The trace tab in-particular, can be very helpful if an action is being emitted unexpectedly, and you want to figure out why.


# Using ng.profiler for 

Identifying Change Detection Issues
We’ve already gone over the Angular Devtools profiler, but there is another tool provided by Angular that we can use for identifying performance issues related to change detection. For the uninitiated, change detection is the mechanism by which Angular checks for changes to your application’s state, and re-renders views when it does happen. Sometimes, change detection may cause performance issues in larger applications, and one easy way to find out if this is harming it is to use ng.profiler.

ng.profiler can be run on the browser’s console once it is enabled. To enable it, you must call “enableDebugTools” after your app module is finished initializing. 