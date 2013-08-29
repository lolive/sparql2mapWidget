# PRESENTATION

HTML and css files are generated from Jade templates.
We build the files from the template with node.js, node-jade.
We make generation convenient with Grunt (a kind of make, for web developers) and Gruntfile.js (a kind of Makefile).
We make generation transparent with grunt-contrib-watch (a file monitor that reruns the Grunt generation tasks when template files change).

# INSTALL

Install node.js.

    http://nodejs.org/download/

and be sure to set up your proxy settings for npm

    npm config set proxy http://USER:PASS@PROXY_HOST:PROXY_PORT

Then install Grunt: 

    npm -g install grunt-cli

Note: Grunt is a kind of Make, accepting various tasks defined in a file called Gruntfile.js

# GRUNT GENERATION TASKS

Note: you need to update the url of the SiTools in the file work/templates/jade/info.jade NOW!

To build templates in root directory, go to work/ and type:

    grunt jade
    grunt sass

# GRUNT REGENERATION TASKS

To run the Grunt watcher on .jade template files, go to work/ and type:

    grunt watch

Let it run. Now for any modification of a .jade file in work/templates/jade/, the .html at the root directory will be automatically regenerated.

# GRUNT LIVERELOAD

Grunt-watch also runs a livereload server on port 35729. 
If your .html contains such a statement:
    
    <script src="http://your.webserver.address:35729/livereload.js"></script>

with 'your.webserver.address' being your webserver name,
then Grunt-watch triggers a browser reload after each "regeneration".
