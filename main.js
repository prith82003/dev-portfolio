const videos = document.querySelectorAll('video');
for (const video of videos) {
    video.addEventListener('click', function () {
        video.classList.toggle('project-video--enlarged');
        // if (video.classList.contains('full-screen-video')) {
        //     video.classList.remove('full-screen-video');
        // } else {
        //     video.classList.add('full-screen-video');
        // }
    });
}