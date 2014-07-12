<?php
//http://en.wikipedia.org/w/api.php?action=opensearch&search=india
$curl = new Connector();
$response = $curl -> get('http://en.wikipedia.org/w/api.php', 
	array(
		'action' => 'opensearch', 
		'search' => $tag));
?>
<div class="links wikipedia">
<?php
foreach((array) $response[1] as $key => $title){
	$url = 'http://en.wikipedia.org/wiki/'.$title;
	echo Wikipedia::renderEntryLink($url, $title);	
	//ownerDiv
	//imgDivEnd
}
?>	
</div>

<?php
Class Wikipedia{
	
	 function __construct(){
	 	
	 }
	 
	public static function renderEntryLink($src, $title){
	 	return '<div class="item"><a href="'.$src.'" title="'.$title.'">'.$title.'</a></div>';
	 	
	 }
	
}
