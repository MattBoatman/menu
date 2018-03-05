This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Website URL](http://menuwebsite.s3-website-us-east-1.amazonaws.com/)

This website was inspired by [Los Guachos](http://los-guachos.com/menu/). (Text for the menu was taken directly from there, grammar and spelling mistakes included for authenticity)

Requirements:
Create a menu website using React. Have pages for a list of categories, items, and single item views.

My take:
When I thought of the initial design, I did not think "full pages" needed to be used for viewing single items. With a mobile first design mindset, I thought a card view would suit this well.

Tech Decisions:
I decided to use Redux and Redux Thunk as the main backbone to this site. I prefer these as I prefer delegating business logic out to the state store rather than local state. This could have been done using local state, but I think this is much more readable and scalable. A logical next feature would be a shopping cart, and with this current setup - that would be easy. If I were to use local state that would require many props to be passed up and down the tree. I also prefer writing tests for redux applications as mocking out the store often proves out easier than mocking out components.

I am hosting the website on AWS pulling resources out of a bucket I set up.  [Website URL](http://menuwebsite.s3-website-us-east-1.amazonaws.com/)



Edge Cases:
There is an ErrorBoundary component wrapping the cards. It is unlikely to see this come into play in production, but if you would like to test it, go into `MoreInformationBlock.js` and remove `props.moreInformation.upgrades &&`. Then click through the Tacos > taco al pastor.

You can see the redux connected error message if you fudge one of the URLs.


Future Improvements:
Handle loading indicators. I started to add a redux connected loading indicator for when the state machine has `isFetching: true` but the resources are so small all I would get is a annoying flash of a loader. I also did not think adding a timeout was appropriate.