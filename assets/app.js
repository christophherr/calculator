var app = new Vue({
    el: '#calculator',
    data: {
        calculated: false,
        result: ''
    },
    mounted: function() {
        window.addEventListener(
            'keyup',
            function(event) {
                if (event.keyCode === 109 || event.keyCode === 189) {
                    app.show('-');
                }
                if (event.keyCode === 107) {
                    app.show('+');
                }
                if (
                    event.keyCode === 111 ||
                    event.keyCode === 191 ||
                    event.keyCode === 58
                ) {
                    app.show('/');
                }
                if (event.keyCode === 106 || event.keyCode === 88) {
                    app.show('*');
                }
                if (event.keyCode === 187 || event.keyCode === 61) {
                    app.show('=');
                }
                if (event.keyCode === 48) {
                    app.showNumbers(0);
                }
                if (event.keyCode === 49) {
                    app.showNumbers(1);
                }
                if (event.keyCode === 50) {
                    app.showNumbers(2);
                }
                if (event.keyCode === 51) {
                    app.showNumbers(3);
                }
                if (event.keyCode === 52) {
                    app.showNumbers(4);
                }
                if (event.keyCode === 53) {
                    app.showNumbers(5);
                }
                if (event.keyCode === 54) {
                    app.showNumbers(6);
                }
                if (event.keyCode === 55) {
                    app.showNumbers(7);
                }
                if (event.keyCode === 56) {
                    app.showNumbers(8);
                }
                if (event.keyCode === 57) {
                    app.showNumbers(9);
                }
                if (
                    event.keyCode === 110 ||
                    event.keyCode === 108 ||
                    event.keyCode === 190 ||
                    event.keyCode === 194
                ) {
                    app.showNumbers('.');
                }
                if (event.keyCode === 8 || event.keyCode === 27) {
                    app.clear();
                }
                if (
                    event.keyCode === 61 ||
                    event.keyCode === 13 ||
                    event.keyCode === 187
                ) {
                    app.calculate();
                }
            },
            true
        );
    },
    methods: {
        showNumbers: function(value) {
            if (this.calculated) {
                this.clear();
                this.calculated = false;
            }
            this.show(value);
        },
        show: function(value) {
            this.calculated = false;
            this.result += value;
        },
        calculate: function() {
            this.calculated = true;
            this.result = math.eval(this.result);
        },
        clear: function() {
            this.result = '';
        }
    }
});
