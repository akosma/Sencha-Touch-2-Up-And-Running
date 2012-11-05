Ext.define('Chapter3ClassSystem.view.DatesDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'datesdemo',
    requires: 'Ext.DateExtras',    
    getPrefix: function () {
        return 'Ext.Date';
    },

    getFunctions: function () {
        return ['add', 'between', 'clearTime', 'format', 'getDayOfYear',
            'getDaysInMonth', 'getElapsed', 'getFirstDateOfMonth', 
            'getFirstDayOfMonth', 'getGMTOffset', 'getLastDateOfMonth', 
            'getLastDayOfMonth', 'getMonthNumber', 'getShortDayName', 
            'getShortMonthName', 'getSuffix', 'getTimezone', 'getWeekOfYear', 
            'isDST', 'isLeapYear', 'isValid', 'parse'];
    },

    addDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var futureDate = Ext.Date.add(sampleDate, Ext.Date.DAY, 10);
        this.showDate('Future Date', futureDate);
    }, 

    betweenDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var anotherDate = Ext.Date.add(sampleDate, Ext.Date.YEAR, 10);
        console.log('Future Date');
        console.log(this.customFormat(anotherDate));
        var betweenDate = Ext.Date.add(sampleDate, Ext.Date.MONTH, 5);
        console.log('In Between Date');
        console.log(this.customFormat(betweenDate));
        var inBetween = Ext.Date.between(betweenDate, sampleDate, anotherDate);
        console.log('Is date in between? ' + inBetween);
        this.showTitleText('Is date in between?', inBetween);
    },  

    clearTimeDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var noTime = Ext.Date.clearTime(sampleDate);
        this.showDate('Date without time', noTime);
    },

    formatDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var patterns = {
            ISO8601Long:"Y-m-d H:i:s",
            ISO8601Short:"Y-m-d",
            ShortDate: "n/j/Y",
            LongDate: "l, F d, Y",
            FullDateTime: "l, F d, Y g:i:s A",
            MonthDay: "F d",
            ShortTime: "g:i A",
            LongTime: "g:i:s A",
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            YearMonth: "F, Y"
        };
        var key = null;
        var output = [];
        var format = '';
        console.log('Formatted dates:');
        for (key in patterns) {
            if (patterns.hasOwnProperty(key)) {
                format = patterns[key];
                formatted = Ext.Date.format(sampleDate, format);
                console.log(format + ': ' + formatted);
                output.push(formatted);
            }
        }
        this.showTitleText('Formatted dates', output.join('<br>'));
    },

    getDayOfYearDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var dayOfYear = Ext.Date.getDayOfYear(sampleDate);
        console.log('Day of Year: ' + dayOfYear);
        this.showTitleText('Day of Year', dayOfYear);
    },

    getDaysInMonthDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var daysInMonth = Ext.Date.getDaysInMonth(sampleDate);
        console.log('Days in month: ' + daysInMonth);
        this.showTitleText('Days in month', daysInMonth);
    },

    getElapsedDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var anotherDate = Ext.Date.add(sampleDate, Ext.Date.YEAR, 10);
        console.log('Future Date');
        console.log(this.customFormat(anotherDate));
        var elapsed = Ext.Date.getElapsed(sampleDate, anotherDate);
        console.log('Elapsed milliseconds: ' + elapsed);
        this.showTitleText('Elapsed milliseconds', elapsed);
    },

    getFirstDateOfMonthDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var firstDate = Ext.Date.getFirstDateOfMonth(sampleDate);
        console.log('First date in month: ' + firstDate);
        this.showTitleText('First date in month', firstDate);
    },

    getFirstDayOfMonthDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var firstDay = Ext.Date.getFirstDayOfMonth(sampleDate);
        firstDay = Ext.Date.dayNames[firstDay];
        console.log('First day in month: ' + firstDay);
        this.showTitleText('First day in month', firstDay);
    },

    getGMTOffsetDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var offset = Ext.Date.getGMTOffset(sampleDate);
        console.log('GMT offset: ' + offset);
        this.showTitleText('GMT offset', offset);
    },

    getLastDateOfMonthDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var lastDate = Ext.Date.getLastDateOfMonth(sampleDate);
        console.log('Last date in month: ' + lastDate);
        this.showTitleText('Last date in month', lastDate);
    },

    getLastDayOfMonthDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var lastDay = Ext.Date.getLastDayOfMonth(sampleDate);
        lastDay = Ext.Date.dayNames[lastDay];
        console.log('Last day in month: ' + lastDay);
        this.showTitleText('Last day in month', lastDay);
    },

    getMonthNumberDemo: function () {
        var number = Ext.Date.getMonthNumber("June");
        console.log('Month number for June: ' + number);
        this.showTitleText('Month number for June', number);
    },

    getShortDayNameDemo: function () {
        var name = Ext.Date.getShortDayName(4);
        console.log('Short day name: ' + name);
        this.showTitleText('Short day name', name);
    },

    getShortMonthNameDemo: function () {
        var name = Ext.Date.getShortMonthName(4);
        console.log('Short month name: ' + name);
        this.showTitleText('Short month name', name);
    },

    getSuffixDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var suffix = Ext.Date.getSuffix(sampleDate);
        console.log('Suffix: ' + suffix);
        this.showTitleText('Suffix', suffix);
    },

    getTimezoneDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var timezone = Ext.Date.getTimezone(sampleDate);
        console.log('Timezone: ' + timezone);
        this.showTitleText('Timezone', timezone);
    },

    getWeekOfYearDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var week = Ext.Date.getWeekOfYear(sampleDate);
        console.log('Week of year: ' + week);
        this.showTitleText('Week of year', week);
    },

    isDSTDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var isDST = Ext.Date.isDST(sampleDate);
        console.log('Is DST? ' + isDST);
        this.showTitleText('Is DST?', isDST);
    },

    isLeapYearDemo: function () {
        var sampleDate = new Date();
        console.log('Sample Date');
        console.log(this.customFormat(sampleDate));
        var isLeap = Ext.Date.isLeapYear(sampleDate);
        console.log('Is leap year? ' + isLeap);
        this.showTitleText('Is leap year?', isLeap);
    },

    isValidDemo: function () {
        var isValid1 = Ext.Date.isValid(1984, 4, 6);
        var isValid2 = Ext.Date.isValid(355423, 4564564, 23424);
        console.log('isValid1: ' + isValid1);
        console.log('isValid2: ' + isValid2);
        this.showTitleText('Results', [isValid1, isValid2].join('<br>'));
    },

    parseDemo: function () {
        var parsed = Ext.Date.parse('2012-11-15', 'Y-m-d');
        this.showDate('Parsed date', parsed);
    },

    customFormat: function(date) {
        return Ext.Date.format(date, 'Y-m-d H:i:s');
    },

    showDate: function (title, date) {
        var text = this.customFormat(date);
        console.log(title);
        console.log(text);
        this.showTitleText(title, text);
    }
});

