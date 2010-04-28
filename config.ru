require 'rubygems'
require 'sinatra'

set :env, :production
set :port, 5000
disable :run, :reload

require 'main'

run Sinatra::Application

