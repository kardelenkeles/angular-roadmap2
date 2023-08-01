# How to make HTTP API calls using HTTP Client in Angular

To do this, we use the HttpClient package for working with API requests. First, We add the HttpClientModule to the list of imports in our Module class.

# Available methods in HttpClient for API Calls

HttpClient class provides methods to perform the four primary API operations:

http.get(api_url) – for GET requests to read data
http.post(api_url, data_object) – for POST requests to insert data
http.put(api_url, data_object) – for PUT requests to replace an object in the database
http.patch(api_url, data_object) – for PATCH requests to update one or more properties of an object in the database
Each of these methods return an Observable which contains the response content from the API.

// similarly for other methods#

var postResponse = this.http.post<Post>(`${this.apiUri}/posts`, post);

var putResponse = this.http.put<Post>(`${this.apiUri}/posts`, post);

var patchResponse = this.http.patch<Post>(`${this.apiUri}/posts`, post);

var getResponse = this.http.get<Post[]>(`${this.apiUri}/posts`);


getResponse.subscribe((posts) => {
    // posts is an array of Post objects
});

In the above code, take for example the getPosts() method which receives all post objects from the database.

To do this, we call the http.get() method with respective API endpoint. We also pass the type which we’re expecting from this API call, in our case it is an array of Post objects.

However, since we would want to pass this subscription to the calling component which can subscribe to this and receive data, we return the subscription in our getPosts() method.

However, we want to maintain a local copy of the Posts array at the service level so that we can trigger events to subscribed components for any changes in this Posts array.

For this, we want to get hold of the response from the http.get() method, and pass on the subscription once we’re done with our job. We do this using pipe and map methods.