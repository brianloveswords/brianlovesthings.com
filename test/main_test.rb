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
  
  def test_iphone_css_responds
    get '/iphone.css'
    assert last_response.ok?
    assert last_response.body.include?('iphone specific css')
  end

  def test_include_rotation_script_on_homepage
    get '/'
    assert last_response.body.include?('activate rotating title')
  end

  def test_db_connection
    get '/debug/db_connection'
    assert last_response.ok?
    assert last_response.body.include?('db ok')
  end
end


      
    
