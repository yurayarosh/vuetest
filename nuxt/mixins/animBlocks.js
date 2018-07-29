import {TimelineMax} from 'gsap';

export default {
  transition: {
    name: 'animBlocks',
    css: false,
    node: 'out-in',
    enter: function(el, done){
      let tl = new TimelineMax({onComplete: done});

      let animBlocks = el.querySelectorAll('.js-animated-block');

      tl.set(animBlocks,{y:100,opacity:0});
      tl.staggerTo(animBlocks,1,{y:0,opacity:1},0.5);
    },
    leave: function(el, done){
      let tl = new TimelineMax({onComplete: done});
      let animBlocks = el.querySelectorAll('.js-animated-block');

      tl.to(animBlocks,0.5,{y:100,opacity:0});
    }
  }
}