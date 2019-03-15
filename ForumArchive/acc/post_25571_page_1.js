[{"Owner":"Fuentes","Date":"2016-10-03T20:55:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need to implement a bezel compensation mechanism_co_ but i dont know where to start.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have four screens acting like a big one. I don_t_t have the option to use bezel compensation at driver level_co_ so i need to figure it out how to make it at software.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy first thought was use some kind of BABYLON.Viewport tranformation but the documentation of this class is very scarce.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny hint for accomplish this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany thanks in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-06T13:37:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Fuentes!  No replies yet_co_ huh?  Sorry.  Have you had any luck_co_ yet?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a quick look at this thing_dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#13TVWJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#13TVWJ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s only 3 viewports (actually 5 because the blue divider lines are cameras/viewports_co_ too)... but I think you can see how it could easily be 4 main viewports.  Feel free to change it into 4 main viewports_co_ and hit save as often as you like.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis uses no _qt_rigs_qt_ for the cameras_co_ but you might want to create a 4-camera _qt_rig_qt_.  Essentially_co_ it would be 4 cameras... attached (parented) to a single pan/tilt/zoom _qt_gizmo_qt_.  Babylon already uses a 2-camera _qt_rig_qt_ for all its stereoscopic cameras_co_ and there_t_s really no reason that we couldn_t_t make a custom 4-camera rig.  For testing_co_ though_co_ I think 4 cameras... parented to a central invisible _qt_gizmo_qt_... would also work.  Hooking a mouse to that gizmo so it acts like a camera... that_t_s another challenge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen convert my tri-viewport playground above... into a _qt_quad-viewport_qt__co_ and feed the 4 primary cameras into the 4 different viewports.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow let_t_s talk about the blue divider lines.  You_t_ll see the narrow width of the vertical divider... in line 33.  Very narrow.  You_t_ll see the low height of horizontal divider... in line 44.  Very short.  They need not be blue or even visible.  Those blues lines are also cameras and viewports... aiming at a lit blue plane far away from the scene (lines 70-78).  Add line 79... blueplane.setEnabled(false)_sm_  ...and they disappear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main point... is that the height and width of these divider lines... can be set very precisely.  That is what you need for between-monitor bezel width/height compensation_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m certainly no expert in ANY of these things_co_ but perhaps these are the tools to give you hope_co_ at least.  I don_t_t think you will need a camera _qt_rig_qt__co_ but _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/23889-webvrfreecamera-looks-flat/_qt_ rel_eq__qt__qt__gt_here_lt_/a_gt_ is an interesting conversation that included SOME _qt_rig_qt_ talk.  Also_co_ visit _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.stereoscopicCameras.js#L108_qt_ rel_eq__qt_external nofollow_qt__gt_this section of the BJS source_lt_/a_gt__co_ and you can get a _qt_taste_qt_ of _lt_em_gt_rig modes_lt_/em_gt_.  Again_co_ you might not need a _qt_rig_qt_... because you can parent 4 cameras to a single invisible mesh parent-gizmo_co_ and then rotate/translate the gizmo itself as if it were a camera... and all 4 child cameras should move as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you wish to advance this_co_ you COULD change my tri-view into quad-view_co_ and then maybe try parenting all 4 main cameras to a gizmo_co_ or maybe try parenting camera 2_co_ 3_co_ and 4... to camera 1.  Take careful note of lines 20-24 in my tri-view demo... using scene.activeCamera_lt_u_gt__lt_strong_gt_s_lt_/strong_gt__lt_/u_gt__co_ and notice line 63 .activeCamera (with no _t_s_t_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen dealing with viewport positioning_co_ 0_co_0 is in lower left_co_ and 1_co_1 is in upper right.  You sort of _qt_stack_qt_ them from the bottom... upwards.  Viewport #5 is the bottom-most viewport_co_ but it COULD be named viewport #1_co_ because it is the first in the stack-o-viewports. In lines 46 and 47_co_ you can see viewport 5 _qt_begins_qt_ very close to bottom left corner.  When I first built this tri-view_co_ I was lost for many days... trying to get my viewport layout working correctly... because I was thinking like CSS... where everything starts at the upper left.   But viewport layouts are like textures... which start with 0_co_0 in the LOWER left.  _lt_span_gt_Dad72 rescued me on that one.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso notice lines 64-66... which _qt_gangs_qt_ the cameras together.  This is _lt_u_gt_sort-of like_lt_/u_gt_ parenting to a gizmo_co_ but different.  I don_t_t think you need all 4 cameras to pan_co_ tilt_co_ and translate the same as each other... but instead... pan_co_ tilt and zoom as if they were a single 4-lens camera.  So_co_ I think you will still need to use parenting_co_ and NOT scene.attachControl for all cameras.  In fact_co_ you might have NO cameras _t_attached_t_ for your situation.  What will be attachedControl for YOUR scene... is the central gizmo that 4 cameras are parented-to.  Not sure how to do that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure others will have comments soon_co_ and maybe better ideas.  But all in all_co_ I think... what you wish-for... IS possible.  We_t_ll talk more. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Klaas","Date":"2016-10-06T22:17:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Fuentes!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had that exact same Probleme some time ago with 2 screens. I solved it with a Video-Post-Process.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst i expandet the render-canvas in html about the amount the bezel takes. Then i made a post-process as follows_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_#ifdef GL_ES\nprecision highp float_sm_\n#endif\n\n// Samplers\nvarying vec2 vUV_sm_\nuniform sampler2D textureSampler_sm_\n\n// Parameters\nuniform float bezelFactor_sm_\n\nvoid main(void) \n{\n\tvec2 nUV _eq_ vUV_sm_\n\t\n\tif( vUV.x &lt_sm_ 0.5 ){\n\t\tnUV.x -_eq_ bezelFactor_sm_\n\t}else{\n\t\tnUV.x +_eq_ bezelFactor_sm_\n\t}\n\t\n\tgl_FragColor _eq_ texture2D(textureSampler_co_ nUV)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthe bezelFactor is the percentual (0 to 1) gap of the bezel. If the screen is 1 meter and the gap is 10cm your factor would be 10% or 0.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThir is not a very universal approach but it served my needs.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]