require 'settings'
require 'rubygems' 
require 'sinatra' 
require 'haml'

get '/' do
  haml :index
 end

get '/chips' do
  haml :chips
end
 
get '/data' do
  haml :data
end


# css 
get '/css/main.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :main
end

