<?php
//Theme class
require_once('./Theme/Wikipedia.php');

//Controller
//http://en.wikipedia.org/w/api.php?action=opensearch&search=india
$curl = new Connector();
$response = $curl -> get('http://en.wikipedia.org/w/api.php', 
	array(
		'action' => 'opensearch', 
		'search' => $tag));
?>
<div class="links wikipedia">
<div class="item-title">Related Wikipedia articles</div>
<?php
foreach((array) $response[1] as $key => $title){
	$url = 'http://en.wikipedia.org/wiki/'.$title;
	echo Wikipedia::renderEntryLink($url, $title);	
}
?>	
</div>