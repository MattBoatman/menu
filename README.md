This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# [Website URL](http://menuwebsite.s3-website-us-east-1.amazonaws.com/)

This website was inspired by [Los Guachos](http://los-guachos.com/menu/). (Text for the menu was taken directly from there, grammar and spelling mistakes included for authenticity)

## Requirements:

Create a menu website using React. Have pages for a list of categories, items, and single item views.

## My take:

When I thought of the initial design, I did not think "full pages" needed to be used for viewing single items. With a mobile first design mindset, I thought a card view would suit this well.

I am hosting the website on AWS pulling resources out of a bucket I set up.  [Website URL](http://menuwebsite.s3-website-us-east-1.amazonaws.com/)

## Installation and running tests

### Installation

`git clone https://github.com/MattBoatman/menu.git`

`cd menu`

`yarn install`

`npm start`

Browser should open a window but if not, paste `http://localhost:3000/` in url.

### Running tests

`npm test`

Then press `a` to run all tests.


## Tech Decisions:

I decided to use Redux and Redux Thunk as the main backbone to this site. I prefer these as I prefer delegating business logic out to the state store rather than local state. This could have been done using local state, but I think this is much more readable and scalable. A logical next feature would be a shopping cart, and with this current setup - that would be easy. If I were to use local state that would require many props to be passed up and down the tree. I also prefer writing tests for redux applications as mocking out the store often proves out easier than mocking out components.

The application sort of lent itself to 3 logical wrappers. One for categories, list, and items. When I started to flesh those out it became apparent that only one was really needed as the wrappers were all basically identical with different callbacks. `MainWrapper.js` could be argued that it does too much, but if you break down what it those other wrappers look like, it makes sense to have one wrapper controlling the data flow.

This website is mobile and keyboard friendly.

Navigation is done using the toolbar. This toolbar is redux connected and will update a breadcrumb while you navigate.

## Edge Cases:

There is an ErrorBoundary component wrapping the cards. It is unlikely to see this come into play in production, but if you would like to test it, go into `MoreInformationBlock.js` and remove `props.moreInformation.upgrades &&`. Then click through the Tacos > taco al pastor.

You can see the redux connected error message if you fudge one of the URLs.

If you would like to see the loading indicator go into `index.js` and uncomment the `Loader` component. This watches the state tree for isFetching. With how fast these calls were, I was not entirely happy with what it looked like.

## Future Improvements:

The images are just all random sizes pulled from Google. This could be optimized as I do percent sizes so it is not consistent.

Transition to list view could be better.

Screen reader optimization.

This website was tested in Chrome and Firefox.
