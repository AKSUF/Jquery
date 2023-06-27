<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            border: 6px solid green;
        }
        .box2 {
            border: 6px solid green;
            margin-top: 5px;
        }
        #boxbg {
            background-color: orange;
        }
        #hasclassBtn{
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="box" id="box" >
   <h1>Scrolling measure</h1>
   <p>This is a topic</p>
<div class="box2" id="box2"></div>
    </div>
  <div class="topic"></div>
    <button id="slideupBtn">SlideUp</button>
    <button id="slidedownBtn">SlideDown</button>
    <button id="slidetoggleBtn">SlideToggle</button>
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="../JS/index.js"></script>
</body>
</html>
