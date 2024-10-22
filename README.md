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

