[{"Owner":"jerome","Date":"2016-05-20T14:04:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi people_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell this is something far less glorious than the last _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt__t_s announcements_co_ but anyway here is a new SPS feature _dd_ the per particle visibility (PG coming)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimple _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_particle.isVisible _eq_ false_sm_  // default _dd_ true_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tor back to _lt_em_gt_true_lt_/em_gt__co_ as you need/want\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote that the visibility doesn_t_t prevent the other property values (position_co_ rotation_co_ etc) to be updated_co_ so you can move an invisible particle for instance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMoreover_co_ the method _lt_em_gt_updateParticle()_lt_/em_gt__co_ used to set each particle behavior_co_ is still called for every particle_co_ visible or not. So if_co_ for performance reasons_co_ you don_t_t want to handle the invisible particles_co_ just add a little condition _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_updateParticle _eq_ function(particle) {\n  if (!particle.isVisible) {\n    return_sm_\n  }\n  // else do the right stuff\n\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-20T15:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is COOL _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-20T15:40:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ta few_co_ my nephew !  (translate this_co_ google)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-20T21:42:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWorks pretty well _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-21T07:06:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\there_t_s a first simple playground about SPS particle visibility / invisibility _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\teach click on the torus makes the picked particle invisible and each particle is built with all the triangles of a torus tubular segment_co_ so clicking slices the torus\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tof course_co_ if you don_t_t specify this particle size_co_ the default is an elementary triangular facet _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tanother one _dd_ clicking sets the picked particle invisble again _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FPT1A%2372_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FPT1A#72_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-21T11:52:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tother example with cycling visibility _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tchanging the particle size to 1 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-21T13:49:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice nice nice_co_ J-doggydog!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey_co_ remember that... thing... that... city of red blocks?  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2357_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#57_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat might be a little more like what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21732_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/_qt_ rel_eq__qt__qt__gt_@chicagobob123_lt_/a_gt_ was looking-for. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut there_co_ Jerome_co_ you use the addCubes()... and I suspect that _qt_cubes_qt_ don_t_t have the .isVisible property_co_ and can_t_t. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr can they?  If you feel like updating _qt_red box town_qt_ and showing us how to disappear/reappear particles in THAT situation_co_ that would be cool_co_ thx!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-21T14:12:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tactually_co_ the version that you used_co_ Wingy_co_ is the one with the SPS prototype when it was under active design\n_lt_/p_gt_\n\n_lt_p_gt_\n\tall the addCubes_co_ addTetrahedrons_co_ addThis_co_ addThat functions have been replaced by a generic addShape(model) function_co_ where _qt_model_qt_ is any mesh you want\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe demo with the buildings is in the BJS doc in this part _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FPT1A%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FPT1A#36_lt_/a_gt_   (80K buildings here)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfar more optimized than the old one from the SPS prototype\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-21T16:13:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe cool thing is the 80k version work at over 30fps on my note5. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]