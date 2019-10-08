import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-stop-watch',
    templateUrl: './stop-watch.component.html',
    styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
    @Input() user = 'User';
    @Output() listenClick = new EventEmitter();
    timerText = '00';
    timerStarted = false;
    timer = 0;
    private timerObservable: Subscription;

    constructor() { }

    ngOnInit() {
    }

    private convertSecondsToHMS(seconds: number): string {
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);

        // var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
        var mDisplay = m > 0 ? m < 10 ? '0' + m + ': ' : m + ': ' : '';
        var sDisplay = s < 10 ? '0' + s : s;
        return mDisplay + sDisplay;
    }

    startWatch() {
        this.timerObservable = interval(1000).subscribe(timer => {
            this.timer = this.timer + 1;
            this.timerText = this.convertSecondsToHMS(this.timer);
        });
        this.timerStarted = true;
        this.listenClick.emit('Stop-watch started....');
    }

    pauseWatch() {
        this.timerObservable.unsubscribe();
        this.timerStarted = false;
        this.listenClick.emit('Stop-watch paused....');
    }

    resetWatch() {
        this.timer = 0;
        this.timerText = '00';
        this.timerStarted = false;
        this.timerObservable.unsubscribe();
        this.listenClick.emit('Stop-watch reseted....');
    }

}
