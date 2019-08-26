set -e
echo '=========================== START OF GIT PULL ============================='
echo ''
git pull
echo ''
echo '========================== START OF NPM INSTALL ==========================='
echo ''
cd functions
npm install
cd ../public
npm install
echo ''
echo '========================== START OF UNIT TESTS ============================'
echo ''
npm test
cd ../functions
npm test
echo ''
echo '============================ START OF DEPLOY =============================='
echo ''
firebase deploy
echo ''
echo '==========================================================================='