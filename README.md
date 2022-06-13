
# Next.js Ecommerce Test

Demo hosted on Heroku at this link: [https://automartapptest.herokuapp.com/](https://automartapptest.herokuapp.com/)

## Running

- `npm install`
- `npm run dev`

## Design Decisions

- HTML `img` element used in place of `next/image` because the media are hosted in different websites not known beforehand yet next.js requires image host to be known for all the src values in `Image` components. 
- SCSS preprocessing was used to style the app. This is so as to reduce class colissions withing the app. SCSS also provides better utilities for theming as compared to css variables which are browser limited.
- Flexbox was used instead of CSS Grid because of extensive support of flexbox in browsers of most versions
- No external frameworks used other than Next.js
