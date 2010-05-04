require 'rubygems'
require 'sinatra' 
require 'haml'
require 'mongo'

#settings 
set :haml, {:format => :html5, }

#helpers
helpers do
  def things 
    ['Chips', 'Words', 'Data', 'Music',
     'Cooking', 'Bikes', 'Typography',
     'Comics', 'Beer', 'Cats',
     'Chartreuse', 'Ampersands', 'Things'].shuffle
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

  def collect_test_posts(filter=nil)
    @db.collection( "test" ).find(filter).sort([:date, :descending])
  end

end
     
#preprocessing
before do
  begin
    @db = Mongo::Connection.new.db('brianlovesthings')
  rescue
    @db = nil
  end
  
  @things = things
  @rotatetitle = false
  
  if mobile_request?
    @iphone_greeting = 'mobile'
    @iphone = true
  end
end


# debug routes
get '/debug/db_connection' do
  if @db.class == Mongo::DB
    'db ok'
  else
    'db busted'
  end
end

get '/debug/environment' do
end


#ready set go
get '/' do
  @rotatetitle = true
  haml :index
end

get %r{^/words(/)?$} do
  @pagetype = 'words'
  @things = ['words']
  
  @posts = collect_test_posts()
  haml :words
end

get '/words/tags/:tags' do
  @pagetype = 'words'
  @things = ['tags']
  
  @posts = collect_test_posts( { :tags=>params[:tags] } )
  haml :words
end

get '/words/create' do
  @pagetype = 'words'
  @things = ['blagging']
  haml :words_create
end

post '/words/create' do
  begin 
    @things = ['success']
    entry = {
      :date     => Time.now.to_i             ,
      :title    => params[:title]            ,
      :body     => params[:body]             ,
      :tweet    => params[:tweet]            ,
      :permauri => params[:permauri]         ,
      :tags     => params[:tags].split(/\s+/),
    }
    @db.collection( "test" ).insert( entry )
    haml "%h2 Post successful!"
  rescue
    @things = ['errors']
    haml "%h2.error Something went horribly wrong."
  end
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

