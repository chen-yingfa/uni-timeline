module.exports = class Time {
    arrMonthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    constructor(year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    numDayInMonth(month, year) {
        if (month == 2 && this.isLeapYear(year)){
            return 29;
        } else {
            return this.arrMonthDay[month];
        }
    }

    read(){
        console.log(this.year + "-" + this.month.toString().padStart(2,'0') + "-" + this.day.toString().padStart(2,'0'));
    }

    toStr(){
        return this.year.toString() + '-' + this.month.toString().padStart(2, '0') + '-' + this.day.toString().padStart(2, '0');
    }

    nextDay(){
        var ret = new Time(this.year, this.month, this.day);
        ret.incrementDay();
        return ret;
    }

    prevDay(){
        var ret = new Time(this.year, this.month, this.day);
        ret.decrementDay();
        return ret;
    }

    decrementDay(){
        this.day--;
        if (this.day < 1) {
            this.month--;
            if (this.month === 0) {
                this.day = 31;
            } else {
                this.day = this.numDayInMonth(this.month, this.year);
            }
        } 
        if (this.month < 1) {
            this.year --;
            this.month = 12;
        }
    }
    
    incrementDay(){
        this.day++;
        if (this.day > this.numDayInMonth(this.month, this.year)) {
            this.month++;
            this.day = 1;
        }
        if (this.month > 12) {
            this.year++;
            this.month = 1;
        }
    }

    addTime(time){
        var numDay = time.toDay();
        for (var i = 0; i < numDay; i++) {
            this.incrementDay();
        }
    }

    isLeapYear(year){
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            return true;
        }
        else {
            return false;
        }
    }

    toDay(){
        let ret = this.day;
        for (var i = 0; i < this.year; i++){
            if (this.isLeapYear(i)){
                ret += 366;
            } else {
                ret += 365;
            }
        }
        for (var i = 0; i < this.month; i++){
            ret += this.numDayInMonth(i, this.year);
        }
        return ret;
    }
}