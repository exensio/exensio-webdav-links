MS-Office-WebDAV-Links
======================

MS Office WebDAV Links jQuery plug-in by exensio http://www.exensio.de


This plug-in could be used to:
 - detect the availability of MS-Office installation on client machine (where the web browser is installed)
 - generate Browser-Links to open MS-Office resources hosted on WebDAV Server
 - If a MS-Office installation is available on the client machine, the referenced resources will be opened with MS-Office via WebDAV protocol
 - All links will be hidden if no MS-Office is installed


##Tested with:
 - Windows XP WITHOUT Office installation (all links will be hidden), IE 8
 - Windows 7 with Office 2010, Chrome, IE 10
 - Windows 8 with Office 2013, Chrome
 - OS X 10.9 with Office for Mac 2011, Safari 7


##Usage example-1:
```html
<a class="my-office-link-class" href="my-webdav-url">
   Click to open WebDAV Resource with your local MS Office Program
</a>
```

```javascript
$('.my-office-link-class').officeLinks();
```


##Usage example-2, call with options:

```javascript
$('.my-office-link-class').officeLinks({
    createWinFirefoxPlugin: false
});
```


##License
MIT License. See LICENSE

©2014 [exensio GmbH](http://www.exensio.de)
