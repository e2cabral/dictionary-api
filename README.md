### Dictionary Api

This api was built to be a dictionary, it provides 4 ways to search words.

**Main search:** provides a list of 100 words randomly selected
(e.g., *http://localhost:3330/v1/api*).

**Word name search:** provides a list of at most 100 words matching to the word provided
(e.g., *http://localhost:3330/v1/api/word?name=develop*).

**Edit/Single word view search:** return just 1 word based on route param id
(e.g., *http://localhost:3330/v1/api/edit/5f62a50fa5c5872010d89ca9*).

**Type search:** provides a list of 100 words randomly selected based on type selection
(e.g., *http://localhost:3330/v1/api/type?pos=v.*).

### Running in development mode

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.
Open http://localhost:3330/v1/api to view the returneddata in the browser.

To run the project you'll need to install **MongoDB** locally or remotelly and update the connection string in *src/main/config/env.ts*. I really recommend create an archive with database config and import it inside *env.ts*.