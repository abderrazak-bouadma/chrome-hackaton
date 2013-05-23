/**
 * Created with JetBrains WebStorm.
 * User: abderrazak
 * Date: 5/23/13
 * Time: 9:18 PM
 * To change this template use File | Settings | File Templates.
 */
function getCamera() {
    navigator.webkitGetUserMedia({audio: true, video: true}, function(stream) {
        document.querySelector('video').src = webkitURL.createObjectURL(stream);
    }, function(e) {
        console.error(e);
    });
}

/**
 * Click handler to init the camera grab
 */
document.querySelector('button').addEventListener('click', function(e) {
    getCamera();
});