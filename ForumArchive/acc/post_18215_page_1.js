[{"Owner":"jacquesr","Date":"2015-10-28T11:53:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m writing an app that essentially only needs to render when the user does something._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are a few edge cases that cause one-time animations_co_ all other stuff is a one time render situation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The main reason to avoid the render loop is that there is nothing generally going on that requires visual updates so we can save a lot of resources by not rendering all the time_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I currently try to handle the render loop the following way_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Some consumer code calls a render on my babylon js wrapper object that handles everything_lt_/p_gt__lt_p_gt_In this moment_co_ a pendingFrames variable is increased (default 0) and startRenderLoop is called with a callback doing nothing apart from scene.render()_lt_br_gt__lt_br_gt_In onAfterRender_co_ I look for further pending frames ( pendingFrames &gt_sm_ 0). If there is nothing_co_ I call stopRenderLoop._lt_br_gt__lt_br_gt_For animations_co_ there is a similar approach_co_ with the difference that the pendingAnimations variable is increased whenever an animation starts and decreased in every end animation callback._lt_br_gt__lt_br_gt_So_co_ let_t_s take away the animation case._lt_br_gt__lt_br_gt_I have a mouse move interaction that calls my render call on my wrapper object. It increases the pendingFrames by one every time. This is my first problem_co_ because there is no 1_dd_1 relation between mouse move and rendering_co_ so I can increase more render calls than I actually need._lt_br_gt__lt_br_gt_Before_co_ I did not use _qt_pendingFrames_qt_ but instead had a simple flag that managed to render the scene using scene.render if anyone requested a frame. Then I did not have the relation problem BUT_dd_ positioning changes that were handled in onBeforeRender did not work even though I changed positions on depending meshes before the render call. Upon the next mouse move_co_ without any further change_co_ it then suddenly was correct again. So_co_ that may also have something to do with the timing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the end_co_ my question now is_co_ how do I correctly take full control so that I do not render anything I do not need._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It was also noticable that_co_ against a general render loop_co_ my mouse move based enabling and disabling of rendering was 7 fps slower (against 37) which I currently don_t_t really have an answer for._lt_br_gt__lt_br_gt_EDIT_dd__lt_br_gt__lt_br_gt_I should note that another noticable thing is that the movement is not really smooth when I use my enable/disable render loop logic. The camera movement tends to jump a little. I must do something seriously wrong. Maybe some technical background helps _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-28T18:33:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you are not doing anything wrong _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ and this is pretty smart actually. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The first problem that I can foresee is that you won_t_t have camera movement inertia with your system because this requires several rendering to achieve it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One idea here_dd_ Your stop condition should be_dd_ no pending frames AND no running animations (ie_dd_ scene.._activeAnimatables.length _eq__eq__eq_ 0) AND camera.cameraDirection _eq__eq__eq_ Vec3(0) AND camera.cameraRotation _eq__eq__eq_ 0 as well_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2015-10-29T07:38:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Deltakosh_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_we have set the inertia to 0.1 because we also did not want that and we are aware of that problem. Well_co_ inertia 0.1 is not 0 but I learned that babylon _qt_does not like zero values_qt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try improving the check in the renderloop management._lt_br_gt__lt_br_gt_Anyway_co_ do you have an idea why my manual start/stop costs me 7 fps? 30 to 37 (when we once start the renderloop and let it run)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I first thought it might be the mousemove_co_ but I guess that mouse move interrupts are a lot more often than 60 fps (at least in theory without logic inside) in the end..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I tend to think that it is due to the binding and unbinding of the renderloop callback or the general approach with initializing and deinitializing a renderloop. I guess that internally_co_ you are working on requestAnimationFrame_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-29T15:44:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How do you measure the FPS?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2015-10-29T16:09:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_with your debug overlay that_t_s also available in the playground... I just continuously move the mouse in my manual rendering then_co_ of course_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-29T16:38:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok this is why...there is TOO much time between two calls when you move the mouse. requestAnimationFrame runs 60 times per second _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_so the FPS you_t_ve got are wrong_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2015-11-06T09:23:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve got some 3D snapping and collision logic in my mousemove but it_t_s hard to believe that it needs 32ms per move... Will check it out_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2016-03-16T16:09:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recently added the changes you suggested. Running on babylon 2.3.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (sceneObjects.pendingAnimationCount &gt_sm_ 0 || \n                        sceneObjects.pendingFrames &gt_sm_ 0 ||\n                        sceneObjects.forceKeepRendering ||\n                        cam.cameraDirection.x !_eq__eq_ 0 || cam.cameraDirection.y !_eq__eq_ 0 || cam.cameraDirection.z !_eq__eq_ 0 ||\n                        cam.cameraRotation.x !_eq__eq_ 0 || \n                        cam.cameraRotation.y !_eq__eq_ 0)\n                    {}\n                    else\n                        this.stopRenderLoop()_sm_ \n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tyet_co_ that doesn_t_t work since cameradirection/rotation seems to be always 0... I have an arcrotatecamera here\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-16T22:50:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tin this case check for camera.alpha and beta\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-06-12T10:22:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaking the renderer stop rendering when there is nothing to do - this is something I would like to implement as well. Do you have any PG for this? I cannot find any full example above. Thanks lot!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-12T11:11:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27093-hanesu/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27093_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27093-hanesu/_qt_ rel_eq__qt__qt__gt_@Hanesu_lt_/a_gt_ _lt_br /_gt_\n\tHere_t_s an example with rendering while the pointer is being pressed and stopping again when it is released.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#3A2PUF%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#3A2PUF#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-06-20T15:05:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you_co_ this is a nice and simple example_co_ but the functionality I a bit limited. How could I extend it to render as long as the camera or some object is moving?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-06-20T17:37:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179021_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497971108_qt_ data-ipsquote-userid_eq__qt_27093_qt_ data-ipsquote-username_eq__qt_Hanesu_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Hanesu said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow could I extend it to render as long as ..... some object is moving?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMmmmmmmmmmmmmm what is going to start the object moving? I know I will set a random time T milliseconds after which the object will move. Mmmmmmmm how will I know T milliseconds have passed? I know I will write a routine that that runs once every sixtieth of a second and see if the time has passed yet? Mmmmmmmmmm! No I wont I will just use _lt_strong_gt_new BABYLON.Animation_lt_/strong_gt_ and leave the rendering alone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMmmmoral is I better have a very good reason to want to stop rendering else I am just going to give myself a lot of work for no good reason! _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it really matter that if nothing is going on then the BabylonJS engine is rendering the same screen upto 60 times a second?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-06-21T01:57:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179062_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497980260_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMmmmoral is I better have a very good reason to want to stop rendering else I am just going to give myself a lot of work for no good reason! _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDoes it really matter that if nothing is going on then the BabylonJS engine is rendering the same screen upto 60 times a second?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere is a very good reason why I want to stop rendering if there is nothing new to render_dd_ I have complicated meshes (scientific data) to visualize with millions of triangles. If they are re-rendered 60 times a second_co_ the cpu load goes up to 100%_co_ my laptop gets freaking loud_co_ crazy hot_co_ and runs out of battery after one hour!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I have means to stop rendering_co_ like for example with the simple solution by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ above_co_ the cpu load goes down below 5%_co_ my laptop is quiet_co_ keeps cool_co_ and runs for eight hours on battery!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-06-21T10:05:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179102_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498010258_qt_ data-ipsquote-userid_eq__qt_27093_qt_ data-ipsquote-username_eq__qt_Hanesu_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Hanesu said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThere is a very good reason why I want to stop rendering if there is nothing new to render_dd_ I have complicated meshes (scientific data) to visualize with millions of triangles. If they are re-rendered 60 times a second_co_ the cpu load goes up to 100%_co_ my laptop gets freaking loud_co_ crazy hot_co_ and runs out of battery after one hour!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf I have means to stop rendering_co_ like for example with the simple solution by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ above_co_ the cpu load goes down below 5%_co_ my laptop is quiet_co_ keeps cool_co_ and runs for eight hours on battery!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat is a very good reason and that will start the rendering if the user moves the pointer and so moves the camera. However you then said\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179021_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497971108_qt_ data-ipsquote-userid_eq__qt_27093_qt_ data-ipsquote-username_eq__qt_Hanesu_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ Hanesu said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThank you_co_ this is a nice and simple example_co_ but the functionality I a bit limited.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tand asked to extend this\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179021_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497971108_qt_ data-ipsquote-userid_eq__qt_27093_qt_ data-ipsquote-username_eq__qt_Hanesu_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ Hanesu said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tto render as long as .... some object is moving\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe question then becomes what event starts and stops the object moving. If it is an external event such as a key press or pointer move then capturing that event works in the same way as aWeirdo showed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe following PG will also render when the key g is pressed and stop when s is pressed. NOTE click on scene before pressing key so scene has focus.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#3A2PUF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#3A2PUF#3._lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it is a timed event then use setTimeout _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#3A2PUF%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#3A2PUF#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-06-24T03:13:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the examples_co_ very helpful. I will check out the actionManager stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne thing that still bothers me is when I zoom with the arcRotateCamera through mouse scroll. When I scroll the mouse wheel nothing happens (of course_co_ because the mouse button is not pressed). Then_co_ when I press the mouse button_co_ the scrolling motion happens_co_ it is somehow remembered and the action is delayed. This behavior is not useful_co_ so one way around it would be an _qt_onScroll_qt_ event analogous to the _qt_onPointerDown_qt__co_ but this event does not seem to exist. That is why I thought it would be simpler and more general to check for motions in the camera_co_ like camera.alpha/beta/radius changes. How could I check for changes in those parameters and only render in case of change?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-06-24T07:37:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs far as I know you can only rotate or move the camera when you have a pointer or key down and aWeirdo_t_s method will detect this. As far as scrolling goes then I think any zoom is a browser zoom not a BJS zoom and so there is no change of radius.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIMHO without rendering and using scene.registerAfterRender you could only check for an camera.alpha  change using setInterval to check every few milliseconds if oldAlpha was currentAlpha but alpha will only change if you are are moving the mouse with pointerdown so back to above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn alternative would be to use BABYLON.GUI and change alpha_co_ beta and radius values on the click of a button_co_ but then as you are clicking the button this event is captured and you can then switch rendering on during the onclick function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have other ways of checking for alpha_co_ beta and radius values let us know.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-06-26T10:58:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe inputs to arc rotate camera don_t_t modify the alpha/beta/radius directly_co_ but rather modifies inertialAlphaOffset_co_ inertialBetaOffset and inertialRadiusOffset_co_ which in turn sets the alpha_co_ beta and radius of the camera (adds the offset_co_ then multiplies the offset by inertia_co_ repeat until the offset is ~0_co_ see _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L299_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you just want to make sure movement hasn_t_t been buffered while the render is stopped_co_ you can just set these offset to 0 before the render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AFPV4K%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AFPV4K#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you just want to allow rendering while the camera is moving_co_ you can however just use a render loop that checks if these values are not 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AFPV4K%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AFPV4K#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_/span_gt_ When inertia is set to 0 in the above pg_co_ the movement seems to be a frame behind (if zoom in then out_co_ the first frame after the zoom out scroll wheel tick will zoom in). Something to do with render order? Also if you zoom_co_ then just click move to rotate normally_co_ it will do the final zoom on that render.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-26T18:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep it is related. Is it an issue?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-06-26T19:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot really_co_ was just curious why this seemed to only happen with an inertia of 0.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-07-01T04:54:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179478_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498289822_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/24/2017 at 4_dd_37 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAs far as I know you can only rotate or move the camera when you have a pointer or key down and aWeirdo_t_s method will detect this. As far as scrolling goes then I think any zoom is a browser zoom not a BJS zoom and so there is no change of radius.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBy monitoring camera.radius you immediately see that scrolling directly changes the radius.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hanesu","Date":"2017-07-01T04:58:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_179625_qt_ data-ipsquote-contentid_eq__qt_18215_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498474719_qt_ data-ipsquote-userid_eq__qt_24742_qt_ data-ipsquote-username_eq__qt_sable_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/26/2017 at 7_dd_58 PM_co_ sable said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe inputs to arc rotate camera don_t_t modify the alpha/beta/radius directly_co_ but rather modifies inertialAlphaOffset_co_ inertialBetaOffset and inertialRadiusOffset_co_ which in turn sets the alpha_co_ beta and radius of the camera (adds the offset_co_ then multiplies the offset by inertia_co_ repeat until the offset is ~0_co_ see _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L299_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you just want to make sure movement hasn_t_t been buffered while the render is stopped_co_ you can just set these offset to 0 before the render.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AFPV4K%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AFPV4K#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you just want to allow rendering while the camera is moving_co_ you can however just use a render loop that checks if these values are not 0.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AFPV4K%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AFPV4K#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s it_co_ the second PG does exactly what I need. Thank you so much_co_ you made my week! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]