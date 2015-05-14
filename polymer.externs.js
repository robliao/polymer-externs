/**
 * @fileoverview Closure compiler externs for the Polymer library.
 *
 * @externs
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt. The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
 */

/**
 * @param {!{is: string}} descriptor The Polymer descriptor of the element.
 * @see https://github.com/Polymer/polymer/blob/0.8-preview/PRIMER.md#custom-element-registration
 */
var Polymer = function(descriptor) {};


/** @constructor @extends {HTMLElement} */
var PolymerElement = function() {};

/**
 * A mapping from ID to element in this Polymer Element's local DOM.
 * @type {!Object}
 */
PolymerElement.prototype.$;

/**
 * Returns the first node in this element’s local DOM that matches selector.
 * @param {string} selector
 */
PolymerElement.prototype.$$ = function(selector) {};

/** @type {string} The Custom element tag name. */
PolymerElement.prototype.is;

/** @type {string} The native element this element extends. */
PolymerElement.prototype.extends;

/**
 * An array of objects whose properties get mixed in to this element.
 *
 * @type {!Array<!Object>|undefined}
 */
PolymerElement.prototype.mixins;

/**
 * A string-separated list of dependent properties that should result in a
 * change function being called. These observers differ from single-property
 * observers in that the change handler is called asynchronously.
 *
 * @type {!Object<string, string>|undefined}
 */
PolymerElement.prototype.observers;

/** On create callback. */
PolymerElement.prototype.created = function() {};
/** On ready callback. */
PolymerElement.prototype.ready = function() {};
/** On attached to the DOM callback. */
PolymerElement.prototype.attached = function() {};
/** On detached from the DOM callback. */
PolymerElement.prototype.detached = function() {};

/**
 * Callback fired when an attribute on the element has been changed.
 *
 * @param {string} name The name of the attribute that changed.
 */
PolymerElement.prototype.attributeChanged = function(name) {};

/** @typedef {!{
 *    type: !Function,
 *    reflectToAttribute: (boolean|undefined),
 *    readOnly: (boolean|undefined),
 *    notify: (boolean|undefined),
 *    value: *,
 *    computed: (string|undefined),
 *    observer: (string|undefined)
 *  }} */
PolymerElement.PropertyConfig;

/** @typedef {!Object<string, (!Function|!PolymerElement.PropertyConfig)>} */
PolymerElement.Properties;

/** @type {!PolymerElement.Properties} */
PolymerElement.prototype.properties;

/** @type {!Object<string, *>} */
PolymerElement.prototype.hostAttributes;

/**
 * An object that maps events to event handler function names.
 * @type {!Object<string, string>}
 */
PolymerElement.prototype.listeners;

/**
 * Notifies the event binding system of a change to a property.
 * @param  {string} path  The path to set.
 * @param  {*}      value The value to send in the update notification.
 */
PolymerElement.prototype.notifyPath = function(path, value) {};

/**
 * Shorthand for setting a property, then calling notifyPath.
 * @param  {string} path  The path to set.
 * @param  {*}      value The new value.
 */
PolymerElement.prototype.setPathValue = function(path, value) {};

/**
 * Fire an event.
 *
 * @param {string} type An event name.
 * @param {Object=} detail
 * @param {{
 *   bubbles: (boolean|undefined),
 *   cancelable: (boolean|undefined),
 *   node: (!HTMLElement|undefined)}=} options
 * @return {Object} event
 */
PolymerElement.prototype.fire = function(type, detail, options) {};

/**
 * Toggles the named boolean class on the host element, adding the class if
 * bool is truthy and removing it if bool is falsey. If node is specified, sets
 * the class on node instead of the host element.
 * @param {string} name
 * @param {boolean} bool
 * @param {HTMLElement=} node
 */
PolymerElement.prototype.toggleClass = function(name, bool, node) {};

/**
 * Toggles the named boolean attribute on the host element, adding the attribute
 * if bool is truthy and removing it if bool is falsey. If node is specified,
 * sets the attribute on node instead of the host element.
 * @param {string} name
 * @param {boolean} bool
 * @param {HTMLElement=} node
 */
PolymerElement.prototype.toggleAttribute = function(name, bool, node) {};

/**
 * Moves a boolean attribute from oldNode to newNode, unsetting the attribute
 * (if set) on oldNode and setting it on newNode.
 * @param {string} name
 * @param {!HTMLElement} newNode
 * @param {!HTMLElement} oldNode
 */
PolymerElement.prototype.attributeFollows = function(name, newNode, oldNode) {};

/**
 * @param {!Function} method
 * @param {number=} wait
 * @return {number} A handle which can be used to cancel the job.
 */
PolymerElement.prototype.async = function(method, wait) {};

/**
 * @param {number} handle
 */
PolymerElement.prototype.cancelAsync = function(handle) {};

/**
 * Call debounce to collapse multiple requests for a named task into one
 * invocation, which is made after the wait time has elapsed with no new
 * request. If no wait time is given, the callback is called at microtask timing
 * (guaranteed to be before paint).
 * @param {string} jobName
 * @param {!Function} callback
 * @param {number=} wait
 */
PolymerElement.prototype.debounce = function(jobName, callback, wait) {};

/**
 * Cancels an active debouncer without calling the callback.
 * @param {string} jobName
 */
PolymerElement.prototype.cancelDebouncer = function(jobName) {};

/**
 * Calls the debounced callback immediately and cancels the debouncer.
 * @param {string} jobName
 */
PolymerElement.prototype.flushDebouncer = function(jobName) {};

/**
 * @param {string} jobName
 * @return {boolean} True if the named debounce task is waiting to run.
 */
PolymerElement.prototype.isDebouncerActive = function(jobName) {};


/**
 * Applies a CSS transform to the specified node, or this element if no node is
 * specified. transform is specified as a string.
 * @param {string} transform
 * @param {HTMLElement=} node
 */
PolymerElement.prototype.transform = function(transform, node) {};

/**
 * Transforms the specified node, or this element if no node is specified.
 * @param {string} x
 * @param {string} y
 * @param {string} z
 * @param {HTMLElement=} node
 */
PolymerElement.prototype.translate3d = function(x, y, z, node) {};

/**
 * Dynamically imports an HTML document.
 * @param {string} href
 * @param {Function=} onload
 * @param {Function=} onerror
 */
PolymerElement.prototype.importHref = function(href, onload, onerror) {};

/**
 * Delete an element from an array.
 * @param {!Array} array
 * @param {*} item
 */
PolymerElement.prototype.arrayDelete = function(array, item) {};

/**
 * Resolve a url to make it relative to the current doc.
 * @param {string} url
 * @return {string}
 */
PolymerElement.prototype.resolveUrl = function(url) {};

