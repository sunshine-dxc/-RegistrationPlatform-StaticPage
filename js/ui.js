
/*ui-search组件*/
$.fn.UiSearch = function  () {
	var ui = $(this);
	$('.ui-search-selected',ui).on('click', function(event) {

		$('.ui-search-select-list').show();
		return false;
	});

	$('.ui-search-select-list li',ui).on('click', function(event) {
		
		var text = $(this).text();
		$('.ui-search-selected',ui).text(text);
		$('.ui-search-select-list').hide();
		return false;

	});
	$('body').on('click', function(event) {
		$('.ui-search-select-list').hide();
		
	});
};

//Ui-slide 幻灯片组件

	/*根据已有的DOM结构

	.ui-slider              <----- 最外层框架 
		.ui-slider-wrap     <----- 内容框架
			.item           <----- 每个内容
		.ui-slider-arrow    <----- 控制箭头
			.item.left
			.item.right
		.ui-slider-process   <----- 和内容一一对应
			.item
	*/
		/*		
		 * 1. 左右箭头需要能控制翻页
		 * 2. 翻页的时候，进度点，要联动进行focus
		 * 3. 翻到第三页的时候，下一页需要回到 第一页 ，翻到第一页的时候 同理
		 * 4. 进度点，在点击的时候，需要切换到对应的页面
		 * 5. 没有（进度点点击、翻页操作）的时候需要进行自动滚动
		 * 6. 滚动过程中，屏蔽其他操作（自动滚动、左右翻页、进度点点击）
		
		*/
	//
$.fn.UiSlider = function () {
	var ui = $(this),
	  wrap = $(".ui-slider-wrap",ui),
	  btn_prev = $(".ui-slider-arrow .left",ui),
	  btn_next = $(".ui-slider-arrow .right",ui),
	  tips = $(".ui-slider-process .item",ui);

	
    var items = $(".item",wrap);
    var size = items.length-1;  //返回匹配元素的数量
    var current = 0;
    var  width = items.eq(0).width();
    var clInterval;
    ui.on('move_prev', function(event) {
    	current--;
    	if (current < 0) {
    		current = size;

    	}
    	ui.triggerHandler('move_to',current);
    }).on('move_next', function(event) {
    	current++;
    	if (current > size) {
    		current = 0;
    	
    	}

    	ui.triggerHandler('move_to',current);
    	
    }).on('move_to', function(event,index) {

    	wrap.css('left',index*width*-1);
    	tips.removeClass("item_focus").eq(index).addClass("item_focus");
    	
    }).on('auto_move', function(event) {
    	
    	clInterval = setInterval(function () {
    		ui.triggerHandler('move_next');
    	},2000);

    }).on('mouseover', function(event) {

    	clearInterval(clInterval);
    	return false;

    }).on('mouseout', function(event) {

    	ui.triggerHandler('auto_move');
    	return false;
    	
    }).triggerHandler('auto_move');

    // 点击上一张
    btn_prev.on("click",function () {

		ui.triggerHandler("move_prev");

	});
    //点击下一张
	btn_next.on("click",function(){
		ui.triggerHandler("move_next");
	});

	//点击圆点
	tips.on("click",function () {
		
		var index = $(this).index();
		ui.triggerHandler("move_to",index);
		return false;
	});
};


//ui-tab定规
/*
 * @param{string} header TAB组件，的所有选项卡 item
 * @param{string} content TAB组件，的所有选项卡 item
 * @param{string} focus_prefix 选项卡高亮样式前缀，可选
*/
$.fn.UiTab = function (header,content,focus_prefix) {
	var ui = $(this);
	var tabs = $(header,ui);
	var cons = $(content,ui);
	if (!focus_prefix) {
		focus_prefix="";
	}
	tabs.on("click",function () {
		var index = $(this).index();
		tabs.removeClass(focus_prefix+"item_focus").eq(index).addClass(focus_prefix+"item_focus");
		cons.hide().eq(index).show();
		return false;//取消默认行为和阻止冒泡
	});
	
};

/*ui-cascading 多级联动*/
$.fn.UiCascading = function () {
	var ui = $(this);
	var selects = $('select',ui);
	selects.on('change',function () {
		
		var  val = $(this).val();
		var index = selects.index(this);

		//触发下一个select 的更新，根据当前的值
		
		var where = $(this).attr("data-where");

		where = where?where.split(','):[];
		where.push(val);
		console.log(selects.eq(index+1));
		selects.eq(index+1)
			.attr('data-where',where.join(","))
			.triggerHandler('reloadOptions');

		//触发下一个之后的 select 并初始化
		var oselects = ui.find("select:gt("+(index+1)+")");
		ui.find("select:gt("+(index+1)+")").each(function (index,el) {

			$(el).attr("data-where","")
				 .triggerHandler("reloadOptions");
		});
			

	}).on('reloadOptions', function(event) {
		
		var method = $(this).attr("data-search");
		var args = $(this).attr("data-where").split(",");

		var data = AjaxRemoteGetData[method].apply(this,args);

		var select = $(this);

		select.find('option').remove();
		$.each(data,function (i,item) {
			var el = $('<option value="'+item+'">'+item+'</option>');

			select.append(el);
		});
	});
	selects.eq(0).triggerHandler('reloadOptions');
};

$.fn.UiBackTop = function () {

	var ui = $(this);
	var el = $("<a class='ui-backTop' href='#'></a>");
	ui.append(el);
	var windowHeight = $(window).height();

	$(window).on("scroll",function(){
		var top = $(this).scrollTop();

		if (top > windowHeight) {
			el.show();
		}else {
			el.hide();
		}
	});
	el.on("click",function () {
		$(window).scrollTop(0);
		return false;
	});
	return false;

};

// ui-page 分页组件
$.fn.UiPage = function (num,initNum) {

	var ui = $(this);
	var arr = [];
	var prev = "<span class='ui-page_prev'><i></i>上一页</span>";
	var next = "<span class='ui-page_next'>下一页<i></i></span>";
	var ellipsis='<span class="ellipsis">...</span>';

	arr.push(prev);
	if (!initNum) {
		initNum=1;
	}
	for (var i = initNum; i <= num; i++) {
	
		if (i >= initNum+7 && i<= num-2) {
			if (i == initNum+7) {
				arr.push(ellipsis);	
			}
			continue;
		}
		var a = "<a href='#'>"+i+"</a>";
		arr.push(a);
	}
	arr.push(next);
	ui.children().remove();
	$.each(arr,function (index,el) {
		ui.append(el);
	});

};
	







