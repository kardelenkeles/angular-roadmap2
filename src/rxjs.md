The full form of RxJS is Reactive Extension for Javascript. It is a javascript library that uses observables to work with reactive programming that deals with asynchronous data calls, callbacks and event-based programs. RxJS can be used with other Javascript libraries and frameworks. It is supported by javascript and also with typescript.


## What is RxJS?

As per the official website of RxJS, it is defined as a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array#extras (map, filter, reduce, every, etc.) to allow handling asynchronous events as collections.


## Features of RxJS

In RxJS, the following concepts takes care of handling the async task −

### Observable

An observable is a function that creates an observer and attaches it to the source where values are expected, for example, clicks, mouse events from a dom element or an Http request, etc.

### Observer

It is an object with next(), error() and complete() methods, that will get called when there is interaction to the with the observable i.e. the source interacts for an example button click, Http request, etc.

### Subscription
When the observable is created, to execute the observable we need to subscribe to it. It can also be used to cancel the execution.

### Operators
An operator is a pure function that takes in observable as input and the output is also an observable.

### Subject
A subject is an observable that can multicast i.e. talk to many observers. Consider a button with an event listener, the function attached to the event using addlistener is called every time the user clicks on the button similar functionality goes for subject too.

### Schedulers
A scheduler controls the execution of when the subscription has to start and notified.


## When to use RxJS?
If your project consists of lots of async task handling than RxJS is a good choice. It is loaded by default with the Angular project.


## Advantages of using RxJS

The following are the advantages of using RxJS −

RxJS can be used with other Javascript libraries and frameworks. It is supported by javascript and also with typescript. Few examples are Angular, ReactJS, Vuejs, nodejs etc.

RxJS is an awesome library when it comes to the handling of async tasks.RxJS uses observables to work with reactive programming that deals with asynchronous data calls, callbacks and event-based programs.

RxJS offers a huge collection of operators in mathematical, transformation, filtering, utility, conditional, error handling, join categories that makes life easy when used with reactive programming.


## Disadvantages of using RxJS

The following are the disadvantages of using RxJS −

Debugging the code with observables is little difficult.

As you start to use Observables, you can end up your full code wrapped under the observables.