var LMAG = LMAG || {};
LMAG.engine = LMAG.engine || {};

LMAG.engine.hooks = function() {
  var listeners = {},
      suspendedEvents = false,
      queuedEvents = [],
      queueEvents = false;

  var HOOKS = {
    initialize: 'game@initialize',

    entityCreated: 'entity@entityCreated',
    entityRamoved: 'entity@entityRemoved',
    componentAdded: 'entity@componentAdded'
  };

  var on = function(hookName, callback) {
    if (typeof listeners[hookName] === "undefined") {
      listeners[hookName] = [];
    }

    listeners[hookName].push(callback);
  };

  var fire = function(hookName, data) {
    if (listeners[hookName] instanceof Array) {
      if (suspendedEvents && !queueEvents) {
        return;
      }
      var currentListeners = listeners[hookName];
      for (var i = 0, len = currentListeners.length; i < len; i++) {
        if (suspendedEvents) {
          queuedEvents.push([currentListeners[i], data]);
        } else {
          if (currentListeners[i]) {
            currentListeners[i](data);
          }
        }
      }
    }
  };

  var out = function(hookName, callback) {
    if (listeners[hookName] instanceof Array) {
      var currentListeners = listeners[hookName];
      for (var i = 0, len = currentListeners.length; i < len; i++) {
        if (currentListeners[i] === callback) {
          currentListeners.splice(i, 1);
          break;
        }
      }
    }
  };

  var suspendEvents = function(queue) {
    suspendedEvents = true;
    if (queue) {
      queueEvents = true;
    }
  };


  var resumeEvents = function() {
    suspendedEvents = false;
    if (queuedEvents.length) {
      queueEvents = false;

      var current;
      for (var i = 0, l = queuedEvents.length; i < l; i += 1) {
        current = queuedEvents[i];
        current[0](current[1]);
      }
      queuedEvents = [];
    }
  };

  return {
    // ... hooks.HOOKS... is stupid as hell
    HOOKS: HOOKS,
    on: on,
    fire: fire,
    out: out,
    suspendEvents: suspendEvents,
    resumeEvents: resumeEvents
  };
}();
