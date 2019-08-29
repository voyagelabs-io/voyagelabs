 # Voyage Labs Landing Page
 
 This is the static site for the landing page of Voyage Labs, where the company's contact info and job listings can be found. 
 
 URL: http://www.voyagelabs.io
 
 ## Initial Setup
 
 **Install yarn for your OS:** https://yarnpkg.com/lang/en/docs/install
 ```bash
 $ git clone https://github.com/voyagelabs-io/voyagelabs
 $ cd [your folder with voyagelabs repo]
 $ yarn install
 ```
 
 ## Local Setup
 Running local setup will install all necessary bundles and dependencies and then open *localhost:3000* in your browser
 ```bash
 $ cd [folder with voyagelabs repo]
 $ yarn start
 ```
 Now you can edit the code in your code editor. I've summarized the contents of each component in the table below:
 
 | Component Name |Contents|
 |---|---|
 | Main.js, Main.scss | There are two main divs, separating the page into a left side and a right side. The left div contains all the text, and the right div contains the animation. I would recommend not making any changes to the right div, as I've set the animation up to have the right size and transition times|
 | Navbar.js, Navbar.scss | This is where the top navigation bar would be modified  (right now it is set to display: none)
 | Button.js, Button.scss | This contains Javascript functions for the button clicks (contact button and join our voyage). You can modify the links by searching for them, and change styles with CSS |
 | Notfound.js, Notfound.scss | Necessary component in case the page can't be found. Should not need modification |
 
 ## Build
 Building will compile and minify all SCSS/CSS, concat and uglify all JS, minify all images, and process and copy all HTML. This will result in the entire site ready in the 'build' directory upon completion
 
 ```bash
 $ yarn build
 ```
 This creates a 'build' folder inside the **voyagelabs** repo folder on your laptop. I've automated this process so that the old 'build' folder is deleted and renamed to docs (this is necessary for the website hosting)
 
 ## Deploy
 ```bash
 $ git add -A
 $ git commit -m "Your message"
 $ git push -u origin master
 ```
 After you've pushed, the route may have been changed and the site will display "there is no GitHub pages here". If this happens, go to the Settings of this repo to the GitHub pages section and change Source to "
 It may take ~5 minutes for the live website to be updated
 And you're done! :)
