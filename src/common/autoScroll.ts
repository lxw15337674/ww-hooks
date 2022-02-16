function autoScroll(dom: HTMLElement, t = 10) {
  const scroll = () => {
    if (!scrollStart(dom)) {
      clearInterval(timer);
    }
  };
  let timer = null;
  const start = () => {
    timer = setInterval(scroll, t);
  };
  const cancel = () => {
    clearInterval(timer);
  };
  return { start, cancel };
}

// 开始滚动函数
function scrollStart(dom: HTMLElement) {
  if (dom.clientHeight > dom.scrollTop) {
    return false;
  }
  dom.scrollTop += 100;
  return true;
}

export default autoScroll;
