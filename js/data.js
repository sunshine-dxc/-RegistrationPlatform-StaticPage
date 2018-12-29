 var storage = {};
storage.hospital = [
		
		["area","level","type","name","address","phone","imgUrl","time"],

		["朝阳区","三级甲等","卫生部直属医院","首都儿科研究所附属儿童医院","北京市朝阳区雅宝路2路","phone","img/hospital-1.jpg","time"],
		
		["朝阳区","三级甲等","卫生部直属医院","中日友好医院","北京市朝阳区樱花东路2路","84205288","img/hospital-2.jpg","time"],
		["西城区","三级甲等","卫生部直属医院","首都医科大学附属北京友谊医院","北京市西城区永安路95号","phone","img/hospital-3.jpg","time"],
		["朝阳区","三级甲等","卫生部直属医院","首都医科大学附属北京地坛医院B附属","北京朝阳区樱花东路2路","phone","img/hospital-4.jpg","time"],
		["朝阳区","三级合格","北京区县属医院","空军总医院","北京朝阳区樱花东路2路","84205288","img/hospital-1.jpg","time"],
		["海淀区","三级合格","北京区县属医院","航天中心医院（原721号医院）","北京市海淀区玉泉路15号","525545651","img/hospital-5.jpg","time"],
		["丰台区","三级甲等","北京区县属医院","北京中医药大学东方医院","北京丰台区方庄芳星园一区6号","phone","img/hospital-6.jpg","time"],
		
		["丰台区","三级合格","北京区县属医院","北京电力医院","北京市丰台区太平桥西里甲1号","84205288","img/hospital-4.jpg","time"],
		["顺义区","三级甲等","北京区县属医院","北京市中医医院顺义医院","北京市顺义区站前东街5号","84205288","img/hospital-5.jpg","time"],
		["通州区","三级甲等","其他","首都医科大学附属北京潞河医院三级综合医院","北京市通州区新华南路8号","84205288","img/hospital-2.jpg","time"],
		["朝阳区","三级甲等","卫生部直属医院","首都儿科研究所附属儿童医院","北京市朝阳区雅宝路2路","phone","img/hospital-1.jpg","time"],
		
		["朝阳区","三级甲等","卫生部直属医院","中日友好医院","北京市朝阳区樱花东路2路","84205288","img/hospital-2.jpg","time"],
		["西城区","三级甲等","卫生部直属医院","首都医科大学附属北京友谊医院","北京市西城区永安路95号","phone","img/hospital-3.jpg","time"],
		["朝阳区","三级甲等","卫生部直属医院","首都医科大学附属北京地坛医院B附属","北京朝阳区樱花东路2路","phone","img/hospital-4.jpg","time"],
		["朝阳区","三级合格","北京区县属医院","空军总医院","北京朝阳区樱花东路2路","84205288","img/hospital-1.jpg","time"],
		["海淀区","三级合格","北京区县属医院","航天中心医院（原721号医院）","北京市海淀区玉泉路15号","525545651","img/hospital-5.jpg","time"],
		["丰台区","三级甲等","北京区县属医院","北京中医药大学东方医院","北京丰台区方庄芳星园一区6号","phone","img/hospital-6.jpg","time"],
		
		["丰台区","三级合格","北京区县属医院","北京电力医院","北京市丰台区太平桥西里甲1号","84205288","img/hospital-4.jpg","time"],
		["顺义区","三级甲等","北京区县属医院","北京市中医医院顺义医院","北京市顺义区站前东街5号","84205288","img/hospital-5.jpg","time"],
		["通州区","三级甲等","其他","首都医科大学附属北京潞河医院三级综合医院","北京市通州区新华南路8号","84205288","img/hospital-2.jpg","time"],
		["朝阳区","三级甲等","卫生部直属医院","首都儿科研究所附属儿童医院","北京市朝阳区雅宝路2路","phone","img/hospital-1.jpg","time"],
		
		["海淀区","三级合格","北京区县属医院","航天中心医院（原721号医院）","北京市海淀区玉泉路15号","525545651","img/hospital-5.jpg","time"],
		["丰台区","三级甲等","北京区县属医院","北京中医药大学东方医院","北京丰台区方庄芳星园一区6号","phone","img/hospital-6.jpg","time"],
		
		["丰台区","三级合格","北京区县属医院","北京电力医院","北京市丰台区太平桥西里甲1号","84205288","img/hospital-4.jpg","time"],
		["顺义区","三级甲等","北京区县属医院","北京市中医医院顺义医院","北京市顺义区站前东街5号","84205288","img/hospital-5.jpg","time"],
		["通州区","三级甲等","其他","首都医科大学附属北京潞河医院三级综合医院","北京市通州区新华南路8号","84205288","img/hospital-2.jpg","time"],
		

	];
storage.department = [
						[
							"hospital",
						     ["departmentName"]

						],
						[

							"首都儿科研究所附属儿童医院",
							["儿科a","儿科b","儿科c"]
						],
						[
							"中日友好医院",
							["科室a","科室b","科室c","科室d"]
						],
						[
							"首都医科大学附属北京友谊医院",
							["departmentName-1"]

						],
						[
							"首都医科大学附属北京地坛医院B附属",
							["departmentName-2"]

						],
						[
							"空军总医院",
							["departmentName-3"]

						],
						[
							"航天中心医院（原721号医院）",
							["departmentName-4"]

						],
						[
							"北京中医药大学东方医院",
							["departmentName-5"]

						],
						[
							"北京电力医院",
							["departmentName-6"]

						],
						[
							"北京市中医医院顺义医院",
							["departmentName-7"]

						],
						[
							"首都医科大学附属北京潞河医院三级综合医院",
							["departmentName-8"]

						],
					];


var AjaxRemoteGetData = {};

//医院类型
AjaxRemoteGetData.getTypeByArrHospital = function(){
	var map = {};
	var arr = ["医院类型"];
	var j=storage.hospital.length;
	for (var i = 1; i < j; i++) {
		var type = storage.hospital[i][2];
		map[type] = 1;
	}
	for (var k in map) {
		 arr.push(k);
	}

	return arr;
};
//医院等级

AjaxRemoteGetData.getLevelByArrHospital = function  () {
	var map = {};
	var arr = ["医院等级"];
	var j = storage.hospital.length;
	for (var i = 1; i < j; i++) {
		var level = storage.hospital[i][1];
		map[level] = 1;
	}
	for (var k in map) {
		arr.push(k);
	}

	return arr;
};

//医院地区

AjaxRemoteGetData.getDistinctArea = function () {
	var map = {};
	var arr = ["医院地区"];
	var j=storage.hospital.length;
	for (var i = 1; i < j; i++) {
		var area = storage.hospital[i][0];

		map[area] = 1;
	}

	for (var k in map) {
		arr.push(k);
	}
	return arr;
};

// 获取医院等级
AjaxRemoteGetData.getLevelByarea = function (area) {
	var map = {};
	var arr = ["医院等级"];
	var j=storage.hospital.length;
	for (var i = 0;i<j ;i++) {
		var _area = storage.hospital[i][0];
		var level = storage.hospital[i][1];
		if (area ==_area) {
			map[level] =1;
		}
	}
	for (var k in map) {
		arr.push(k);
	}
	return arr;
};
// 获取医院名称
AjaxRemoteGetData.getNameByAreaAndLevel = function (area,level) {
	var map = {};
	var arr = ["医院名称"];
	var j = storage.hospital.length;
	for (var i = 0;i<j;i++){
		var _area = storage.hospital[i][0];
		var _level = storage.hospital[i][1];
		var name = storage.hospital[i][3];
		if (_area == area && _level == level) {
			map[name]=1;
		}
	}
	for ( var k in map) {
		arr.push(k);
	}
	return arr;
};
// 获取科室名称
AjaxRemoteGetData.getDepartmentArrByHospitalName = function (area,level,hospitalName) {
	
	var map = {};
	var arr = ["科室名称"];
	var j=storage.department.length;
	for (var i = 0; i < j; i++) {
		
		var _hospitalName = storage.department[i][0];
		var _d = storage.department[i][1];
		if (hospitalName == _hospitalName) {
			map[_d] = 1;
		}
	}
	for (var k in map) {
		
		arr.push(k);
	}
	
	
	return arr;
};

// 获取符合条件的数组
// @param conditionArr  查询条件
var getDataArr = function (conditionArr) {
	var dataArr = [];
	var size = conditionArr.length;
	var hospitals = storage.hospital;

	if (size === 0) {
		dataArr = hospitals.slice(1);
	}

	if (size === 1) {
		for (var i = 1; i < hospitals.length; i++) {

			if (hospitals[i].indexOf(conditionArr[0])>-1) {
				dataArr.push(hospitals[i]);
			}
		}
	}

	if (size === 2) {
		for (var i = 1; i < hospitals.length; i++) {

			if (hospitals[i].indexOf(conditionArr[0])>-1 && hospitals[i].indexOf(conditionArr[1])>-1) {
				dataArr.push(hospitals[i]);
			}
		}
	}

	if (size === 3) {
		for (var i = 1; i < hospitals.length; i++) {

			if (hospitals[i].indexOf(conditionArr[0])>-1 && hospitals[i].indexOf(conditionArr[1])>-1 && hospitals[i].indexOf(conditionArr[2])>-1) {
				dataArr.push(hospitals[i]);
			}
		}
	}

	return dataArr;
};

//把符合条件的医院信息，写成键值对的形成，并添加到新数组中
//@param conditionArr  查询条件
var getDateList = function (conditionArr) {

	var dataArr = getDataArr(conditionArr);
	var dataList = [];
	var imgUrlIndex = storage.hospital[0].indexOf("imgUrl");
	var nameIndex = storage.hospital[0].indexOf("name");
	var levelIndex  = storage.hospital[0].indexOf("level");
	var timeIndex  = storage.hospital[0].indexOf("time");
	var phoneIndex  = storage.hospital[0].indexOf("phone");
	var addressIndex  = storage.hospital[0].indexOf("address");

	// 循环遍历符合条件的数组
	for (var i = 0; i < dataArr.length; i++) {
	
		var data={};

		if (imgUrlIndex) {
			data.imgUrl = dataArr[i][imgUrlIndex];
		}
		if(nameIndex){
			data.name = dataArr[i][nameIndex];
		}
		if(levelIndex){
			data.level = dataArr[i][levelIndex];
		}
		if(timeIndex){
			data.time = dataArr[i][timeIndex];
		}
		if(phoneIndex){
			data.phone = dataArr[i][phoneIndex];
		}
		if(addressIndex){
			data.address = dataArr[i][addressIndex];
		}

		dataList.push(data);
	}

	return dataList;
};

// 获取当前页的数据
//@param conditionArr  查询条件
var getCurrentPageDateList = function (conditionArr,currentPage) {
	if (!currentPage) {
		currentPage=1;
	}
	var dataList = getDateList(conditionArr);
	var obj={};
	var pageCount = Math.ceil(dataList.length/3);

	obj.pageCount = pageCount;
	obj.currentDataList = dataList.slice(3*(currentPage-1),3*currentPage);

	return obj;
};


