require 'main'
require 'test/unit'
require 'rack/test'

set :environment, :test

class MainTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_respond_with_homepage
    get '/'
    assert last_response.ok?
    assert last_response.body.include?('brian brennan')
  end

  def test_main_css_responds
    get '/main.css'
    assert last_response.ok?
    assert last_response.body.include?('css for the main layout')
  end
end

      
    
