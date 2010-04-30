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
  
  # Regexes to match identifying portions of UA strings from iPhone and Android
  def mobile_user_agent_patterns
    [
      /AppleWebKit.*Mobile/,
      /Android.*AppleWebKit/
    ]
  end
  
  # Compares User Agent string against regexes of designated mobile devices
  def mobile_request? 
    mobile_user_agent_patterns.any? {|r| request.env['HTTP_USER_AGENT'] =~ r}
  end
  
end
     
#preprocessing
before do
  @things = things
  
  if mobile_request?
    @iphone_greeting = 'mobile'
    @iphone = true
  end
end

#ready set go
get '/' do
  @rotatetitle = true
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

