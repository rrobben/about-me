# About this project
A [website](https://rrobben.github.io/about-me/) portfolio implemented with React + TypeScript.

## Background
Although I haven't done a lot of coding during my free time I felt like I could use a project to work on once in a while. At least whenever I feel like I need for something to work my mind on. I thought it would be a fun challenge to design my own website where I can decide what kind of UI I want and which features I want to implement. Even though I'm not an UI designer, in my opinion I'm pretty decent at implementing UIs with intuitive and positive user experience without someone else telling me exactly how it should look and feel. While I'm a Lead Developer and work on much larger scale projects in my work, this might even attract interest from potential employers at some point.

## Key features
### Dark mode toggle
The one important feature which is missing from many websites is a theme selector. I myself prefer using dark mode whenever possible as it's much more pleasant for your eyes. However I don't want to force others to use it if they don't want to. That's why it was always obvious that I wanted to implement it to my website.

### Responsiveness
There is really no excuse to have websites nowadays which don't scale to mobile screens. So implementing an adaptable UI which works well no matter the screen size was another obviously important feature for me. Of course you can never fully optimize every possible screen but you can still at least achieve a good result for both mobile and desktop screens.

## Learnings
This was also a possibility to learn something new which was the `useContext`-hook. I didn't really have much experience with that previously but here I utilized it for providing the theme and language related functions to be consumed by the components which use them. This is a good alternative instead of using Redux to manage global application state or passing these as props through the application.
