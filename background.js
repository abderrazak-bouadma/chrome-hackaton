/**
 * Created with JetBrains WebStorm.
 * User: abderrazak
 * Date: 5/23/13
 * Time: 7:42 PM
 * To change this template use File | Settings | File Templates.
 */
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 800,
            'height': 600
        }
    });
});