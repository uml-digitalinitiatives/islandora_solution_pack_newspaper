/**
 * @file
 * Islandora Newspaper Ajax scripts.
 */

(function ($) {
  Drupal.behaviors.islandora_newspaper_issue_list = {
    attach: function (context, settings) {
      jQuery('#islandora_newspaper_ajax_nav .vertical-tab-button a').once('ajax', function () {
        // Use context to ensure the link is only ever activated if it's regenerated.
        var $mySpecialLink = $(this, context);
        var year = jQuery(this).children('strong').text();
        var the_settings = Drupal.settings.islandora_newspaper_ajax;
        var pid = the_settings.newspaper_issue_pid;
        if (pid.length > 0 && year != Drupal.settings.islandora_newspaper_ajax.first_year) {
          jQuery(this).attr('href', the_settings.base_url + '/islandora_newspaper/' + pid + '/newspaper_year/' + year + '/nojs').addClass('use-ajax');
          Drupal.ajax['fieldset-content-' + year] = new Drupal.ajax('#fieldset-content-' + year, $mySpecialLink, {
            url: $mySpecialLink.attr('href'),
            settings: {},
            event: 'click tap'
          });
        }
      });
    },
  }
})(jQuery);
