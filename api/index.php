<?php
@include_once('../apiConfig.php');

$error = true;
$tag = '';
$maxresults = 5;

if(isset($_GET["bname"])) {
	$tag = htmlspecialchars($_GET["bname"]);
	$error =false;
}
if(isset($_GET["maxresults"])) {
	if(is_int($_GET["maxresults"])) {
		$maxresults = $_GET["maxresults"];
	}else{
		//TODO: or just fall-back to default?
		$error = true;
	}
} 

if($error) {
	die('Invalid parameters');
}

$url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
$url.= '&api_key='.Api_Key;
$url.= '&tags='.$tag;
$url.= '&per_page='.$maxresults;
$url.= '&format=json';
$url.= '&nojsoncallback=1';
 
$response = json_decode(file_get_contents($url));
$photo_array = $response->photos->photo;

//print ("<pre>");
//print_r($response);
//print ("</pre>");
 
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
	<!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>WIRRA | GovHack</title>
	<link rel="stylesheet" href="../css/normalize.min.css">
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
		<!--[if lte IE 8]>
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-old-ie-min.css">
		<![endif]-->
		<!--[if gt IE 8]><!-->
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
		<!--<![endif]-->
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
		<script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>
	<!--[if lt IE 7]>
		<p class="browsehappy">Your browser is slightly outdated. You can <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

	<div class="header">
		<div class="home-menu pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
			<a class="pure-menu-heading" href="">What grows here?</a>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>

	<div class="content-wrapper">
		<div class="content">
			<h2 class="content-head is-center"><?php echo "Search Terms: " . $tag; ?></h2>
			<div class="pure-g">
			<?php
				foreach($photo_array as $single_photo){
					$farm_id = $single_photo->farm;
					$server_id = $single_photo->server;
					$photo_id = $single_photo->id;
					$secret_id = $single_photo->secret;
					$size = 'm';
					 
					$title = $single_photo->title;
					 
					$photo_url = 'http://farm'.$farm_id.'.staticflickr.com/'.$server_id.'/'.$photo_id.'_'.$secret_id.'_'.$size.'.'.'jpg';
				 
			?>
				<div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
					<h3 class="content-subhead"><?php echo $title; ?></h3>
					<img class="pure-img-responsive" alt="<?php echo $title;?>" src="<?php echo $photo_url;?>">
				</div>
			
			<?php } ?>
			</div> <!-- .pure-g -->
		</div> <!-- .content -->
	</div> <!-- .content -->
</body>
</html>
