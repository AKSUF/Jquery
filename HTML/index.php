<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .mainouter {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .outer {
            width: 400px;
            height: 400px;
            border: 2px solid black;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .inner {
            width: 200px;
            height: 160px;
            border: 2px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .first {
            width: 50px;
            height: 20px;
            border: 2px solid blue;
            margin: 5px;
        }
    </style>
</head>

<body>
    <div class="mainouter" id="mainouter">
        <p>mainouter</p>
        <div class="outer" id="outer">
            <p>outer</p>
            <div class="inner" id="inner">
                <p>inner</p>
                <div class="first">A</div>
                <div class="first">B</div>
                <div class="first" id="child-C">C</div>
                <div class="first">D</div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="../JS/index.js"></script>
</body>

</html>
