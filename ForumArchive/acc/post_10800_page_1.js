[{"Owner":"Stephen Andrews","Date":"2014-12-01T22:06:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt_I_t_m not sure whether or not this is intended_co_ but when viewing a concave mesh with hasVertexAlpha enabled_co_ faces with normals that face the camera become visible through the rest of the mesh_co_ resulting in a sort of _t_x-ray_t_ effect. (The depth buffer is being handled incorrectly?)_lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt_Backface culling has no real effect on this_co_ as far as I can tell._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt__lt_strong_gt_No alpha (control)_lt_/strong_gt_ [_lt_a href_eq__qt_http_dd_//s17.postimg.org/sdsv8fqn1/Screenshot_from_2014_12_01_14_07_46.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//s17.postimg.org/sdsv8fqn1/Screenshot_from_2014_12_01_14_07_46.png_lt_/a_gt_]_lt_br_gt__lt_img src_eq__qt_http_dd_//s17.postimg.org/sdsv8fqn1/Screenshot_from_2014_12_01_14_07_46.png_qt_ alt_eq__qt_Screenshot_from_2014_12_01_14_07_46.png_qt__gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt__lt_br_gt__lt_strong_gt_X-Ray effect with partially-transparent voxels _lt_/strong_gt_[_lt_a href_eq__qt_http_dd_//s17.postimg.org/5mf78ag7x/Screenshot_from_2014_12_01_14_07_20.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//s17.postimg.org/5mf78ag7x/Screenshot_from_2014_12_01_14_07_20.png_lt_/a_gt_]_lt_br_gt__lt_img src_eq__qt_http_dd_//s17.postimg.org/5mf78ag7x/Screenshot_from_2014_12_01_14_07_20.png_qt_ alt_eq__qt_Screenshot_from_2014_12_01_14_07_20.png_qt__gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt__lt_br_gt__lt_strong_gt_X-Ray effect with empty voxels _lt_/strong_gt_[_lt_a href_eq__qt_http_dd_//s17.postimg.org/p2zwutbbx/Screenshot_from_2014_12_01_14_06_13.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//s17.postimg.org/p2zwutbbx/Screenshot_from_2014_12_01_14_06_13.png_lt_/a_gt_]_lt_br_gt__lt_img src_eq__qt_http_dd_//s17.postimg.org/p2zwutbbx/Screenshot_from_2014_12_01_14_06_13.png_qt_ alt_eq__qt_Screenshot_from_2014_12_01_14_06_13.png_qt__gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt__lt_br_gt__lt_strong_gt_Close up of X-ray effect with empty voxels _lt_/strong_gt_[_lt_a href_eq__qt_http_dd_//s17.postimg.org/pehd7krrx/Screenshot_from_2014_12_01_14_06_02.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//s17.postimg.org/pehd7krrx/Screenshot_from_2014_12_01_14_06_02.png_lt_/a_gt_]_lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm__qt__gt__lt_img src_eq__qt_http_dd_//s17.postimg.org/pehd7krrx/Screenshot_from_2014_12_01_14_06_02.png_qt_ alt_eq__qt_Screenshot_from_2014_12_01_14_06_02.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-01T23:16:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Unfortunately this is _qt_expected_qt_._lt_/p_gt__lt_p_gt_Because we are dealing with transparent objects_co_ we have to disable depth write. And for performance reasons we do not sort faces ending with this weird rendering _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-02T01:50:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63113_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10800_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1417475762_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Unfortunately this is _qt_expected_qt_._lt_/p_gt__lt_p_gt_Because we are dealing with transparent objects_co_ we have to disable depth write. And for performance reasons we do not sort faces ending with this weird rendering _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Drat_co_ that_t_s what I was afraid of. I_t_ll try to think of another way around it. (Perhaps creating another mesh for transparent objects?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-02T07:56:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63127_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10800_qt_ data-ipsquote-username_eq__qt_TriBlade9_qt_ data-cite_eq__qt_TriBlade9_qt_ data-ipsquote-timestamp_eq__qt_1417485011_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Drat_co_ that_t_s what I was afraid of. I_t_ll try to think of another way around it. (Perhaps creating another mesh for transparent objects?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Using another mesh seems to remove the depth issues_co_ thankfully_co_ but now comes the issue of making sure all properties are synced between two meshes_co_ which is a pain._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also I forgot what my algorithm was for separating the transparent voxels from the non-transparent ones_co_ so now my stuff is all screwed up. x[_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ In @Deltakosh we trust. (Still has syncing issues_co_ but transparency works fine  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//s28.postimg.org/f9jhg7gsb/Screenshot_from_2014_12_02_16_12_54.png_qt_ alt_eq__qt_Screenshot_from_2014_12_02_16_12_54.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT2_dd_ Mostly resolved_co_ CEWBS updated to version 0.2.42. _lt_a href_eq__qt_http_dd_//triblade9.github.io/CEWBS/example/examples/animation/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Demo #1_lt_/a_gt_ uses transparency for some voxels. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-02T17:06:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey that_t_s great_co_ excellent idea btw!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-02T17:07:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_and I really love your lightsaber _sm_D_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-02T22:17:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63202_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10800_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1417540035_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Hey that_t_s great_co_ excellent idea btw!_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and I really love your lightsaber _sm_D_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Unfortunately_co_ it kind of hurts performance a bit_co_ since the mesher has to run twice_co_ but it should be okay for smaller meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suck at art. It_t_s supposed to be a *shiny* sword_co_ indicating that it can be picked up. xD_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suppose this thread should be marked as answered. _dd_3_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]