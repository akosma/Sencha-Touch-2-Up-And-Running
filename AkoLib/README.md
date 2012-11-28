AkoLib
======

This folder contains classes reused throughout the code samples.

Installation
------------

To use these classes, add this code on top of your `app.js` file:

    Ext.Loader.setConfig({
        paths: {
            'AkoLib': '../AkoLib'
        }
    });

This gives you access to the following classes:

- `AkoLib.view.SplitView` (xcode: `splitview`) which provides a Sencha
  Touch component that behaves similarly to the `UISplitViewController`
  class in iOS.
- `AkoLib.model.Item` represents an individual entry in a demo screen,
  which contains a `text` parameter (displayed to the user) and a
  `screen` parameter that is treated as the `xtype` of the corresponding
  component.

The file in the `AkoLib/scripts/scroll.js` enables mouse scrolling in
Sencha Touch templates, which simplifies the development of
applications. Do not use this file in production builds!

