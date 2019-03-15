[{"Owner":"dbawel","Date":"2016-07-18T00:38:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Babylonians_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just spent the past couple of weeks working on video sync between multiple users and devices_co_ and couldn_t_t get sync working reliably from the server to all devices. And more specifically_co_ I was unknowingly wasting valuable time troubleshooting why I wasn_t_t able to sync video on Android_co_ unless play and pause was initiated from the Android device. Yet I was able to consistantly sync video 100% on every other device_co_ OS_co_ and browser for multiple users based upon other conditions. I searched the forum and also spent considerable time on Google and other search engines researching this_co_ yet found very little reference to this as well as no answers to the problem. Thus_co_ I assumed it was a problem in my server code since this is not a very simple task by any means. However_co_ this was not the case_co_ as it turns out to be a bug on Android using various browsers - and specifically Chrome on Android - but not limited to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue is that when I sync video between multiple users_co_ I_t_m calling the video DOM and aquiring current time and sending this to all other users on every other device_co_ OS_co_ etc. And for the most part this was working on all devices except Android. So I_t_m writing this post so that the community should know that currently - and for quite some time now - querrying the current time for any HTML video object such as a videoTexture returns a time value _eq_ 0.0 on Android (using Chrome and other browsers). I didn_t_t keep track of all of my testing_co_ as I thought my server code was the issue. However_co_ what I discovered is that for several years now_co_ Chrome and other browsers on Android return the current time of any HTML video at the time value of 0 when this.video.currentTime() is called. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo out of frustration and past a deadline_co_ I somehow decided to test FireFox on Android (as I was debugging my server code for the 100th time)_co_ and FF returned the correct currentTime() when I querried the DOM video property. So I_t_m quite frustrated_co_ but happy to report that I_t_m now able to sync video between any device and any number of users providing I am using Fire Fox on my Android devices. So if anyone on the forum has issues with video on Android_co_ first uninstall Chrome_co_ as I found this has never worked on Android - EVER - according to posts I found from more than 2 years ago. And I often find far more bugs in Chrome on Android than any other OS (hey_co_ isn_t_t it the same manufacturer for both?_lt_img alt_eq__qt__dd_angry_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_angry.png_qt_ title_eq__qt__dd_angry_dd__qt_ /_gt_)  And Google doesn_t_t seem to view this as a priority since this has been reported since early Droid versions. I_t_ll file a report as well_co_ but I_t_m not holding my breath.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I_t_m now able to control the play and pause functions - including autoplay and pause on Android where I was never able to get this working in the past. Again_co_ simply avoid Chrome on Android_co_ and I_t_ll try and find time to test other browsers as this is not only a Chrome issue. All I can tell you right now is that Fire Fox HTML video DOM querries and HTML video functions work fine on Android.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd to imagine I had thought Google was the most responsive company for developer support. Obviously I was wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]