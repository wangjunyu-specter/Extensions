[{"Owner":"jacquesr","Date":"2015-11-06T09:29:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ I_t_ve got multiple scenes running in multiple views. Those views can be dynamically destroyed while new ones are created immediately afterwards (in The same logic flow_co_ synchronously) I call scene dispose and also engine dispose_co_ yet I get The too many webgl contexts warning (I think that was an exception in 2.1). I expect that to be due to my synchronous destroy/create but I did not find a disposed Event. Maybe I didn_t_t look in The right spot. How can I ensure doing This The clean way?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-11-06T09:46:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As far as I know you should not dispose the engine. Just dispose the scene_co_ that should be enough. I think re-initializing the engine creates this new webgl context._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jacquesr","Date":"2015-11-17T13:36:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I removed the call but my problem persists_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-17T13:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe if were seeing the code you used may have more help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]