# Configuration

## Things to do when using this for a new project

- delete firebase.json, .firebaserc, and .firebase directories
- clear .env vars
- git remote rm origin
- delete node_modules, then npm install
- create firebase project, register web app including firebase hosting, add realtime database
- set database rules (read false, write true)
- setup firebase functions (requires upgrade to blaze plan)
- Add env vars locally and on github as repo secrets
- Update config file

**Stripe configuration**
- On Stripe console, disable all payment methods except Cards, Apple Pay, Google Pay
- Use test api keys until ready to launch

**Also see the README files inside the functions folder!**

**Setup Firebase:**
- Create firebase project, register web app, and add to app, including firebase hosting
- Fill in firebaseConfig values in `.env` file (see `.env.example`)
- Create Firebase Realtime Database in test mode
- Fill in DB URL (likely includes `rtdb.firebaseio.com`) as _REACT_APP_FIREBASE_DATABASE_URL_ in `.env` file

**Setup Places API:**
- Activate both Places API (old) and Maps Javascript API
- Create API key in Google cloud console with access to both those APIs, limit to `http://localhost:3000/*` and `https://www.[website].com/*`

**Setup Recaptcha:**
- Activate Recaptcha v2 not a robot checkbox and copy site key

**Development:**
Set environment variables in `.env`

**Production (with GitHub workflow and Firebase hosting):**
- Set environment variables as [secrets](https://github.com/mgoren/corvallis/settings/secrets/actions) on the repo and update `.github/workflows/firebase-hosting-merge.yml`.
- Deploy again after updating github secrets!

# Deployment

**Via GitHub workflow:**
(See instructions above for configuring env variables as repo secrets.)

**Or:**

```sh
npm run build
firebase deploy --only hosting
```

# Registration site

Simple registration / admissions sales site for contra dance events.

Built in React.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
