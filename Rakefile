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
    Dir.glob('thin*pid').each do |server_pid_file|
      sh "kill `cat #{server_pid_file}`"
    end
  end

  desc "Restart Thin servers"
  task :restart => [:stop, :start] do
  end
end

task :default => [:test, "server:restart"]

