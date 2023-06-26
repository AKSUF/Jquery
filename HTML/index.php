<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .level{
        margin-top: 5px;
      }
      .result{
        border: 5px solid green;
      }
    </style>
</head>
<body>
   <div class="form" id="sform">
<form action="" method="post">
    <div class="level mt-4">
    <label for="name">Name</label>
    <input type="text" class="form-control" name="sname" id="sname">
    </div>
    <div class="level mt-5">
    <label for="name">Class</label>
    <input type="text" class="form-control" name="sclass" id="sclass">
    </div>
    <div class="level mt-5">
    <label for="name">Country</label>
    <select name="scountry" id="scountry" class="form-control">
        <option value="dhaka">Dhaka</option>
        <option value="dhaka">Delihi</option>
        <option value="dhaka">Sunamgonj</option>
    </select>
    </div>
<div>
    <input type="submit" value="Submit" class="m-auto">
</div>
</form>

   </div>

<div class="result" id="result"></div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="../JS/index.js"></script>

</body>
</html>