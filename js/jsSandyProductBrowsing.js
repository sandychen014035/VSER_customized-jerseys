
// // 宣告點選到輪播的templates變數
// let templatesDIV = '';


// function changeJersey() {
// 	templatesDIV = $('.templatesA');
}

// function changeSweat() {
// 	templatesDIV = $('.templatesB');
// }
// function changeShorts() {
// 	templatesDIV = $('.templatesC');
// }

// 以下是按鈕
let pbTBtnDiv = '';
function getDiv(curNum) {
	pbTBtnDiv = document.getElementById('pb' + curNum);
	console.log(pbTBtnDiv);
	// pbTBtnDiv = document.querySelector('.pbTBtn');

}
function showBtn(pbNum) {
	getDiv(pbNum);
	pbTBtnDiv.style.display = "flex";

}
function turnoffBtn(pbNum) {
	getDiv(pbNum);
	pbTBtnDiv.style.display = "none";
}

$(document).ready(function () {

	// 使用事件委託，將事件處理器綁定到已存在的父級元素
	$('body').on('click', '.collection', function () {
		$('#collectionWindow').fadeIn();

		//  視窗3秒自動關閉
		setTimeout(function () {
			$('#collectionWindow').fadeOut();
		}, 3000);
	});

});


