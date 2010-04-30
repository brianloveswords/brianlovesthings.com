require 'rake/testtask'

desc "Run basic tests"
Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.pattern = 'test/*.rb'
  t.verbose = true
end

namespace :server do
  desc "Start a pair of Thin servers"
  task :start do
    sh "thin -s 2 -C config.yml -R config.ru start"
  end

  desc "Stop Thin servers"
  task :stop do
    sh "kill `cat thin.5000.pid`"
    sh "kill `cat thin.5001.pid`"
  end

  desc "Restart Thin servers"
  task :restart => [:stop, :start] do
  end
end


