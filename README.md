# Valentine's Card for Lariel 💝

An interactive Valentine's Day card with a fun "Yes/No" game!

## Setup Instructions

### 1. Add Your Images

You need to add two images to the `images` folder:

1. **panda.png** - A cute panda image (this will be shown with the question)
2. **celebration.gif** or **celebration.jpg/png** - The image/GIF that appears when she clicks "Yes"

#### Where to find/create these images:

- **Panda image**: Search online for "cute panda with heart png" or "panda clipart"
- **Celebration image**: Use a photo of you two together, a romantic GIF, or anything special!

### 2. Using a Video Instead (Optional)

If you want to show a video instead of an image when she clicks "Yes":

1. Add your video file to the `images` folder (e.g., `celebration.mp4`)
2. Open `index.html` in a text editor
3. Find the section marked `<!-- You can put an image or video here -->`
4. Comment out the `<img>` tag by adding `<!--` before it and `-->` after it
5. Uncomment the `<video>` tag by removing the `<!--` and `-->` around it
6. Update the video filename if needed

### 3. Open the Card

Simply double-click on `index.html` to open it in your web browser!

## How It Works

- When the mouse gets close to the "No" button, it runs away
- The "Yes" button gets bigger as the mouse approaches "No"
- When she clicks "Yes", a celebration screen appears with your custom image/video

## Customization Ideas

### Change Colors
Edit `styles.css` to change the pink color scheme:
- Background gradient: lines 11-12
- Button colors: lines 78-79

### Change Text
Edit `index.html` to modify the question or add emojis

### Change Behavior
Edit `script.js` to adjust:
- How close the mouse needs to be before No runs away (line 43: change `100`)
- How much bigger Yes gets (line 49)

## Tips for Sharing

- You can zip the entire `valentine-card` folder and send it to her
- Or upload the folder to a free hosting service like GitHub Pages, Netlify, or Vercel
- Make sure all the image files are included!

Enjoy! 💕
