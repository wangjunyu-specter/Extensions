[{"Owner":"swat0284","Date":"2016-09-27T23:53:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello i try to move mesh by this code_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var players _eq_ []_sm_\n\nfunction Temp(){\nfor(var i _eq_ 0 _sm_ playersCount &gt_sm_ i _sm_ i++){\n\tplayers[i] _eq_ new BABYLON.AbstractMesh(_qt_s_qt_+i_co_scene)_sm_\n\tplayers[i] _eq_ LoadModel(i)_sm_//assign loaded mesh to element of array\n\tplayers[i].position _eq_ new BABYLON.Vector3(10_co_1_co_-10)_sm_ // i have got Cannot set property _t_position_t_ of undefined\n\n\t\t\t}\n}\nfunction LoadModel(i){\n\tvar model_sm_\n\tBABYLON.SceneLoader.ImportMesh(_qt__qt__co__qt_models/_qt__co__qt_scene.babylon_qt__co_scene_co_\n\t\t\tfunction(newMeshes)\n\t\t\t{\n\t\t\t\tmodel _eq_ newMeshes[newMeshes.length-1]_sm_\n\t\t\t\tconsole.log(newMeshes.length)_sm_\n\t\t\t\tconsole.log(newMeshes[newMeshes.length-1].name)_sm_\n\t\t\t\tmodel.position.x _eq_ 50 * i_sm_  //i can set position\n\t\t\t\n\t\t\t})_sm_\n\t\t\t\nreturn model_sm_\n\t\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2016-09-28T05:00:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLoadModel is returning undefined. The function where _qt_model_qt_ gets assigned is asynchronous - it doesn_t_t run until the load finishes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe solution is to set the mesh_t_s position inside the onLoad handler.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]