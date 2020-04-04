module.exports = class Event{
    constructor(id = 0, year, month, day, title, description, significance) {
        this.id = id;
        this.time = new Time(year, month, day);
        this.title = title;
        this.description = description;
        this.significance = significance;
    }

    toStr(){
        ret = this.id.toString() + ',' + this.time.toStr();
        ret += ',' + this.title + ',' + this.description + ',' + this.significance.toString();
        return ret;
    }
}