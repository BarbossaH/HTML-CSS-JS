<?php

if(!$_SESSION['name']){
  header("Location: ./index.php");
} else{
  $username = $_SESSION['name'];
}


?>


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link
      rel="stylesheet"
      href="css/index.css"
    />

    <title>RMS</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  </head>
  <body>
    <div id="nav">
      <a href="#" id="logo">MI TALENT POOL</a>
      <ul>
        <li
          onmouseover="toggleNotificationExpand()"
          onmouseout="toggleNotificationExpand()"
          id="notification"
        >
          <img src="./img/notification.svg" alt="" />
          <div id="notification-expand">
            <span><strong>My Notifications</strong></span>
            No Records Found
          </div>
        </li>
        <li
          onmouseover="toggleProfileExpand()"
          onmouseout="toggleProfileExpand()"
          id="profile-bar"
        >
          <img id="profile" src="./img/profile.svg" alt="" />
          <span><?php echo $username?></span>
          <img id="down" src="./img/down.svg" alt="" />
          <div id="profile-expand">
            <ul>
              <li>
                <img src="./img/profile2.svg" alt="" />
                <span>My Account</span>
              </li>
              <li onclick="showChangePassword()">
                <img src="./img/unlock.svg" alt="" />
                <span>Change Password</span>
              </li>
              <li id="log-out" onclick="logout('<?php echo $username?>')">
                <img src="./img/log_out.svg" alt="" /> <span>Log out</span>
              </li>
            </ul>
          </div>
        </li>
        <li onclick="toggleDropdownmenu()" id="burger">
          <img src="./img/burger.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="sidenav" id="sidenav">
      <img id="applogo" src="./img/app_logo_1566904981.png" alt="" />
      <img
        onclick="toggleSideNav()"
        id="navarrow"
        src="./img/left.svg"
        alt=""
      />
      <ul>
        <li
          class="non-coll"
          onclick = "openDashboard()"
          onmouseover="toggleHomeExpand()"
          onmouseout="toggleHomeExpand()"
        >
          <img src="./img/home.svg" alt="" /><span class="nav-span"
            >Dashboard</span
          >
          <div class="home-expand" id="home-expand">
            <span id="home-expand-content">Dashboard</span>
          </div>
        </li>
        <li
          class="non-coll"
          onclick = "openSubpage2('example')"
        >
          <div>
            <span>Widget</span>
          </div>
        </li>
        <li
          class="non-coll"
          id="recruIT"
          onmouseover="toggleRecruExpand()"
          onmouseout="toggleRecruExpand()"
          onclick="toggleArrow(0)"
        >
          <img src="./img/peolple.svg" alt="" /><span class="nav-span"
            >RecruIT</span
          ><img id="arrow1" class="leftarrow" src="./img/left.svg" alt="" />
          <div id="recru-expand">
            <ul>
              <li>
                <span><strong>RecruIT</strong> </span>
              </li>
              <li onclick="openSubpage('openings')" class="toWhite"><span>Openings</span></li>
              <li onclick="openSubpage('profiles')" class="toWhite"><span>Profile(s)</span></li>
              <li onclick="openSubpage('applications')" class="toWhite"><span>Applications</span></li>
            </ul>
          </div>
        </li>
        <li id="coll0" class="coll">
          <ul>
            <li onclick="openSubpage('openings')"><img src="./img/tasks.svg" alt="" /> <span>Openings</span></li>
            <li onclick="openSubpage('profiles')">
              <img src="./img/profile2.svg" alt="" /> <span>Profile(s)</span>
            </li>
            <li onclick="openSubpage('applications')">
              <img src="./img/folder.svg" alt="" /> <span>Applications</span>
            </li>
          </ul>
        </li>

        <li
          class="non-coll"
          id="reports"
          onmouseover="toggleReportExpand()"
          onmouseout="toggleReportExpand()"
          onclick="toggleArrow(1)"
        >
          <img src="./img/report.png" alt="" /><span class="nav-span"
            >Reports</span
          ><img id="arrow2" class="leftarrow" src="./img/left.svg" alt="" />
          <div id="report-expand">
            <ul>
              <li>
                <span><strong>Reports</strong> </span>
              </li>
              <li onclick="openSubpage1('standardReports')" class="toWhite"><span>Standard Reports</span></li>
              <li onclick="openSubpage1('reportsGroups')" class="toWhite"><span>Reports Groups</span></li>
            </ul>
          </div>
        </li>
        <li id="coll1" class="coll">
          <ul>
            <li onclick="openSubpage1('standardReports')" ><span>Standard Reports</span></li>
            <li onclick="openSubpage1('reportsGroups')" ><span>Reports Groups</span></li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="changePassword">
       <form onsubmit="submitChangePassword(event)">
       Current password:
        <br><br> <input name="password" type="password" required />
        <br><br>
        New password: <br><br> <input  onchange="handleNewPasswordChange(event)" name="new_password" type="password" requried />
        <br><p><span id="new-password-error"></span></p>
        Re-type new password: <br><br> <input onchange="handleRetypePasswordChange(event)" name="retype_password" type="password" required/>
        <br>
        <p><span id="retype-error"></span></p>
        <button>Submit</button>
       </form>
        
      </div>
    <div id="cover" onclick="hideCover()">
      
    </div>
    <div id="mainpage" class="withNavOpen">

      <div class="button"><img src="./img/settings.svg" alt="" /></div>
      <div class="button"><img src="./img/burger.png" alt="" /></div>
      <div id="dropdownmenu">
        <ul>
          <li onclick = "openDashboard()"> <strong>Dashboard</strong>  </li>
          <li>
            <div onclick = "toggleRecruExpandSM()"> <strong>RecruIT</strong> </div> 
            <div id="sm-recru-expand">
              <ul>
                <li onclick="openSubpage('openings')">Openings</li>
                <li onclick="openSubpage('profiles')">Profile(s)</li>
                <li onclick="openSubpage('applications')">Applications</li>
              </ul>
            </div>
          </li>
          <li>
            <div onclick = "toggleReportExpandSM()"> <strong>Reports</strong> </div> 
            <div id="sm-report-expand">
              <ul>
                <li onclick="openSubpage1('reportsGroups')">Reports Groups</li>
                <li onclick="openSubpage1('standardReports')">Standard Reports</li>
                <li onclick="openSubpage2('example')">Widget</li>

              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="welcome">
        <h3>Welcome!</h3>
        <p>
          This is the main page for your system. It is empty now, but you can
          display various reports and counters.
        </p>
        <p>
          In order to display your first report, select "Reports" on left
          navigation menu, create report and set option "In Dashboard".
        </p>
      </div>
    </div>

    <script type="text/javascript" src="./js/index.js"></script>
    <script type="text/javascript" src="./features/widgEditor/scripts/widgEditor.js"></script>

  </body>
</html>