function autoScroll(dom: HTMLElement, t = 10) {
  dom.scrollTop = 0;
  const scroll = () => {
    if (!scrollStart(dom)) {
      clearInterval(timer);
    }
  };
  let timer = null;
  dom.onmouseover = function () {
    timer = setInterval(scroll, t);
  };
  dom.onmouseout = function () {
    clearInterval(timer);
  };
}

// 开始滚动函数
function scrollStart(dom: HTMLElement) {
  if (dom.scrollTop > 10000) {
    return false;
  }
  dom.scrollTop += 100;
  return true;
}

export default autoScroll;
