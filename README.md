# WebDriverIoProject

## Step 1: Prerequisites
Make sure you have Node.js installed on your machine. webdriverio requires Node.js version 20 or above. You can check your Node.js version by running the command in your terminal.
```
node -v
```
## Step 2: Create a new project
Create a new directory for your project and navigate to it in your terminal.

## Step 3: Initialize a new Node.js project use below command
Run the following command to initialize a new Node.js project:
```
npm init -y
```
## Step 4 : Initiate a WebdriverIO Setup
Run the following command to initiate the webdriverio set up
```
npm init wdio .
```
After this command , you get the list of options need be selected for setup frame work and install the dependencies in local

Please Select the below options while installing the webdriverIO

  # Option 1: Select 'Y' for below option
  ```
  A project named "Drectory name" was detected at "/Users/UserName/Desktop/checkWDIO", correct? (Y/n) 
  ```
  # Option 2: Select "E2E Testing - of Web or Mobile Applications" for below option(type enter after selecting the option)
  ```
  What type of testing would you like to do?
  ```
  # Option 3: Select "On my local machine" for below option(type enter after selecting the option)
  ```
  Where is your automation backend located?
  ```
  # option 4: Select "Web - web applications in the browser" for below option(type enter after selecting the option)
  ```
  Which environment you would like to automate?
  ```
  # option 5:  Select "Chrome" for below option(type 'Enter' key after selecting the option)
  ```
  With which browser should we start?
  ```
  # option 6: Select "Cucumber" for below option(type 'Enter' key after selecting the option)
  ```
  Which framework do you want to use?
  ```
  # option 7:  Select "No" for below option(type 'Enter' key after selecting the option)
  ```
  Do you want to use a compiler?
  ```
  # option 8: Select "Y" for below option(press 'Enter' key after selecting the option)
  ```
  Do you want WebdriverIO to autogenerate some test files?
  ```
  # option 9: Press "Enter" key  for below option
  ```
  Where should these feature files be located?
  ```
  # option 10: Press "Enter" key  for below option
  ```
  Where should these step definitions be located?
  ```
  # option 11: Select "y" for below option(press 'Enter' key after selecting the option)
  ```
  Do you want to use page objects
  ```
  # option 12: Press "Enter" key  for below option
  ```
  Where are your page objects located?
  ```
  # option 13: Select "spec" for below option (press 'Enter' key after selecting the option)
  ```
  Which reporter do you want to use?
  ```
  # option 14:  Select " wait-for" for below option (press 'Enter' key after selecting the option)
  ```
  Do you want to add a plugin to your test setup?
  ``` 
  # option 15: Select "chromedriver" for below option (press 'Enter' key after selecting the option)
  ```
  Do you want to add a service to your test setup?
  ```
  # option 16: Press "Enter" key  for below option
  ```
  What is the base url?
  ```
  # option 17: Select "y" for below option(press 'Enter' key after selecting the option)
  It will install the all node modules required for webdriverIO
  ```
  Do you want me to run `npm install`
  ```
# Step 5: Run all tests use below command
```
npx wdio
```
# Step 6: To Run the all tests cases below code in wdio.config.js
Earlier it had below code
```
require: ['./features/step-definitions/steps.js'],
```
Change it as below 
```
require: ['./features/step-definitions/*.js'],
```
it will help to run all the test cases because earlier it got hardcoded 

# Step 6: Run the specific feacture file run below command
```
npx wdio --spec ./features/bendigoCreditCards.feature
```
