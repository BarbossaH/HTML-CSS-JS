window.onscroll = function () { setMarks();resizeContactBlock1() };
window.onresize = function () { setMarks();resizeContactBlock1() };

function setMarks() {
  //setMark('mark-anchor0');
  $('[id*="mark-anchor"]').each(function (index, element) {
    let id = element.id;
    let rect = element.getBoundingClientRect();
    if (rect !== null) {
      let top = rect['top'];
      let left = rect['left'];
      $('#' + id + '-mark').css("top", top);
      $('#' + id + '-mark').css("left", left);
    };
  })
}

function resizeContactBlock1(){
  let theight = $('#contact_block_1_text').height();parseInt("40px", 10) + parseInt("60px", 10) + "px"
  let tpaddingtop = $('#contact_block_1_text').css('padding-top');
  let tpaddingbottom = $('#contact_block_1_text').css('padding-bottom');
  let bheight = parseInt(theight, 10) + parseInt(tpaddingtop, 10) + parseInt(tpaddingbottom, 10)  +70;
  console.log(bheight);
  $('#contact_block_1_back').height(bheight);
  $('#contact_block_1_container').height( bheight);
}
