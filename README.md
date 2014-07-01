MS-Office-WebDAV-Links
======================

MS Office WebDAV Links jQuery plug-in by exensio http://www.exensio.de


This plug-in could be used to generate Hyper-Links to WebDAV resources.
 - If a MS-Office installation is available on the client machine, the referenced resources will be opened with MS Office
 - All links will be hidden if no Office installation is available


##Tested with:
 - Windows XP WITHOUT Office installation (all links will be hidden), IE 8
 - Windows 7 mit Office 2010, Chrome, IE 10
 - Windows 8 mit Office 2013, Chrome
 - OX mit MS Office for Mac, Safari


##Usage example-1:

$('.my-office-link-class').officeLinks();


##Usage example-2, call with options (unused):

$('.my-office-link-class').officeLinks({
        createWinFirefoxPlugin: false
});


##License
MIT License. See LICENSE.

©2014 [exensio GmbH](http://www.exensio.de)
