function topmenuchage(){
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        	document.getElementById('header').className='headergo';
			document.getElementById('nav').className='navon';
	}else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
	    	document.getElementById('header').className='headeroff';
			document.getElementById('nav').className='nav';
		}

	}
function menuswitch(){
	if (document.getElementById('nav').className == 'navshow'){
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
			document.getElementById('nav').className='navon';
	        }else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
			document.getElementById('nav').className='nav';
		    }
		}else{
			document.getElementById('nav').className='navshow';
			}
	}
	
function openbigger(theid,classon,classoff){
	if (document.getElementById(theid).className == classon){
		document.getElementById(theid).className = classoff;
		}else{
		document.getElementById(theid).className = classon;	
			}
	}
	
function changecontent(theid,changeto,rightnow){
	if (document.getElementById(theid).innerHTML == rightnow){
		document.getElementById(theid).innerHTML = changeto;
		}else{
		document.getElementById(theid).innerHTML = rightnow;	
			}
	}
	
function changeimage(mainimgID,newimg){
	//document.getElementById(mainimgID).style.backgroundImage=newimg;
	document.getElementById(mainimgID).innerHTML="<img src='"+newimg+"' height='100%' />"
	//alert(mainimgID+" = "+newimg);
	}