Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

        launch: function() {
            var c = Ext.create('Ext.Container', {
                items: [
                    {
                    xtype: 'rallyprojectpicker',
                        listeners:{
                            change: function(combobox){
                                    this._onProjectSelected(combobox.getSelectedRecord());
                            },
                            scope: this
                        }
                    }
                ],
            });
            this.add(c);
        },
        
        _onProjectSelected:function(record){
            var project = record.data['_ref'];
            console.log('project', project);
            
            
            var u = Ext.create('Rally.ui.combobox.UserComboBox',{
                project: project,
                listeners:{
   			ready: function(combobox){
                                this._onUserSelected(combobox.getRecord());
   			},
   			select: function(combobox){
                                this._onUserSelected(combobox.getRecord());
   			},
   			scope: this
   		}
            });
            this.add(u);
        },
        
        _onUserSelected:function(record){
            var user = record.data['_ref'];
            console.log('user', user);
        }
});