# Simon Game
An implementation of simon game using HTML, CSS, JS.

![](./simon_game.png)

## Typography

### Font
- Fugaz One

## Colors

### Primary
- Greyish: #393843
- Red: #f52e16
- Pinkish Red: #e91e63, #ad1457
- Blue: #38a0eb
- Yellow: #ece02e
- Green: #3ecb74


We will do this project in stages and after each stage please commit your code. Another good idea will be to track the time it took you to finish each part, because we will be having the test of Module 1 soon and it will be time bound.

# Part - 1 - Layout

**Time Taken to finish:**

Finish the layout with HTML and CSS. Here are some ideas to do it:
- Create four squares and give the border-radius to only one corner. 🟥🟨🟩🟦
- Have a `score-container` which is absolutely positioned and has the same background as body, position it in the center to make it look like a hole 🍩
- Add the button and give it a neon effect by using colored shadow ⌨️
- Add the text as required, use a cool fancy font, after all it's a game 🕹
- To give the glow effect on click, you should write some css targeting `:active` pseudo-class.



# Part - 2 - JS Setup

**Time Taken to finish:**

We will be writing the game such that it works in console first. Once we get the logic right then we will link it to the UI.
- Imagine you have four color choices `R`, `Y`, `G`, `B`, and each level will be a combination of these colors.
- Level 1 will have 1 color, level 2 will have 2 colors, so any 2 random colors from this.
- Write a function `getNewWord()` which given a level number returns a random combination of these colors (letters).
- Write a function `play()` which keeps track of the current score, current word (by calling the previously written function), tap counts, word so far, etc.

# Part - 3 - Binding the HTML with JS

**Time Taken to finish:**

This is tricky because we still be writing lot of JS code here.
- Create refrences (variables) to all required elements, score text, tap count, each color div, start game button, score container etc.
- Create an object which has key as alphabet `R` and value as color `red` so you can use it to access those elements and colors.
- Write a function called `animate` which will take a word like `RYB` and animate each colored div for 0.5s. One way to animate is to add a shadow and remove it after `0.5s` and do it for each div one by one.
- After animation is finished now it's user's turn to guess the color sequence played. So update the taps count remaining based on the level.
- For each tap the user does reduce the count and store the guess in a string, and when tap count reaches 0 check if the user has got the correct sequence or not
- If the user gets correct sequence then update the score and go to next level, else show the final score and start over.



Feel free to spice it up by adding your own touch, you can add sounds, animation, or use funky colors.
