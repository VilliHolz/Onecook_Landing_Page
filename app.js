<script>
  $(window).scroll(function() {
    $(".animated").each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("animate__animated");
      }
    })}
  );
</script>





