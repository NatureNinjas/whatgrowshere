<?php 

$lon = "138.59994";
$lat = "-34.928726";

echo "<h2>Test http://api.ala.org.au/</h2>";

//Overall ALA species counts
$url = "http://biocache.ala.org.au/ws/explore/groups?lon=$lon&lat=$lat&radius=5";
$response = json_decode(file_get_contents($url));

echo "<h3>Species Count</h3>";		
//print ("<pre>");
//print_r($response);
//print ("</pre>");

foreach ($response as $value) {
	if($value->name == "Birds") {
		$message = " Bird species sighted within 5km radius of you location.";
		if($value->speciesCount > 0) {
			echo $value->speciesCount . $message;
		}else{
			echo "No" . $message;
		}
		
	}
}



 ?>
