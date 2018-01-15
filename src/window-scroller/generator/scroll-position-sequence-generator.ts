import ScrollPositionCalculatorFunction from "window-scroller/calculator/scroll-position-calculator-function";

export default class ScrollPositionSequenceGenerator {
    private diff: number;
    private spentTime: number;

    constructor(private startPoint: number, private endPoint: number, private period: number, private duration: number,
                private scrollPositionCalculatorFunction: ScrollPositionCalculatorFunction) {
        this.diff = endPoint - startPoint;
        this.spentTime = 0;
    }

    public next(): number {
        this.spentTime += this.period;
        return this.scrollPositionCalculatorFunction
            .calculate(this.spentTime, this.startPoint, this.diff, this.duration);
    }

    public isFinished(): boolean {
        return this.duration < this.spentTime;
    }
}
