<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
.box{
    border: 6px solid green;
}
.box2{
    border: 6px solid green;
    margin-top: 5px;
}
.boxbg {
  background-color: orange;
}

    </style>
</head>
<body>
<div class="box" id="box">
        <h2>Title</h2>
        <p>Content</p>
    </div>
    <div id="box2" class="box2"><h1>how it works</h1></div>
    <button id="clone">Clone and Append</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="../JS/index.js"></script>
</body>
</html>