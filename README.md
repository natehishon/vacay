# README

**Decision making:**

I decided to use rails for my web app framework, having recently developed a project similar to this one in scope, and being comfortable with quickly building out a rails api to handle these types of requests. Also rails does a good job at handling a lot work for you so it wouldn’t be so bad in terms of time spent setting it up.

I also decided to use React, not sure if my react code will be professional grade but it’s something I want to get better at, get more practice.

In the scope of that previous project I knew of a handy rails gem called ‘react-rails’ which allows rails and react to work together. 

An alternative would have been to set up rails and react completely separately, react acting as the pure front end making calls to a separate rails api. I probably would have gone this route if the project was a little bigger, I think this one is small enough in scope that react-rails should be able to handle everything we need.

Jest/Enzyme was the testing framework that I decided to use to test my app, based on: it seems to handle react+rails ok, and that Jest is what they use at facebook and Enzyme was made by airbnb(topical!). I decided to stick with front end unit testing(as opposed to full e2e with something like RSpec), for simplicity. 


Notes to run locally:

'bundle install'(install gems), yarn install('webpacker'), and finally ‘bundle exec rails server’ to run server locally 

Run ‘yarn test’ in main directory to run tests. 

Tests are in vacay/test/javascript they mostly handle react component testing



