$(document).ready(function() {
  
	var $userInput = $('#userInput');
	var $myOutput = $('.myOutput');

	var $comcast = ['NBC', 'COMCAST', 'XFINITY', 'UNIVERSAL KIDS','TELEMUNDO', 'INTEGRATED MEDIA GROUP', 'CNBC', 'MSNBC', 'MSNBC', 'NBC SPORTS', 'THE WEATHER CHANNEL', 'G4', 'WEATHER CHANNEL', 'USA NETWORK', 'USA', 'SYFY', 'SPROUT', 'BRAVO', 'E!', 'NBCSN', 'GOLF CHANNEL', 'GOLF NOW', 'NBCUNIVERSAL', 'DREAMWORKS', 'DREAM WORKS', 'OXYGEN', 'UNIVERSAL STUDIOS', 'NBC STUDIOS', 'OLYMPIC CHANNEL','UNIVERSAL PICTURES'];
	var $disney = ['ABC', 'FREEFORM', 'ABC NEWS', 'A&E', 'A&E NETWORKS', 'HISTORY CHANNEL', 'DISNEY', 'HISTORY','MILITARY HISTORY','VICELAND','DISNEY CHANNEL', 'RADIO DISNEY', 'LONGHORN NETWORK','ESPN DEPORTES','ESPNEWS','ESPNNEWS', 'SEC NETWORK','ESPN CLASSIC', 'ESPN RADIO', 'HISTORY NETWORK', 'HOLLYWOOD RECORDS', 'ESPN', 'ESPN2', 'ESPN 2', 'ESPN 3', 'ESPNU', 'ESPN NETWORKS', 'PIXAR', 'LUCASFILM', 'MARVEL', 'MARVEL STUDIOS', 'LIFETIME', 'VICE'];
	var $tw = ['TIME WARNER', 'TIME WARNER CABLE', 'MACHINIMA', 'WARNER BROTHERS', 'TURNER BROADCASTING SYSTEMS', 'HBO', 'AOL', 'CNN', 'TBS', 'TNT', 'TRUTV', 'CARTOON NETWORK'];
	var $fox = ['FOX NEWS', 'FOX', 'NATIONAL GEOGRAPHIC', 'FX', 'YES', 'YES NETWORK', 'BLUE SKY STUDIOS', '20TH CENTURY FOX', '21ST CENTURY FOX','BIG TEN NETWORK', 'FOX SPORTS 1', 'FOX SPORTS 2', 'FOX SPORTS', 'FOX LIFE', 'FXX'];
	var $na = ['SHOWCASE CINEMAS', 'NATIONAL AMUSEMENTS', 'CINEMA DE LUX', 'CBS', 'CBS NEWS', 'VIACOM', 'PARAMOUNT', 'PARAMOUNT PICTURES', 'MTV', 'NICK', 'NICK JR', 'NICKJR', 'NICK JR.', 'NICK@NITE', 'NICK AT NITE', 'NICKELODEON', 'VH1', 'TOUCHSTONE PICTURES', 'COMEDY CENTRAL', 'SPIKE', 'PARAMOUNT NETWORK', 'LOGO TV', 'BET', 'CMT', 'REPUBLIC PICTURES', 'MTV FILMS', 'MTV 2', 'MTV U', 'MTV CLASSIC', 'COMEDY CENTRAL FILMS', 'SHOWTIME', 'GAMESPOT', 'GAMEFAQS'];
	var $twna = ['THE CW', 'CW'];
	var $amc = ['AMC', 'AMC NETWORKS', 'IFC', 'WE TV', 'WETV', 'SUNDANCETV', 'SUNDANCE', 'SUNDANCE TV'];
	var $lionsgate = ['LIONSGATE', 'LIONSGATE FILMS', 'STARZ', 'ENCORE', 'MOVIEPLEX', 'INDIEPLEX', 'SUMMIT ENTERTAINMENT', 'STARZ ENCORE'];
	var $discovery = ['DISCOVERY', 'DISCOVERY CHANNEL', 'ANIMAL PLANET', 'TLC', 'SCIENCE', 'VELOCITY', 'OPRAH WINFREY NETWORK', 'DESTINATION AMERICA', 'MILITARY CHANNEL', 'DISCOVERY SCIENCE', 'SCIENCE CHANNEL'];

	$userInput.keyup(function() {
	    $(this).val($(this).val().toUpperCase());
	    $myOutput.html(''); 
	    if ($.inArray($userInput.val(), $comcast) >= 0) {
	      $myOutput.html('<p>Comcast</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Comcast_Logo.svg/2000px-Comcast_Logo.svg.png" width="300">');
	    }
	    if ($.inArray($userInput.val(), $tw) >= 0) {
	      $myOutput.html('<p>Time Warner</p><img src="http://www.officeaddresshelplinenumber.com/wp-content/uploads/2016/02/time-warner.png" width="300">');
	    };    
	    if ($.inArray($userInput.val(), $fox) >= 0) {
	      $myOutput.html('<p>21st Century Fox</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/21st_Century_Fox_logo.svg/2000px-21st_Century_Fox_logo.svg.png" width="300">');
	    };    
	    if ($.inArray($userInput.val(), $disney) >= 0) {
	      $myOutput.html('<p>The Walt Disney Company</p><img src="https://vignette.wikia.nocookie.net/disney/images/1/18/2000px-TWDC_Logo.png/revision/latest" width="300">');
	    };
	    if ($.inArray($userInput.val(), $na) >= 0) {
	      $myOutput.html('<p>National Amusements</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/National_Amusements.svg/2000px-National_Amusements.svg.png" width="300">');
	    };
	    if ($.inArray($userInput.val(), $twna) >= 0) {
	      $myOutput.html('<p>50% National Amusements, 50% Time Warner</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/National_Amusements.svg/2000px-National_Amusements.svg.png" width="300"><br><img src="http://www.officeaddresshelplinenumber.com/wp-content/uploads/2016/02/time-warner.png" width="300">');
	    };
	    if ($.inArray($userInput.val(), $amc) >= 0) {
	      $myOutput.html('<p>AMC Networks</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/AMC_Networks_logo.svg/1200px-AMC_Networks_logo.svg.png" width="300">');
	    };
	    if ($.inArray($userInput.val(), $lionsgate) >= 0) {
	       $myOutput.html('<p>Lionsgate</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lionsgate_Logo.svg/2000px-Lionsgate_Logo.svg.png" width="300">');
	    };
	    if ($.inArray($userInput.val(), $discovery) >= 0) {
	      $myOutput.html('<p>Discovery Communications</p><img src="http://www.rimage.com/wp-content/uploads/2016/01/Case-Study-Discovery-Communications.png" width="300">');
	    };
	  
	  });


}); 