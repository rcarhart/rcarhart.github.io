<!doctype html>

<html>
	<head>
		<title>Ross Carhart Portfolio</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="Vendors/ionicons.min.css">
        <link href="grid.css" rel='stylesheet' type="text/css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <link href="style.css" rel='stylesheet' type="text/css">
	</head>

	<body>
     
        <header>
            <ul class='navbar'>
                <li><a href="#home">About Me</a></li>
                    <li><a href="#news">Contact Me</a></li>
                    <li class="dropdown">
                    <a href="#" class="dropbtn">Social Media</a>
                    <div class="dropdown-content">
                        <a target='blank' href="https://github.com/rcarhart"><i class="fab fa-github"></i>GitHub</a>
                            <a target='_blank'href="https://www.linkedin.com/in/ross-carhart-504b8761"><i class="fab fa-linkedin"></i>LinkedIn</a>
                    </div>
                        </li>
                        <li class="dropdown">
                        <a href="#" class="dropbtn">Websites</a>
                        <div class="dropdown-content">
                        <a href="#">Painting N'At</a>
                            <a href="#">Omnifood</a>
                        <a href="#">Pharmocology</a>
                    </div>
                    </li>
               
</ul>
            
        <div>
           <h1>Ross Carhart</h1>
            <h2 id='heading2'>Aspiring Javascript Developer</h2>
        </div>
        </header>


        
       
<section class='skills'>
    <div class='row'>    
        <h3>Skill Set</h3>
    </div>
    <div class='row'>
        <div class='col span-1-of-5'>
            <img src='images/html5.jpeg'>
         </div>
        <div class='col span-1-of-5'>
            <img src='images/javascript.jpeg'>
         </div>
      <div class='col span-1-of-5'>
            <img src='images/bootstrap.jpeg'>
         </div>
      <div class='col span-1-of-5'>
            <img src='images/git.jpeg'>
         </div>
      <div class='col span-1-of-5'>
            <img src='images/UI-UX.png'>
         </div>
           
 </div>
 
    
</section>  
                <section class="aboutMe">
        <div class='row'>
            <h3>About Me</h3>
                <p class='intro'><img src="images/13.jpg" alt="profile pic Ross Carhart" class='profile'>Hello, my Name is Ross Carhart and I am an aspiring Javascript Developer. I have been doing Udemy Classes and following the fullstack track on Treehouse. Currently, I work in food manufacturing as a Quality Manager. However, I am hoping to transition to a new career in software and web development.</p>
                <p class='intro'> When I am not at work or spending time coding I enjoy visiting the local craft beer scene and brewing up a batch of my own homebrew. I hope you enjoy my portfolio and my website. If you need to contact me be sure to fill out the form or click one of the social media links. Hope to hear from you soon. 
                </p>
               
            </div>
         </section>
 <section class="website-images">
            <ul class="website-showcase clearfix">
                <li>
                    <figure class="website-photo">
                        <img src="images/painting%20N'at.PNG" alt="Painting N'At">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/Pig%20Game.PNG" alt="Pig Game">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/RGB%20Game.PNG" alt="RGB Game">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/todo%20APP.PNG" alt="to do app">
                    </figure>
                </li>
            </ul>
              <ul class="website-showcase clearfix">
                <li>
                    <figure class="website-photo">
                        <img src="images/painting%20N'at.PNG" alt="Painting N'At">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/Pig%20Game.PNG" alt="Pig Game">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/RGB%20Game.PNG" alt="RGB Game">
                    </figure>
                </li>
                <li>
                     <figure class="website-photo">
                        <img src="images/todo%20APP.PNG" alt="to do app">
                    </figure>
                </li>
            </ul>
       </section>
        
   <section class="Contact-US" id="Contact">
    
    
    
    
    <div class="row">
    <H3>Contact Me</H3>
    </div>
        
        
    <div class="row">
        <form method="post" action="mailer.php" class="contact-form" id='form'>
            
               <div class='row'>
               
               <?php
                   if($_GET['success'] == 1) {
                       echo "<div class=\"form-messages success\">
                   Thank You! Your Message has been sent.
               </div>";
                   }
                if($_GET['success'] == -1){
                       echo "<div class=\"form-messages error\">
                   Oops! Something Went Wrong. Please Try Again!
               </div>";
                   }
             ?>
              </div>
              
               <div class="row">
                <div class="col span-1-of-3">
                    <label>Name</label>
                </div>
                
                <div class="col span-2-of-3">
                    <input type="text" name="name" id="name" placeholder="Your Name" required>
                </div>
            </div>
        
         <div class="row">
                <div class="col span-1-of-3">
                    <label>Email</label>
                </div>
                
                <div class="col span-2-of-3">
                    <input type="email" name="email" id="email" placeholder="Your email" required>
                </div>
            </div>
        
              <div class="row">
                <div class="col span-1-of-3">
                    <label>How Did you Find Me</label>
                </div>
                
                <div class="col span-2-of-3">
                    <select name="find-us" id="find-us">
                        <option value="friends" selected>friends</option>
                        <option value="search">Search engine</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
         <div class="row">
             
            </div>
           <div class="row">
                <div class="col span-1-of-3">
                    <label>Drop me a link</label>
                </div>
                
                <div class="col span-2-of-3">
                  <textarea name="message" placeholder="Your Message"></textarea>
                </div>
            </div>
       <div class="row">
                <div class="col span-1-of-3">
                    <label>&nbsp;</label>
                </div>
                
                <div class="col span-2-of-3">
                    <input type="submit" value="SEND">
                </div>
            </div>
           
            
        </form>
    </div>

    </section>
        
        
<footer>
    <div class="row">
        <nav class='footer-nav'>
            <ul>
                <li><a target='blank' href="https://github.com/rcarhart"><i class="fab fa-github"></i>GitHub</a></li>
                <li>
                 <a target='_blank'href="https://www.linkedin.com/in/ross-carhart-504b8761"><i class="fab fa-linkedin"></i>LinkedIn</a>
                    </li>
            </ul>
        </nav>
        </div>

    
    <div class="row">
        <p class='copyright'>
        Copyright &copy; 2018 by Ross Carhart. All rights reveserved.
        </p>
    </div>
    </footer>
     
    
      
        

        
        <script src="vendors/mailer-new.php"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="script.js"></script>
	</body>
</html>