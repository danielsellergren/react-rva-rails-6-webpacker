# README

## Instructions

This assumes you have [Homebrew](https://brew.sh/) and [rbenv](https://github.com/rbenv/rbenv) installed for managing Ruby versions. If your setup is different then just make sure your Ruby version (>= 2.5) is capable of running Rails 6.

    brew update && brew upgrade ruby-build
    rbenv install 2.6.4
    rbenv global 2.6.4

Install Rails 6.

    gem install rails -v 6.0.0

Create new Rails project.

    rails new hello-world

Generate a controller and view to handle the root path.

    rails g controller hello world

Add the root path to the routes path.

    # config/routes.rb
    Rails.application.routes.draw do
      root 'hello#world'
    end

Create your Hello World file.

    # app/javascripts/packs/helloWorld.js
    console.log("Hello World!");

Require it inside the main application pack.

    # app/javascripts/packs/application.js
    ...
    require("packs/helloWorld.js")

Start the Rails server.

    rails s

Visit http://localhost:3000 in your browser and check the developer console to see your Hello World!

## Resources

* https://stackoverflow.com/questions/56242664/how-to-require-custom-js-files-in-rails-6