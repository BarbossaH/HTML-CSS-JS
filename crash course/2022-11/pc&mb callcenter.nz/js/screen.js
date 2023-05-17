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
			//document.getElementById('header').className='headeroff';
			}
	}