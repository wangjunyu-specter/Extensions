[{"Owner":"arcanine","Date":"2014-11-27T15:19:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve got a basic incomplete game in threejs but would like to port it to babylon for some of the more game specific functionality_lt_/p_gt__lt_p_gt_one of the first features is that every item in the game has randomised textures_co_ I_t_d dynamically draw a canvas then apply it to the mesh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this possible in Babylon?  If so what classes/methods/documentation do I need to be looking at to achieve this? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-11-27T15:38:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Welcome to the forum!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The dynamic texture is exactly what you need - _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24709_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24709_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The function getContext gives you the canvas to draw on. Just don_t_t forget to update (that_t_s also the name of the function) after making changes to the canvas _dd_-) That was my mistake._lt_/p_gt__lt_p_gt_You can also give a canvas element as the _qt_options_qt_ variable_co_ it will be set automatically as the texture_t_s canvas.. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"arcanine","Date":"2014-11-27T17:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What is the options parameter exactly? the documentation says it_t_s an object_co_ the tutorial shows it as an integer_co_ my testing shows is accepts a blank canvas element _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thank you for the kind reception_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-11-27T18:25:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ the documentation can be sometimes misleading. But the community is working on it _dd_-)_lt_/p_gt__lt_p_gt_That_t_s the benefit of open source projects - you can actually see what the variables do. Take a look here - _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/textures/babylon.dynamicTexture.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Materials/textures/babylon.dynamicTexture.ts_lt_/a_gt__lt_/p_gt__lt_p_gt__qt_options_qt_ can be either the canvas size (width and height)_co_ a canvas object (an object with a getContext function) or a json object with width and height as parameter_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var options _eq_ 512_sm_ //ORvar options _eq_ { width _dd_ 512_co_ height_dd_ 1024 }_sm_ //ORvar options _eq_ document.getElementById(_qt_canvasId_qt_)_sm__lt_/pre_gt__lt_p_gt_So_co_ anything goes_co_ it is all up to you how you use it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]