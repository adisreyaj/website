---
title: Demystifying Form Arrays in Angular
description: The first post is the most memorable one.
date: 2020-04-16
image: bg.jpg
author: Adithya Sreyaj
twitter: http://twitter.com/adisreyaj
github: http://github.com/adisreyaj
---

Angular is a great framework, there is no doubt in that. There is pretty much everything you would need when building a web application. One of the main things in applications like CRM, SAAS applications are user inputs.

Angular comes with a very powerful and fantastic forms module which can help in making super cool forms with validations are much more. All of us who have used Angular will have used the Forms Module for one or the other use.

## Angular Forms Modules

As I've already mentioned, Forms module in Angular is a really awesome and servers most of the purposes. There can be a difference in opinion about Angular forms especially if the form is very complex.

Complex forms will always be painful!

But If you really know how to make use of the Angular forms, most of the cases can be tackled using the in-built Angular Forms.
There are basically two types of forms Angular provides:

- Template Driven Forms
- Reactive Forms

There are tons of articles and resources on type of forms Angular provides. The Angular docs is a great resource as well. I'm not gonna get into the roots of the type of forms Angular has to offer, rather concentrate on what we are here for.

## Angular Reactive Forms

Angular Reactive forms are great! If you haven't used it before, you should. It has a lot of awesome features that you won't get if you are using Template driven forms.

> Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time.

One of the major benefit of using Reactive forms is you can create complex forms without breaking a sweat using Reactive Forms. It is easier to design the form modals and deal with the data going in and out of the forms.

Here is how you would create a simple reactive form:

```ts
const userForm: FormGroup = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
});
```
