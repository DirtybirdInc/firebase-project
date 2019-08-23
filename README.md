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
$ echo '==========================================================================='
$ echo 'START OF PROCESS'
$ echo '==========================================================================='
$ echo 'START OF GIT PULL'
$ echo ''
$ git pull
$ echo 'END OF GIT PULL'
$ echo '==========================================================================='
$ echo 'START OF NPM INSTALL'
$ echo ''
$ cd functions
$ npm install
$ cd ../public
$ npm install
$ echo 'END OF NPM INSTALL'
$ echo '==========================================================================='
$ echo 'START OF UNIT TESTS'
$ echo ''
$ npm test
$ cd ../functions
$ npm test
$ echo 'END OF UNIT TESTS'
$ echo '==========================================================================='
$ echo 'START OF DEPLOY'
$ echo ''
$ firebase deploy
$ echo 'END OF DEPLOY'
$ echo '==========================================================================='
$ echo 'END OF PROCESS'
$ echo '==========================================================================='
```
