require 'rake/testtask'

desc "run basic tests"
Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.pattern = 'test/*.rb'
  t.verbose = true
end


namespace :server do
  desc "Starting thin servers"
  task :start do
    sh "thin -s 2 -C config.yml -R config.ru start"
  end

  desc "Stopping thin servers"
  task :stop do
    sh "kill `cat thin.5000.pid`"
    sh "kill `cat thin.5001.pid`"
  end

  desc "Restarting thin servers"
  task :restart => [:stop, :start] do
  end

end  

