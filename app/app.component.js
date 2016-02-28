System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.start = 0;
                    this.time = "0";
                    this.running = "Timer Stopped";
                    this.lastTime = localStorage.getItem("lastTime");
                }
                AppComponent.prototype.startTimer = function () {
                    var _this = this;
                    this.running = "Timer Running";
                    new Notification("Timer Started", {
                        body: "You have started the timer!",
                        icon: "calculator-128.png"
                    });
                    this.timer = setInterval(function () {
                        var timePassed = _this.start++;
                        _this.time = timePassed.toString();
                    }, 60000);
                };
                AppComponent.prototype.stopTimer = function () {
                    clearInterval(this.timer);
                    Notification.requestPermission();
                    new Notification("Time Worked", {
                        body: "You worked for " + this.time + " minutes!",
                        icon: "calculator-128.png"
                    });
                    this.lastTime = "You worked for " + this.time + " minutes on your last stretch!";
                    localStorage.setItem("lastTime", this.lastTime);
                    this.running = "Timer Stopped";
                    this.time = "0";
                    this.start = 0;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        styles: [
                            "\n        footer {\n            position:absolute;\n            width: 100%;\n            bottom: 0px;\n        }\n        \n        #running {\n            text-align: center;\n            margin-top: 3rem;\n            font-size: 2.5em;\n        }\n        \n        #time {\n            text-align: center;\n            font-size: 3em;\n            color: red;\n        }\n        \n        #lastTime {\n            text-align: center;\n        }\n      "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map