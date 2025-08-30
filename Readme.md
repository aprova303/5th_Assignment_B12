Difference amomg getElementById, getElementsByClassName, and querySelector / querySelectorAll:
 1.getElementById : Use for one specific element.for this we need unique id.
 2.getElementByClassName : Use if only need to match by class.finds all element by class name.
 3.querySelector : Finds the first element that matches any CSS selector like id, class, div > p.
 4.querySelectorAll : Finds all elements matching the selector.


To create and insert a new element into the DOM:
 document.createElement("tag") to create it.
 Insert it with appendChild(), append()


 Event Bubbling and how does it work:
 When I click on an element, the event starts at the target element and then bubbles up to its parent, then grandparent, up to the <body> and <html>.


 Event Delegation in JavaScript? Why is it useful:
 attach one event listener to a parent element instead of adding one to every child.
 It works even if new child elements are added dynamically.


 Difference between preventDefault() and stopPropagation() methods:
 preventDefault()
Stops the browser's default action.
 
stopPropagation()
Stops the event from bubbling up to parent elements.