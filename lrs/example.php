<?php 
$pageTitle = "Example | LRS";
include '../includes/headerHtml.php'; 
?>

<body id="learn">
	<!--[if lt IE 7]>
		<p class="browsehappy">Your browser is slightly outdated. You can <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

<?php include 'header.html'; ?>
	<a class="pure-button" href="../documents/NatureNinjaLogBook.pdf">Download this sheet as a pdf</a>

	<div class="content-wrapper">
		<div class="content">
			<h2 class="content-head is-center">Be a Nature Ninja</h2>
			<form id="ObservationSheet" class="pure-form" method="post">

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
				<h3>Plant Log Book</h3>
					<p><a class="pure-button button-small" href="../documents/NatureNinjaLogBook.pdf">Download this sheet as a pdf</a></p>
				</div>
				<div class="pure-u-6-24"></div>
			</div>


			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Who are you?</legend>
					    <input name="Name" type="text" placeholder="Name">
					    <input name="Class" type="text" placeholder="Class">
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>
			
			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<p>Your teacher will give you a list of some plants that grow in your local area. You will need to choose a plant that you would like to know more about.</p>
					<p>In order to collect your information about the plant you will have to go and look at it where it is growing. Your teacher will direct you on how to do this. You may also need to use other sources of information such as websites, books, magazines or information sheets.</p>
					<h2>Here we go …. Have fun exploring!</h2>
				</div>
				<div class="pure-u-6-24"></div>
			</div>			

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>What is the common and scientific name of the plant?</legend>
					    <input name="CommonName" type="text" placeholder="Common name">
					    <input  name="ScientificName" type="text" placeholder="Scientific name">
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>How would you <strong>classify</strong> the plant? Look up any words that you are not familiar with.</legend>
					    <select name="Classification" type="text">
					    	<option value="">Classification...</option>
					    	<option value="">Trees and shrubs</option>
							<option value="">Groundcovers</option>
							<option value="">Climbers</option>
							<option value="">Grasses and other Strap Leaved Plants</option>
							<option value="">Bulbs and Lilies</option>
							<option value="">Aquatic and Riparian Zone Plants</option>
							<option value="">Rushes and Sedges</option>
					    </select>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>What is the <strong>shape</strong> of the plant? Draw a silhouette to show the shape.</legend>
					    <textarea name="Shape" class="textarea-block" placeholder="Draw.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>What is the <strong>height</strong> of the plant?</legend>
					    <input  name="Height" type="text" placeholder="Height">
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>What is the <strong>width</strong> of the plant?</legend>
					    <input  name="Width" type="text" placeholder="Width">
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Describe the <strong>soil</strong> in which the plant or tree grows.</legend>
					    <ul>
					    <li>Is it wet or dry?</li>
					    <li>What is the texture of the soil? Is it sand, clay, limestone or loam?</li>
					    </ul>
					    <textarea name="Soil" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>
			
			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Have a look <strong>under the plant.</strong> What things do you see?<br />Do you see any earthworms, seeds, dead leaves insects, mushrooms or rubbish?</legend>
					    <textarea name="UnderThePlant" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Does the plant have any <strong>flowers</strong>? If so, what <strong>colour</strong> are they? Draw a picture of the flower. </legend>
					    <textarea name="Flowers" class="textarea-block" placeholder="Draw.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Does the plant have any <strong>seeds</strong>? If so, describe them and draw a picture of them.</legend>
					    <textarea name="Seeds" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Describe the colour and feel of the <strong>bark</strong>. Is it rough, smooth, dry, damp, mossy or cold?</legend>
					    <textarea name="Bark" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Describe the colour and feel of the <strong>leaves</strong>.</legend>
					    <textarea name="LeavesDescription" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Draw a picture of a leaf.</legend>
					    <textarea name="LeavesDrawing" class="textarea-block" placeholder="Draw.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Can you see any <strong>animals</strong> such as birds, butterflies and other insects on or very near to the plant?<br />If so, what are they and what are they doing?</legend>
					    <textarea name="Animals" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Draw a picture <strong>with each part</strong> of the plant labelled.<br /> You may use websites, encyclopaedias, gardening books or magazines to help you with this.</legend>
					    <textarea name="PictureOfParts" class="textarea-block" placeholder="Describe.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Find out at least three <strong>interesting facts</strong> about the plant.</legend>
					    <textarea name="InterestingFacts" class="textarea-block" placeholder="Three interesting facts.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>
			
			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>If you have a camera you could take some pictures of the plant and stick them below.</legend>
					    <textarea name="Photos" class="textarea-block" placeholder="Photos.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>	

			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<h2>What Grows Here?</h2>
					<fieldset>
					    <legend>If you have a camera you could take some pictures of the plant and stick them below.</legend>
					    <fieldset class="pure-group">
					        <input type="text" class="pure-input-1-2" placeholder="State">
					        <input type="text" class="pure-input-1-2" placeholder="Regions where the plant occurs naturally.">
					        <input type="text" class="pure-input-1-2" placeholder="Height (m)">
					        <input type="text" class="pure-input-1-2" placeholder="Spread (m)">
					        <input type="text" class="pure-input-1-2" placeholder="Rain (mm)">
					        <input type="text" class="pure-input-1-2" placeholder="Soil texture">
					        <input type="text" class="pure-input-1-2" placeholder="Soil pH">
					        <input type="text" class="pure-input-1-2" placeholder="Frost">
					        <input type="text" class="pure-input-1-2" placeholder="Form">
					        <input type="text" class="pure-input-1-2" placeholder="Flower colour">
					        <input type="text" class="pure-input-1-2" placeholder="Flower time">
					    </fieldset>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>	
	
			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <legend>Compare the information from ‘What Grows Here?’ to the information you got from your observations.<br/><br/>What is the same? What is different? If there are some bits of information that is different, what do you think has caused the differences?</legend>
					    <textarea name="AdditionalObservations" class="textarea-block" placeholder="Additional observations.."></textarea>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>	
			
			<div class="pure-g">
				<div class="pure-u-6-24"></div>
				<div class="pure-u-12-24">
					<fieldset>
					    <button class="pure-button pure-button-primary button-xlarge">Submit your sheet.</button>
					</fieldset>	
				</div>
				<div class="pure-u-6-24"></div>
			</div>	
			
		</form>
		</div> <!-- .content -->
	</div> <!-- .content-wrapper -->

<?php 
	include 'footer.php';  
	include '../includes/footerHtml.php'; 
?>
