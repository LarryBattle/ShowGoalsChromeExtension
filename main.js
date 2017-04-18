/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
// # requirements:
// - in google chrome when a new tab is opened on a blank page,
// show the time and a title for the user.
chrome.app.runtime.onLaunched.addListener(function () {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;

  var createWindowOptions = {
    id: "helloWorldID",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth - width) / 2),
      top: Math.round((screenHeight - height) / 2)
    }
  };
  chrome.app.window.create('index.html', createWindowOptions);
});