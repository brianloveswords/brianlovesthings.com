require 'rubygems'
require 'sinatra' 
require 'haml'

#settings 
set :haml, {:format => :html5}
set :yar, 'har har'

#helpers
helpers do
  def things 
    ['Chips', 'Words', 'Data', 'Music', 'Cooking', 'Bikes', 'Typography', 'Comics', 'Beer', 'Cats', 'Chartreuse', 'Ampersands', 'Things'].shuffle
  end
end
     

#ready set go
get '/' do
  @rotatetitle = true
  @things = things
  haml :index
end

get '/chips' do
  haml :chips
end
 
get '/data' do
  haml :data
end

# css 
get '/main.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :main
end

get '/iphone.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :iphone
end

