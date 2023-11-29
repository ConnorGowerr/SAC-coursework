function theDOMElementWalker(node) {

    if (node.nodeType == 1) {
        console.log(node)
        node = node.firstChild;
        while (node) {
            console.log(node.nodeType);
            theDOMElementWalker(node);
            console.log("Value: " + node.textContent);
            node = node.nextSibling;
        }
    }
}

let list = document.querySelector("article");
theDOMElementWalker(list);