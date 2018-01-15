import ScrollPositionCalculatorFunction from "window-scroller/calculator/scroll-position-calculator-function";
import ScrollPositionSequenceGenerator from "window-scroller/generator/scroll-position-sequence-generator";

export default class ScrollPositionSequenceGeneratorFactory {

    public create(startPoint: number, endPoint: number, period: number, duration: number,
                  scrollPositionCalculatorFunction: ScrollPositionCalculatorFunction): ScrollPositionSequenceGenerator {
        return new ScrollPositionSequenceGenerator(startPoint, endPoint,
            period, duration, scrollPositionCalculatorFunction);
    }
}
