# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', '_libs', 'sencha', 'resources', 'themes')

# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")
environment  = :production

# Remember to set 'output_style = :compressed' before going on
# production!
#
# output_style = :compressed
output_style = :expanded

