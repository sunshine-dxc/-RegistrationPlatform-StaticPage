//动态添加节点
$.fn.addEle = function () {
	var ui = $(this);
	var group = $(".group",ui);
	var size = group.length;

	for (var i = 0; i < size; i++) {

		var method = $(group[i]).attr("data-search");
		var data = AjaxRemoteGetData[method]();

		for (var j = 1; j < data.length; j++) {
			
     		var el = $('<a href="javascript:void(0)" class="condition" data-condition="'+data[j]+'">'+data[j]+'</a>');
			$(".addEle",group[i]).append(el);
     	
		}

	}

};

/*
	遍历数据列表，使用HTML模板，动态添加数据
	@param  dataList数据列表
 */ 

$.fn.renderDataList = function(dataList){
	var ui = $(this);
	// 获取HTML模板
	var itemHTML = $("#datalist_item").html();
	
	$(".item",ui).remove();

	for (var i = 0; i < dataList.length; i++) {
		itemHTML=itemHTML.replace("{imgUrl}",dataList[i].imgUrl);
		itemHTML=itemHTML.replace("{name}",dataList[i].name);
		itemHTML=itemHTML.replace("{level}",dataList[i].level);
		itemHTML=itemHTML.replace("{time}",dataList[i].time);
		itemHTML=itemHTML.replace("{phone}",dataList[i].phone);
		itemHTML=itemHTML.replace("{address}",dataList[i].address);

		ui.append(itemHTML);
		itemHTML = $("#datalist_item").html();
	}

};
var trigglePage = function (conditionArr,pageCurrent) {
	var obj = getCurrentPageDateList(conditionArr,pageCurrent);

	if (obj.pageCount>1) {
		if (pageCurrent == 1) {

			$("#pagination .ui-page_prev").addClass('page_disable');
			$("#pagination .ui-page_next").removeClass('page_disable');

		}else if (pageCurrent == obj.pageCount) {

			$("#pagination .ui-page_prev").removeClass('page_disable');
			$("#pagination .ui-page_next").addClass('page_disable');
		}else  {
			$("#pagination .ui-page_prev").removeClass('page_disable');
			$("#pagination .ui-page_next").removeClass('page_disable');
		}
	}else{
		$("#pagination .ui-page_prev").addClass('page_disable');
		$("#pagination .ui-page_next").addClass('page_disable');
	}
	
	
	$("#data_list").renderDataList(obj.currentDataList);
	$("#pagination a").removeClass("page_focus").eq(pageCurrent-1).addClass('page_focus');
	
};

/*
	通过选中的条件，获取符合条件的医院，添加医院信息，添加分页，
	@param conditionArr 选中的条件数组
 */
var renderPage = function (conditionArr) {

	var pageCurrent=1;

	var obj = getCurrentPageDateList(conditionArr,pageCurrent);

	$("#data_list").renderDataList(obj.currentDataList);
	
	$("#pagination").UiPage(obj.pageCount);

	$("#pagination a").removeClass("page_focus").eq(pageCurrent-1).addClass('page_focus');
	$("#pagination .ui-page_prev").addClass('page_disable');

	if (obj.pageCount==1) {
		$("#pagination .ui-page_next").addClass('page_disable');
	}


	//点击页码切换页面
	$("#pagination a").on('click', function(event) {
		event.preventDefault();
		pageCurrent = parseInt($(this).text());
		
		trigglePage (conditionArr,pageCurrent);

	});

	// 点击上一张
	$("#pagination .ui-page_prev").on('click', function(event) {
		event.preventDefault();

		pageCurrent = parseInt($("#pagination .page_focus").text());

		 if (pageCurrent == 1){

			pageCurrent = 1;
		}else{
			pageCurrent--;
		}

		trigglePage (conditionArr,pageCurrent);


	});

	// 点击下一张
	$("#pagination .ui-page_next").on('click', function(event) {

		event.preventDefault();

		pageCurrent = parseInt($("#pagination .page_focus").text());

		if (pageCurrent == obj.pageCount){	

			pageCurrent = obj.pageCount;

		}else{

			pageCurrent++;
		}

		trigglePage (conditionArr,pageCurrent);

	});	
	
};

// 获取筛选条件
var getConditionArr = function () {

	var conditionArr = [];

	$("#filter .group").each(function(index, el) {
		var condition = $(el).attr("data-condition");
		if (condition) {
			conditionArr.push(condition);
		}
				
	});

	return conditionArr;
};


$(function () {

	var conditionArr = [];

	$('header .search').UiSearch();
	$("#filter").addEle();

	// 给过滤区的每个条件绑定click事件，点击筛选
	$("#filter .group").each(function(index, el) {

		$(el).on('click', '.condition', function(event) {

			var $self = $(this);
			var text = $self.text();
			var $Tr = $self.closest(".group");
			
			if (text === "全部") {

				$Tr.attr("data-condition",null);

			}else {
				$Tr.attr("data-condition",text);
			}
			
			$('.condition',$(el)).removeClass('condition_focus');
			$self.addClass('condition_focus');

			//重新获取筛选条件 conditionArr
			conditionArr = getConditionArr();

			renderPage(conditionArr);
			
			return false;
		});
	});

	renderPage(conditionArr);
	$("body").UiBackTop();

});

