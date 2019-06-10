<?php
include("calc.php");

header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE html>
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-3.3.1.js'></script>
		<link rel='stylesheet' href='../stylesheets/ajax.css'>
	</head>
	<body>

		<form action="ajax.php" method="POST" 		class='b-calc b-ajax' id='calc1'>
			<input type='text' name='a' 	class='b-calc__a' value='<?php print $a?>'> + 
			<input type='text' name='b' 	class='b-calc__b' value='<?php print $b?>'>
			<input type='submit' value='=' 	class='b-calc__count b-ajax__submit'>
			<span 							class='b-calc__result'><?php print $result?></span>
		</form>
	
	
		
	</body>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/ajax.js'></script>
	
	<script>
	var c1 = new ajaxCalc('#calc1');
	</script>
</html>