function topmenuchage(){
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        	document.getElementById('header').className='headergo';
			document.getElementById('nav').className='navon';
			//alert("down");
	}else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
		document.getElementById('header').className='headeroff';
			document.getElementById('nav').className='nav';
		//alert("back");
		}

	}