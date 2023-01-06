<?php
$arr = array (
array(
    "day" => "Δευτέρα",
    "temperature" => rand(11,17),
    "humidity" => rand(70,89),
    "status" => "rain"
    ),
    array(
        "day" => "Τρίτη",
        "temperature" => rand(11,17),
        "humidity" => rand(70,89),
        "status" => "sunnycloud"
        ),
        array(
            "day" => "Τετάρτη",
            "temperature" => rand(11,17),
            "humidity" => rand(70,89),
            "status" => "cloudy"
            ),
            array(
                "day" => "Πέμπτη",
                "temperature" => rand(11,17),
                "humidity" => rand(70,89),
                "status" => "cloudysunwind"
                ),
                array(
                    "day" => "Παρασκευή",
                    "temperature" => rand(11,17),
                    "humidity" => rand(70,89),
                    "status" => "cloudywind"
                    ),
                    array(
                        "day" => "Σάββατο",
                        "temperature" => rand(11,17),
                        "humidity" => rand(70,89),
                        "status" => "rain"
                        ),
                        array(
                            "day" => "Κυριακή",
                            "temperature" => rand(11,17),
                            "humidity" => rand(70,89),
                            "status" => "rainhard"
                            )
    
    );
   
echo json_encode($arr);
?>