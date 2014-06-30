/**
 *
 * MS Office Links jQuery plug-in by exensio
 *
 * This plug-in could be used to generate Hyper-Links to WebDAV resources.
 * If a MS-Office installation is available on the client machine, the referenced resources
 * will be opened with MS Office
 *
 * Tested with:
 * - Windows XP without Office installation(all links will be hidden), IE 8
 * - Windows 7 mit Office 2010, Chrome, IE 10
 * - Windows 8 mit Office 2013, Chrome
 * - OX mit MS Office for Mac, Safari
 *
 * Usage example-1:
 *
 * $('.my-office-link-class').officeLinks();
 *
 * Usage example-2, call with options (unused):
 *
 * $('.my-office-link-class').officeLinks({
        createWinFirefoxPlugin: false
    });
 *
 * http://www.exensio.de
 * 03.2014 xuetao
 *
 **/

(function($) {

    $.fn.officelinks = function( options ) {

        // options.
        $.fn.officelinks.settings = $.extend( {}, $.fn.officelinks.defaults, options );


        // Go through the matched elements and return the jQuery object.
        return this.each( function() {

            var $currentLinkElem    = $(this);

            // test if not ie browser
            if ($.fn.officelinks.settings.createWinFirefoxPlugin && !navigator.userAgent.match(/Trident\/7\./)){
                createFireFoxWinPluginObject();
            }

            // Check if MS office is installed on the client machine
            if( isOfficeInstalled() ) {
                $currentLinkElem.click(function(){
                    return editDocWithOffice($currentLinkElem.attr('href'));
                });
            }
            // Should not display office-links links, if office is not available
            else {
                $currentLinkElem.hide();
            }

        });
    };
    // Public defaults and settings.
    $.fn.officelinks.defaults = {
        createWinFirefoxPlugin: true
    };
    $.fn.officelinks.settings = { };

    // Check if MS office is installed on the client machine
    var isOfficeInstalled = function() {
        try {
            new ActiveXObject("SharePoint.OpenDocuments.3");
            return true;
        } catch(e) {
            try {
                // We validate the availability of ffWinPlugin object by calling one of it's function 'PromptedOnLastOpen'
                var pluginFunctionCalled = document.getElementById("winFirefoxPlugin").PromptedOnLastOpen();
                return pluginFunctionCalled != null;
            } catch(e2) {
                return false;
            }
        }
    };

    // Edit document with office, browser independent with ActiveXObject / FFWinPlugin
    var editDocWithOffice = function(url) {
        try {
            new ActiveXObject("SharePoint.OpenDocuments.3").EditDocument(url);
            return false;
        } catch(e) {
            try {
                document.getElementById("winFirefoxPlugin").EditDocument(url);
                return false;
            } catch(e2) {
                return true;
            }
        }
    }

    // Create FFWinPlugin object for Chrome, Firefox and Safari:
    // http://msdn.microsoft.com/en-us/library/ff407576.aspx
    var createFireFoxWinPluginObject = function() {
        $('<object/>', {
            'id':'winFirefoxPlugin', 'type':'application/x-sharepoint',
            'width':'0', 'height':'0', 'style':'visibility: hidden;'
        })
            // optional could be set: .on('click', function(){})
            .appendTo('body');
        $.fn.officelinks.settings.createWinFirefoxPlugin = false;
    }

    // Public functions.
    $.fn.officelinks.func = function() {
        return;
    };

})(jQuery);
