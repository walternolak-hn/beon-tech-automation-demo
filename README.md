# WebdriverIO + Appium - Mobile Web Automation Testing

This project uses Google site to automate the tests: [Google](https://www.google.com/)

#### Considerations
1. Uses Cucumber framework
3. Uses the latest version of [WebdriverIO V9](https://webdriver.io/)
4. Uses Appium's latest version [Appium 2.11.3](https://github.com/appium/appium/releases/tag/appium%402.11.3)
5. Supports Android mobile web automation in Chrome
6. Test feature files are located under the **Features** folder
7. Uses Spec reporter (CLI)
8. Uses Page Object Model
9. Runs locally on an Android Emulator

#### Software Pre-requisites
1. Install Java JDK and set up its environment variables [Java JDK](https://docs.oracle.com/en/java/javase/22/install/installation-jdk-macos.html#GUID-2FE451B0-9572-4E38-A1A5-568B77B146DE)
2. Install Android Studio and set up its environment variables [Android Studio](https://developer.android.com/studio/install?hl=en-419)
3. In Android Studio go to the SDK Manager and download an SDK Platform i.e Android 12.0
4. Go to Android Studio Virtual Device Manager and create a virtual device
5. Run the virtual device created

#### Installation
1. `git clone`
2. `npm install`: Install all project dependencies

#### Running tests
1. Run an Android emulator in the local machine
2. On the CLI, `npm run android-web`: By default, it will run All the tests under the **googleSearch** feature file <br>

#### Test Report
- **Spec** Test report will be shown in the CLI after test execution ends
