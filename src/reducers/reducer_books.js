// reducers are a redux function
// These functions allow the application-level state
// to communicate with React.
// Redux, in other words, will handle the data of our front-end,
// while React will handle the view of our front end and render data
// to the screen.

export default function () {
  return [
    {title: 'Javascript: a love story.', pages: 20 },
    {title: 'Python, pocket protectors, and you.', pages: 384},
    {title: 'Cat, why?', pages: 1397},
    {title: 'How do I shoot my laser?', pages: 1},
    {title: 'Big Data volume 1: enimas.', pages: 853},
  ]
}

// the reducer is created here
// Now we need to "wire" it up to our application within the index.js file.
