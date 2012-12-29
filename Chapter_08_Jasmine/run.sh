#!/usr/bin/env sh

# This script requires PhantomJS to be installed locally
phantomjs lib/run_jasmine_test.coffee http://protagoras.local:8888/Chapter_08_Jasmine/SpecRunner.html

#
# The output of the command above should look like this:
#
#
# Starting...
# Starting...
# Task when a new one is created: 3 of 3 passed.
# Task when one is modified: 4 of 4 passed.
# Task when one is reset: 1 of 1 passed.
#
# Finished
# -----------------
# 8 specs, 0 failures in 0.006s.
#
# ConsoleReporter finished
#

