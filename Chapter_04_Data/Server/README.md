Chapter 4 Server Application
============================

This folder contains a server-side PHP application that is used to
generate random datasets in any format required. The server application
reads a MySQL database (Server/data/schema.sql) and outputs data in the
following formats:

- HTML
- JSON
- YAML
- XML (arbitrary format)
- SOAP
- Property list
    - Binary property list
    - XML property list
- CSV
- Protocol Buffer (Google)

For each output format, there is a single "Formatter" subclass in the
Server/formatters folder. A static method in the FormatterFactory class
returns the formatter that corresponds to the requested output format.

Libraries Used
--------------

The project uses several different libraries:

- "cfpropertylist":http://code.google.com/p/cfpropertylist/ A PHP
  Implementation Of Apple's plist (PropertyList).
- "NuSOAP":http://sourceforge.net/projects/nusoap/ SOAP Toolkit for PHP.
- "spyc":http://code.google.com/p/spyc/  A simple YAML loader/dumper
  class for PHP.
- "pb4php":http://code.google.com/p/pb4php/ Protocol Buffer for PHP
    
Installation
------------

1. Upload the "Server" folder contents via FTP or other means.
2. Create a MySQL database.
3. Import the "Server/data/schema.sql" file into the database. This will
   create a "data" table in the database.
4. Change the settings in the "Server/data/database.php" file to access
   the database (server, username, password).

Other Links
-----------

- The sample data generated in this example comes from
  "http://www.generatedata.com/":http://www.generatedata.com/.
- "cfpropertylist in Ruby":http://rubyforge.org/projects/cfpropertylist/
  Read, manipulate and write both binary and XML property lists as
  defined by Apple.
- "PyYAML":http://pyyaml.org/ - PyYAML.org - the home of various YAML
  implementations for Python.
- "plistlib":http://docs.python.org/dev/library/plistlib.html - Generate
  and parse Mac OS X .plist files from Python.
- "XML Benchmarks - libxml2
  sax":http://dotnot.org/blog/archives/2008/02/23/xml-benchmarks-libxml2-sax/
- "Using the SAX Interface of
  LibXML":http://www.jamesh.id.au/articles/libxml-sax/libxml-sax.html
- "libxml2 Push
  Parsing":http://bill.dudney.net/roller/objc/entry/libxml2_push_parsing
- "Comparison of data serialization
  formats":http://en.wikipedia.org/wiki/Comparison_of_data_serialization_formats
- "Property list":http://en.wikipedia.org/wiki/Property_list - Wikipedia
  page.
- "Protocol Buffers":http://en.wikipedia.org/wiki/Protocol_Buffers -
  Wikipedia page.
- "Protocol Buffers Developer
  Guide":http://code.google.com/apis/protocolbuffers/docs/overview.html
- "Results of Northwind database rows serialization benchmarks run at
  06/02/2010":http://www.servicestack.net/benchmarks/NorthwindDatabaseRowsSerialization.1000000-times.2010-02-06.html
  Interesting analysis of serialization performance using .NET
  libraries.

License
-------

This project is released with a liberal BSD license. See the LICENSE
file for details.

