// Native scrolling in browser 
// http://www.sencha.com/forum/showthread.php?110792-Add-support-for-mouse-scrolling-(for-development)/page2
document.addEventListener('mousewheel', function (e) { 
    var el = e.target; 
    var results = []; 
    while (el !== document.body) { 
        if (el && el.className && el.className.indexOf('x-container') >= 0) { 
            var cmp = Ext.getCmp(el.id); 
            if (cmp && 
                typeof cmp.getScrollable == 'function' && 
                cmp.getScrollable()) { 
                var scroller = cmp.getScrollable().getScroller(); 
                if (scroller) { 
                    var offset = {
                        x: 0, 
                        y: -e.wheelDelta * 0.5
                    }; 
                    scroller.fireEvent('scrollstart', 
                                       scroller, 
                                       scroller.position.x, 
                                       scroller.position.y, 
                                       e); 
                    scroller.scrollBy(offset.x, offset.y); 
                    scroller.snapToBoundary(); 
                    scroller.fireEvent('scrollend', 
                                       scroller, 
                                       scroller.position.x, 
                                       scroller.position.y - offset.y); 
                    break; 
                } 
            } 
        } 
        results.push(el = el.parentNode); 
    } 
    return results; 
}, false);

