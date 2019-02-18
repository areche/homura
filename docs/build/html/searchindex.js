Search.setIndex({docnames:["homura","homura.metrics","homura.modules","homura.modules.functions","homura.utils","homura.utils.reporter","homura.vision","homura.vision.data","homura.vision.models","homura.vision.models.cifar","homura.vision.models.segmentation","homura.vision.transforms","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["homura.rst","homura.metrics.rst","homura.modules.rst","homura.modules.functions.rst","homura.utils.rst","homura.utils.reporter.rst","homura.vision.rst","homura.vision.data.rst","homura.vision.models.rst","homura.vision.models.cifar.rst","homura.vision.models.segmentation.rst","homura.vision.transforms.rst","index.rst","modules.rst"],objects:{"":{homura:[0,0,0,"-"]},"homura.debug":{module_debugger:[0,1,1,""]},"homura.liblog":{disable_default_handler:[0,1,1,""],enable_default_handler:[0,1,1,""],get_logger:[0,1,1,""],get_verb_level:[0,1,1,""],set_file_handler:[0,1,1,""],set_verb_level:[0,1,1,""]},"homura.lr_scheduler":{CosineAnnealingLR:[0,2,1,""],ExponentialLR:[0,2,1,""],LRScheduler:[0,2,1,""],LambdaLR:[0,2,1,""],MultiStepLR:[0,2,1,""],ReduceLROnPlateau:[0,2,1,""],StepLR:[0,2,1,""]},"homura.lr_scheduler.LRScheduler":{scheduler:[0,3,1,""],set_optimizer:[0,4,1,""]},"homura.metrics":{commons:[1,0,0,"-"]},"homura.metrics.commons":{classwise_accuracy:[1,1,1,""],confusion_matrix:[1,1,1,""],f1_score:[1,1,1,""],false_negative:[1,1,1,""],false_positive:[1,1,1,""],precision:[1,1,1,""],recall:[1,1,1,""],specificity:[1,1,1,""],true_negative:[1,1,1,""],true_positive:[1,1,1,""]},"homura.modules":{attention:[2,0,0,"-"],conditional_batchnorm:[2,0,0,"-"],functions:[3,0,0,"-"]},"homura.modules.attention":{KeyValAttention:[2,2,1,""]},"homura.modules.attention.KeyValAttention":{forward:[2,4,1,""]},"homura.modules.conditional_batchnorm":{CategoricalConditionalBatchNorm:[2,2,1,""]},"homura.modules.conditional_batchnorm.CategoricalConditionalBatchNorm":{forward:[2,4,1,""]},"homura.modules.functions":{discretization:[3,0,0,"-"],miscs:[3,0,0,"-"]},"homura.modules.functions.discretization":{gumbel_sigmoid:[3,1,1,""],gumbel_softmax:[3,1,1,""],semantic_hashing:[3,1,1,""],straight_through_estimator:[3,1,1,""]},"homura.modules.functions.miscs":{straight_backprop:[3,1,1,""]},"homura.optim":{ASGD:[0,2,1,""],Adam:[0,2,1,""],Optimizer:[0,2,1,""],RMSProp:[0,2,1,""],SGD:[0,2,1,""]},"homura.optim.Optimizer":{optim:[0,3,1,""],set_model:[0,4,1,""]},"homura.utils":{callbacks:[4,0,0,"-"],containers:[4,0,0,"-"],exceptions:[4,0,0,"-"],inferencer:[4,0,0,"-"],reporter:[5,0,0,"-"],runner:[4,0,0,"-"],trainers:[4,0,0,"-"]},"homura.utils.callbacks":{AccuracyCallback:[4,2,1,""],Callback:[4,2,1,""],CallbackList:[4,2,1,""],LossCallback:[4,2,1,""],MetricCallback:[4,2,1,""],WeightSave:[4,2,1,""]},"homura.utils.callbacks.AccuracyCallback":{accuracy:[4,4,1,""]},"homura.utils.callbacks.Callback":{after_all:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_all:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""]},"homura.utils.callbacks.CallbackList":{after_all:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""]},"homura.utils.callbacks.MetricCallback":{after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],history:[4,3,1,""]},"homura.utils.callbacks.WeightSave":{after_epoch:[4,4,1,""]},"homura.utils.containers":{Map:[4,2,1,""],TensorTuple:[4,2,1,""]},"homura.utils.containers.Map":{copy:[4,4,1,""],deepcopy:[4,4,1,""],keys:[4,4,1,""],to:[4,4,1,""],values:[4,4,1,""]},"homura.utils.containers.TensorTuple":{to:[4,4,1,""]},"homura.utils.exceptions":{ShapeError:[4,5,1,""]},"homura.utils.inferencer":{Inferencer:[4,2,1,""]},"homura.utils.inferencer.Inferencer":{iteration:[4,4,1,""],load:[4,4,1,""],mode:[4,3,1,""],override_iteration:[4,4,1,""],run:[4,4,1,""],test:[4,4,1,""],update_loss_f:[4,4,1,""]},"homura.utils.reporter":{callbacks:[5,0,0,"-"],wrapper:[5,0,0,"-"]},"homura.utils.reporter.callbacks":{LoggerReporter:[5,2,1,""],Reporter:[5,2,1,""],TQDMReporter:[5,2,1,""],TensorboardReporter:[5,2,1,""],VisdomReporter:[5,2,1,""]},"homura.utils.reporter.callbacks.Reporter":{add_memo:[5,4,1,""],after_all:[5,4,1,""],after_epoch:[5,4,1,""],after_iteration:[5,4,1,""],before_all:[5,4,1,""],before_epoch:[5,4,1,""],before_iteration:[5,4,1,""],close:[5,4,1,""],disable_report_images:[5,4,1,""],disable_report_params:[5,4,1,""],enable_report_images:[5,4,1,""],enable_report_params:[5,4,1,""]},"homura.utils.reporter.wrapper":{LoggerWrapper:[5,2,1,""],TQDMWrapper:[5,2,1,""],TensorBoardWrapper:[5,2,1,""],make_dir:[5,1,1,""],save_image:[5,1,1,""]},"homura.utils.reporter.wrapper.LoggerWrapper":{add_histogram:[5,4,1,""],add_image:[5,4,1,""],add_images:[5,4,1,""],add_scalar:[5,4,1,""],add_scalars:[5,4,1,""],add_text:[5,4,1,""]},"homura.utils.reporter.wrapper.TQDMWrapper":{add_histogram:[5,4,1,""],add_image:[5,4,1,""],add_images:[5,4,1,""],add_scalar:[5,4,1,""],add_scalars:[5,4,1,""],add_text:[5,4,1,""]},"homura.utils.reporter.wrapper.TensorBoardWrapper":{add_histogram:[5,4,1,""],add_image:[5,4,1,""],add_images:[5,4,1,""],add_scalar:[5,4,1,""],add_scalars:[5,4,1,""],add_text:[5,4,1,""],close:[5,4,1,""]},"homura.utils.runner":{Runner:[4,2,1,""]},"homura.utils.trainers":{DistributedSupervisedTrainer:[4,2,1,""],SupervisedTrainer:[4,2,1,""],Trainer:[4,3,1,""],TrainerBase:[4,2,1,""]},"homura.utils.trainers.SupervisedTrainer":{iteration:[4,4,1,""]},"homura.utils.trainers.TrainerBase":{is_train:[4,3,1,""],iteration:[4,4,1,""],override_iteration:[4,4,1,""],register_after_all:[4,4,1,""],register_after_epoch:[4,4,1,""],register_after_iteration:[4,4,1,""],register_before_all:[4,4,1,""],register_before_epoch:[4,4,1,""],register_before_iteration:[4,4,1,""],resume:[4,4,1,""],run:[4,4,1,""],test:[4,4,1,""],train:[4,4,1,""]},"homura.vision":{data:[7,0,0,"-"],models:[8,0,0,"-"],transforms:[11,0,0,"-"]},"homura.vision.data":{folder:[7,0,0,"-"],loaders:[7,0,0,"-"],statistics:[7,0,0,"-"]},"homura.vision.data.folder":{ImageFolder:[7,2,1,""],LabelCorruptedImages:[7,2,1,""],find_classes:[7,1,1,""],has_allowed_extension:[7,1,1,""],make_dataset:[7,1,1,""]},"homura.vision.data.folder.ImageFolder":{IMG_EXTENSIONS:[7,3,1,""]},"homura.vision.data.folder.LabelCorruptedImages":{valset:[7,4,1,""]},"homura.vision.data.loaders":{cifar100_loaders:[7,1,1,""],cifar10_loaders:[7,1,1,""],imagenet_loaders:[7,1,1,""],mnist_loaders:[7,1,1,""]},"homura.vision.data.statistics":{PerChannelStatistics:[7,2,1,""]},"homura.vision.data.statistics.PerChannelStatistics":{estimated:[7,3,1,""],from_batch:[7,4,1,""],from_directory:[7,4,1,""],mean:[7,3,1,""],stdev:[7,3,1,""]},"homura.vision.models":{cifar:[9,0,0,"-"],segmentation:[10,0,0,"-"]},"homura.vision.models.cifar":{densenet:[9,0,0,"-"],resnet:[9,0,0,"-"],wide_resnet:[9,0,0,"-"]},"homura.vision.models.cifar.densenet":{CIFARDenseNet:[9,2,1,""],cifar_densenet100:[9,1,1,""]},"homura.vision.models.cifar.densenet.CIFARDenseNet":{forward:[9,4,1,""],initialize:[9,4,1,""]},"homura.vision.models.cifar.resnet":{PreActResNet:[9,2,1,""],ResNet:[9,2,1,""],preact_resnet110:[9,1,1,""],preact_resnet20:[9,1,1,""],preact_resnet32:[9,1,1,""],preact_resnet56:[9,1,1,""],resnet110:[9,1,1,""],resnet20:[9,1,1,""],resnet32:[9,1,1,""],resnet56:[9,1,1,""]},"homura.vision.models.cifar.resnet.PreActResNet":{forward:[9,4,1,""]},"homura.vision.models.cifar.resnet.ResNet":{forward:[9,4,1,""],initialize:[9,4,1,""]},"homura.vision.models.segmentation":{intialization:[10,0,0,"-"],msdnet:[10,0,0,"-"],unet:[10,0,0,"-"]},"homura.vision.models.segmentation.intialization":{init_parameters:[10,1,1,""]},"homura.vision.models.segmentation.msdnet":{msdnet25:[10,1,1,""],msdnet50:[10,1,1,""]},"homura.vision.models.segmentation.unet":{CustomUNet:[10,2,1,""],unet:[10,1,1,""]},"homura.vision.models.segmentation.unet.CustomUNet":{forward:[10,4,1,""]},"homura.vision.transforms":{erase:[11,0,0,"-"]},"homura.vision.transforms.erase":{RandomErase:[11,2,1,""]},"homura.vision.transforms.erase.RandomErase":{min_ratio:[11,3,1,""]},homura:{debug:[0,0,0,"-"],environment:[0,0,0,"-"],liblog:[0,0,0,"-"],lr_scheduler:[0,0,0,"-"],metrics:[1,0,0,"-"],modules:[2,0,0,"-"],optim:[0,0,0,"-"],utils:[4,0,0,"-"],vision:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"class":[0,1,2,4,5,7,9,10,11],"float":[1,2,3,4,7,11],"function":[0,2,9,10],"int":[0,3,4,5,7],"long":1,"return":[1,2,3,4],"true":[1,2,4],"while":[2,9,10],_batchnorm:2,_dataset:7,_wrapperbas:5,abc:4,accuraci:[1,4],accuracycallback:4,adam:0,add_histogram:5,add_imag:5,add_memo:5,add_scalar:5,add_text:5,affin:2,after_al:[4,5],after_epoch:[4,5],after_iter:[4,5],afterward:[2,9,10],alia:4,all:[0,2,9,10],alpha:0,although:[2,9,10],amsgrad:0,area_ratio:11,arg:4,asgd:0,aspect_ratio:11,attent:[0,12,13],backend:4,backward:0,base:[0,2,4,5,7,9,10,11],base_wrapp:5,batch:7,batch_siz:7,batchnorm:2,before_al:[4,5],before_epoch:[4,5],before_iter:[4,5],beta:0,blob:9,block:9,bmp:7,bn_size:9,bool:[2,3,4,5,7],bxcx:1,calcul:[0,1],call:[2,9,10],callabl:[0,4],callback:[0,12,13],callbacklist:4,can:4,care:[2,9,10],categori:2,categoricalconditionalbatchnorm:2,center:0,cifar100:7,cifar100_load:7,cifar10:7,cifar10_load:7,cifar:[0,6,8],cifar_densenet100:9,cifardensenet:9,class_to_idx:7,classwise_accuraci:1,close:[4,5],collect:4,com:9,common:[0,12,13],comput:[2,9,10],conditional_batchnorm:[0,12,13],config:10,confus:1,confusion_matrix:1,connect:0,contain:[0,12,13],content:[12,13],cooldown:0,copi:4,cosineannealinglr:0,customunet:10,cxc:1,dampen:0,data:[0,4,5,6],data_augment:7,data_load:4,data_parallel:4,dataload:4,dataset:9,debug:[12,13],deepcopi:4,def:4,defin:[2,9,10],densenet:[0,6,8],devic:4,dict:[4,5,7],dim:[2,3],dimens:1,disable_default_handl:0,disable_report_imag:5,disable_report_param:5,discret:[0,2],distribut:7,distributedsupervisedtrain:4,document:12,dropout_r:9,dropout_ratio:2,dure:4,enable_default_handl:0,enable_report_imag:5,enable_report_param:5,env:4,environ:[12,13],epoch:4,eps:[0,2],eras:[0,6],erase_prob:11,estim:7,eta_min:0,everi:[2,9,10],except:[0,12,13],expect:1,exponentiallr:0,extens:7,f1_score:1,facebook:9,factor:0,fals:[0,1,2,4,5,7,9],false_neg:1,false_posit:1,file:7,find_class:7,folder:[0,6],force_download:7,formatt:0,former:[2,9,10],forward:[0,2,9,10],from_batch:7,from_directori:7,gamma:0,gao:9,get_logg:0,get_verb_level:0,github:9,given:4,growth_rat:9,gumbel_sigmoid:3,gumbel_softmax:3,has_allowed_extens:7,histori:4,homura:12,hook:[2,9,10],http:9,idx:5,ignor:[2,9,10],image_kei:5,imagefold:7,imagenet_load:7,img_extens:7,index:[5,12],infer:4,inferenc:[0,12,13],init_channel:9,init_method:4,init_paramet:10,initi:[9,10],input:[0,1,2,3,4,9,10],input_channel:10,instanc:[2,9,10],instead:[2,9,10],intial:[0,6,8],is_train:[3,4],iter:[4,5,7],jpeg:7,jpg:7,kaim:10,kei:[2,4],keyvalattent:2,kwarg:[0,4,5,9],labelcorruptedimag:7,lambd:0,lambdalr:0,last_epoch:0,latter:[2,9,10],level:0,liblog:[12,13],librari:12,like:4,list:5,liuzhuang13:9,load:4,loader:[0,6],log:[0,4,5],log_fil:0,logger:[4,5],loggerreport:5,loggerwrapp:5,loss:[0,4],loss_f:4,losscallback:4,lr_lambda:0,lr_schedul:[4,12,13],lrschedul:[0,4],lua:9,make_dataset:7,make_dir:5,map:[4,5],mask:2,master:9,matrix:1,mean:7,memo:5,method:4,metric:[0,4,12,13],metriccallback:4,mileston:0,min:0,min_lr:0,min_ratio:11,misc:[0,2],mnist:7,mnist_load:7,mode:[0,4],model:[0,4,6],modifi:3,modul:[12,13],module_debugg:0,momentum:[0,2],move:4,msdnet25:10,msdnet50:10,msdnet:[0,6,8],multisteplr:0,mutablemap:4,n_size:9,name:[0,4,5],nccl:4,ndarrai:5,need:[2,9,10],neg:1,nesterov:0,network:1,new_iter:4,none:[0,2,4,5,7],normal:10,num_class:[2,9,10],num_featur:2,num_lay:9,num_sampl:7,num_test_sampl:7,num_train_sampl:7,num_work:7,number:5,numpi:5,object:[0,4,5,7,11],on_memori:7,one:[2,9,10],optim:[4,12,13],optim_cl:0,option:[0,1,4,5],origin:3,output:[1,4],overrid:4,overridden:[2,9,10],override_iter:4,packag:[12,13],pad:9,page:12,param:[1,2,3,4],paramet:[4,10],part:4,pass:[2,9,10],path:[4,5,7],pathlib:[5,7],patienc:0,perchannelstatist:7,perform:[2,9,10],pgm:7,png:7,posit:1,ppm:7,preact_resnet110:9,preact_resnet20:9,preact_resnet32:9,preact_resnet56:9,preactresnet:9,precis:1,propos:9,provid:4,queri:2,random_r:7,random_se:7,randomeras:11,recal:1,recip:[2,9,10],reducelronplateau:0,reduct:9,reflect:9,regist:[2,9,10],register_after_al:4,register_after_epoch:4,register_after_iter:4,register_before_al:4,register_before_epoch:4,register_before_iter:4,rel:0,relu:3,replac:7,report:[0,4],report_freq:5,report_image_freq:5,report_images_freq:5,report_param_freq:5,report_params_freq:5,research:12,resnet110:9,resnet20:9,resnet32:9,resnet56:9,resnet:[0,6,8],result:4,resum:4,rmsprop:0,root:7,run:[2,4,9,10],runner:[0,12,13],save_dir:5,save_freq:4,save_imag:5,save_image_freq:5,save_path:4,scale:2,schdlr_cl:0,schedul:[0,4],score:1,search:12,segment:[0,6,8],semantic_hash:3,sequenc:7,set:4,set_file_handl:0,set_model:0,set_optim:0,set_verb_level:0,sgd:0,shallow:4,shapeerror:4,should:[2,9,10],silent:[2,9,10],sinc:[2,9,10],sourc:[0,1,2,3,4,5,7,9,10,11],specif:1,statist:[0,6],stdev:7,step_siz:0,steplr:0,store:4,str:[0,4,5,7],straight_backprop:3,straight_backprop_relu:3,straight_through_estim:3,subclass:[2,9,10],submodul:[6,8,12,13],subpackag:[12,13],supervisedtrain:4,t_co:5,t_max:0,take:[2,9,10],target:[0,1],temp:3,tensor:[0,1,2,3,4,5,7],tensorboardreport:5,tensorboardwrapp:5,tensortupl:4,test:4,test_data:4,text:5,them:[2,9,10],thi:[2,9,10],threshold:0,threshold_mod:0,tif:7,torch:[0,1,2,3,4,5,7,9,10],tqdmreport:5,tqdmwrapper:5,track_running_stat:2,train:4,train_data:4,trainer:[0,12,13],trainerbas:4,transform:[0,6,7],true_neg:1,true_posit:1,tupl:[0,4,11],unet:[0,6,8],union:5,update_iter:4,update_loss_f:4,update_scheduler_by_epoch:4,use_apex_ddp:4,use_cuda_nonblock:4,use_cudnn_benchmark:4,use_sync_bn:4,used:4,user:4,using:10,util:[0,12,13],val_siz:7,valset:7,valu:[2,4],verb:4,verbos:0,view:4,visdomreport:5,vision:[0,12,13],vt_co:5,weight_decai:0,weightsav:4,welcom:12,wide_resnet:[0,6,8],wise:1,within:[2,9,10],wrapper:[0,4],zero_init_residu:9},titles:["homura package","homura.metrics package","homura.modules package","homura.modules.functions package","homura.utils package","homura.utils.reporter package","homura.vision package","homura.vision.data package","homura.vision.models package","homura.vision.models.cifar package","homura.vision.models.segmentation package","homura.vision.transforms package","Indices and tables","homura"],titleterms:{"function":3,attent:2,callback:[4,5],cifar:9,common:1,conditional_batchnorm:2,contain:4,content:[0,1,2,3,4,5,6,7,8,9,10,11],data:7,debug:0,densenet:9,discret:3,environ:0,eras:11,except:4,folder:7,homura:[0,1,2,3,4,5,6,7,8,9,10,11,13],indic:12,inferenc:4,intial:10,liblog:0,loader:7,lr_schedul:0,metric:1,misc:3,model:[8,9,10],modul:[0,1,2,3,4,5,6,7,8,9,10,11],msdnet:10,optim:0,packag:[0,1,2,3,4,5,6,7,8,9,10,11],report:5,resnet:9,runner:4,segment:10,statist:7,submodul:[0,1,2,3,4,5,7,9,10,11],subpackag:[0,2,4,6,8],tabl:12,trainer:4,transform:11,unet:10,util:[4,5],vision:[6,7,8,9,10,11],wide_resnet:9,wrapper:5}})