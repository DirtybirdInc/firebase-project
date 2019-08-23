# kokis-site
A small demo website using firebase hosting and cloud functions.

## Release Process

### Prerequisites
- Git https://git-scm.com/downloads
- Node.js 8 - https://nodejs.org/en/
- A Firebase Project with Google Authentication enabled - https://firebase.google.com
- Firebase CLI - https://firebase.google.com/docs/cli<br>
  ```
  $ npm install -g firebase-tools
  ```
- Initialise the firebase project<br>
  ```
  $ git clone <www.this-repo.com> <path/to/local/repo>
  $ cd <path/to/local/repo>
  $ firebase init functions **install dependencies**
  $ firebase init hosting **use "public" as *public directory***
  ```
- Install ```mocha``` Unit Testing and ```nyc``` https://mochajs.org/<br>
  ```
  $ cd functions
  $ npm install --save-dev mocha
  $ npm install --save-dev nyc
  $ cd ../public
  $ npm install --save-dev mocha
  $ npm install --save-dev nyc
  ```
- Alter ```functions/package.json``` and ```public/package.json```<br> 
  ```
  { scripts: { "test": "nyc mocha"} }
  ```
  
### Deployment script
  ```
  $ git pull
  $ cd functions
  $ npm test > release_<rid>_unit_tests.txt
  $ firebase deploy > release_<rid>_deploy.txt
  ```
