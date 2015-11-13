
var Sidebar = function Sidebar(options) {
    'use strict';
    return App.Common.View.call(this, options);
};

Sidebar.prototype = Object.create(App.Common.View.prototype);
Sidebar.prototype.constructor = Sidebar;

Sidebar.prototype.controller = function(opts) {
    if (!this.get('initialized')) {
        // Set item status as initialized
        this.set('initialized', true);
        // Patch component object
        this.component(opts);
        // Link stylesheet
        this.stylesheet(['components/sidebar.css']);
        // Create and modifiy element
        this.set('ui.component.newbutton', new App.Components.Button({
            icon : 'icon_add.svg',
            name : 'New Shot',
            style: {
                'padding': '0px',
                'margin' : '10px'
            },
            menu: new App.Components.DropdownMenu({
                for: this.id(),
                items: [
                    new App.Components.SubMenu({
                        name: 'New Bucket',
                        events: {
                            onclick: function(e) {
                                this.log('bucket');
                            }
                        }
                    }),
                    new App.Components.SubMenu({
                        name: 'New List',
                        events: {
                            onclick: function(e) {
                                this.log('list');
                            }
                        }
                    })
                ]
            }),
            events: {
                onclick: function(e) {
                    console.log(this);
                }
            }
        }));
    }
};

Sidebar.prototype.view = function() {
    return m('nav', {
        id: this.id()
    }, [
        m.component(this.get('ui.component.newbutton'))
    ]);
};

App.Components.Sidebar = Sidebar;

