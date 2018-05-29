import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.Header = $(".header");
    this.headerTriggerElement = $(".large-hero h1");
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.Header.addClass("header-dark");
        } else {
          that.Header.removeClass("header-dark");
        }
      }
    });
  }
}

export default StickyHeader;
