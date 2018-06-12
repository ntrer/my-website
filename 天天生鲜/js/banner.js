
window.onload = function(){
				
			
			
					var slide=document.getElementById("slide");
					//获取banner标签
					var banner = document.getElementById("bannerImg");
					//得到banner里的所有图片
					var imgArr=banner.getElementsByTagName("img");
					//设置banner区域的宽度，由图片数量决定
					banner.style.width=760*imgArr.length+"px";
					
					//得到导航的圆点
					var points=document.getElementById("points");
					var point=points.getElementsByTagName("li");

					//创建一个变量，来保存当前正在显示的图片的索引
					var index = 0;
					//设置默认选中的图片对应的元点的背景颜色
	                point[index].style.backgroundColor="#9f9f9f";
	
	                //自动切换图片
	                setInterval(function(){
	                	
	                	/*
						 * 切换到下一张是index自增
						 */
						index++;
						
						if(index > imgArr.length - 1){
							index = 0;
						}
						
						//切换图片就是修改img的src属性
						//要修改一个元素的属性 元素.属性 = 属性值
//						img.src = imgArr[index];

                        //先遍历所有的圆点，设为原色
						for (var i = 0; i < point.length; i++) {
							point[i].style.backgroundColor="";
						}
						//再设置选中的圆点的颜色
                        point[index].style.backgroundColor="#9f9f9f";

                        //使用move函数来切换图片
						move(banner , "left" , -760*index , 50 , function(){
							
						});
                        
	                },5000);
	                
	                
	
	                 /*
					 * 点击按钮切换图片
					 */
					
					//获取两个按钮
					var prev = document.getElementById("prev");
					var next = document.getElementById("next");
	
					//分别为两个按钮绑定单击响应函数
					prev.onclick = function(){
						
						/*
						 * 切换到上一张，索引自减
						 */
						index--;
						
						//判断index是否小于0
						if(index < 0){
							index = imgArr.length - 1;
						}
						
						img.src = imgArr[index];
						
						
					};
					
					next.onclick = function(){
						
						/*
						 * 切换到下一张是index自增
						 */
						index++;
						
						if(index > imgArr.length - 1){
							index = 0;
						}
						
						//切换图片就是修改img的src属性
						//要修改一个元素的属性 元素.属性 = 属性值
						img.src = imgArr[index];
	
					};

};