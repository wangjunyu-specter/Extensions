[{"Owner":"gryff","Date":"2014-06-08T18:13:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Here is a sample where this feature rocks_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Throws a lot of errors in my web console (around 85) and all look like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Error_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Math/babylon.math.js_qt__gt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Math/babylon.math.js_lt_/a_gt_ is being assigned a //# sourceMappingURL_co_ but already has oneError_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.tga.js_qt__gt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.tga.js_lt_/a_gt_ is being assigned a //# sourceMappingURL_co_ but already has oneError_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.dds.js_qt__gt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.dds.js_lt_/a_gt_ is being assigned a //# sourceMappingURL_co_ but already has oneError_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.smartArray.js_qt__gt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.smartArray.js_lt_/a_gt_ is being assigned a //# sourceMappingURL_co_ but already has oneError_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.js_qt__gt_http_dd_//www.babylonjs.com/experiments/instances/Babylon/Tools/babylon.tools.js_lt_/a_gt_ is being assigned a //# sourceMappingURL_co_ but already has one...._lt_/pre_gt__lt_p_gt_all the same comment but with a different script._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure why - but I do see a scene - hopefully all of it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-09T15:52:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is due to the fact that i published the source alongside sourcemap files I think_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-09T16:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been running some more tests to explore instancing. As I understand it the instances are copies of original geometry including the materials. In the image below (Blender screenshot) I have produced three linked duplicates of an object (the original is left most scaled red cube). I set the original object babylon property to _qt_check collisions_qt_ and in Blender this cascades to the linked duplicates - a copy_co_ Cube.001_co_ highlighted in yellow_co_ automatically has check collisions checked._lt_/p_gt__lt_p_gt_\nHere is the babylon code for that original object and the instances - all seemed fine_dd__lt_/p_gt__lt_p_gt_\n{_qt_name_qt__dd__qt_Cube_qt__co__qt_id_qt__dd__qt_Cube_qt__co__qt_materialId_qt__dd__qt_cube_qt__co__lt_/p_gt__lt_p_gt_\n_qt_position_qt__dd_[-5.0000_co_0.0000_co_0.0000]_co__qt_rotation_qt__dd_[-0.0000_co_-0.0000_co_0.0000]_co__qt_scaling_qt__dd_[1.0000_co_1.0000_co_1.0000]_co__qt_isVisible_qt__dd_true_co__qt_isEnabled_qt__dd_true_co__qt_useFlatShading_qt__dd_true_co__qt_checkCollisions_qt__dd_true_co__qt_billboardMode_qt__dd_0_co__qt_receiveShadows_qt__dd_false_co__lt_/p_gt__lt_p_gt_\n_qt_positions_qt__dd_[-0.1000_co_2.0000_co_1.0000_co_-0.1000_co_0.0000_co_-1.0000_co_-0.1000_co_2.0000_co_-1.0000_co_0.1000_co_2.0000_co_1.0000_co_-0.1000_co_0.0000_co_1.0000_co_0.1000_co_2.0000_co_-1.0000_co_0.1000_co_0.0000_co_1.0000_co_0.1000_co_0.0000_co_-1.0000]_lt_/p_gt__lt_p_gt_\n_co__qt_normals_qt__dd_[-0.5773_co_0.5773_co_0.5773_co_-0.5773_co_-0.5773_co_-0.5773_co_-0.5773_co_0.5773_co_-0.5773_co_0.5773_co_0.5773_co_0.5773_co_-0.5773_co_-0.5773_co_0.5773_co_0.5773_co_0.5773_co_-0.5773_co_0.5773_co_-0.5773_co_0.5773_co_0.5773_co_-0.5773_co_-0.5773]_lt_/p_gt__lt_p_gt_\n_co__qt_indices_qt__dd_[0_co_1_co_2_co_0_co_3_co_4_co_3_co_5_co_6_co_5_co_2_co_7_co_1_co_4_co_7_co_5_co_3_co_2_co_4_co_1_co_0_co_3_co_6_co_4_co_5_co_7_co_6_co_2_co_1_co_7_co_4_co_6_co_7_co_3_co_0_co_2]_lt_/p_gt__lt_p_gt_\n_co__qt_subMeshes_qt__dd_[{_qt_materialIndex_qt__dd_0_co__qt_verticesStart_qt__dd_0_co__qt_verticesCount_qt__dd_8_co__qt_indexStart_qt__dd_0_co__qt_indexCount_qt__dd_36}]_co__lt_/p_gt__lt_p_gt_\n_qt_instances_qt__dd_[_lt_/p_gt__lt_p_gt_\n{_qt_name_qt__dd__qt_Cube.003_qt__co__qt_position_qt__dd_[0.0000_co_0.0000_co_-5.0000]_co__qt_rotation_qt__dd_[-0.0000_co_-1.5708_co_0.0000]_co__qt_scaling_qt__dd_[1.0000_co_1.0000_co_1.0000]}_co__lt_/p_gt__lt_p_gt_\n{_qt_name_qt__dd__qt_Cube.002_qt__co__qt_position_qt__dd_[0.0000_co_0.0000_co_5.0000]_co__qt_rotation_qt__dd_[-0.0000_co_-1.5708_co_0.0000]_co__qt_scaling_qt__dd_[1.0000_co_1.0000_co_1.0000]}_co__lt_/p_gt__lt_p_gt_\n{_qt_name_qt__dd__qt_Cube.001_qt__co__qt_position_qt__dd_[5.0000_co_0.0000_co_0.0000]_co__qt_rotation_qt__dd_[-0.0000_co_-0.0000_co_0.0000]_co__qt_scaling_qt__dd_[1.0000_co_1.0000_co_1.0000]}]_lt_/p_gt__lt_p_gt_\n}_lt_/p_gt__lt_p_gt_\nOnly problem is that _qt_check collisions_qt_ is true for only the original object not copies. If you are creating a forest (for example)_co_ it seems that all the _qt_check collisions_qt_ would have to be set to true in code after the trees are loaded as the check collision checkbox in Blender for the linked duplicates is ignored._lt_/p_gt__lt_p_gt_\nAny easy solution for this?_lt_/p_gt__lt_p_gt_\nNo idea whether this will post as all the formating options are greyed out _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_\ncheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2014/post-7026-0-85746000-1402329935.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2014/post-7026-0-85746000-1402329935.jpg_qt_ data-fileid_eq__qt_1907_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-85746000-1402329935.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-09T16:14:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I will fix this for you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-06-09T16:26:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_and here comes the question_dd_ up to where an instance should be a perfect copy of a mesh? Do they share all properties (or the properties at least are synced) (physices_co_ geometry...) except transform or some of them could/must be overriden?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-09T16:35:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Everything related to material and shaders is share. Everything else can be different (physics_co_ collisions_co_ etc_co__co__co_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-09T17:36:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__qt_I will fix this for you_qt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Thanks DK _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__qt_up to where an instance should be a perfect copy of a mesh?_qt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All I was trying to do gwenael was try to ensure that the  babylon parameters (flat shading_co_ check collisions etc) for export that could be set in the Blender were transferred to the babylon file. It does not export any animations that are attached to the original object that was duplicated for the duplicates - but those are not mentioned in the exporter parameters_co_ so a work around would have to be found._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t want to create work for DK (although he did ask further up this thread what features I might like to see for the Blender exporter - and I have a couple of those _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-09T18:06:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Animations will also be cloned in the next version_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-06-09T18:19:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It could be nice to have something parametrable_dd_ pretty much everything is cloned by default but you can use flags to clone only what you want._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-09T18:48:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well done DK - the new version of babylon.1.12-beta.js is passing on the _qt_check collisions_qt_ parameter to the duplicates. Now lets see what I can do with it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-09T21:13:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well a quick experiment_co_ after I walked the dog_co_ I can change the material on the original and it cascades to the duplicates. But altering the _qt_checkCollisions_qt_ only impacts the original. I was kind of hoping that would cascade too without having to loop through all the copies._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-09T21:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Blender also has a use flat shading &amp_sm_ cast shadows custom properties.  Might want to do these_co_ if wanted.  Now avoid going back to edit the  InstancedMesh class_co_ I believe._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-09T21:52:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Blender also has a use flat shading &amp_sm_ cast shadows custom properties_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt_JC the _qt_flat shading_qt_ is a property of the material _lt_/strike_gt_- Scrap that JC it is _qt_back face culling_qt_ that is a material property and any changes to the material seem to propagate.. I tried a test with the alpha value of material with this kind of code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_theColour _eq_ newScene.getMaterialByName(_qt_cube_qt_)_sm_theColour.alpha _eq_ .5_sm__lt_/pre_gt__lt_p_gt_and it sets all of them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will test the flat shading. (Edit _dd_tested and it seems to propagate). Not tried the shadow stuff._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-09T22:18:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mesh has the method convertToFlatShadedMesh()_co_ not sure where it is called though. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking closely at the python script_co_ cast shadows property is used by the script to build the shadow generator for the lamp and does not end up in the mesh itself.  The property is evaluated in the script for every lamp that has the custom shadow map property set.  If it is true_co_ the mesh gets added to the generators renderList. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Implementing this might mean similar checking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-10T02:25:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Everything related to rendering is propagated (Because instances reference internally the root mesh)_lt_/p_gt__lt_p_gt_Change on checkCollisions is NOT propagated because you may want to set up on somes instances but not all_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-10T04:14:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Change on checkCollisions is NOT propagated because you may want to set up on somes instances but not all_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had a feeling it might be that way. For the situation you hypothesis about_co_ I would create two sets of instances with different checkCollision settings. With propagation I could easily flip their status. So for example nearby trees checkCollisions true_co_ faraway trees checkCollisions false. If you enter that faraway area_co_ flip the checkCollision properties of both._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And experimenting with cast shadows - I_t_m getting some odd results. But more about that after more experiments._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-10T04:22:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In the meantime this is easy to browse all instances and set checkCollisions_dd__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ mesh.instances_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-10T04:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And in your example (trees)_co_ you should keep only one root mesh and set all trees as instance of the same mesh to achieve maximum performance_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-10T04:32:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_In the meantime this is easy to browse all instances and set checkCollisions_dd__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will give that a try_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]