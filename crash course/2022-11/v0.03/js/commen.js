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
// Drop Down Menus
function dropdownMenu(theid,menuid){
	checkit=document.getElementById(menuid).className
	if (checkit=="opened"){		
	document.getElementById(menuid).className="closed";
		}else{
	     xx=document.getElementById(theid).offsetWidth;
	     yy=document.getElementById(theid).offsetLeft;
	     document.getElementById(menuid).style.left=yy+'px';
	     document.getElementById(menuid).className="opened";
		}
	}
function closedmms(x,y,dmmids){
	//dmmids='id1,id2,id3,...'
	var res = dmmids.split(",");
	var a=res.length;
	for (i=0; i<=a; i++){
		if (document.getElementById(res[i]).className=="opened"){
			if(CheckOnElement(x,y,res[i])==0){
	           document.getElementById(res[i]).className="closed";		
		       }		
			}
		}
	}
function CheckOnElement(x,y,eleID){
	var theelement=document.getElementById(eleID);
	var thetop=theelement.offsetTop;
	var thebottom=thetop+theelement.offsetHeight;
	var theleft=theelement.offsetLeft;
	var theright=theleft+theelement.offsetWidth;
	if (theleft<x&&x<theright&&thetop<y&&y<thebottom){
		return 1;
		}else{
		return 0;	
		}
	}
function CheckMenuoff(dmmids){
	var res = dmmids.split(",");
	var a=res.length;
	for (i=0; i<=a; i++){
		if (document.getElementById(res[i]).className=="opened"){
			return 1;
			}else{
			return 0;
			}
		}
	}