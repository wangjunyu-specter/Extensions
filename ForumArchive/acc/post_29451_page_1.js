[{"Owner":"ema9","Date":"2017-03-31T18:12:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti am exporting a model with blender but see this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\t  File _qt_/home/emanuel/.config/blender/2.76/scripts/addons/io_export_babylon.py_qt__co_ line 310_co_ in execute_lt_br /_gt_\n\t    self.skeletons.append(Skeleton(object_co_ scene_co_ skeletonId))_lt_br /_gt_\n\t  File _qt_/home/emanuel/.config/blender/2.76/scripts/addons/io_export_babylon.py_qt__co_ line 1415_co_ in __init___lt_br /_gt_\n\t    bone.append_animation_pose(animationRange.frames_out[idx]_co_ firstOrLast)_lt_br /_gt_\n\t  File _qt_/home/emanuel/.config/blender/2.76/scripts/addons/io_export_babylon.py_qt__co_ line 1345_co_ in append_animation_pose_lt_br /_gt_\n\t    currentBoneMatrix _eq_ self.get_bone_matrix(True)_lt_br /_gt_\n\t  File _qt_/home/emanuel/.config/blender/2.76/scripts/addons/io_export_babylon.py_qt__co_ line 1356_co_ in get_bone_matrix_lt_br /_gt_\n\t    return Bone.get_matrix(self.posedBone_co_ self.matrix_world_co_ doParentMult)_lt_br /_gt_\n\t  File _qt_/home/emanuel/.config/blender/2.76/scripts/addons/io_export_babylon.py_qt__co_ line 1363_co_ in get_matrix_lt_br /_gt_\n\t    return (SystemMatrix * matrix_world * bone.parent.matrix).inverted() * (SystemMatrix * matrix_world * bone.matrix)_lt_br /_gt_\n\tERROR_dd_  Matrix.invert(ed)_dd_ matrix does not have an inverse\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyone know what hapenned?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-03-31T19:39:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/_qt_ rel_eq__qt__qt__gt_@ema9_lt_/a_gt_ _dd_ Welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhat version of the Exporter are you using? If it is below 5 - upgrade to the latest version and see what happens.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd can you post your .blend file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ema9","Date":"2017-04-01T17:23:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gryff_co_ thanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyes my version is 4. how can i get version 5?_co_ in github the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py_qt_ style_eq__qt_color_dd_#0366d6_sm__qt_ title_eq__qt_io_export_babylon.py_qt_ rel_eq__qt_external nofollow_qt__gt_io_export_babylon.py_lt_/a_gt_ is version 4.6.1 _dd_(. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-04-01T18:17:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/_qt_ rel_eq__qt__qt__gt_@ema9_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou can download the latest version (5.2) as a zip file _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/Blender2Babylon-5.2.zip_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou dont have to unzip it_co_ just go to the _lt_em_gt_User Preferences panel  -&gt_sm_ Addons -&gt_sm_ Install from File _lt_/em_gt_then point Blender to the zip file you just saved. Blender will take care of it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen click the _lt_em_gt_Save User Settings_lt_/em_gt_ button and activate your new addon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI usually remove old versions of the plugin first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow try saving your Blend again. My guess is you might get a message that looks like this _dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMesh_dd_ Character has unapplied transformations.  This will never work for a mesh with an armature.  Export cancelled\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tif you do - we are on the trail of your problem _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ema9","Date":"2017-04-01T18:54:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_. This forum is amazing_co_ i hope that my english be understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have changed  the version of exporter but i get the same error _dd_ (.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-04-01T19:36:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/_qt_ rel_eq__qt__qt__gt_@ema9_lt_/a_gt_ - then I need to look at your .blend file. Can you please post it somewhere?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t worry about the english - this forum has people from all over the world. If people don_t_t understand something they will ask _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ema9","Date":"2017-04-03T15:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGryff!! _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is the model_dd_ _lt_a href_eq__qt_https_dd_//opengameart.org/content/adventurer-militia-peasant-low-poly_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//opengameart.org/content/adventurer-militia-peasant-low-poly_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-04-09T16:50:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry for the slow response _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8314-ema9/_qt_ rel_eq__qt__qt__gt_@ema9_lt_/a_gt_ - I_t_ve been confined to bed fighting a major health issue _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I took a look at your file - and the mesh is good -  but there are all kinds of issues. I will try to list them _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. The .blend file contains a rig and 14 meshes attached to that rig. In addition there are at least 4 other meshes - _qt_tools - shovel_co_ scythe etc._qt_ not attached directly to that rig.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. There is one animation (400 + frames) that drives the rig_dd_  _qt_Action_qt_.  However_co_ these 18 meshes seem to have their own animations independent of the rig - named  _qt_CDA_dd_ObIpo.xxx_qt_ - each also 400 frames.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Fourteen of these mesh  _qt_animations_qt_ ( the meshes attached to the rig) make use of Blender_t_s NLA Editor - which the exporter does know about and are likely to cause issues.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. One of the meshes parented to the rig is _qt_Bandolera_qt_ and it acts as a parent to 6 of the other meshes parented to the rig. I don_t_t think that the exporter is going to handle that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. The rig and _lt_u_gt_al_lt_/u_gt_l the meshes also have transformation differences - which would need fixing before a successful export. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure it is possible to clean this all up - but it will take work_co_ and you would probably have to re-create  the Action file for the rig.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is also a very old .blend file (Blender 2.49) so you maybe better off finding another rigged mesh to use.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for the bad news\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]