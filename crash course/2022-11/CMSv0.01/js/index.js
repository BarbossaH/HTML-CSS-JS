const toggleSideNav = () => {
    const sidenav = document.getElementById("sidenav");
    const navarrow = document.getElementById("navarrow");
    const coll0 = document.getElementById("coll0");
    const coll1 = document.getElementById("coll1");
    const arrow1 = document.getElementById("arrow1");
    //console.log(arrow1);
    const arrow2 = document.getElementById("arrow2");
    const mainpage = document.getElementById("mainpage");
  
    if (sidenav.className === "sidenav") {
      sidenav.className = "sidenavmini";
      mainpage.className = "withNavClosed";
      coll0.style.display = "none";
      coll1.style.display = "none";
  
      navarrow.src = "./img/right.svg";
    } else {
      sidenav.className = "sidenav";
      navarrow.src = "./img/left.svg";
      mainpage.className = "withNavOpen";
      arrow1.src = "./img/left.svg";
      arrow2.src = "./img/left.svg";
    }
  };
  
  const toggleArrow = index => {
    const sidenav = document.getElementById("sidenav");
    if (sidenav.className === "sidenav") {
      let collid = "coll" + String(index);
      const arrow = document.getElementsByClassName("leftarrow")[index];
      const coll = document.getElementById(collid);
      if (arrow.src.substr(-8) === "left.svg") {
        arrow.src = "./img/down.svg";
        coll.style.display = "block";
      } else {
        arrow.src = "./img/left.svg";
        coll.style.display = "none";
      }
    }
  };
  
  const toggleHomeExpand = () => {
    const sidenav = document.getElementById("sidenav");
    if (sidenav.className === "sidenavmini") {
      const expand = document.getElementById("home-expand");
      const content = document.getElementById("home-expand-content");
      if (expand.className === "home-expand") {
        expand.className = "home-expand-open";
        expand.style.width = "180px";
        content.style.visibility = "visible";
      } else {
        expand.className = "home-expand";
        expand.style.width = "0px";
        content.style.visibility = "hidden";
      }
    }
  };
  
  const toggleRecruExpand = () => {
    const sidenav = document.getElementById("sidenav");
    if (sidenav.className === "sidenavmini") {
      const expand = document.getElementById("recru-expand");
      if (expand.style.display === "block") {
        expand.style.display = "none";
      } else {
        expand.style.display = "block";
      }
    }
  };
  
  const toggleReportExpand = () => {
    const sidenav = document.getElementById("sidenav");
    if (sidenav.className === "sidenavmini") {
      const expand = document.getElementById("report-expand");
      if (expand.style.display === "block") {
        expand.style.display = "none";
      } else {
        expand.style.display = "block";
      }
    }
  };
  
  const toggleNotificationExpand = () => {
    const expand = document.getElementById("notification-expand");
    if (expand.style.display === "block") {
      expand.style.display = "none";
    } else {
      expand.style.display = "block";
    }
  };
  
  const toggleProfileExpand = () => {
    const expand = document.getElementById("profile-expand");
    if (expand.style.display === "block") {
      expand.style.display = "none";
    } else {
      expand.style.display = "block";
    }
  };
  
  const toggleDropdownmenu = () => {
    const drop = document.getElementById("dropdownmenu");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
  };
  
  const logout = username => {
    //alert("ciao!" + name);
    $.post("_com/logout.php", { username: username }, data => {
      //alert(data);
      location.reload();
    });
  };
  
  const openSubpage = page => {
    // $.get("features/RecruIT/index.php", data => {
    //   if (data.includes("Validation succeeded!")) {
        const pageContainer = document.getElementsByClassName("welcome")[0];
        const url = "features/RecruIT/" + page + ".php";
        $.get(url, function(data, status) {
          pageContainer.innerHTML = data;
        });
    //   } else {
    //     window.location.href = "index.php";
    //   }
    // });
  };
  
  const openSubpage1 = page => {
    // $.get("index.php", data => {
    //   if (data.includes("Validation succeeded!")) {
        const pageContainer = document.getElementsByClassName("welcome")[0];
        const url = "features/Reports/" + page + ".php";
        $.get(url, function(data, status) {
          pageContainer.innerHTML = data;
        });
      // } else {
      //   window.location.href = "index.php";
      // }
    // });
  };

  const openSubpage2 = page => {
    // $.get("com/validateUser.php", data => {
    //   console.log(data)
      // if (data.includes("Validation succeeded!")) {
        const pageContainer = document.getElementsByClassName("welcome")[0];
        const url = "features/widgEditor/" + page + ".htm";
        $.get(url, function(data, status) {
          pageContainer.innerHTML = data;
          widgInit();
        });
      // } else {
      //   window.location.href = "index.php";
      // }
    // });
  };
  
  const openDashboard = () => {
    // $.get("features/RecruIT/index.php", data => {
    //   if (data.includes("Validation succeeded!")) {
        const pageContainer = document.getElementsByClassName("welcome")[0];
        pageContainer.innerHTML =
          '<h3>Welcome!</h3><p>This is the main page for your system. It is empty now, but you can display various reports and counters.</p><p>In order to display your first report, select "Reports" on left navigation menu, create report and set option "In Dashboard".</p>';
    //   } else {
    //     window.location.href = "index.php";
    //   }
    // });
  };
  
  const toggleRecruExpandSM = () => {
    const expand = document.getElementById("sm-recru-expand");
    if (expand.style.display === "none") {
      expand.style.display = "block";
    } else {
      expand.style.display = "none";
    }
  };
  
  const toggleReportExpandSM = () => {
    const expand = document.getElementById("sm-report-expand");
    if (expand.style.display === "none") {
      expand.style.display = "block";
    } else {
      expand.style.display = "none";
    }
  };
  
  let newPassword;
  let retypePassword;
  let changePasswordValid = false;
  
  const hideCover = () => {
    const cover = document.getElementById("cover");
    const changePassword = document.getElementById("changePassword");
    cover.style.display = "none";
    changePassword.style.display = "none";
  };
  
  const showChangePassword = () => {
    const cover = document.getElementById("cover");
    const changePassword = document.getElementById("changePassword");
    cover.style.display = "block";
    changePassword.style.display = "block";
  };
  
  const handleNewPasswordChange = event => {
    newPassword = event.target.value;
    const error = document.getElementById("new-password-error");
    if (newPassword.length < 8) {
      error.innerHTML = "* Must be over 8 digits";
      changePasswordValid = false;
    } else if (!newPassword.match(/[a-z]/) || !newPassword.match(/[A-Z]/)) {
      error.innerHTML = "* Must contain both upper and lower case";
      changePasswordValid = false;
    } else {
      error.innerHTML = "";
      changePasswordValid = true;
    }
  };
  
  const handleRetypePasswordChange = event => {
    retypePassword = event.target.value;
    const error = document.getElementById("retype-error");
    if (retypePassword !== newPassword) {
      error.innerHTML = "* Re-typed password does not math the new password";
      changePasswordValid = false;
    } else {
      error.innerHTML = "";
      changePasswordValid = true;
    }
  };
  
  const submitChangePassword = event => {
    event.preventDefault();
    if (changePasswordValid) {
      console.log(event.target.password.value);
      console.log(event.target.new_password.value);
      console.log(event.target.retype_password.value);
  
      $.post(
        "_com/changePassword.php",
        {
          originPassword: event.target.password.value,
          retypePassword: event.target.retype_password.value
        },
        data => {
          //alert(data);
          if (data.includes("wrong original password")) {
            alert("Failed: The current password that you have entered is wrong!");
          } else if (data.includes("same as original password!")) {
            alert("Failed: The new password is the same as the original one.");
          } else {
            alert("Success! You now need to log in again with the new password.");
            location.reload();
          }
        }
      );
      event.target.password.value = "";
      event.target.new_password.value = "";
      event.target.retype_password.value = "";
    }
  };
  