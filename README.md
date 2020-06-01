# Algorithm Utility Library

Everything you learn in JavaScript can be represented and remembered with a `function` you create. The goal of this project is to create an interactive utility library of all the JavaScript operations and functions you learn.

Utility libraries are an important feature of any [high level programming language](https://en.wikipedia.org/wiki/High-level_programming_language).

[jQuery](https://jquery.com/) is a library we have been using so far—it primarily helps with selecting elements on the DOM, listening for events, and manipulating the DOM, but it also has some utility functions. Other popular utility libraries: [Lodash](https://lodash.com/) (all-purpose utilities), [Math.js](https://mathjs.org/) (utilities for better mathematic functions), and [Moment.js](https://momentjs.com/) (utilities for handling dates and times).

Are you ready to build your own?

## Step 1: Fork and clone this app

What and what?

**Forking** makes a copy of someone else's Github repository and puts this copy in your own Github repositories.

**Cloning** this newly forked repository copies it onto your computer for local editing. All changes that you push will now go to your fork in your repositories.

### Walkthrough

In your coding folder on your computer, create a folder for this project.

View this page on Github. Go to the top of the page and click "Fork".

If given the option, select your username.

You will be taken to a new repo under your Github username. Click "Clone or download", and copy the URL you are given.

In your terminal, go to the folder you created for this project.

Enter the following:

`git clone TheUrlYouCopiedFromGithub .` **Note the period at the end!**

This will clone the forked repo into the folder you've created.

You don't need to do anything else to connect it to Github. All your changes will be pushed to the right repo. Simply make changes then commit & push!

### More reading

[Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)

[What is the difference between Forking and Cloning on GitHub?](https://stackoverflow.com/questions/7057194/what-is-the-difference-between-forking-and-cloning-on-github)

[How do you clone a Git repository into a specific folder?](https://stackoverflow.com/questions/651038/how-do-you-clone-a-git-repository-into-a-specific-folder)

## Step 2: Add JavaScript functions to your library

Create simple functions that demonstrate a working knowledge JavaScript operations and functions. Create your own name for each function—**the name must be unique** and must be the same for the function in `functions.js` and `index.html`. Write a short description that makes sense for you. In the comments of your function, list the arguments and the return value this function accepts.

Add functions to the `functions.js` file.

Add a new Bootstrap column to `index.html` by copying and pasting everything between and including `<!-- start column -->` and `<!-- end column -->` editing the **function name**, its **description**, and **the number of inputs** it has.

### List of functions

**Complete everything** in [JavaScript Algorithms and Data Structures Certification > Basic Algorithm Scripting](https://www.freecodecamp.org/learn/).

**NOTE: Use functional programming and ES6 features whenever possible. Take the opportunity to write code that reads well.**

As you complete each one, create simple utility functions that demonstrate a working knowledge of these lessons:

-  Convert Celsius to Fahrenheit
-  Reverse a String
-  Factorialize a Number
-  Find the Longest Word in a String
-  Return Largest Numbers in Arrays
-  Confirm the Ending
-  Repeat a String Repeat a String
-  Truncate a String
-  Finders Keepers
-  Boo who
-  Title Case a Sentence
-  Slice and Splice
-  Falsy Bouncer
-  Where do I Belong
-  Mutations
-  Chunky Monkey

## Step 3: Apply your learning to White Bear

### On `index.html`

When a user creates an email under "Nice to meet you" lets add some new logic to our email validation when the user clicks "Let's go!":

-  Let's prevent the user from entering some garbage email address. In the local-part of the email address, let's ensure the user has entered at least 3 unique characters. (Yes, I know this is not a good metric to find garbage email addresses, but just roll with it.) It will stop users from entering addresses like `12121212@gmail.com`.

Next, let's "encrypt" the user's password that they entered under "Nice to meet you". We'll use a stupidly simple encryption pattern, but it will serve its purpose here.

-  Before logging the password to the console, the application should increment each character by 1, using its char code. [Here's a list of some relevant char codes](https://www.w3schools.com/charsets/ref_html_ascii.asp). You'll find this method handy for [getting a character's char code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt). And this one for [turning a char code into a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode). The characters `z` and `Z` should "wrap around" and be replaced by the letters `a` and `A` respectively. So a password of "HelloZetlow1" would be logged in the console as "IfmmpAfumpx2".

## Step 4: Repeat this process with the next repo

[Regex Utility Library](https://github.com/punchcode-fullstack/regex-utility-library)
