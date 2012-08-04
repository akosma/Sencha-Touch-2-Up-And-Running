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
echo "###############################"
echo "#"
echo "# Downloading Sencha Touch"
echo "#"
echo "###############################"
curl http://cdn.sencha.io/touch/sencha-touch-2.0.1.1-gpl.zip --output $LIBS/sencha.zip

# Extract the contents of the zip file
unzip $LIBS/sencha.zip -d $LIBS

# Rename the folder
mv $LIBS/sencha-touch-2.0.1.1/ $LIBS/sencha/

# Remove the zip file
rm $LIBS/sencha.zip


