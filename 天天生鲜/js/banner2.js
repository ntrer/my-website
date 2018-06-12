
$(function(){
	
    //得到所有轮播图
	var $li = $('.slide li');
	var len = $li.length;
	//得到切换图片的按钮
	var $prev = $('.prev');
	var $next = $('.next');
	
	//定义定时器
	var timer=null;
	
	//将要运动过来的li
	var nowli = 0;

	//当前要离开的li
	var prevli = 0;
	
	//把除了第一张的其余的图片移动到banner右边
	$li.not(':first').css({left:760});
	
	//根据图片的数量，动态添加下面的圆点
	
	$li.each(function(index){
		//创建节点li
		var $sli = $('<li>');
        //第一张的圆点，默认选中
		if(index==0)
		{
			$sli.addClass('active');
		}

		$sli.appendTo('.points')

	})
	
	
	   //得到所有的圆点
	   $points=$('.points li');
	   
	   //设置点击事件
	   $points.click(function(){
	   	//赋予将要进来的图片的索引，为当前点击点的索引
	   	nowli = $(this).index();
	   	
	   	if(nowli==prevli){
			return;
		}

        move();
	   	//选中的设为激活状态，没选中的设为未激活状态
	   	$(this).addClass('active').siblings().removeClass('active');

	   });
	   

	   $prev.click(function(){
		nowli--;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');	

	})

	$next.click(function(){
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');	

	})
	   
	
	//设置反复执行的定时器
	timer = setInterval(autoplay,4000);

	function autoplay(){
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');
	}
	   
    //鼠标移入图片时，清除定时器
    $('.slide_con').mouseenter(function() {
		clearInterval(timer);
	});
    
    //鼠标移出图片时，设置定时器
	$('.slide_con').mouseleave(function() {
		timer = setInterval(autoplay,4000);
	});




     function move(){
     	
     	
     	//第一张图片继续往左切换
     	if(nowli<0)
		{
			nowli = len-1;
			prevli = 0;
			$li.eq(nowli).css({left:-760});
			$li.eq(prevli).stop().animate({left:760});
			$li.eq(nowli).stop().animate({left:0});
			prevli=nowli;
			return;
		}

         //最后一张图片继续往右切换
		if(nowli>len-1)
		{
			nowli = 0;
			prevli = len-1;
			$li.eq(nowli).css({left:760});
			$li.eq(prevli).stop().animate({left:-760});
			$li.eq(nowli).stop().animate({left:0});
			prevli=nowli;
			return;
		}

	   	//如果点击的是当前显示的图片的后面的图片
	   	if(nowli>prevli){
            //将要进来显示的图片先移到右边
			$li.eq(nowli).css({left:760});
			//把当前显示的图片移到左边
			$li.eq(prevli).stop().animate({left:-760});			
		}
	   		//如果点击的是当前显示的图片的前面的图片
		else
		{
			 //将要进来显示的图片先移到左边
			$li.eq(nowli).css({left:-760});
			//把当前显示的图片移到右边
			$li.eq(prevli).stop().animate({left:760});
					
		}
        //把要显示的移动进来
		$li.eq(nowli).stop().animate({left:0});
		prevli=nowli;
	   	
	
	   };


});
