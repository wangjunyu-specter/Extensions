[{"Owner":"JohnK","Date":"2016-11-04T21:07:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMight be a bug or it could my expectations (again). However the problem could be at the root of people having difficulties placing pivots.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you rotate a parent them translate its child using LOCAL axes the child moves and positions as you would expect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever if you rotate a parent then translate its child using WORLD or use position the child moves again in the direction of LOCAL axes but distances depend on the rotation of the parent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe PG _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1J7LGZ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1J7LGZ_lt_/a_gt_ shows the effect. The cylinders mark the positions of the child mesh (the pilot) as it and the parent (sphere) move. The red cylinder marks the expected final position following the final move of -2 in the direction of the world x axis. The pilot meshes show the actual positions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCommenting out the pilot and sphere moves and uncommenting them in turn will show the sequence.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-07T20:19:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe world matrices need to be updated for the meshes when moving a child mesh in world position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1J7LGZ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1J7LGZ#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-11-08T19:01:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you adam will now be able to get back to work on project.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]