[{"Owner":"JohnK","Date":"2015-05-19T10:45:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My mesh is a _t_hexagonal prism_t_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s initial creation places it like this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//lh3.googleusercontent.com/-yejzkks8WuY/VVsQhyHlRpI/AAAAAAAADNs/veZ9PkfjGF0/s334/start.PNG_qt_ alt_eq__qt_start.PNG_qt__gt_ Start_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_rotation of pi/2 about x axis correctly gives_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//lh3.googleusercontent.com/-pBKUGoIqkIg/VVsQhjmq0pI/AAAAAAAADN0/HjK5-t8SB7g/s354/rotationX.PNG_qt_ alt_eq__qt_rotationX.PNG_qt__gt_  Rotate PI/2 about X axis_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now for a rotation of pi/2 about the z axis I would expect_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//lh3.googleusercontent.com/-NmWFstq2nYw/VVsQhnMsNyI/AAAAAAAADNo/OcRDbEZT8BI/s342/Expect.PNG_qt_ alt_eq__qt_Expect.PNG_qt__gt_ Expect rotation of PI/2 about Z to give this_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However I get a rotation about the y axis instead_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//lh3.googleusercontent.com/-uZ2eUmU5GwI/VVsQhZ9cNKI/AAAAAAAADNk/TfQP6iwMHDo/s333/actual.PNG_qt_ alt_eq__qt_actual.PNG_qt__gt_ But get this_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can try is out at the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When Xr is a rotation of pi/2 around the x axis_co_ Yr is a rotation of pi/2 around the y axis and Zr is a rotation around the z axis_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any help on how to apply an arbitrary sequence formed from the rotations Xr_co_ Yr_co_ Zr  and obtain the expected result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-05-19T12:04:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think I understand what is happening - not only does rotation.x rotate the mesh but also rotates the local axes so the local z axis is now vertical so a rotation.z appears as a rotation about the world y axis._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-19T12:05:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In BJS_co_ rotation are appied this order R_lt_em_gt_y_lt_/em_gt__co_ then R_lt_em_gt_x_lt_/em_gt__co_ finally R_lt_em_gt_z_lt_/em_gt_._lt_/p_gt__lt_p_gt_But the _lt_em_gt_x_co_ y_co_ z_lt_/em_gt_ I just wrote here aren_t_t the World X_co_ Y_co_ Z axis_co_ but the mesh local system axis._lt_/p_gt__lt_p_gt_Let_t_s call them u_co_ v_co_ w instead._lt_/p_gt__lt_p_gt_When you create a new mesh u_co_v_co_w are the same than X_co_ Y_co_ Z._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you apply a first y rotation (y is always treated first_co_ whatever the order you code your rotation.x_co_ y_co_ z in your script) _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotation.y _eq_ alpha_sm__lt_/pre_gt__lt_p_gt_you have to imagine the u and w mesh local axis will turn for alpha radians in the xOz plane. The v vector is invariant (v _eq__eq_ Y for now)._lt_/p_gt__lt_p_gt_Let_t_s call u1_co_ v1 (_eq_ v _eq_ Y) and w1 this new rotated axis._lt_/p_gt__lt_p_gt_So your mesh turns on the xOy for alpha radians_co_ right ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ if you_t_ve got in your script some _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotation.x _eq_ phi_sm__lt_/pre_gt__lt_p_gt_this rotation will be now applied to the formerly rotated system_co_ it is to say _lt_strong_gt_u1_co_ v1_co_ w1_lt_/strong_gt_ and not about X_co_ Y_co_ Z._lt_/p_gt__lt_p_gt_This will give a second intermediate system_co_ let_t_s call it _dd_ u2_co_ v2_co_ w2._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you see now what will happen with _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotation.z _eq_ theta_sm__lt_/pre_gt__lt_p_gt_ ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_u2_co_ v2_co_ w2 will be finally rotated to the final mesh orientation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This doesn_t_t help you_co_ I guess _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you want to keep a reference to the original (X_co_ Y_co_ Z) system in order to rotate about one or more of these axis_co_ maybe you should consider the parenting way _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/13916-rotation-question/?p_eq_79415_qt__gt_http_dd_//www.html5gamedevs.com/topic/13916-rotation-question/?p_eq_79415_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-19T12:10:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_that_t_s what I_t_m_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82656_qt__gt_ working on_lt_/a_gt_ _dd_ knowing the initial state and the target state by their coordinates only_co_ deduct Euler angles so the target state will be the initial state after 3 BJS rotations y_co_ x_co_ z_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_note for you _dd_ as DK is really a great vicious_co_ the left-handed BJS system has 2 different orientations (clockwise + counter clockwise) within_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14352-setting-mesh-updatable-property/?p_eq_82830_qt__gt_http_dd_//www.html5gamedevs.com/topic/14352-setting-mesh-updatable-property/?p_eq_82830_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-05-20T11:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Seem to have solved the problem using quaternion rotation (at least for the specific case or rotation about X then about Z)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Created this function to rotate anti-clockwise a given position vector p about an axis through and angle_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function rotateParoundAxis(p_co_ axis_co_ angle) { //p is position (Vector3) to rotate clockwise about axis (Vector3) through angle        var _p _eq_ new BABYLON.Quaternion(p.x_co_ p.y_co_ p.z_co_ 0)_sm_  //change p to quaternion for quaternion multiplication        axis.normalize()_sm_ // change axis to unit vector                var q _eq_ BABYLON.Quaternion.RotationAxis(axis_co_angle)_sm_  //form quaternion rotation                var qinv _eq_ BABYLON.Quaternion.Inverse(q)_sm_            var _pdash _eq_ q.multiply(_p).multiply(qinv)_sm_        _pdash _eq_ new BABYLON.Vector3(_pdash.x_co_ _pdash.y_co_ _pdash.z)_sm_ //change to Vector 3 to return a new position vector_sm_        return _pdash_sm_     }_lt_/pre_gt__lt_p_gt_I have not yet given it any testing so use with a great deal of caution._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can try it on the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ%236_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-20T11:33:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About your PG_co_ your algo is _dd__lt_/p_gt__lt_ul_gt__lt_li_gt_create a mesh_lt_/li_gt__lt_li_gt_get its vertex positions_lt_/li_gt__lt_li_gt_compute new rotated positions (nice quaternion_co_ btw)_lt_/li_gt__lt_li_gt_update the mesh positions_lt_/li_gt__lt_/ul_gt__lt_p_gt_Well_co_ this works._lt_/p_gt__lt_p_gt_But this doesn_t_t really rotate the mesh in the World. It rather redefines the shape of the initial mesh in its local space._lt_/p_gt__lt_p_gt_No rotation (in the meaning of transformation from local to world sytem) is applied here._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-05-20T13:09:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What I needed was a World with X_co_ Y_co_ Z axes and a mesh with local system axes u_co_ v_co_ w where on creation of the mesh  u_co_v_co_w are the same as X_co_ Y_co_ Z._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I needed to translate the mesh and its local system axes which I could do using mesh.position. Also whatever its position I then needed to rotate the mesh not in the World but within its own local system axes but without rotating the local system axes. So I needed translation and rotation to behave differently_co_ translation to transform the local system axes but rotation should not transform the local system axes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My thinking is like this - When a child is building a structure with blocks they will carry the block to the correct World position but then will rotate it locally to fit._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Initially I had not realised that mesh.position translated the local system axes with the mesh so I had lines in the code to translate the the mesh back to the origin before rotation and then translate it back. These lines of code I edited out but left behind a comment related to this. If you had seen this code or read the comment it could have confused you to my intentions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway it does what I want so I am happy and enjoy our discussions and your contribution really move me forward.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-20T13:32:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I understand what you want to achieve. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_However_co_ you create a mesh here with its _lt_em_gt_updatable_lt_/em_gt_ parameter set to true._lt_/p_gt__lt_p_gt_This means you change the mesh vertices themselves. In your case_co_ you_t_ve done a rotation in its local sytem._lt_/p_gt__lt_p_gt_But you could have done the same way another weirder transformation like morphing the cylinder into a pyramid or a sphere ..._lt_/p_gt__lt_p_gt_We can do whatever we want with _lt_em_gt_updateVertices()_lt_/em_gt_ _dd_ to change the vertex positions_co_ the faces themselves_co_ the normals_co_ etc. In brief_co_ to change the mesh itself to another mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this case_co_ we don_t_t just give to the child only a simple mesh... we give him some modeling clay _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In you want to keep your mesh _lt_em_gt_un-updatable_lt_/em_gt_ (is this english ?)_co_ we can set the _lt_em_gt_updatable_lt_/em_gt_ parameter to false (default value) and then only play with rotations which are local to world transformation._lt_/p_gt__lt_p_gt_If you want to keep a reference to the world axis when rotating your mesh_co_ I guess you probably should embbed it into two higher level parents (boxes) and give rotations to parents like in a gimbal._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-05-20T13:44:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Will have a look at this parenting thing._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-20T13:54:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this what you wanted to achieve? _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1VGDNJ#7_lt_/a_gt__lt_/p_gt__lt_p_gt_Use the rotate function with the right axis and define the coordinate space you want to rotate the object in._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not sure if updating the mesh_t_s vetices is the right choice here  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ . All he wanted was to rotate the object correctly _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-20T14:56:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_our idol_co_ as usual _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-05-20T17:12:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you RaananW. Believe it or not I had just come across_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotate(BABYLON.Axis.X_co_ Math.PI/8_co_ BABYLON.Space.WORLD)_sm__lt_/pre_gt__lt_p_gt_in the Advanced Tutorial on the Babylon.js Docs site. Do not know how I missed it in the first place._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I right in thinking that you can replace BABYLON.Axis.X  with any unit vector. It seems to work in this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ%239_qt_ rel_eq__qt_external nofollow_qt__gt_example _lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_None unit vectors seem to have a scaling factor as well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jerome was trying to point me away from a method that required updating the mesh but I had found something that gave me exactly what I needed so was happy to use it. Have now changed the code in my project to use_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.rotate(BABYLON.Axis.X_co_ Math.PI/8_co_ BABYLON.Space.WORLD)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-20T18:16:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jerome and Raanan are invaluable members of this community!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-20T19:41:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_83186_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14601_qt_ data-ipsquote-username_eq__qt_JohnK_qt_ data-cite_eq__qt_JohnK_qt_ data-ipsquote-timestamp_eq__qt_1432141943_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I right in thinking that you can replace BABYLON.Axis.X  with any unit vector. It seems to work in this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ%239_qt_ rel_eq__qt_external nofollow_qt__gt_example_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yep_co_ you are right. any unit vector will work. Actually_co_ any vector will work_co_ as it is being normalized before it is being used  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Jerome was trying to point me away from a method that required updating the mesh but I had found something that gave me exactly what I needed so was happy to use it. Have now changed the code in my project to use_lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think Jerome was right_co_ it is also possible to do that with updating the vertices. If your mesh would stay like that _qt_forever_qt__co_ it might be a smart move! I just think that in this case_co_ a simple rotation would do. We sometimes forget that the simplest solution is right in front of us  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ . happens to me at least 4 times a day _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-21T02:51:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_83186_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14601_qt_ data-ipsquote-username_eq__qt_JohnK_qt_ data-cite_eq__qt_JohnK_qt_ data-ipsquote-timestamp_eq__qt_1432141943_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Am I right in thinking that you can replace BABYLON.Axis.X  with any unit vector. It seems to work in this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1VGDNJ%239_qt_ rel_eq__qt_external nofollow_qt__gt_example_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You may have noticed already_co_ but behind the scenes _qt_mesh.rotate_qt_ is just doing a quaternion rotation around whatever axis you provide_co_ so it_t_s similar to doing your own quaternion rotations and you get all the same benefits._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But remember that it will also zero out your mesh.rotation.x/y/z properties - once you do a quaternion rotation on a mesh_co_ Babylon ignores the Euler rotations and assumes you_t_ll keep using quaternions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]