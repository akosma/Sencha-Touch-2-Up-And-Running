#!/usr/bin/env sh

# This script requires the installation of jsduck
# using 'gem install jsduck'
jsduck AkoLib/view/SplitView.js --external Ext.Component --external Ext.Container --output docs

