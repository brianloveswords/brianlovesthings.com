require 'rubygems' 
require 'sinatra' 
get '/' do
  'I love all sorts of <a href="/chips">things</a>.'
 end

get '/chips' do
  'And one of those <a href="/data">things</a> is <strong>chips</strong>.'
end
 
get '/data' do
  'Another one of those things is <strong>data</strong>'
end
