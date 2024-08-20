# React for Dummies
(Nick Biancolin - August 20th, 2024)

If you're like me and don't know where the hell to start with this, you've come to the right document

## Project Structure:
- `public`
  - Contains all the assets for the site (Images, audio, etc)
- `src`
  - `app`
    - Has all the pages for use in the site
  - `components`
    - Has all of the pahe templates 
    - (When a page is built, it essentially (usually) creates an instance of a component (described here), but passes through specific things about it (title, subtitle, image path, etc))
  - `styles`
    - Contains css (I think, idk how tailwind works)
  - `types`
    - ??

## To Edit or Create a page

1. Find the page you're looking for (or create a folder with page.tsx) in `src/app`
2. Instantiate an object of one of the components you want to use (see `src/components`)
3. Pass through whatever parameters are required
4. Bob's your uncle

Happy coding!
-Nick