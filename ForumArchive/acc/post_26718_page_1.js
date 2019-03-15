[{"Owner":"juanmajr93","Date":"2016-11-30T13:05:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ i would like to import an OBJ file into my scene and I have got it. However_co_ I don_t_t get change the position and scale of the mesh. ¿How could I do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is my code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var loader _eq_ new BABYLON.AssetsManager(scene)_sm_\n\t\tvar edificioB4 _eq_ loader.addMeshTask(_qt_A2_qt__co_ _qt__qt__co_ _qt_http_dd_//localhost_dd_8080/modelos/A2/_qt__co_ _qt_A2.obj_qt_)_sm_\n\t\tBABYLON.OBJFileLoader.OPTIMIZE_WITH_UV _eq_ true_sm_\n\t\tloader.load()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-30T18:59:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should add a onsuccess callback on your task to get the mesh and then just call mesh.position.x _eq_ ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_AssetsManager_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-01T10:06:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkey_co_ thanks you very much_co_ I got it. However i have another problem. After load the obj file_co_ the movement in the scene is so slow_co_ it seem that the fps are lower (under 60fps/sec)_lt_br /_gt_\n\t How can i get a better scene without this problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-12-01T10:11:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlayground Scene? I expect there is an issue with your model or code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ice-T","Date":"2016-12-01T10:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI guess_co_ you mean your FPS drops dramatically and everything is like lagging? Check your FPS and stuff with _qt_scene.debugLayer.show()_sm__qt_ and maybe your obj file is way too high poly or sth. like that. I encountered the same problem with high poly objects. Maybe you can share your obj / code so that we can try what_t_s the issue.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-01T12:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ thanks by all your answers. I cant show the scene becasue_co_ i am making this job in server that disable the port 80. Although_co_ I can share you my file obj and the results of debug. I think that the problem can be this model but I am not sure...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/prueba.png.96332d196ac19c96ddb4ec738d033ce4.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10486_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/prueba.thumb.png.352b2731dbed606748a60265f461aec6.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_prueba.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10487_qt__gt_C6.rar_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ice-T","Date":"2016-12-01T13:30:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ i tried your OBJ and it has almost 1370 vertices and executes about 940 draw calls. But i have no laggs or jerky/sluggish moving with my camera if i change the resolution to HD (1280x720).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are using a 1680x916 resolution. Try another resolution_co_ I would suggest the most common FHD/HD (see _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Display_resolution_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Display_resolution_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo change resolution_co_ just apply the height width style to your canvas like_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_#renderCanvas{\n\twidth_dd_1280px_sm_\n\theight_dd_720px_sm_\n\ttouch_action_dd_ none_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tAnother option would be to change the obj to lower poly if possible?\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tHope it helps you too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-12-01T18:32:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24178_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/_qt_ rel_eq__qt__qt__gt_@juanmajr93_lt_/a_gt_ _dd_ Well I took a look at your .obj model in Blender - and it is the building I see on the map.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExporting from Blender and viewing the .babylon file in the BJS Sandbox tells me it has 18 meshes and 17 of those are the letters that make up the name. And I get 35-40 fps_co_ 29 Drawcalls and 13 Total Materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when I look at the image you posted above at the debug console it says that _qt__lt_em_gt_Total Meshes _eq_ 1007_lt_/em_gt__qt__co_  _qt__lt_em_gt_Drawcalls _eq_ 1004_lt_/em_gt__qt_ and _qt__lt_em_gt_Total Materials _eq_ 82_lt_/em_gt__qt_. The question is _lt_u_gt_what and where_lt_/u_gt_ are these ~990 other meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think it is the .obj file (though it seems to have issues with the way some of the normals are facing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-09T12:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks you very much gryff. This is the reason that there was a lot of lag in the scene. The exporting obj in SketchUp was bad because_co_ the OBJ had many meshes. Although_co_ I have resolved this problem i don_t_t understand the follow_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have the next images. The first is the result of import this model in BabylonJs and the second is the object in Blender. As you can see the building in BabylonJs is _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_turned around_lt_/span_gt__lt_/span_gt_ and I am very surprised by this(mirror¿?). Other thing is that in the model of BabylonJS _t_s scene appear many triangles like the doors which must not show.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura1.PNG.7a3799683c13722afbc137f5d1cdfcf4.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10653_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura1.thumb.PNG.b3dfeab95adbf4abf5a38b3c79065155.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Captura1.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura2.PNG.dff867e219c7922285cc1a6e2bfa0e9a.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10654_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura2.PNG.dff867e219c7922285cc1a6e2bfa0e9a.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Captura2.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-12-09T17:18:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24178_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/_qt_ rel_eq__qt__qt__gt_@juanmajr93_lt_/a_gt_ _dd_ Juan_co_ the model in Blender shows that there are all kinds of issues with the normals. See image below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe long blue lines - normals pointing out (which is what you want)_co_  the blue dots are normals pointing to the inside.(red rectangle -don_t_t want)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNormals are strange all over the model - including the doors. Not sure about the mirror effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/normals1.png.e23ffd0a446117057e925b72ffaa693d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10658_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/normals1.png.e23ffd0a446117057e925b72ffaa693d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_normals1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-10T16:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again gryff_co_ good job! I agree with you and there is an important problem with theese normals of model. To solve it_co_ I have recalculated normals in blender however_co_ many of them go on pointing to inside. Do you know any way to solve it fastly?. The mirror effect_co_ in BabylonJs_co_ is very strange because in Blender like you could see the model is right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJuanMa J.R.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-11T21:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah!!!_co_ I got correct all normals in my model  _lt_strong_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ _lt_/strong_gt_.The result now is pretty!!! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ However_co_ could somebody explain me why the model is represented in the world as inverse or mirror????\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTheese are the images_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10701_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura.PNG.abf47d3e5dc056e85a576fb6f97bde5a.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Captura.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10701_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura.PNG.abf47d3e5dc056e85a576fb6f97bde5a.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10702_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura2.PNG.ba4ced2db8869466d9d601174ac48f15.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Captura2.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10702_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Captura2.PNG.ba4ced2db8869466d9d601174ac48f15.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-12T13:04:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI solved it by this code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var vertex_data _eq_ BABYLON.VertexData.ExtractFromMesh(b)_sm_\n\t\t\nfor (var i _eq_ 0_sm_ i &lt_sm_ vertex_data.normals.length_sm_ i+_eq_3) \n{\nvertex_data.positions[i] *_eq_ -1_sm_\n}\nvertex_data.applyToMesh(b)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBye.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-12-12T13:11:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24178_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24178-juanmajr93/_qt_ rel_eq__qt__qt__gt_@juanmajr93_lt_/a_gt_ after that compute normal again\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2016-12-13T08:32:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOkey_co_ I will. This problem is resolved!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ChadK","Date":"2018-07-16T19:29:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like Juanmarj93 was happy with the mirroring code that he wrote.  I was facing a similar problem_co_ but I found another question in this forum (38580) that gives a better solution.  The default coordinate system used by Babylon is left handed.  This is easily verified by using the pg and adding spheres or cubes of different sizes with positions set to positive values for the x-_co_ y-_co_ or z-directions.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe class scene has a method to switch to a right-handed coordinate system_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.useRightHandedSystem _eq_ true_sm_﻿_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis will render objects _t_as expected_t_ to engineers like me.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]