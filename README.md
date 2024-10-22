# SIN Validator

## Running Locally
Requires NodeJS ^18.18.+ and NPM to be installed.

```
git clone git@github.com:Vindexus/ElectiveAssignment.git
cd ElectiveAssignment
npm install
npm run dev
```

The app can be visited at `http://localhost:5173/`. If that port is in use another will be used.

You can use `587 583 436` as a valid SIN to test the app.

## Running Tests
Tests are run with `vitest`. The tests will stay running and re-run when changes are made to the code.

Test files have `.test.ts` at the end of their name.

```
cd /path/to/ElectiveAssignment
npm run test
```

## Approach
I started by making a list for myself of the tasks needed to complete this project. It looked like this before I started writing code:

- [ ] Initial setup of a vite/react app
- [ ] lib/sin-validation.ts with test file
- [ ] actually do the validation
- [ ] update App.tsx to have form input and errors
- [ ] add tailwind
- [ ] update styles
- [ ] update readme

Then I went through each of these tasks in turn.

For larger projects these tasks would likely have much more detail.

## Assumptions & Reasoning

### App Setup
I chose to use Vite and React because I'm familiar with it, and knew I could quickly get something up and running to work with. The app was created using `npm create vite@latest` and selecting the React+TypeScript template.

### Copy/Paste
I assumed that the SIN input might **copied and pasted**, so I made sure to account for whitespace.


### Typing vs Button Clicking
I did validation automatically upon typing instead of requiring a "Validate" button because I thought it would be a better user experience. I also chose to add debounce to the validation so that it wouldn't run as you were actively typing.

### Validating Non-numeric Characters
I added an extra rule of validation to check for non-numeric characters. I could have prevented certain characters from being input, or stripped them out of the final SIN, but I chose not to. Keeping them in and showing the error specifically is more explicit. 

### Tailwind
I used Tailwind for styling because I like having my markup and my styles in the same file, and because I know it is part of your tech stack.

### Dynamic Classnames
I thought about adding a library like `classnames` to handle dynamic classes but it felt like overkill for this project.

## Tests
I created a small set of unit tests before creating the UI. When I can, I like start by writing tests that fail, then write and fix the code make them pass. This is so I can be fairly confident that when changes are made, added bugs can be caught by the tests. Unforeseen bugs can be added to the tests as they're encountered.

I chose vitest because I've recently started learning it and wanted to try it out more.
