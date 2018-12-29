$(function  () {
	$('header .search').UiSearch();
	$('.upper-slider').UiSlider();
	$('.upper-search .cascading').UiCascading();
	$('.lower-tab').UiTab(".caption > .item",".block >.item");
	$('.lower-tab .block>.item').UiTab(".block-caption > .block-caption-item",".block-content > .block-wrap","block-caption-");
	$('body').UiBackTop();
});