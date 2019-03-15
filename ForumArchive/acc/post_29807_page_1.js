[{"Owner":"mangomongo","Date":"2017-04-17T04:37:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a wire frame sphere with some markers on its surface_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q3WWIK_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q3WWIK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can use the left and right arrow keys to rotate around the y-axis. And you can use the up and down arrow keys to rotate around the x-axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you rotate with the left and right arrow keys each marker always stays on a plane that is parallel to the bottom of the screen_co_ no matter what the x-axis rotation is that you may have altered with the up and down arrows.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when you rotate with the up and down arrow keys the markers don_t_t always rotate on a plane that is parallel to the side of the screen. If you use the up and down arrow keys at the very beginning then it will work like I want it to. But if you use the left and right arrow keys a little bit and then rotate with up and down_co_ the up and down rotation will then start to go sideways.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I always have the up and down arrow keys rotate the sphere like they do at the beginning of the scene? In other words how can I make it so that when using the up and down arrow keys_co_ the markers on the sphere always rotate on a plane that is parallel to the side of the screen?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-04-17T09:29:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q3WWIK%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q3WWIK#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could rotate around the X-axis in World space?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Y-axis rotation will still have to be in Local pace_co_ though_co_ otherwise you_t_ll face the same issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about the rotation_co_ when you are facing the poles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ and if you rotate the sphere 180 degrees_co_ the keys and the rotation will be reversed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mangomongo","Date":"2017-04-28T22:06:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey thanks. It looks like you fixed it for the up and down arrow keys but now the left and right arrow keys have the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it not possible to fix both at the same time?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-30T14:06:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26591-mangomongo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26591_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26591-mangomongo/_qt_ rel_eq__qt__qt__gt_@mangomongo_lt_/a_gt__co_ good to meet you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q3WWIK%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q3WWIK#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes that look better?  I simply used code lines that were similar to Raggar_t_s line_t_s 74 &amp_sm_ 78... in lines 65 &amp_sm_ 69.  I used Axis.Y instead-of Axis.X.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen using THIS kind of rotating... I_t_m quite sure we are utilizing ball.rotationQuaternion instead-of the Euler-based ball.rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThus... IF you DO need to GET the ball_t_s rotation values_co_ ball.rotation might not have anything useful stored there. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead_co_ you can use ball.rotationQuaternion.toEulerAngles() to get/read Euler values (vector3-type values) from the ball.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso something to know_dd_  .rotationQuaternion does NOT EXIST by default.  It is added to mesh... automatically_co_ by the framework_co_ when needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q3WWIK%234_qt_ rel_eq__qt_external nofollow_qt__gt_this #4 version of your test playground_lt_/a_gt__co_ please.  Watch the JS console.  Early in your code- at line 14_co_ I print ball.rotationQuaternion to console.  It says _qt_undefined_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFurther down at line 62_co_ after a _qt_rotate_qt_ command (onKeyUp)_co_ I do it again.  NOW it has good numbers.  The framework added the ball.rotationQuaternion property... after it saw that you/Raggar/I were using ball.rotate(blah blah blah)_sm_  That is a Quaternion-based rotate command... so the framework added the the property FOR us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe same automatic rotationQuaternion adding... happens when a mesh becomes physics-active_co_ because 3rd-party physics engines such as OimoJS and CannonJS... LOVE using Quaternions.  Using Quaternions... avoids an issue called _qt_gimbal lock_qt__co_ and this is why spacecraft use Quaternions_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuaternions have 4 values.  They are a bit difficult to understand for those who don_t_t have a Quaternion gene in their DNA.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSomeone once described them to me as... 3 values to aim an arrow in some direction_co_ and another value to set the amount of mesh rotation... around that arrow shaft.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]