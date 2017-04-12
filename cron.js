/**
 * TODO 하루에 한번 현질 만료된 사람찾기
 *
 **/
process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'development';



	var app	 			= require('app'),

	CronJob			= require('cron');

    /**
     * Seconds: 0-59
     * Minutes: 0-59
     * Hours: 0-23
     * Day of Month: 1-31
     * Months: 0-11
     * Day of Week: 0-6
     *
     * 매일 00시에
     **/

var job1 = new cron.CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('job 1 ticked');
    },
    start: false,
    timeZone: 'Asia/Seoul'
});

var job2 = new cron.CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('job 2 ticked');
    },
    start: false,
    timeZone: 'Asia/Seoul'
});

console.log('job1 status', job1.running); // job1 status undefined
console.log('job2 status', job2.running); // job2 status undefined

job1.start(); // job 1 started

console.log('job1 status', job1.running); // job1 status true
console.log('job2 status', job2.running); // job2 status undefined

