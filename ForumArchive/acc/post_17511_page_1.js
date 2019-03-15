[{"Owner":"startec","Date":"2015-09-29T08:49:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am basically asking the Babylon.js equivalent of this_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/15663859/threejs-predefined-shader-attributes-uniforms/15664900#15664900_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/15663859/threejs-predefined-shader-attributes-uniforms/15664900#15664900_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the tutorials I see that there are some uniforms supplied from the application code  (like uniforms and view matrices) is there a place somewhere where the things that are provided automatically are documented?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-29T16:54:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes sir_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"startec","Date":"2015-09-29T19:04:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the prompt reply. I am really looking forward to working with Babylon.js!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SpaceToast","Date":"2017-12-26T22:44:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDead link. Has this been added to the documentation? I wasn_t_t able to find it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ maybe someone wouldn_t_t mind pasting the relevent information into this thread for posterity_t_s sake?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-12-27T05:59:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twitch link?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SpaceToast","Date":"2017-12-27T19:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKosh_t_s _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_. Based on the _lt_a href_eq__qt_http_dd_//cyos.babylonjs.com_qt_ rel_eq__qt_external nofollow_qt__gt_CYOS_lt_/a_gt_ examples_co_ I can verify that the following are available_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Attributes\nattribute vec3 position_sm_ //vertex x_co_y_co_z\nattribute vec3 normal_sm_ //normal x_co_y_co_z\nattribute vec2 uv_sm_ //uv (texture map) 2d coordinates\n\n// Uniforms\nuniform mat4 world_sm_ //convert from model space to world space\nuniform mat4 view_sm_ //convert world space to camera-relative space\nuniform mat4 projection_sm_ //flatten camera space to frame view\nuniform mat4 worldView_sm_ //world and view_co_ pre-multiplied for you\nuniform mat4 worldViewProjection_sm_ //world_co_ view &amp_sm_ projection pre-multiplied\nuniform sampler2D textureSampler_sm_ //texture data\nuniform vec3 cameraPosition_sm_ //camera x_co_y_co_z\nuniform float time_sm_ //time_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAre there any predefined shader attributes or uniforms that I_t_m missing?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-01-02T23_dd_09_dd_18Z_t_ title_eq__t_01/02/2018 11_dd_09  PM_t_ data-short_eq__t_Jan 2_t__gt_January 2_lt_/time_gt_ by SpaceToast_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Edited with more uniforms_co_ from digging through built-in shaders\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SpaceToast","Date":"2018-01-02T23:10:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_em_gt_(Edited out into its own post_co_ because_co_ messiness.) _lt_/em_gt_A further discovery I_t_d love to have verified_dd_ It appears that the uniforms above do not need to be declared when creating a shaderMaterial -- Babylon.js supplies them for you. So rather than declaring_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shaderMaterial _eq_ new BABYLON.ShaderMaterial(_qt_shader_qt__co_ scene_co_\n   {vertex_dd_ _qt_custom_qt__co_ fragment_dd_ _qt_custom_qt_}_co_\n   {attributes_dd_ [_qt_position_qt__co_ _qt_normal_qt__co_ _qt_uv_qt_]_co_\n   uniforms_dd_ [_qt_world_qt__co_ _qt_worldView_qt__co_ _qt_worldViewProjection_qt__co_ _qt_view_qt__co_ _qt_projection_qt_]}\n   )_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou can omit the attributes section_co_ unless supplying your own custom data to the shader_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shaderMaterial _eq_ new BABYLON.ShaderMaterial(_qt_shader_qt__co_ scene_co_\n   {vertex_dd_ _qt_custom_qt__co_ fragment_dd_ _qt_custom_qt_}_co_\n   {attributes_dd_ [_qt_position_qt__co_ _qt_normal_qt__co_ _qt_uv_qt_]_co_\n   uniforms_dd_ [_qt_capybaras_qt_]}\n   )_sm__lt_/code_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]