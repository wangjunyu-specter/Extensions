[{"Owner":"Xed89","Date":"2018-07-17T22:15:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to display a list of cards_co_ and used a stackpanel for that. The cards should have some space between them_co_ and i saw there_t_s the padding property so i tried it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProblem 1_dd_ If i set the padding to the stackpanel_co_ the cards get clipped because the padding is removed from the stackpanel available width for its children.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProblem 2_dd_ The padding set on the second card gets removed from the card width_co_ thus i need to increase its width by the same amount of the padding i need. Doesn_t_t seem right. Maybe we need also a margin property if this behavior is by design?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground to reproduce the bugs_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#F1Z1SC%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#F1Z1SC#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-17T23:48:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes the padding is within the size of the control.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case the easy way is to introduce separators_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#F1Z1SC#2_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#F1Z1SC#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Not a bug so I moved the topic to Questions)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xed89","Date":"2018-07-18T05:53:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh i see_dd_) and what about the stackpanel margin? I still want it to stretch relative to the container rectangle but have a 10px margin around..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-18T16:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfor the stackPanel itself_co_ using .left should make it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]