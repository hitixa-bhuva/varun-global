<?php
$page = basename($_SERVER['PHP_SELF']);
echo
    '
<body class="theme2">

   <div id="preloader" class="preloader">
    <div id="loader" class="th-preloader">
        <div class="animation-preloader">
            <!-- Logo -->
            <img src="assets/img/logo/MetaCore-It-Solutions-Logo.svg" alt="Logo" class="preloader-logo" />

            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress"></div>
            </div>

            <!-- Optional loading text -->
            <p class="loading-text">Loading...</p>
        </div>
    </div>
</div>

    <div class="th-menu-wrapper">
        <div class="th-menu-area text-center"><button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo"><a class="icon-masking" href="home"><span data-mask-src="assets/img/logo.svg"
                        class="mask-icon"></span><img src="assets/img/logo.svg" alt="Webteck"></a></div>
            <div class="th-mobile-menu">
                <ul>
                    <li><a href="home" class=" ' ?><?php if ($page == "index.php") {
                                    echo 'active';
                                } ?><?php echo '">Home</a></li>
                    <li><a href="about" class="active">About Us</a></li>
                    <li class="menu-item-has-children-custom">
                        <a href="service" class="solution-link d-flex justify-content-between align-items-center">
                            Service
                            <span class="toggle-icon ms-2"></span>
                        </a>
                        <ul class="sub-menu">
                            <li><a href="iOS&androidAppDevelopment">IOS & Android App Development</a></li>
                            <li><a href="cross-platform-app-development">Cross Platform App Development</a></li>
                            <li><a href="web-development">Web Development</a></li>
                            <li><a href="custom-software-development">Custom Software Development</a></li>
                            <li><a href="ux-design">UI/UX Design</a></li>
                            <li><a href="ai-machine-learning-development">AI & ML Development</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children-custom">
                        <a href="solution" class="solution-link d-flex justify-content-between align-items-center">
                            Solution
                            <span class="toggle-icon ms-2"></span>
                        </a>
                        <ul class="sub-menu">
                            <li><a href="health-care-solution">HealthCare Solution</a></li>
                            <li><a href="hospitalitymanagement">Hospitality Management</a></li>
                            <li><a href="hotel-management">Hotel Management</a></li>
                            <li><a href="billing-accounting-software">Billing & Accounting Software</a></li>
                            <li><a href="education-technology-solution">Education Technology Solution</a></li>
                            <li><a href="RetailE-Commercesolution">Retail and E-Commerce Solution</a></li>
                            <li><a href="realestate-property-management">Real Estate & Property Management</a></li>
                            <li><a href="logistic-management">Logistic Management</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children"><a href="blog">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <header class="th-header header-layout23 header-absolute">
        <div class="sticky-wrapper">
            <div class="menu-area">
                <div class="container th-container4">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="header-logo"><a class="" href="home"><img src="./assets/img/logo/MetaCore-It-Solutions-Logo.svg"
                                        alt="Webteck" class="w-50"></a></div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu style2 d-none d-lg-inline-block">
                                <ul>
                                    <li><a href="home" class=" ' ?><?php if ($page == "index.php") {
                                    echo 'active';
                                } ?><?php echo '">Home</a></li>
                                    <li><a href="about"class=" ' ?><?php if ($page == "about.php") {
                                    echo 'active';
                                } ?><?php echo '">About Us</a></li>
                                    <li class="menu-item-has-children-custom">
                                        <a href="service"
                                            class="solution-link d-flex justify-content-between align-items-center ' ?><?php if ($page == "service.php" || $page == "ai-ml-development.php" || $page == "uxdesign.php" || $page == "custom-software-development.php" || $page == "webdevelopment.php" || $page == "crossPlatformAppDevelopment.php" || $page == "iOS&androidAppDevelopment.php") {
                                         echo 'active';
                                     } ?><?php echo '">
                                            Service
                                            <span class="toggle-icon ms-2"></span>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="iOS&androidAppDevelopment">IOS & Android App
                                                    Development</a></li>
                                            <li><a href="cross-platform-app-development">Cross Platform App
                                                    Development</a></li>
                                            <li><a href="web-development">Web Development</a></li>
                                            <li><a href="custom-software-development">Custom Software Development</a>
                                            </li>
                                            <li><a href="ux-design">UI/UX Design</a></li>
                                            <li><a href="ai-machine-learning-development">AI & ML Development</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children-custom">
                                        <a href="solution"
                                            class="solution-link d-flex justify-content-between align-items-center ' ?><?php if ($page == "solution.php") {
                                    echo 'active';
                                } ?><?php echo '">
                                            Solution
                                            <span class="toggle-icon ms-2"></span>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="health-care-solution">HealthCare Solution</a></li>
                                            <li><a href="hospitalitymanagement">Hospitality Management</a></li>
                                            <li><a href="hotel-management">Hotel Management</a></li>
                                            <li><a href="billing-accounting-software">Billing & Accounting
                                                    Software</a></li>
                                            <li><a href="education-technology-solution">Education Technology
                                                    Solution</a></li>
                                            <li><a href="RetailE-Commercesolution">Retail and E-Commerce
                                                    Solution</a></li>
                                            <li><a href="realestate-property-management">Real Estate & Property
                                                    Management</a></li>
                                            <li><a href="logistic-management">Logistic Management</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog"class=" ' ?><?php if ($page == "blog.php") {
                                    echo 'active';
                                } ?><?php echo '">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-auto">
                            <div class="header-button d-none d-lg-inline-block"><a href="contact"
                                    class="th-btn btn-gradient2 style-radius ' ?><?php if ($page == "contact.php") {
                                    echo 'active';
                                } ?><?php echo '">Contact</a></div><button type="button"
                                class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

'
                                                  ?>