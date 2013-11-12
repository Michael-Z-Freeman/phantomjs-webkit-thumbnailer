// MATE Caja PhantomJS Webkit Thumbnailer, Barney Holmes/DJ Barney 2013
//
// Requires PhantomJS. See readme.txt

var system = require( 'system' ),
    webpage = require( 'webpage' ),
    page = webpage.create(),
    url = system.args[ 1 ] || '', // Set default path to generic thumb here ?
    path = system.args[ 2 ] || '', // set a default value if argument was not set
    width = +system.args[ 3 ] || 256, // set a default value if argument was not set
    height = +system.args[ 4 ] || 256; // set a default value if argument was not set

function getFileName(filename) {
    // Converts URI to normal system path (removes URL encoding like "%20".
    // Not used at the moment (currently thumbnailer only for MATE, Gnome uses a URI).
    var filename = decodeURIComponent(url);
    return filename.match(/[^/]+[.][\w]+$/i)[0];
}

page.onError = function ( msg ) {
    system.stderr.writeLine( 'ERROR:' + msg );
};

page.onConsoleMessage = function( msg, lineNum, sourceId ) {
    system.stdout.writeLine( 'CONSOLE: ' + msg, lineNum, sourceId );
};

// Each of the following is set to "width" as thumbnail is always square.

page.viewportSize = {
    height : width,
    width  : width
};

page.clipRect = {
   height : width,
   width  : width
};

page.open( url, function( status ) {
  console.log( 'Opened URL/URI: ' + url + ' ... with NAME: ' + url + ' ... to write thumbnail: ' + path + '... with SIZE=' + width +  ' PAGE OPEN STATUS=' + status );

  window.setTimeout( function() {
    var outputPath = path +
                     '.png';
    console.log( 'Rendering to ' + outputPath );
    page.zoomFactor = 0.25;
    page.render( outputPath );
    phantom.exit();
  }, 500 );
} );


