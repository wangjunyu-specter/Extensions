[{"Owner":"Gugis","Date":"2014-05-06T18:59:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is it to possible to get current frame of skeleton animation?_lt_/p_gt__lt_p_gt_Like_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var animation _eq_ scene.beginAnimation(skeleton_co_ 1_co_ 10_co_ true)_sm_\t_lt_/pre_gt__lt_p_gt_When you need to get frame_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var frame _eq_ animation.currentFrame_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-06T19:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The problem is that beginAnimation can triggers a lot of animations. Here is the code of this specific function_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            // Local animations            if (target.animations) {                this.stopAnimation(target)_sm_                var animatable _eq_ new BABYLON.Internals.Animatable(target_co_ from_co_ to_co_ loop_co_ speedRatio_co_ onAnimationEnd)_sm_                this._activeAnimatables.push(animatable)_sm_            }            // Children animations            if (target.getAnimatables) {                var animatables _eq_ target.getAnimatables()_sm_                for (var index _eq_ 0_sm_ index &lt_sm_ animatables.length_sm_ index++) {                    this.beginAnimation(animatables[index]_co_ from_co_ to_co_ loop_co_ speedRatio_co_ onAnimationEnd)_sm_                }            }_lt_/pre_gt__lt_p_gt_As you can see a lot of animatable objects are created_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]