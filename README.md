# Nguyen Van Thuy - React Native assessment

### Summary:
##### [Project structure](https://github.com/thuytony/TodoApp#nguyen-van-thuy---react-native-assessment)
##### [Run the application](https://github.com/thuytony/TodoApp#how-to-run)
##### [Run the unit test](https://github.com/thuytony/TodoApp#how-to-run-unit-tests)
##### [Code improvement](https://github.com/thuytony/TodoApp#what-do-we-need-to-do-to-improve-this-project)
##### [Video demo](https://github.com/thuytony/TodoApp#video-demo-1)
#

![Project structure](https://i.ibb.co/4MF3FKF/Todo-App-Project-Structure.png)
##### As seen in the referenced screenshot above, At the very first I create a base folder “src” which will store all the necessary folders or files in it for the project.

## assets/
##### This folder will store all the assets that we are using in react-native. You can add static files like icons and images to it. Also, you can add more assets like videos in this folder according to your project requirements.

## components/
##### You can create components that are common to the entire application and reusable, providing a unified look and feel for the entire application. I am managing by component type: core, list, modal, task, .... Core components will be used for components defined by the designer. It will be shared throughout the application.

## constants/
##### All constants should be saved here: API base url, Api request time out, ... In addition, the security variables: the for example private key will be saved in the environment and use the react-native-config library to get the value.

## i18n/
##### This holds translation files for different languages in which you're using your application. The strings displayed on the screen should be taken from translation files instead of hard coding as now.

## models/
##### Where we define all the data while using typescript to develop the application.

## navigation/
##### Your project base navigation goes here. You can create a stack navigator in it and export it to your application. For now just making simple demo application, I did not install navigation in this project.

## screens/
##### All your screens will be stored here: login, home, ... This folder is currently being divided into subfolders according to each screen. Each subfolder is written View and Style separately to avoid the file being too long.

## services/
##### Defines all the Restfull APIs used throughout the application. It can be reused. API requests should be written here for reuse and easy debugging.

## stores/
##### If we use redux library, mobX or any other library to manage state. They will be written here.

## theme/
- ##### color: all repeated colors will be stored here. Make sure we don't define new color codes ourselves to ensure application-wide consistency. It also makes it easy to implement dark mode later, which I wrote in the themeHook.ts file
- ##### dimension: Defines all the dimensions: margin, padding, text size, radius, icon size, ... Not only ensures consistency in the user interface, it also makes it easier for us to implement when we want to scale size on multiple devices.

## utils/
##### All the utils or helpers file will go here that storing reusable methods and logic's like validations, check app permission, ... it according to your app requirements.

##
# How to run?
#### Make sure your computer has a full environment installed for running React Native applications

Android:
```sh
yarn install
yarn start
yarn android
```

IOS:
```sh
yarn install
npx pod-install
yarn start
yarn ios
```

# How to run unit tests?
```sh
yarn install
yarn test
```
#### Unit test result:
![Unit test result](https://i.ibb.co/w0jG7pN/Todo-App-Test-Result.png)

# What do we need to do to improve this project?
- Text characters, messages to the current user are being displayed as hard strings. It should be combined with the i18n library to bring multilingual display to the user.
- Define color codes in Light Mode, Dark Mode based on the design file from the designer.
- Define standard dimensions (font size, margin, padding, ...) according to the design file from the designer.
- Write more components and provide more properties to existing components based on the application's design file. Example: DatePicker component; The BText component needs to pass additional attributes: title, body, content, ... and display the style corresponding to those attributes.
- Unit tests should be written for all base components. For now Home.test.txs is just an example.
- Apply CI/CD to the application.

## [Video demo](https://drive.google.com/file/d/1pg1lNPvMQ6IN3nPX7N3xhVqK4ypi8rFy/view?usp=sharing)

### *Thank you!!!*
