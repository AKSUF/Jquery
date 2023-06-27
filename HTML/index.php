<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #first {
            background-color: red;
            border: 3px solid green;
        }

        #second {
            background-color: blue;
            border: 2px solid navy;
        }
    </style>
</head>

<body>
    <h1>Jquery Filtering Methods</h1>
    <div id="first">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <p class="test">Lorem ipsum dolor sit amet.</p>
    </div>

    <ul>
        <li>Orange</li>
        <li><span>Apple</span></li>
        <li>Banana</li>
        <li>Grapes</li>
        <li>Coconut</li>
    </ul>

    <div id="second">
        <p id="test">
            Lorem ipsum <span class="test">Lorem, ipsum dolor.</span> dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>

    <div id="demo"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="../JS/index.js"></script>
</body>

</html>
