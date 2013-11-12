MATE Caja PhantomJS Webkit Thumbnailer, Barney Holmes/DJ Barney 2013

Based on original script example by Stefan Judis - http://4waisenkinder.de/blog/2013/08/09/how-to-make-screenshots-with-phantomjs/

known issues:

* Some file types are marked with the mime type "text/html" but are not strictly web pages. For example the "maff" web page archive. These file types will fail to render at the moment and show a blank white image.

* Some pages fail to render and return a blank image. This could be because these pages are larger and more complex and the script time out kicks in before they are returned. Currently being investigated.

To do:

* Installer - release as Debian package.

* Error checking.

* Speed increases. Needs time out setting (see end of javacript file).

* Could do with time out setting being determined by page size. Some very large pages fail to render.

This thumbnailer makes thumbs of files marked with text/html file type for the MATE Caja file browser - http://mate-desktop.org/ - It follows the freedesktop thumbnailer system that other Window Managers also should follow but compatability is not guarunteed. This is because there is no actual formal standard for thumbnailers - see http://www.freedesktop.org/wiki/#standards - Although the system has become widely accepted. There is "gnome-web-photo" available which is somewhat easier to use being a single executable, but at the present time it is not available for Debian. Anyway, PhantomJS is, I think, more configurable.

Installation

1. Install in "caja-phantomjs-webkit-thumbnailer" in "/usr/local/bin" which should already be in your path. It may be more convenient to install to "~/bin" ("/home/-yourusername-/bin").

2. Make it executable "chmod +x caja-phantomjs-webkit-thumbnailer".

3. Download latest PhantomJS from http://phantomjs.org

4. Extract it to "/home/-yourusername-/bin/phantomjs-1.9.2-linux-i686" or "/usr/local/bin/phantomjs-1.9.2-linux-i686".

5. Copy "make-www-screenshot.js" to the "bin" directory of PhantomJS. 

6. If the version name is different then alter the bash script "caja-phantomjs-webkit-thumbnailer" accordingly.

7. Create a symbolic link named "phantomjs" to the PhantomJS executable in the "bin" directory.

8. Install thumbnailer definition "caja-phantomjs-webkit.thumbnailer" to "~/.local/share/thumbnailers" or system wide in "/usr/share/thumbnailers/".

Directory layout should be ...

djbarney@djbarney-anubis ~/bin
$ ls -lah
total 32K
drwxr-xr-x   3 djbarney djbarney 4.0K Nov 10 23:15 .
drwxr-xr-x 106 djbarney djbarney  12K Nov 10 16:41 ..
-rwxr-xr-x   1 djbarney djbarney 4.3K Nov  5 14:57 blender-thumbnailer.py
-rwxr-xr-x   1 djbarney djbarney  845 Nov 10 23:07 caja-phantomjs-webkit-thumbnailer
lrwxrwxrwx   1 djbarney djbarney   40 Nov  9 14:43 phantomjs -> phantomjs-1.9.2-linux-i686/bin/phantomjs
drwxr-xr-x   4 djbarney djbarney 4.0K Sep  7 07:58 phantomjs-1.9.2-linux-i686

Lastly restart Caja to register the thumbnailer ... "killall caja".

