<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .form {
            margin-top: 5px;
        }
    </style>
</head>

<body>
    <h1>jQuery Get methods</h1>
    <form action="" name="sform" id="sform">
        <div class="form sname mt-2">
            <label for="sname">Name</label>
            <input type="text" class="form-control" name="sname" id="sname" />
        </div>
        <div class="form sclass mt-2">
            <label for="sclass">Class</label>
            <input type="text" class="form-control" name="sclass" id="sclass">
        </div>
        <div class="form scountry mt-2">
            <label for="scountry">Country</label>
            <select name="scountry" id="scountry">
                <option value="bangladesh">Bangladesh</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="srilanka">Srilanka</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Submit" id="">
        </div>
    </form>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="../JS/index.js"></script>
</body>

</html>