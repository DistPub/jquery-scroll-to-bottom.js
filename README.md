1.jquery scroll to bottom plugin

this is a plugin for judge a scroll had to bottom of container, you will get a event when it happend, also you can set offset for customize range to bottom and set a callback when event happend.

usage:
  $(window).setupScrollToBottomEvent({callback:function(){alert('scroll on bottom')}})
  $(window).setupScrollToBottomEvent({offset:100}).on('scrollToBottom',function(){})
