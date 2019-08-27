# react-native-graphql-githubApp
React native app to search github users info using graphql v4 github api and mark them favorite.

#To run locally
1. git clone https://github.com/codesinghanoop/react-native-graphql-githubApp.git
2. cd react-native-graphql-githubApp
3. npm install
4. go to ios folder to install pods, from root dir of project run - cd ios then pod install
4. To run on ios platform run 'react-native run-ios'
5. For android 'react-native run-android';

Note:- In react native versions you don't need to run server explicitly it will be handled by step 4 and 5 above.

Note:- In constants/endpoints.js file add your github access token

Note:- Please add local.properties file in your android folder like below

1. Go to the android/ directory of your react-native project
2. Create a file called local.properties with this line: sdk.dir = /Users/USERNAME/Library/Android/sdk

  Where USERNAME is your OSX username
