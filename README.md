# Window Scroller

Window Scroller is JS library that provides scrolling to specific element on anchor click functionality.    

## Installation

Npm:
``npm install syzygy-window-scroller``

Yarn:
``yarn add syzygy-window-scroller``

## Examples

ES6 Import:
 
```js
import WindowScrollerFactory from 'syzygy-window-scroller';
```

Node require: 

```js
const windowScrollerFactory = require('syzygy-window-scroller').default;
```

Example without resolvers:

```js
WindowScrollerFactory.create({
    selector: '.window-scroller',           //selector by which elements are chosen
    locationAttribute: 'data-scroll-to',    //anchor attribute of element
    scrollDefaultPosition: 0,               //position to which library scrolls where element was not found 
    offset: 300,                            //offset which is applied to every scroll (useful for menu) 
    scrollDuration: 1000,                   //duration of scroll animation (in ms)
    scrollPeriod: 20,                       //timeout between every scroll position update (in ms)
});
```

Custom resolvers example:

```js
WindowScrollerFactory.create({
        elementLinkingAnchorResolver: (element) => {         // resolves anchor of clicked element
            return element.dataset.scrollTo.substring(1);       
        },
    
        elementByAnchorResolver: (anchor) => {               // resolves element to scroll by anchor
            return document.getElementById(anchor);
        }
});
```

## Parameters

Name | Description | Default behaviour
--- | --- | ---
`selector: string` | Selector by which anchor elements are chosen | equals `'.window-scroller'`
`locationAttribute: string` | Anchor attribute of element | equals `data-scroll-to`
`scrollDefaultPosition: number` | Position to which window is scrolled where element was not found | equals `0` 
`offset: number` | Offset which is applied to every scroll (useful for menu) | equals `0`
`scrollDuration: number` | Duration of scroll animation (in ms) | equals `5000`
`scrollPeriod: number` | Timeout between every scroll position update (in ms) | equals `20`
`linkingElementsResolver: () => Elements[]` | Resolver of anchor elements (overrides `selector`) | uses `selector` to find elements
`elementLinkingAnchorResolver: (el: Element) => string` | Resolves given element anchor (overrides `locationAttribute`) | uses `attribute` to resolve anchor
`elementByAnchorResolver: (anchor: string) => Element` | Resolves element by anchor (overrides `locationAttribute`) | Resolves element by id as given anchor
`elementScrollPositionResolver: (el: Element, windowEl: Element, offsetResolver: (el: Element) => number) => Element` | Resolves position to scroll by element | gets elements top position and subtracts offset
`scrollOffsetResolver: (el: Element, windowEl: Element)` | Resolver offset for element (overrides `offset`) | uses `offset`
`scrollPositionCalculatorFunction: (spentTime: number, startPoint: number, difference: number, duration: number) =>  number` | Resolves position to scroll in specified time | uses `easeInOutQuad` function 
