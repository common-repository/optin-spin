<?php
include '../../../../wp-load.php';
$optinspin_wheel = new optinspin_Wheel();

header('Content-type: application/json');
// optinspin_get_segment_colors
// array("#364C62", "#F1C40F", "#E67E22", "#2ECC71", "#E87AC2", "#3498DB", "#9B59B6", "#7F8C8D")
// $optinspin_wheel->optinspin_get_segment_colors()
$data = array(
"colorArray" => $optinspin_wheel->optinspin_get_segment_colors(),

"segmentValuesArray" => $optinspin_wheel->optinspin_get_segments(),
"svgWidth" => 1024,
"svgHeight" => 768,
"wheelStrokeColor" => $optinspin_wheel->optinspin_get_general_settings()['optinspin_border_color'],
"wheelStrokeWidth" => $optinspin_wheel->optinspin_get_general_settings()['optinspin_border_width'],
"wheelSize" => 800,
"wheelTextOffsetY" => 110,
"wheelTextColor" => $optinspin_wheel->optinspin_get_general_settings()['optinspin_text_color'],
"wheelTextSize" => $optinspin_wheel->optinspin_get_general_settings()['optinspin_text_size']."em",
"wheelImageOffsetY" => 40,
"wheelImageSize" => 50,
"centerCircleSize" => 100,
"centerCircleStrokeColor" =>  $optinspin_wheel->optinspin_get_general_settings()['optinspin_inner_border_color'],
"centerCircleStrokeWidth" => 12,
"centerCircleFillColor" => "#EDEDED",
//"segmentStrokeColor" => "#E2E2E2",
"segmentStrokeColor" => "#000",
"segmentStrokeWidth" => 2,
"centerX" => 512,
"centerY" => 384,  
"hasShadows" => false,
"numSpins" => 2,
"spinDestinationArray" => array(),
"minSpinDuration" => $optinspin_wheel->optinspin_spin_speed(),
"gameOverText" => "THANK YOU FOR PLAYING SPIN2WIN WHEEL. COME AND PLAY AGAIN SOON!",
"invalidSpinText" =>"INVALID SPIN. PLEASE SPIN AGAIN.",
"introText" => "YOU HAVE TO<br>SPIN IT <span style='color=>#F282A9;'>2</span> WIN IT!",
"hasSound" => $optinspin_wheel->optinspin_get_general_settings()['optinspin_enable_sound'],
"gameId" => "9a0232ec06bc431114e2a7f3aea03bbe2164f1aa",
"clickToSpin" => true

);

echo json_encode( $data);
?>