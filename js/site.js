
function showMore(elementID)
{
    var e = document.getElementById(elementID);

    e.style.display = "inline";
}




//https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
function addVisibilityObserver(elementID, visibilityObserverCallback)
{
    let options =
    {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1.0]
    }

    let target = document.querySelector(elementID);
    let observer = new IntersectionObserver(visibilityObserverCallback, options);
    observer.observe(target);
}