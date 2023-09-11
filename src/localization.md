## How do I localize dates in my Angular app?

Similar to numbers, the simplest way to localize a date is to use the date pipe in our component templates.

`<div>`

`<div *ngFor="let cabinet of cabinets">`

      <!-- … -->

        <p>

          <!-- cabinet.addedAt is a Date object -->

          {{ cabinet.addedAt | date }}
          {{ cabinet.addedAt | date: 'd MMM YYYY' }}
        </p>

      <!-- … -->

`</div>`

`</div>`

## How do I localize numbers in my Angular app?

The simplest way to localize numbers is to use Angular’s built-in formatting pipes in our component templates. These pipes will use the active locale for formatting by default.

` <p>currency: {{ myNumber | currency: 'CAD' }}</p>`

`<p>currency: $9,999.99</p>`

`<div>`

 ` <div *ngFor="let cabinet of cabinets">`

      <!-- … -->

        <p>

          {{ cabinet.price | currency: 'USD' }}

        </p>

      <!-- … -->

  `</div>`

`</div>`
