<?php
  require_once 'vendor/autoload.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Demo</title>
    <link rel="stylesheet" href="<?php echo mix('css/app.css'); ?>" />
  </head>

  <body>
    Hello world.
    <?php echo mix(); ?>

    <script src="<?php echo mix('js/app.js'); ?>"></script>
  </body>
</html>