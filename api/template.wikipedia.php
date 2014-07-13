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
$response = (array)$response;
?>
<div class="links wikipedia">
<?php if(count($response) > 0): ?>
<div class="item-title">Related Wikipedia Articles</div>
<?php endif; ?>
<?php
foreach((array) $response[1] as $key => $title){
	$url = 'http://en.wikipedia.org/wiki/'.$title;
	echo Wikipedia::renderEntryLink($url, $title);	
}
?>	
</div>