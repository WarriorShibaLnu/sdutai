        let wrap = document.getElementById('wrap');
        let pages = document.querySelectorAll('.page');
        let pageNum = pages.length;
        const pageHeight = 936;
        let curIndex = 1;
        let isScrolling = false;

        function scrollToPage(index) {
            if (index < 1 || index > pageNum) return;
            
            let startTop = parseFloat(getComputedStyle(wrap).getPropertyValue('top'));
            let targetTop = -pageHeight * (index - 1);

            let start = performance.now();

            function step(time) {
                time -= start;
                let progress = Math.min(1, time / 600);
                wrap.style.top = `${startTop + (targetTop - startTop) * progress}px`;
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    curIndex = index;
                }
            }

            requestAnimationFrame(step);
        }

        function handleScroll(event) {
            if (isScrolling) return;
            isScrolling = true;
            setTimeout(() => { isScrolling = false; }, 500);

            let deltaY = event.deltaY || -event.wheelDelta / 40;
            if (deltaY > 0 && curIndex < pageNum) {
                scrollToPage(curIndex + 1);
            } else if (deltaY < 0 && curIndex > 1) {
                scrollToPage(curIndex - 1);
            }
        }

        document.addEventListener('wheel', handleScroll, { passive: true });

        // 初始化页面加载完成后才允许滚动
        window.addEventListener('load', () => {
            isScrolling = false;
        });