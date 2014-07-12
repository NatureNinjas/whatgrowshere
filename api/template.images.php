<?php

$curl = new Connector();
$response = $curl -> get('https://api.flickr.com/services/rest/', 
	array('method' => 'flickr.photos.search', 
		'api_key' => Api_Key, 
		'tags' => $tag, 
		'per_page' => $maxresults, 
		'format' => 'json', 
		'licenses' => '1,2,3,4,5,6,7,8', //@see https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html
		'sort' => 'relevance',
		'nojsoncallback' => '1'));

$photos = $response -> photos -> photo;
?>
<div class="images">
<?php
foreach((array) $photos as $key => $image){

	$size = 'm';
	$imageSrc = 'http://farm'.$image->farm.'.staticflickr.com/'.$image->server.'/'.$image->id.'_'.$image->secret.'_'.$size.'.'.'jpg';

	//imgDiv
	echo Image::renderImage($imageSrc, $image->title);
	$owner = $curl -> get('https://api.flickr.com/services/rest/', 
	array('method' => 'flickr.people.getInfo', 
		'api_key' => Api_Key,
		'user_id' => $image -> owner,
		'format' => 'json', 
		'nojsoncallback' => '1'));

	echo Image::renderOwner($owner->person->username->_content, $owner->person->photosurl->_content);	
	//ownerDiv
	//imgDivEnd
}
?>	
</div>

<?php
Class Image{
	
	 function __construct(){
	 	
	 }
	 
	public static function renderImage($src, $title){
	 	return '<div class="imageItem"><img src="'.$src.'" alt="'.$title.'"></div>';
	 	
	 }
	 public static function renderOwner($name, $link){
	 	return '<div class="owner"><a href="'.$link.'">'.$name.'</a></div>';
	 }
	
}
