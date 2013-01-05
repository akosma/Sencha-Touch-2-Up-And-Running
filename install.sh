#!/usr/bin/env sh
echo "This script downloads required JavaScript libraries"

# Constants
LIBS=_libs

# If the "_libs" directory exists, delete it
if [ -d "$LIBS" ]; then
  rm -r $LIBS
fi

# Create the directory
mkdir $LIBS




echo
echo "############################"
echo "#                          #"
echo "# Downloading Sencha Touch #"
echo "#                          #"
echo "############################"
curl http://cdn.sencha.io/touch/sencha-touch-2.1.0-gpl.zip --output $LIBS/sencha.zip

# Extract the contents of the zip file
unzip $LIBS/sencha.zip -d $LIBS/sencha/

# Remove the zip file
rm $LIBS/sencha.zip




echo
echo "############################"
echo "#                          #"
echo "# Downloading Sencha Cmd   #"
echo "#                          #"
echo "############################"
curl http://cdn.sencha.io/senchacmd/SenchaCmd-3.0.0.250-osx.app.zip --output $LIBS/sencha_cmd.zip

# Extract the contents of the zip file
unzip $LIBS/sencha_cmd.zip -d $LIBS

# Execute the application contained in it (OS X only)
# open $LIBS/SenchaCmd-3.0.0.250-osx.app

# Remove the zip file
rm $LIBS/sencha_cmd.zip




echo
echo "######################################"
echo "#                                    #"
echo "# Downloading the latest Siesta Lite #"
echo "#                                    #"
echo "######################################"
curl http://www.bryntum.com/download/?product_id=siesta-lite --output $LIBS/siesta.zip

# Extract the contents of the zip file
unzip $LIBS/siesta.zip -d $LIBS

# Remove the zip file
rm $LIBS/siesta.zip

# Rename the folder
mv $LIBS/siesta* $LIBS/siesta

