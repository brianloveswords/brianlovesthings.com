require 'settings'
require 'rubygems' 
require 'sinatra' 
require 'haml'

#settings 
set :haml, {:format => :html5}

#ready set go
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

