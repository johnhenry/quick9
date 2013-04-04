#quick9
This project is aimed at quickly launching websites on Cloud9 (http://c9.io), but it works well in any Node environment - Linux, MacOS, and even Windows!

##Installation

###Cloud9

0. Sign up for an account at c9.io and create a new custom work space
1. Delete any existing files to ensure that you have a clean working directory
2. Open the terminal and enter `git clone git@github.com:johnhenry/quick9.git .` to install quick9 (Note the "." at the end)
3. Enter `npm install` to install quick9's dependencies
4. Populate the "public" directory with the content of your website

###Local

0. Install git, node, and npm on your local system
1. Navigate to a folder where you want to install your project
2. Open the terminal and enter `git clone https://github.com/johnhenry/quick9.git .` to install quick9 (Note the "." at the end)
3. Enter `npm install` to install quick9's dependencies
3. Populate the "public" directory with the content of your website

##Running

1. In the terminal type `npm start` to start quick9
2. Point your browser to `{{WORKSPACE}}.{{USERNAME}}.c9.io` (or `localhost:8080` if you're running this locally).

###Additional options for Running on Cloud9

You may also start quick9 by opening server.js and clicking the "Run" or "Debug" button near the top of the app.
(You may close server.js after running it and the site will work fine, but you will have to open server.js again.)

##Other environments

There is a reconfigured Procfile for deployment to Heroku and other similar services.
Check out this link to learn more: https://devcenter.heroku.com/articles/nodejs

Note:It's also possible to push directly form Cloud9 to Heroku
However, since installing the heroku toolbelt on Cloud9 is not supported,
you'll temporarily need access to a system that supports it.

1. Get your public SSH key from your Cloud9 Account page.
2. Install the heroku toolbelt on a system that supports it from here: https://toolbelt.heroku.com/
3. Add the key to your heroku app using the method described here:https://devcenter.heroku.com/articles/keys#adding-keys-to-heroku
4. In the Cloud9 Terminal, type `git remote add heroku git@heroku.com:{{PROJECTNAME}}.git`
5. You can push your project directly from Cloud9 to Heroku with `git push heroku master`

##FAQ

Q:Why would I use this locally?

A:Some broswsers, such as chrome, restrict the type of request that it makes to local files. 
    While this is good for security purposes, it makes developing local sites a bit more difficult.
    One way around this is to host your site locally using quick9.
    
Q:Do I have to restart the server every time I make a change to my files?

A:No. Quick9 monitors the files within the "public" directory.
    You may, however, have to refresh your browser and/or clear its cache.
    
Q:Can I use HTML,CSS,and Client Side Javascript?

A:Yes. Quick9 fully supports the use of all client side technologies, including:
    AngularJS
    Bootstrap
    jQuery
    Backbone
    Underscore
    And many, many more...

Q:Can I use Server Side Javascript, PHP, Ruby, Python, etc.

A:No. Quick9 itself is a simple server that doesnt support outside server technologies.
    However, Node is easily extensible, and could easly be part of your own project!
    Check out the documentation `http://nodejs.org/api/`
    
Q:Isn't quick9 just a wrapper for connect?

A:Yes... mostly, but quick9 focuses on rapid deployment of a site for a very common usage scenario.