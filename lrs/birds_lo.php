<?php 
$pageTitle = "Birds Learning Object | LRS";
include '../includes/headerHtml.php'; 

//get location
?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>
	window.jQuery || document.write('<script src="../js/vendor/jquery-1.11.0.min.js"><\/script>')
</script>

<body id="learn">
	<!--[if lt IE 7]>
		<p class="browsehappy">Your browser is slightly outdated. You can <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

	<?php include 'header.html'; ?>

	<div class="content-wrapper">
		<div class="content learningObject">
			<h2 class="content-head is-center">Birds</h2>
			<p>
				This tests your knowledge of bird names. You will be presented with 5 birds commonly seen in your selected location. Please note down the 'taxon name' of each of the birds presented!
			</p>

			<h3>Instructions?</h3>

			<form class="pure-form" action="brids_lo.php">
			    <fieldset>
	                <label for="loc">Select your location</label>
	                <select id="loc">
	                    <option value"">Adelaide</option>
	                    <option value"">Melbourne</option>
	                    <option value"">Sydney</option>
	                </select>

			        <button type="submit" class="pure-button pure-button-primary">Start Learning</button>
			    </fieldset>
			</form>
			<?php  
				//echo file_get_contents("http://whatgrowshere.com.au/api/index.php?bname=Acacia&template=ala.birds");
			?>
				<div class="species">
					<div class="item-title">Bird sightings within 5km radius of your location.</div>
					<div class="item-summary">30 bird species found.</div>
					<div class="imageItem">
						<div class="title">
							Spiny-cheeked Honeyeater :  <span class="taxon">Acanthagenys rufogularis</span>
						</div>
						<img src="http://bie.ala.org.au/repo/1061/167/1672326/thumbnail.jpg" alt="Acanthagenys rufogularis">
					</div>
					<div class="imageItem">
					<div class="title">
						Inland Thornbill :  <span class="taxon">Acanthiza (Acanthiza) apicalis</span></div><img src="http://bie.ala.org.au/repo/1150/204/2049270/thumbnail.jpg" alt="Acanthiza (Acanthiza) apicalis"></div><div class="imageItem"><div class="title"> <span class="taxon"></span></div><img src="http://bie.ala.org.au/repo/1150/205/2054724/thumbnail.jpg" alt="Acanthiza (Geobasileus) chrysorrhoa leighi"></div><div class="imageItem"><div class="title">Tasmanian Thornbill :  <span class="taxon">Acanthiza (Acanthiza) ewingii</span></div><img src="http://bie.ala.org.au/repo/1040/39/390500/thumbnail.jpg" alt="Acanthiza (Acanthiza) ewingii"></div><div class="imageItem"><div class="title">Western Thornbill :  <span class="taxon">Acanthiza (Geobasileus) inornata</span></div><img src="http://bie.ala.org.au/repo/1150/205/2053320/thumbnail.jpg" alt="Acanthiza (Geobasileus) inornata"></div></div>
				</div>
			

		</div> <!-- .content -->
	</div> <!-- .content-wrapper -->

<?php 
	include 'footer.php';  
	include '../includes/footerHtml.php'; 
?>

<script type="text/javascript">
	$( document ).ready(function() {
		$(".title").append( " <a class=\"reveal\" href=\"#\">Show names!</a>");
	});
	$("body").on('click', 'a.reveal', function(){
	  $(".taxon").show();
	});
</script>
