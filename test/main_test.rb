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
    assert false == true
  end

end

      
    
