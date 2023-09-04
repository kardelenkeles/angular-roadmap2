## What Are Interceptors?

Interceptors allow us to intercept incoming or outgoing HTTP requests using the HttpClient. They can handle both HttpRequest as well as HttpResponse.

By intercepting the Http request, we can modify or change the value of the request, and by intercepting the response, we can do some predefined actions on a particular status code or message.

Most interceptors transform the outgoing request before passing it to the next interceptor in the chain(if there are multiple interceptors), by calling the next.handle(transformedReq).

We can transform the response stream by applying additional RxJS operators on the stream returned by the next.handle().

## Intercepting HTTP traffic

HTTP traffic passing through the proxy server can be intercepted. An intercepted request or response means the roundtrip is halted by the server, awaiting manual action. Stalled requests/responses can be inspected and (optionally) edited, before letting them continue to be sent/received. Alternatively, you can cancel an intercepted request or response. This causes the HTTP request roundtrip to be dropped altogether. These actions are described in more detail below.

## Requests

### Enabling request interception

To intercept incoming HTTP requests, first start Hetty and open a project.

In the admin interface, open the Projects page, via the folder icon in the vertical menu bar.

Click the cog icon next to the currently open project to open its settings page.

On the Intercept tab, toggle the switch next to Enable request interception.

## Intercepting a request

Make an HTTP request with a client (e.g. a browser) configured to use the proxy (see: Use the proxy).

You should see a badge popping up in the vertical menu bar, indicating that something was intercepted:

Open the Intercept page by clicking on this intercept icon.

The first pending request/response will automatically open. Here you can view and edit the request parameters. For example: the URL, method, request headers and body.

You now have the following two options:

Send the (modified) request

Cancel the request

### Send the (modified) request

To continue sending the request, click Send.

After it’s sent, the request will disappear from the intercept page.

If you’ve enabled response interception as well, the response to the (modified) request will pop up in the intercept window. If the response filter is set, this only happens if there’s a match.

### Cancelling the request

To prevent proxying the HTTP request, click Cancel. This causes the stalled request to be dropped. The client making the HTTP request will receive a 502 Bad Gateway response.

The cancelled request will appear in the Proxy logs, but it won’t have a response log because it was cancelled before being proxied.
