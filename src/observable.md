# What is an Observable in Angular?

An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it’s invoked onwards. In other words, Observable is a function that converts the ordinary stream of data into an observable stream of data.

Observable emits the value from the stream asynchronously. It emits the complete signals when the stream completes or an error signal if the stream errors out.

Observables are declarative. You define an observable function just like any other variable. The observable starts to emit values only when someone subscribes to it. Subscribing to an Observable is analogous to calling a Function.