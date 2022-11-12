const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //You can capture live screen contents
        //We are waiting for the user to choose which screen he wants to share. (code above)
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>   //onloadedmetadata becomes true when it's loaded
        {                                       // () => the bracket is the same thing as writing function()
            videoElement.play();
            //When the media is loaded, it will play            
        }                                                
    } catch (error) {
        console.log('async function selectMediaStream failing =( ', error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button  //if the await videoElement.requestPictureIn.. doesn't complete. button will remain disabled.
    button.disabled = false;
});
//ON Load
selectMediaStream();

/*Notes
https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/19357224#reviews

f. getting the getElementById. Video, and button
    async function
    //You can capture live screen contents navigator.mediaDevices.getDisplayMedia();
g. removing the hidden attribute in the video

h?. button.addEventListener('click', async () => {...
    //Reset Button  //if the await videoElement.requestPictureIn.. doesn't complete. button will remain disabled.
i. add the hidden attribute in the video in html

        Side note: None of the errors are being picked up... NEED to solve that eventually...

https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20746966#reviews
https://github.com/tc39/proposals
Coolshit. If you paste this in the browser console, you can stream! const mediaStream = await navigator.mediaDevices.getDisplayMedia(); this in the 

*/