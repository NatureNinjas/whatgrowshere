<?php 
$pageTitle = "Birds Learning Object | LRS";
include '../includes/headerHtml.php'; 

print_r($_REQUEST);
//get location
if(isset($_GET["loc"])) {
	$location = explode(",", $_GET["loc"]);
}
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

			<form class="pure-form" action="" action="get">
				<input type="hidden" value="help!">
			    <fieldset>
	                <label for="loc">Select your location</label>
	                <select id="loc" name="loc">
	                    <option value="-34.928726,138.59994">Adelaide</option>
	                    <option value="-37.8136,144.9631">Melbourne</option>
	                    <option value="33.8736,151.2094">Sydney</option>
	                </select>

			        <button type="submit" class="pure-button pure-button-primary">Start Learning</button>
			    </fieldset>
			</form>
			<?php  
				if(count($location)==2) {
					echo file_get_contents("http://whatgrowshere.com.au/api/index.php?bname=Acacia&template=ala.birds");
				}
			?>
				

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
