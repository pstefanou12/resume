/*
 * interest bar logic
*/

$(document).ready(function() {
  // interest sliders
  // ml
  var mlTarget = $('#ml-ds');
  var mlSlider = $('#ml-interest');
  // quant finance
  var quantFinanceTarget = $('#quant-finance');
  var quantFinanceSlider = $('#quant-finance-interest');
  // web development
  var webDevTarget = $('#web-development');
  var webDevelopmentSlider = $('#web-development-interest');
  // fintech
  var finTechTarget = $('#fin-tech');
  var finTechSlider = $('#fintech-interest');
  // blockchain
  var blockchainTarget = $('#blockchain');
  var blockchainSlider = $('#blockchain-interest');
  // performance engineering
  var performanceEngineeringTarget = $('#performance-engineering');
  var performanceEngineeringSlider = $('#performance-engineering-interest');

  // move sliders when scroll on slider section
  $(window).scroll(function() {
    var position  = $(this).scrollTop();

    // change the interest levels on the static slider bar
    function interestBar(elem, loc, width) {
        var target = loc.offset().top; // target pos for slider

        // check if the static slider is in view port
        function checkvisible( elem ) {
            var vpH = viewPortHeight(), // Viewport Height
                y = elem.offset().top;

            // check that slider is in between top and bottom of viewport
            return (position < y && y < (vpH + position));
        }

        // get view port height
        function viewPortHeight() {
            var de = document.documentElement;

            if(!!window.innerWidth)
              { return window.innerHeight; }
            else if( de && !isNaN(de.clientHeight) )
              { return de.clientHeight; }

            return 0;
        }

        if (checkvisible(elem)) {
          elem.css({'width': width + '%'}); 
        } else {
          elem.css({'width': '0%'});
        }
    }

    // function calls
    interestBar(mlSlider, mlTarget, '90');
    interestBar(quantFinanceSlider, quantFinanceTarget, '90');
    interestBar(webDevelopmentSlider, webDevTarget, '80');
    interestBar(finTechSlider, finTechTarget, '60');
    interestBar(blockchainSlider, blockchainTarget, '50');
    interestBar(performanceEngineeringSlider, performanceEngineeringTarget, '100');
  })
});
