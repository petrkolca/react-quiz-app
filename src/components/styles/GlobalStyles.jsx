import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  /*********
  Variables
  *********/

  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);
    /* primary/main color */
    --clr-primary-5: #43B02A;
    /* lighter shades of primary color */
    --clr-primary-6: #A2D897;
    --clr-primary-7: #CBE1C4;
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);
    /* darkest grey - used for headings */
    --clr-grey-1: #19222E;  // text & Button
    --clr-grey-4: #E6E6E6; // border
    --clr-grey-5: #F7F7F7; // body bg
    /* grey used for paragraphs */
    --clr-grey-2: #909498;
    --clr-grey-3: #B1BAC6;
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: #f2f2f2;
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.5rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  /*
  =============== 
  Global Styles
  ===============
  */

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-width: 320px;
    background: var(--clr-grey-5);
    color: var(--clr-grey-1);
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-2);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Quiz Card
  .quiz {
    width: 90vw;
    max-width: var(--max-width);
    margin: 4rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 3rem;
  }
  .quiz-small {
    max-width: 500px;
  }
  .container h2 {
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.5;
    text-transform: none;
  }

  .correct-answers {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: right;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
  }

  .answer-btn {
    display: block;
    width: 100%;
    margin: 0.75rem auto;
    background: var(--clr-grey-4);
    border-radius: var(--radius);
    border-color: transparent;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.75rem 0;
    transition: var(--transition);
  }
  @media screen and (min-width: 576px) {
    .answer-btn {
      max-width: 60%;
    }
  }
  .answer-btn:hover {
    background: var(--clr-primary-7);
  }
  .correct-answers {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: right;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-green-dark);
  }
  .next-question,
  .close-btn,
  .submit-btn {
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.5rem 0.85rem;
    display: block;
    width: auto;
    max-width: 35%;
    margin-left: auto;
    margin-top: 2rem;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
  }
  .next-question:hover {
    background: var(--clr-primary-6);
    color: var(--clr-primary-5);
  }
`