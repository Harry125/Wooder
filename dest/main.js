let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');

btnmenu.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('clicked');
})

let langCurrent = document.querySelector('.lang__current');
let langOpt = document.querySelector('.lang__option');
let langItems = document.querySelectorAll('.lang__option .lang__option-item');
let langSpan = document.querySelector('.lang__current span');
langCurrent.addEventListener('click', function(e) {
    e.stopPropagation();
    langOpt.classList.toggle('active');
})

langItems.forEach(function(item) {
    item.addEventListener('click', function() {
        let textItem = this.textContent;
        let textTemp = langSpan.textContent;
        langSpan.innerHTML = textItem;
        this.textContent = textTemp;
        langOpt.classList.remove('active');
    })
})

langOpt.addEventListener('click', function(e) {
    e.stopPropagation();
})

document.addEventListener('click', function() {
    langOpt.classList.remove('active');
})


/* Add background header when sroll */
let header = document.querySelector('header');
let heightHeader = header.offsetHeight;

function changeBgHeader() {
    let postionScroll = window.pageYOffset;
    let slider = document.querySelector('.slider');
    let heightSlider = slider.offsetHeight;
  
    if(postionScroll > heightSlider - heightHeader) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}

/* Back to top */
let backtotop = document.querySelector('.backtotop'); 
let totop = document.querySelector('.totop');

function showBackToTop() {
    let postionScroll = window.pageYOffset;
    let positionProduct = document.querySelector('.products').offsetTop;

    if(postionScroll > positionProduct - heightHeader) {
        totop.classList.add('active');
    }
    else {
        totop.classList.remove('active');
    }
}

function BackTopTop() {
    window.scrollTo({
        top: 0
    })
}

backtotop.addEventListener('click', BackTopTop);
totop.addEventListener('click', BackTopTop);

window.addEventListener('scroll', function(){
    changeBgHeader();
    showBackToTop();
    ActiveMenu();
})

/* Menu */
let menus = document.querySelectorAll('header .menu a');
let sections = [];

function removeActiveMenu() {
    menus.forEach(function(menu_element, menu_index){
        menu_element.classList.remove('active');
    })
}

menus.forEach(function(element, index) {
    let className = element.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + className);
    sections.push(section);
    element.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop - heightHeader + 1,
        });
        removeActiveMenu();
        element.classList.add('active');
    })
})

function ActiveMenu() {
    let postionScroll = window.pageYOffset;
    sections.forEach(function(section, index) {
        if(postionScroll > section.o2ffsetTop - heightHeader && postionScroll < section.offsetTop + section.offsetHeight) {
            removeActiveMenu();
            menus[index].classList.add('active');
        }
        else {
            menus[index].classList.remove('active');
        }
    })
}

window.addEventListener('resize', function() {
    let wWindow = window.innerWidth;
    if(wWindow > 991) {
        nav.classList.remove('active');
        btnmenu.classList.remove('clicked');
    }
})

/* Slider */
/* let listItemSlider = document.querySelectorAll('.slider__item');
let currentSlider = 0;
let number = document.querySelector('.paging .paging__number span');
let dot_li = document.querySelectorAll('.paging .paging__dotted li');
listItemSlider.forEach(function(itemSlider, indexSlider) {
    if(itemSlider.classList.contains('--active')) {
        currentSlider = indexSlider;
    }
})

function showNumber(index) {
    number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');
} */

/* Default Active*/
/* showNumber(currentSlider + 1);
dot_li[currentSlider].classList.add('active');

document.querySelector('.control__btn.--prev').addEventListener('click', function() {
    if(currentSlider > 0) {
        goTo(currentSlider - 1);
    }
    else {
        goTo(listItemSlider.length - 1);
    }
})

document.querySelector('.control__btn.--next').addEventListener('click', function() {
    if(currentSlider < listItemSlider.length - 1) {
        goTo(currentSlider + 1);
    }
    else {
        goTo(0);
    }
})

function goTo(index) {
    listItemSlider[currentSlider].classList.remove('--active');
    listItemSlider[index].classList.add('--active');
    dot_li[currentSlider].classList.remove('active');
    dot_li[index].classList.add('active');    
    currentSlider = index;
    showNumber(currentSlider);
}

dot_li.forEach(function(li, index) {
    li.addEventListener('click', function() {
        goTo(index);
    })
}) */

/* Pop up video */
/* let button_video = document.querySelectorAll('.video__item-img');
let popup__video = document.querySelector('.popup-video');
let close_popup_video = document.querySelector('.popup-video .close');
let iframe = document.querySelector('iframe');

button_video.forEach(function(button) {
    button.addEventListener('click', function() {
        let video_id = button.querySelector('img[alt=play__button]').dataset.videoId;
        iframe.src = `https://www.youtube.com/embed/${video_id}`;
        popup__video.style.display = 'flex';
    }) 
})

close_popup_video.addEventListener('click', function() {
    iframe.src = '';
    popup__video.style.display = 'none';
})

popup__video.addEventListener('click', function() {
    iframe.src = '';
    popup__video.style.display = 'none';
}) */

/* Jquery */
$(document).ready(function() {
    /* Popup video */
    $(document).on('click', '.video__item-img', function() {
        let index = $(this).parent().index();
        let video_id = $('img[alt=play__button]').eq(index).data('video-id');
        $('iframe').attr("src",`https://www.youtube.com/embed/${video_id}`);
        $('.popup-video').css("display", "flex");
    })

    $(document).on('click', '.popup-video .close', function() {
        $('iframe').attr('src', '');
        $('.popup-video').css("display", "none");
    })
    $(document).on('click', '.popup-video', function() {
        $('iframe').attr('src', '');
        $('.popup-video').css("display", "none");
    })

    /* Tabs */
    let tabList = $('.news__item-wrap');

    $(document).on('click','.news__tabs .tab', function() {
        let index = $(this).index();
        $(this).addClass('active');
        $(this).siblings('.tab').removeClass('active');
        tabList.eq(index).addClass('active');
        tabList.eq(index).siblings('.news__item-wrap').removeClass('active');      
    })

    /* Slider */
    /* let listItemSlider = $('.slider__item');
    let number = $('.paging .paging__number span');
    let dot_li = $('.paging .paging__dotted li');
    let currentSlider = 0;
    
    listItemSlider.each(function(index) {
        currentSlider = $(this).hasClass('active') ? index : currentSlider;
    })

    function showNumber(index) {
        number.html((index + 1).toString().padStart(2, '0'));
    }

    showNumber(currentSlider);
    dot_li.eq(currentSlider).addClass('active');
    
    function goTo(index) {
        listItemSlider.eq(currentSlider).removeClass('--active');
        listItemSlider.eq(index).addClass('--active');
        dot_li.eq(currentSlider).removeClass('active');
        dot_li.eq(index).addClass('active');
        currentSlider = index;
        showNumber(currentSlider);
    }

    $(document).on('click','.control__btn.--next',function() {
        if(currentSlider < listItemSlider.length - 1) {
            goTo(currentSlider + 1);
        }
        else {
            goTo(0);
        }
    })

    $(document).on('click','.control__btn.--prev',function() {
        if(currentSlider > 0) {
            goTo(currentSlider - 1);
        }
        else {
            goTo(listItemSlider.length - 1);
        }
    })

    dot_li.each(function(index) {
        $(this).click(function() {
            goTo(index);
        })
    }) */
    
    /* Progress Bar */
    function homePage() {
        if($('.homepage').length) {
            $(window).scroll(function() {
                let bgHeader = $('header');
                let headProgress = $('.header__progress');
                let pageHeight = $(document).height() - $(window).height();
                let scrollTop = $(window).scrollTop();
                let progress = (scrollTop / pageHeight) * 100;
                if(bgHeader.hasClass('active')) {
                    headProgress.css('width', progress + '%');
                }
                else {
                    headProgress.css('width', '');
                }
            })
        }
    }

    homePage();
})

/* Flickity */
let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.slider__bottom .paging .paging__dotted');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.slider__bottom .paging .paging__number span');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0));
        }
    }
})

$('.slider__bottom .control .--prev').on('click', function() {
    $carousel.flickity('previous');
})

$('.slider__bottom .control .--next').on('click', function() {
    $carousel.flickity('next');
})
let $photos = $('.photos .list');
let $progressBar = $('.photos .controls .progress');
$photos.flickity({
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 3,
    fullscreen: true,
})

$photos.on('scroll.flickity', function (event, progress) {
    progress = Math.max(0.05, Math.min(1, progress));
    $progressBar.width(progress * 100 + '%');
});

/* Photoswipe */
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

initPhotoSwipeFromDOM('.carousel-img');
