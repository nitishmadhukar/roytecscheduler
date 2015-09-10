Ext.define('App.controller.MinuteSchedulerGridController', {
    extend : 'Ext.app.ViewController',
	alias: 'controller.minuteschedulergridcontroller',
	init:function(){
		//
	},
	schedulerColorCoding: function (item, r, tplData, row) {
                    var bgColor;
                    switch (tplData.event.data.Contract) {
                        case '628221' :
                            bgColor = 'lightgray';
                            break;
                        case '628224' :
                            bgColor = 'orange';
                            break;
                        case '622381' :
                            bgColor = 'lightblue';
                            break;
						case '622498' :
							bgColor = 'red'; 
                    }
                    tplData.style = "background-color:" + bgColor;
                    return item.get('Contract');
                }
});