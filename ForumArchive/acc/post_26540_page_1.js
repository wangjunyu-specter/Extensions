[{"Owner":"Eva","Date":"2016-11-21T22:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to load .babylon file using sandbox and getting error you can see on the screen shot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/58336df60e836_2016-11-22005500.png.28843aa33c054c22c2d6e84f9beaf6ec.png_qt_ data-fileid_eq__qt_10359_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10359_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/58336df66a0c4_2016-11-22005500.thumb.png.8cc4a7bc4bcaa8e48ad83cec7066f0c6.png_qt_ alt_eq__qt_Снимок экрана от 2016-11-22 00_dd_55_dd_00.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using Blender exporter to get .babylon file. File looks OK and there are no errors or warnings in .log file after export. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a .babylon file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10360_qt_ data-fileid_eq__qt_10360_qt_ rel_eq__qt__qt__gt_COSMO33.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know what the problem is?  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll appreciate any help. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-11-21T23:50:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24200_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/_qt_ rel_eq__qt__qt__gt_@Eva_lt_/a_gt_ Welcome to the BJS forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI notice from the image above that you are using Blender 2.78 but only version 4.6.1 of the exporter(BBE) .Have you tried the latest version of the exporter (5.1.0)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have downloaded your .babylon file_co_ but could you post your .blend file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eva","Date":"2016-11-22T09:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ gryff !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI downloaded the last exporter version (5.1.0) from _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender_lt_/a_gt_ . I think that we see version 4.6.1 in browser console because of this _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py_lt_/a_gt_ file. It contains string _qt__lt_span style_eq__qt_color_dd_rgb(24_co_54_co_145)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(24_co_54_co_145)_sm__qt__gt__t__lt_/span_gt_version_lt_span style_eq__qt_color_dd_rgb(24_co_54_co_145)_sm__qt__gt__t__lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__dd_ (_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_4_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_6_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_)_lt_/span_gt__qt_. But may be I_t_m wrong .... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe thing is that I have .dae file that I import into the Blender and after that I export it to .babylon format with exporter. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is .dae file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10367_qt_ data-fileid_eq__qt_10367_qt_ rel_eq__qt__qt__gt_Astronaut.dae_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are textures with this file but they are too heavy to represent them here (textures have .tga format). After import it to Blender I get this .blend file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10368_qt_ data-fileid_eq__qt_10368_qt_ rel_eq__qt__qt__gt_cosmo33.blend_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for trying to help _dd_-))\n_lt_/p_gt_\n\n_lt_table style_eq__qt_width_dd_978px_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_6px 3px_sm_line-height_dd_20px_sm_border-top_dd_1px solid rgb(238_co_238_co_238)_sm_background_dd_rgb(245_co_245_co_245)_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-11-22T10:22:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSeems to be something wrong with the dae_co__lt_br /_gt_\n\tnot sure what_co_ i just tried with an export from 3dsmax_co_ same error._lt_br /_gt__lt_br /_gt_\n\ti can load one of my own babylon files just fine in the sandbox_co__lt_br /_gt_\n\tSo it_t_s either the dae file or something very specific the file bugs in the sandbox_co_ mostlikely the file though _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eva","Date":"2016-11-22T12:04:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you_t_re right and .dae file is damaged or something ....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried import it with 3dMAX and there was an error associated with _qt_input file_qt_. This is sad_co_ model was very nice. I_t_ll try to look for another model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much for your help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-11-22T14:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24200_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/_qt_ rel_eq__qt__qt__gt_@Eva_lt_/a_gt_ _dd_ Morning Eva _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI used the .dae file to load into Blender_co_ then export (v5.0.6) and load into the Sandbox. See image below\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill post again in couple of hours - I have a meeting to go to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/mycosmo1.png.434311f277c8798b2a41562d73fef54c.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10370_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/mycosmo1.png.434311f277c8798b2a41562d73fef54c.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_mycosmo1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-11-22T16:39:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24200_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24200-eva/_qt_ rel_eq__qt__qt__gt_@Eva_lt_/a_gt_ Here Eva_co_ try this blend file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/gryff1000/1webgl/blob/gh-pages/eva/mycosmo1.zip_qt_ rel_eq__qt_external nofollow_qt__gt_spaceman_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCreated by importing the .dae file into Blender 2.76.  The above model in the Sandbox was created by exporting with version with ver 5.0.6 of the exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou don_t_t need the _qt_i/o python_qt_ file you posted above. Use this one_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/Blender2Babylon-5.1.zip_qt_ rel_eq__qt_external nofollow_qt__gt_BBE(v5.1)_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSave that .zip file to your HD. Remove any previous versions of the exporter from Blender. Then install the new version of the exporter using _qt_Install from File_qt_ option.and use the .zip file directly. _lt_u_gt_NO need to unzip it _lt_/u_gt_- Blender will handle that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow activate it and away you go.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t have 3DMax - so no idea what the issue might be there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eva","Date":"2016-11-23T10:55:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ Thank you very very very much!! _lt_img alt_eq__qt__dd_wub_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wub.png_qt_ title_eq__qt__dd_wub_dd__qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]