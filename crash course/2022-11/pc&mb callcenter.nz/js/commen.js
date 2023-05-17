function opensubpage(url){
		document.getElementById('cover').className='cover_on';
		document.getElementById('content_block').className='content_block_on';
		document.getElementById('content_page').className='content_block_iframe_on';
		document.getElementById('close').className='close_on';
		document.getElementById('content_page').src='pages/'+url;
		document.body.style.overflowY = "hidden";
		}
function closesubpage(){
		document.getElementById('cover').className='cover_off';
		document.getElementById('content_block').className='contentblock_off';
		document.getElementById('content_page').className='content_block_iframe_off';
		document.getElementById('close').className='close_off';		
		document.getElementById('content_page').src='/pages/';
		document.body.style.overflowY = "scroll";
		}
function gotourl(url){
	window.location.href = url; 
	}