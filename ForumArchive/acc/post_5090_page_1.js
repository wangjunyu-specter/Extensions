[{"Owner":"gryff","Date":"2014-03-24T19:39:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to create something I call a Trigger Zone - an area which the Free Camera can enter/exit_co_ and when it does_co_ it triggers an event. In something I_t_m working on there would be 10-20 of these zones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I could create an invisible box and check for collisions - but there would be no way to then enter the area defined by the box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I looked at the idea in Tutorial 10 where the meshes of the balls check for intersection with the planes/point - but will this work with a camera? Is the _qt_elipsoid_qt_ - which I assume checks for collisions - an actual mesh that can be used with this kind of code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (camera.elipsoid.intersectsMesh(thebox_co_ false)){// trigger event ... with conditions for exit and enter}_lt_/pre_gt__lt_p_gt_Or would I have to attach a a box mesh with the camera as parent?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A second question which relates indirectly to this_co_ if you clone meshes_co_ does a change made to one mesh propagate through the clones or do they have to be refreshed in some way?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And a final question_co_ can the mouse functionality be disabled on the free camera and replaced by keyboard input?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All thoughts welcome - they may even be methods I have not thought - or even know about _sm_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I can figure this out  - hopefully I can post my first simple game._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS @Wingnut possible tutorials here - scene interactivity? _sm_-)_lt_/p_gt__lt_pre_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-24T22:34:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_About your second question_co_ cloned meshes share vertex buffer (positions_co_ normals_co_ indices...)_co_ so yes if you modify a vertex_co_ the change will be made for clones and for the source but if you modify the transform (position_co_ rotation_co_ scaling) or the parent of the mesh_co_ nothing will be propagated for clones._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-24T23:11:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_but if you modify the transform (position_co_ rotation_co_ scaling) or the parent of the mesh_co_ nothing will be propagated for clones._lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually rather like how meshes behaved in VRML._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What about materials and textures do they propagate too - or can they be varied?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That is a good start gwenael TY._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-27T12:28:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Clone    BABYLON.Mesh.prototype.clone _eq_ function (name_co_ newParent_co_ doNotCloneChildren) {        var result _eq_ new BABYLON.Mesh(name_co_ this._scene)_sm_        // Buffers        result._vertexBuffers _eq_ this._vertexBuffers_sm_        for (var kind in result._vertexBuffers) {            result._vertexBuffers[kind]._buffer.references++_sm_        }        result._indexBuffer _eq_ this._indexBuffer_sm_        this._indexBuffer.references++_sm_        // Deep copy        BABYLON.Tools.DeepCopy(this_co_ result_co_ [_qt_name_qt__co_ _qt_material_qt__co_ _qt_skeleton_qt_]_co_ [_qt__indices_qt__co_ _qt__totalVertices_qt_])_sm_        // Bounding info        var extend _eq_ BABYLON.Tools.ExtractMinAndMax(this.getVerticesData(BABYLON.VertexBuffer.PositionKind)_co_ 0_co_ this._totalVertices)_sm_        result._boundingInfo _eq_ new BABYLON.BoundingInfo(extend.minimum_co_ extend.maximum)_sm_        // Material        result.material _eq_ this.material_sm_        // Parent        if (newParent) {            result.parent _eq_ newParent_sm_        }        if (!doNotCloneChildren) {            // Children            for (var index _eq_ 0_sm_ index &lt_sm_ this._scene.meshes.length_sm_ index++) {                var mesh _eq_ this._scene.meshes[index]_sm_                if (mesh.parent _eq__eq_ this) {                    mesh.clone(mesh.name_co_ result)_sm_                }            }        }        // Particles        for (var index _eq_ 0_sm_ index &lt_sm_ this._scene.particleSystems.length_sm_ index++) {            var system _eq_ this._scene.particleSystems[index]_sm_            if (system.emitter _eq__eq_ this) {                system.clone(system.name_co_ result)_sm_            }        }        result.computeWorldMatrix(true)_sm_        return result_sm_    }_sm__lt_/pre_gt__lt_p_gt_* vertex buffers are shared_dd_ positions_co_ normals_co_ uvs_co_ uv2s_co_ colors_co_ matricesIndices and matricesWeights_lt_/p_gt__lt_p_gt_* index buffer is shared_lt_/p_gt__lt_p_gt_* bounding info is not shared since the transform is not shared_lt_/p_gt__lt_p_gt_* material is shared_lt_/p_gt__lt_p_gt_* parent is shared_lt_/p_gt__lt_p_gt_* particles are cloned_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-27T22:30:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the feedback gwenael _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Everytime you post something_co_ I want to experiment with the code!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve actually started cloning objects - just simple stuff - as part of testing out my first question for moving the camera into meshes and checking for _qt_intersectsMesh_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hopefully_co_ I can post a cleaned up version of my code by the weekend with a live example._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-28T16:12:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Gryff! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Umm_co_ a box never stopped a camera.  (okay_co_ yes_co_ but only _lt_u_gt_sometimes_lt_/u_gt_).  This isn_t_t real life... we can walk through walls here in 3D land.  Keep in mind that just because a box _t_sensed_t_ a collision with a camera_co_ does not mean you need to do a _t_collision reaction_t_.  I_t_m not sure this would work_co_ but_co_ put your box around a zone_co_ set its visibility to low for testing_co_ and to zero later.  Check for collision with camera_co_ but the only _t_reaction_t_ is _t_camera has entered zone_t_-flag/trigger.  Let the player walk/fly right through the wall of the invisible zone box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Knowing if/when they are STILL in the zone_co_ or if/when they left the zone... that_t_s a whole other challenge... but a fun one.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In a way_co_ this is similar to a spacecraft sensor... that looks for black holes.  The black hole is invisible... but you want your spacecraft short-range sensors to _t_detect_t_ the black hole.  So_co_ you put a semi-large invisible sphere around the black hole_co_ and watch it for ship-to-sphere collisions/intersections.  When there is one_co_ the spacecraft computer announces _qt_bvrrt_co_ bvrrt_co_ bvrrt_co_ WARNING!  BLACK HOLE DETECTED!_qt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just some ideas.  I do not guarantee them to be _lt_u_gt_sane_lt_/u_gt_ ideas.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A little hint.  Keep your invisible zone-boxes close together.  If a user enters a different zone_co_ that_t_s a pretty good indication that they are no longer in any of the previous zones.  I have a feeling that you are using these _qt_proximity sensors_qt_ to start/stop _qt_the show_qt_ in these zones... as in... animations.  Although complicated and old_co_ take a sniff at _lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/html/test/jackal/jackal56.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webpages.charter.net/wingthing/html/test/jackal/jackal56.htm_lt_/a_gt_ .  It uses lots of _t_motor_t_ objects_co_ and a servicer (timecop)_co_ and runs on the window timer.  Use tighter code than mine_co_ though. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ But feel free to perma-borrow anything you find in that monster.  Pay particularly close attention to _t_register_t_ and _t_unregister_t__co_ and how the animation motors are fire_t_n_t_forget.  You will want to _t_register_t_ an animation motor and have it _t_serviced_t_ by the scene render loop.  Each time the render loop does a canvas paint_co_ the motor is _t_stepped_t_ one step.  You might want to read about Javascript (fake) _t_threading_t__co_ and some new REAL threading devices called _t_web workers_t_.  You don_t_t want to load-down the render-loop... so you want your animation motor to move one-step per frame draw_co_ and you want the motor to remember its _t_state_t_ until the next time it is called. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I didn_t_t mean to talk so much about animating_co_ but_co_ what the hell.  You might want to look at _lt_a href_eq__qt_http_dd_//urbanproductions.com/webGL/zz-UP_Test09.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/webGL/zz-UP_Test09.html_lt_/a_gt_ .  Try its _t_open all_t_ and _t_close all_t_ buttons.  This is a threeJS scene_co_ but the principles are the same for BJS_co_ so take a look at its source.  It might give you some ideas of how to keep an animation from bogging the render loop.  The updateIris func is called once per frame.  If the isOpening and isClosing flags are both false_co_ no need to do any servicing... return. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If isOpening or isClosing is true_co_ we call funcs like tryOpenMore and tryCloseMore.  In both of those funcs_co_ the first thing that_t_s done is check IF the shutter blades are fully opened or closed.  If so_co_ set the global flags to indicate so_co_ and leave.  If further servicing is needed_co_ they do the servicing (open more or close more) as fast as possible_co_ and leave.  Next frame draw_co_ updateIris is called again_co_ checks flags_co_ and services the animation as needed.  *shrug*. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_co_ babylon.js has handy tools such as BABYLON.Animation... that can make animating a much simpler task.  See _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/07-Animation_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/07-Animation_lt_/a_gt_ .  You knew this already_co_ didn_t_t you?  I_t_m still learning it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck.  I can _t_feel_t_ the _t_mad scientist_t_ in you.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-29T15:42:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well as promised I have posted a babylon scene which demonstrates the functionality that I_t_m looking for - a the detection of a camera as it enters and exits a specific mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First thought let me describe what you are looking at. A basic scene with 4 walls and a floor (I used _qt_mesh.clone_qt_ to create the walls). Inside the walls are five cubes - 4 large semi-transparent green boxes and a small blue box in wire frame mode. All these five boxes have _qt_checkCollisions_qt_ set to false._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The blue box is the parent of the large green box to the directly to its right as you enter the scene. If you enter this parented green box then the blue box is set to face display and the blue box _qt_checkCollisions_qt_ set to true. It is a test of whether _qt_checkCollisions_qt_ get propagated from the parent to children._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have parented a small box to the camera - the _qt_camsensor_qt_ - which is used to check whether the camera has entered the mesh of a green box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The green boxes I describe as _qt_gates_qt_ in the output boxes at the top - it will give you some feed back about the camera entry and exit ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So try it at _dd__lt_a href_eq__qt_http_dd_//www.3dworlds.ca/1webgl/zones/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_  Zones test_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The scene creation is nothing special_co_  the driving force behind the checking of the interaction of the camsensor and the green boxes is this section of code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_   //Mesh Interaction check    scene.registerBeforeRender(function () {                for (i_eq_0_sm_ i&lt_sm_4_sm_ i++){            var currGate _eq_ scene.getMeshByID(thegates[i])_sm_                        //camSensor collision -- Precise _eq_ false            if (camSensor.intersectsMesh(currGate_co_ false)  &amp_sm_&amp_sm_ currGate.isEnabled()) {                                if(currGate.name _eq__eq_ thegates[0])                {                    divOutput.innerHTML _eq_ _qt_You touched _qt_ + thegates[0]_sm_                    divOutput2.innerHTML _eq_ _qt_Last Gate_eq_ _qt_ + thegates[0]_sm_                    control _eq_ scene.getMeshByID(_qt_controlbox_qt_)_sm_                    control.checkCollisions _eq_ true_sm_                    control.material.wireframe _eq_false_sm_                }                else {                    divOutput.innerHTML _eq_ _qt_You touched _qt_ + thegates[i]_sm_                    divOutput2.innerHTML _eq_ _qt_Last Gate_eq_ _qt_ + thegates[i]_sm_                }                break_sm_            }            else {                divOutput.innerHTML _eq_ _qt_No sensor touched_qt__sm_            }                }            })_sm__lt_/pre_gt__lt_p_gt_Basically_co_ the script is checking if the camera has entered a mesh with a specific name - it loops through the 4 names that are stored in a variable _qt_thegates_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If it finds an intersection with a specified gate it reacts accordingly ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_While I was cleaning up the code_co_ it came to me that there maybe another way (as I_t_m not keen on the _qt_for loop_qt_ and am looking at 20+ potential gates). Rather than check if the camsensor has entered a mesh - have the green box check if it has interacted with the camera. I_t_m thinking about a possible prototype box that has extended functionality - a cameraEnter/Exit function.  My javascript ability dates back to the late 90s with no knowledge of prototypes so any suggestions and help appreciated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ Run through the green box parented to the blue box (you will see the change in the blue box) - now go back to its child - try to run through it again - was the _qt_checkCollisions_qt_ propagated to the child?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]