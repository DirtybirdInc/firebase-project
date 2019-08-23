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
  $ firebase init functions
  $ firebase init hosting **use "public" as *public directory***
  ```
  
### Deployment script
  ```
  $ git pull
  $ cd functions
  $ npm install
  $ npm test > release_<rid>_unit_tests.txt
  $ cd ../public
  $ npm install
  $ npm test > release_<rid>_unit_tests.txt
  $ cd ..
  $ firebase deploy > release_<rid>_deploy.txt
  ```
