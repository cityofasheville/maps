///////////////////////////////////////////////////////////////////////////
// Relate Chooser Dijit
// By: Robert Scheitlin
///////////////////////////////////////////////////////////////////////////
/*global define, document, window, setTimeout*/
/*jslint maxlen: 800, -W116 */
define(['dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/html',
    'dojo/on',
    'dojo/has',
    './MobilePopup',
    'dojo/dom',
    'dojo/dom-construct',
    'dojo/dom-style',
    'dojo/_base/array',
    'dojo/sniff'
  ],
  function(declare, lang, html, on, has, MobilePopup, dom, domConstruct, domStyle, array) {
    return declare(MobilePopup, {
      //summary:
      //  show the Relate Chooser

      baseClass: 'jimu-popup jimu-message',
      declaredClass: 'esearch.dijit.relate.chooser',

      //type: String
      //  the popup messge type, can be: message/question/error
      type: 'message',

      //type:String
      message: '',

      autoHeight: false,
      relatesArr: null,
      folderurl: null,
      maxWidth: 800,
      maxHeight: 800,

      postMixInProperties: function() {
        //this.content = tbTemplate;
      },

      _dataMixin: function(){
        console.info(this.relatesArr);
      },

      _createTitleNode: function(){
        if (this.titleLabel) {
          this.titleNode = html.create('div', {
            'class': 'title'
          }, this.domNode);
          this.handleNode = html.create('div', {
            'class': 'handle'
          }, this.titleNode);
          this.titleLabeNode = html.create('span', {
            'class': 'title-label jimu-float-leading',
            innerHTML: this.titleLabel || '&nbsp'
          }, this.titleNode);
          this.closeBtnNode = html.create('div', {
            'class': 'close-btn jimu-icon jimu-icon-close jimu-float-trailing',
          }, this.titleNode);
          this.own(on(this.closeBtnNode, 'click', lang.hitch(this, this.close)));
        }
      },

      _increaseZIndex: function() {
        html.setStyle(this.domNode, 'zIndex', 9999);
        html.setStyle(this.overlayNode, 'zIndex', 9998);
      }
    });
  });
