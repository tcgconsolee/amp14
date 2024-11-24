var d = new Date().toUTCString();
var time = d.split(" ")[4].split(":")[0] + ":" + d.split(" ")[4].split(":")[1]
$(".time span").html(time)
var t = (60-d.split(" ")[4].split(":")[2])
setTimeout(() => {
    var d = new Date().toUTCString();
    var time = d.split(" ")[4].split(":")[0] + ":" + d.split(" ")[4].split(":")[1]
    $(".time span").html(time)
    setInterval(() => {
        var d = new Date().toUTCString();
        var time = d.split(" ")[4].split(":")[0] + ":" + d.split(" ")[4].split(":")[1]
        $(".time span").html(time)
    }, 60000);
}, t*1000);

$(document).mousemove(function(e) {
    $(".cursor").css("left", e.pageX);
    $(".cursor").css("top", e.pageY);
})
$("a").mouseenter(function() {
    $(".cursor").animate({opacity: "1"}, 500)
})
$("a").mouseleave(function() {
    $(".cursor").animate({opacity: "0.45"}, 500)
})
class HoverButton {
    constructor(el) {
      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }
    
    attachEventsListener() {
      window.addEventListener('mousemove', e => this.onMouseMove(e));
      window.addEventListener('resize', e => this.calculatePosition(e));
    }
    
    calculatePosition() {
      gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      const box = this.el.getBoundingClientRect();
      this.x = box.left + (box.width * 0.5);
      this.y = box.top + (box.height * 0.5);
      this.width = box.width;
      this.height = box.height;
    }
    
    onMouseMove(e) {
      let hover = false;
      let hoverArea = (this.hover ? 0.7 : 0.5);
      let x = e.pageX - this.x;
      let y = e.pageY - this.y;
      let distance = Math.sqrt( x*x + y*y );
      if (distance < (this.width * hoverArea)) {
         hover = true;
          if (!this.hover) {
            this.hover = true;
          }
          this.onHover(e.pageX, e.pageY);
      }
      
      if(!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }
    
    onHover(x, y) {
      gsap.to(this.el,  {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.1,
        ease: 'power2.out',
        duration: 0.4
      });
      this.el.style.zIndex = 10;
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'power2.out',
        duration: 0.7
      });
      this.el.style.zIndex = 1;
    }
  }
  
  const amp14 = document.querySelector('.amp14');
  new HoverButton(amp14);

  const timeel = document.querySelector(".time");
  new HoverButton(timeel);

  const index = document.querySelector(".index");
  new HoverButton(index);

  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  const third = document.querySelector(".third");

  new HoverButton(first);
  new HoverButton(second);
  new HoverButton(third);