# config valid only for Capistrano 3.1
lock "3.11.0"

set :application, "myblog"
#set :pty, true
set :full_app_name, "myblog"
set :repo_url, "git@github.com:remon/myreactblog.git"
set :branch, "master"

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

# Default deploy_to directory is /var/www/my_app
#set :deploy_to, "/apps/"
#set :deploy_user, MyblogReact::Application.credentials.DEPLOY_USER
set :deploy_user, YAML.load(`rails credentials:show`)["DEPLOY_USER"]
# Default value for :scm is :git
#set :scm, :git
set :rbenv_type, :user
set :rbenv_ruby, "2.5.3"
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}

# Default value for :linked_files is []
set :linked_files, %w{config/database.yml config/master.key}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :linked_dirs, %w{ log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system }
# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5
set :tests, []
#set :pty, true
# namespace :deploy do
#   desc "Restart application"
#   task :restart do
#     on roles(:app), in: :sequence, wait: 5 do
#       # Your restart mechanism here, for example:
#       # execute :touch, release_path.join('tmp/restart.txt')
#     end
#   end

#   after :publishing, :restart

#   after :restart, :clear_cache do
#     on roles(:web), in: :groups, limit: 3, wait: 10 do
#       # Here we can do anything such as:
#       # within release_path do
#       #   execute :rake, 'cache:clear'
#       # end
#     end
#   end
# end
set(:config_files, %w(
  nginx.conf
  database.example.yml
  log_rotation
  unicorn.rb
  unicorn_init.sh
))

# which config files should be made executable after copying
# by deploy:setup_config
set(:executable_config_files, %w(
  unicorn_init.sh
))

# files which need to be symlinked to other parts of the
# filesystem. For example nginx virtualhosts, log rotation
# init scripts etc. The full_app_name variable isn't
# available at this point so we use a custom template {{}}
# tag and then add it at run time.
set(:symlinks, [
  {
    source: "nginx.conf",
    link: "/etc/nginx/sites-enabled/{{application}}",
  },
  {
    source: "unicorn_init.sh",
    link: "/etc/init.d/unicorn_{{application}}",
  },
  {
    source: "log_rotation",
    link: "/etc/logrotate.d/{{application}}",
  },
])

# this:
# http://www.capistranorb.com/documentation/getting-started/flow/
# is worth reading for a quick overview of what tasks are called
# and when for `cap stage deploy`
# namespace :yarn do
#   desc "Install yarn dependencies"
#   task :install do
#     on roles(:app) do
#       within release_path do
#         execute :yarn, :install
#       end
#     end
#   end

#   desc "yarn dependencies"
#   task :build do
#     on roles(:app) do
#       within release_path do
#         with node_env: :production do
#           execute :yarn, :build
#         end
#       end
#     end
#   end
# end
namespace :deploy do
  # before :updated, "yarn:install"
  # before :updated, "yarn:build"
  #before "deploy:assets:precompile", "deploy:yarn_install"

  # make sure we're deploying what we think we're deploying
  before :deploy, "deploy:check_revision"
  # only allow a deploy with passing tests to deployed
  before :deploy, "deploy:run_tests"
  # compile assets locally then rsync
  #after "deploy:symlink:shared", "deploy:compile_assets_locally"
  after :finishing, "deploy:cleanup"

  # remove the default nginx configuration as it will tend
  # to conflict with our configs.
  before "deploy:setup_config", "nginx:remove_default_vhost"

  # reload nginx to it will pick up any modified vhosts from
  # setup_config
  after "deploy:setup_config", "nginx:reload"
  #after "deploy:update_code", "deploy:migrate"
  # Restart monit so it will pick up any monit configurations
  # we've added
  #after "deploy:setup_config", "monit:restart"

  # As of Capistrano 3.1, the `deploy:restart` task is not called
  # automatically.
  after "deploy:publishing", "deploy:restart"
end
