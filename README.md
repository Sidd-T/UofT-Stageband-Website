# Skule Stageband Website

Website for University of Toronto Skule Stageband

### How to Run
To run locally, must have nodejs installed, just get the latest version or get nvm

- clone the repository
- to first download all dependencies use `npm install`(make sure this is in the Uoft-Stageband-Website directory
- to run the app use `npm run dev` then open localhost:3000 (paste http://localhost:3000 in your browser)

### Adding to Gallery
The gallery is organized by events

1. In /public/images/gallery/ create a folder with the event title, use underscore for spaces, e.g. Emmet_Ray_2024
2. Add images to this folder, make sure they are .png, .jpg, or .jpeg (or .gif)
3. In `folderCardData.ts`, add an object to the array with this format (just refer to the existing objects)
```
{
  title: string, //must match the folder name that you just created
  image: string, //this is the thumbnail image for the folder, should look like /images/gallery/[title]/[imagename].[ext]
  year: string, //this should be the year that the event took place, in the T format, like "2T4"
  band: string, //should be a string of either "Blue", "Gold", "Combo", or "Other"
  videos?: string[], //should be an array of youtube links as strings, this is an optional field
}
```
