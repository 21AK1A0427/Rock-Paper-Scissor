# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Extra challenges](#extra-challenges)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Extra challenges

As an extra challenge I will do the following things:

- Add smooth animations to make it feel more like a game.
- Also add a computer score to make the game more interesting.
- Be able to reset the scores (which state I maintain using `localStorage`)
- Make the game accessible according to WCAG 2.1 standards, things like color contrast, clear element focus and the correct screen reader contexts.

### Screenshot

![social-preview-image](https://user-images.githubusercontent.com/3909046/172068130-dd1929d4-d8de-4f79-8447-aa36ebdb2170.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/astro-wcag-accessibility-css-flexbox-and-css-animations-OQei0e5Kj)
- [Live Site URL](https://markteekman.github.io/rock-paper-scissors/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- WCAG 2.1 best practices
- CSS Animations
- Vanilla JavaScript
- [Astro](https://astro.build) - Astro Static Site Generator
- [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter) - My own starter template for Astro
- [Accessible Astro Components](https://github.com/markteekman/accessible-astro-components) - My own pre-build Astro components

### What I learned

- I didn't know the assets for the attributes would only be the icon SVG's (scissors, paper, rock etc.), so I was excited to try and create the whole icon button design using CSS only. Which includes the inner shadow effects that make it look like a poker-chip of some sort. I used the `::before` and `::after` pseudo elements to get to the desired result:

```scss
<style lang="scss" is:global>
  @use '../assets/scss/base/breakpoint' as *;

  span[class*="attribute-"] {
    position: relative;
    display: grid;
    place-items: center;
    width: var(--small-badge-outer);
    height: var(--small-badge-outer);
    border-radius: 100%;
    transition: 0.2s ease-in-out;

    @include breakpoint(700) {
      width: var(--large-badge-outer);
      height: var(--large-badge-outer);
    }

    img {
      position: relative;
      z-index: 2;
      width: 35%;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 100%;

      &:hover {
        background-color: purple;
      }
    }

    &::before {
      z-index: 2;
      width: var(--small-badge-inner);
      height: var(--small-badge-inner);
      background-color: #e0e0e0;
      box-shadow: inset 0 6px 2px rgba(0, 0, 0, 0.15);

      @include breakpoint(700) {
        width: var(--large-badge-inner);
        height: var(--large-badge-inner);
      }
    }

    &::after {
      z-index: 1;
      width: var(--small-badge-outer);
      height: var(--small-badge-outer);

      @include breakpoint(700) {
        width: var(--large-badge-outer);
        height: var(--large-badge-outer);
      }
    }

    &[class*="scissors"] {
      &::after {
        background: linear-gradient(#ec9e0e, #eca922);
        box-shadow: inset 0 -5px 0 #c16a1b;
      }
    }

    &[class*="paper"] {
      &::after {
        background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
        box-shadow: inset 0 -5px 0 #2b44c3;
      }
    }

    &[class*="rock"] {
      &::after {
        background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
        box-shadow: inset 0 -5px 0 #9c1732;
      }
    }

    &[class*="lizard"] {
      &::after {
        background: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
        box-shadow: inset 0 -5px 0 #5e33a7;
      }
    }

    &[class*="spock"] {
      &::after {
        background: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
        box-shadow: inset 0 -5px 0 #2c8ba8;
      }
    }
 }
</style>
```

### Continued development

- I used fixed widths and heights to achieve the buttons on the pentagon background. I was thinking about using CSS Grid, but didn't know how to get it right. I'm curious about how other solutions tackled it and I might try it out if there's a better way.
- My `playerWins()` and `computerWins()` functions could probably be refactored to one function using some if-statements, as it has a lot of the same code. So I might change this in the future.
- Some kind of global leaderboard where users can see each others scores (idea credits: https://github.com/rebelchris).
- The responsive design could be enhanced a bit as well. I used a small and a large breakpoint, but it could definitely improve by using a medium breakpoint as well.
- There should be better screenreader feedback after making a choice, eihter by adding a `role="status"` or by resetting the focus.
- Improving accessibility by adding better text alternatives to "You picked", "The house picked" and "You lose".

### Useful resources

- Nothing at the moment.

## Author

- [Personal Website](https://www.markteekman.nl)
- [Frontend Mentor Profile](https://www.frontendmentor.io/profile/markteekman)
- [LinkedIn Profile](https://nl.linkedin.com/in/markteekman)
- [Twitter Profile](https://twitter.com/MarkTeekman)
- [GitHub Repositories](https://github.com/markteekman)
- [NPM Packages](https://www.npmjs.com/~markteekman)
- [CodePen Creations](https://codepen.io/markteekman)
