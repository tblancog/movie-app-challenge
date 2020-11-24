# Movie App Challenge

Lists Movies and allows to search words into the overview of the movie

## Installation

Clone this repo and use [npm](https://www.npmjs.com/get-npm) to install this app:

```bash
npm install
```

To serve app in development mode:
```bash
npm run start
```

## Demo
[Demo](https://tblancog.github.io/movie-app-challenge/) to see it running in production

## Edge cases
These are edge case with no time to consider:
* I'd be nice to highlight all the matched words that match the query
* Also wanted to show the number of results and text: " n Movies result for 'universe'"
* React typescript template was broken, I had to fix it by downgrading typescript in package.json as addressed in this [fix](https://github.com/facebook/create-react-app/issues/10110#issuecomment-731502988)
* I also wanted to create a route to show more details for a clicked movie
