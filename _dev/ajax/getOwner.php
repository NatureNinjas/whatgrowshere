<?php 
/**
 * https://www.flickr.com/services/api/flickr.people.getInfo.html
 * url, license, owner
 */
 die(3);
require_once('../Connector.php');

$error = true;


if(empty($_GET["id"])) {
	$id = htmlspecialchars($_GET["id"]);
	$error =false;
}

header('HTTP/1.1 404 Not found.', true, 400);
exit(0);
/**
$url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
$url.= '&api_key='.Api_Key;
$url.= '&tags='.$tag;
$url.= '&per_page='.$maxresults;
$url.= '&format=json';
$url.= '&nojsoncallback=1';
 
$response = json_decode(file_get_contents($url));
*/
 
$curl = new Connector();
$response = $curl->get(
	'https://api.flickr.com/services/rest/',
	 array(
	 	'method' => 'flickr.people.getInfo',
	 	'api_key' => Api_Key,
	 	'user_id' => $id,
	 )
	 
); 
header('Content-Type: application/json');
print $response;
exit(0);
