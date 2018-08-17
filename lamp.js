<!--Change the file extension to html-->
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Bolt IoT Led Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script type="text/javascript" src="https://cloud.boltiot.com/static/js/boltCommands.js"></script>
      <script type="text/javascript">
         // The following line will set the api key and device name. It will be auto-initialized by Bolt cloud.
         setKey('{{ApiKey}}','{{Name}}');
      </script>
   </head>
   <body>
      <div class="jumbotron vertical-center">
         <div class="container">
            <div class="row">
               <div class="col-xs-12">
                  <div  class="text-center">
                     <button type="submit" class="btn btn-success btn-xl" onclick="digitalWrite(4, 'HIGH');">ON</button>
                     <br> <br> <br>
                     <button type="submit" class="btn btn-danger btn-xl" onclick="digitalWrite(4, 'LOW');">OFF</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <style type="text/css">
         .vertical-center {
         min-height: 100%;
         min-height: 100vh;
         display: flex;
         align-items: center;
         }
         .btn-xl {
         padding: 10px 20px;
         font-size: 20px;
         width:20%;
         }
      </style>
   </body>
</html>
