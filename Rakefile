task :start do
  puts "Starting thin servers..."
  sh "thin -s 2 -C config.yml -R config.ru start"
end

task :stop do
  puts "Stopping thin servers..."
  sh "kill `cat thin.5000.pid`"
  sh "kill `cat thin.5001.pid`"
end

task :restart => [:stop, :start] do
end
  
