"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var SimpleDate_1 = require("../SimpleDate");
(0, mocha_1.describe)('index', function () {
    (0, mocha_1.describe)('new SimpleDate() without parameters', function () {
        (0, mocha_1.it)('new SimpleDate() without parameters should be today (except super rare cases when the test is running at the time 23:59:59.999)', function () {
            chai_1.assert.equal(SimpleDate_1.SimpleDate.today().isToday(), true);
        });
    });
    (0, mocha_1.describe)('#addDays', function () {
        (0, mocha_1.it)('Add 1 day', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-01-10').addDays(1).getRaw(), '2020-01-11');
        });
        (0, mocha_1.it)('Add 1 day to January 30', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-01-30').addDays(1).getRaw(), '2020-01-31');
        });
        (0, mocha_1.it)('Add 1 day, February 28, leap year', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-02-28').addDays(1).getRaw(), '2020-02-29');
        });
        (0, mocha_1.it)('Add 1 day with month overflow, January 31', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-01-31').addDays(1).getRaw(), '2020-02-01');
        });
        (0, mocha_1.it)('Add 1 day with month overflow, April 30', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-04-30').addDays(1).getRaw(), '2020-05-01');
        });
        (0, mocha_1.it)('Add 1 day with month overflow in February, non-leap year', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2021-02-28').addDays(1).getRaw(), '2021-03-01');
        });
        (0, mocha_1.it)('Add 1 day with month overflow in February, leap year', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-02-29').addDays(1).getRaw(), '2020-03-01');
        });
        (0, mocha_1.it)('Add 1 day with month and year overflow', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2019-12-31').addDays(1).getRaw(), '2020-01-01');
        });
        (0, mocha_1.it)('Subtract 1 day', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-01-10').addDays(-1).getRaw(), '2020-01-09');
        });
        (0, mocha_1.it)('Subtract 1 day with month overflow, February 1', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-02-01').addDays(-1).getRaw(), '2020-01-31');
        });
        (0, mocha_1.it)('Subtract 1 day, March 1, non-leap year', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2021-03-01').addDays(-1).getRaw(), '2021-02-28');
        });
        (0, mocha_1.it)('Subtract 1 day, March 1, leap year', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-03-01').addDays(-1).getRaw(), '2020-02-29');
        });
        (0, mocha_1.it)('Subtract 1 day with month overflow, May 1', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-05-01').addDays(-1).getRaw(), '2020-04-30');
        });
        (0, mocha_1.it)('Subtract 1 day with month and year overflow', function () {
            chai_1.assert.deepStrictEqual(new SimpleDate_1.SimpleDate('2020-01-01').addDays(-1).getRaw(), '2019-12-31');
        });
    });
    (0, mocha_1.describe)('#getIsoDate()', function () {
        (0, mocha_1.it)('getIsoDate should return correct ISO 8601 date', function () {
            var actual = new SimpleDate_1.SimpleDate("2023-02-11", 60).getIsoDate();
            chai_1.assert.equal(actual, "2023-02-11T00:00:00.000+01:00");
        });
        (0, mocha_1.it)('getIsoDate should return correct ISO 8601 date with negative TZ offset', function () {
            var actual = new SimpleDate_1.SimpleDate("2023-02-11", -60).getIsoDate();
            chai_1.assert.equal(actual, "2023-02-11T00:00:00.000-01:00");
        });
    });
    (0, mocha_1.describe)('#toJsDate()', function () {
        (0, mocha_1.it)('toJsDate should return correct Date object', function () {
            var actual = new SimpleDate_1.SimpleDate("2023-02-11").toJsDate();
            chai_1.assert.equal(typeof actual, "object");
            chai_1.assert.equal(actual.toISOString(), "2023-02-11T01:00:00.000Z");
        });
    });
    (0, mocha_1.describe)('#getDayOfWeek()', function () {
        (0, mocha_1.it)('getDayOfWeek should return 6 for new SimpleDate("2023-02-11")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-11").getDayOfWeek(), 6);
        });
    });
    (0, mocha_1.describe)('#getDayNameInEnglish()', function () {
        (0, mocha_1.it)('getDayNameInEnglish should return Sunday for new SimpleDate("2023-02-05")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-05").getDayNameInEnglish(), 'Sunday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Monday for new SimpleDate("2023-02-06")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-06").getDayNameInEnglish(), 'Monday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Tuesday for new SimpleDate("2023-02-07")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-07").getDayNameInEnglish(), 'Tuesday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Wednesday for new SimpleDate("2023-02-08")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-08").getDayNameInEnglish(), 'Wednesday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Thursday for new SimpleDate("2023-02-09")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-09").getDayNameInEnglish(), 'Thursday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Friday for new SimpleDate("2023-02-10")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-10").getDayNameInEnglish(), 'Friday');
        });
        (0, mocha_1.it)('getDayNameInEnglish should return Saturday for new SimpleDate("2023-02-11")', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate("2023-02-11").getDayNameInEnglish(), 'Saturday');
        });
    });
    (0, mocha_1.describe)('#today()', function () {
        (0, mocha_1.it)('today().isToday() should always be true (except super rare cases when the test is running at the time 23:59:59.999)', function () {
            chai_1.assert.equal(SimpleDate_1.SimpleDate.today().isToday(), true);
        });
    });
    (0, mocha_1.describe)('#isBetweenInclusive', function () {
        (0, mocha_1.it)('isBetweenInclusive() returns true', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-01').isBetweenInclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-03-01')), true);
        });
        (0, mocha_1.it)('isBetweenInclusive() returns false because this is before the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').isBetweenInclusive(new SimpleDate_1.SimpleDate('2023-02-01'), new SimpleDate_1.SimpleDate('2023-03-01')), false);
        });
        (0, mocha_1.it)('isBetweenInclusive() returns true because this is on the left edge of the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').isBetweenInclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), true);
        });
        (0, mocha_1.it)('isBetweenInclusive() returns false because this is after the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-03-01').isBetweenInclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), false);
        });
        (0, mocha_1.it)('isBetweenInclusive() returns true because this is on the right edge of the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-01').isBetweenInclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), true);
        });
    });
    (0, mocha_1.describe)('#isBetweenExclusive', function () {
        (0, mocha_1.it)('isBetweenExclusive() returns true', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-01').isBetweenExclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-03-01')), true);
        });
        (0, mocha_1.it)('isBetweenExclusive() returns false because this is before the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').isBetweenExclusive(new SimpleDate_1.SimpleDate('2023-02-01'), new SimpleDate_1.SimpleDate('2023-03-01')), false);
        });
        (0, mocha_1.it)('isBetweenExclusive() returns false because this is on the left edge of the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').isBetweenExclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), false);
        });
        (0, mocha_1.it)('isBetweenExclusive() returns false because this is after the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-03-01').isBetweenExclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), false);
        });
        (0, mocha_1.it)('isBetweenExclusive() returns true because this is on the right edge of the interval', function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-01').isBetweenExclusive(new SimpleDate_1.SimpleDate('2023-01-01'), new SimpleDate_1.SimpleDate('2023-02-01')), false);
        });
    });
    (0, mocha_1.describe)('#daysBetween', function () {
        (0, mocha_1.it)("new SimpleDate('2023-01-01').daysBetween(new SimpleDate('2023-01-02')) should return 1", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').daysBetween(new SimpleDate_1.SimpleDate('2023-01-02')), 1);
        });
        (0, mocha_1.it)("new SimpleDate('2023-01-02').daysBetween(new SimpleDate('2023-01-01')) should return -1", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-02').daysBetween(new SimpleDate_1.SimpleDate('2023-01-01')), -1);
        });
        (0, mocha_1.it)("new SimpleDate('2023-01-01').daysBetween(new SimpleDate('2023-01-11')) should return 10", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-01-01').daysBetween(new SimpleDate_1.SimpleDate('2023-01-11')), 10);
        });
        (0, mocha_1.it)("new SimpleDate('2023-02-28').daysBetween(new SimpleDate('2023-02-01')) should return 1", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-28').daysBetween(new SimpleDate_1.SimpleDate('2023-03-01')), 1);
        });
        (0, mocha_1.it)("new SimpleDate('2024-02-28').daysBetween(new SimpleDate('2024-02-01')) should return 2", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2024-02-28').daysBetween(new SimpleDate_1.SimpleDate('2024-03-01')), 2);
        });
    });
    (0, mocha_1.describe)('#getComponents', function () {
        (0, mocha_1.it)("SimpleDate('2023-02-01').getComponents() should return {year: 2023, month: 2, day: 1}", function () {
            chai_1.assert.deepEqual(new SimpleDate_1.SimpleDate('2023-02-01').getComponents(), { year: 2023, month: 2, day: 1 });
        });
    });
    (0, mocha_1.describe)('#firstDayOfWeek', function () {
        (0, mocha_1.it)("SimpleDate('2023-02-20').firstDayOfWeek(WeekStartDay.MONDAY).getRaw() should return '2023-02-20'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-20').firstDayOfWeek(SimpleDate_1.WeekStartDay.MONDAY).getRaw(), '2023-02-20');
        });
        (0, mocha_1.it)("SimpleDate('2023-02-20').firstDayOfWeek(WeekStartDay.SUNDAY).getRaw() should return '2023-02-19'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-20').firstDayOfWeek(SimpleDate_1.WeekStartDay.SUNDAY).getRaw(), '2023-02-19');
        });
        (0, mocha_1.it)("SimpleDate('2023-02-23').firstDayOfWeek(WeekStartDay.MONDAY).getRaw() should return '2023-02-20'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-23').firstDayOfWeek(SimpleDate_1.WeekStartDay.MONDAY).getRaw(), '2023-02-20');
        });
        (0, mocha_1.it)("SimpleDate('2023-02-23').firstDayOfWeek(WeekStartDay.SUNDAY).getRaw() should return '2023-02-19'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-23').firstDayOfWeek(SimpleDate_1.WeekStartDay.SUNDAY).getRaw(), '2023-02-19');
        });
        (0, mocha_1.it)("SimpleDate('2023-02-26').firstDayOfWeek(WeekStartDay.MONDAY).getRaw() should return '2023-02-20'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-26').firstDayOfWeek(SimpleDate_1.WeekStartDay.MONDAY).getRaw(), '2023-02-20');
        });
        (0, mocha_1.it)("SimpleDate('2023-02-26').firstDayOfWeek(WeekStartDay.SUNDAY).getRaw() should return '2023-02-26'", function () {
            chai_1.assert.equal(new SimpleDate_1.SimpleDate('2023-02-26').firstDayOfWeek(SimpleDate_1.WeekStartDay.SUNDAY).getRaw(), '2023-02-26');
        });
    });
});
//# sourceMappingURL=index.spec.js.map