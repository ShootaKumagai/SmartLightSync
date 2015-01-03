/***********************
 * Adobe Edge Animate コンポジションアクション
 *
 * このファイルを編集する際には注意が必要です。必ず関数シグニチャと
 * 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
 * 操作可能な状態にしておいてください。
 *
 ***********************/
(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

    //Edge symbol: 'stage'
    (function(symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${btnPlay}", "click", function(sym, e) {
            // マウスクリックのコードをここに挿入します
            sym.play();
            setInterval('monitorGetter();',1);
            

        });
        //Edge binding end



        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
            // コードをここに挿入
            stop();

        });
        //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'phone'
   (function(symbolName) {   
   
   })("phone");
   //Edge symbol end:'phone'

   //=========================================================
   
   //Edge symbol: 'triangle'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // タイムラインの最後で実行されるコードをここに挿入
         sym.play();

      });
      //Edge binding end

   })("triangle");
   //Edge symbol end:'triangle'

   //=========================================================
   
   //Edge symbol: 'TriMotion'
   (function(symbolName) {   
   
   })("TriMotion");
   //Edge symbol end:'TriMotion'

   //=========================================================
   
   //Edge symbol: 'TriMotion1Row'
   (function(symbolName) {   
   
   })("TriMotion1Row");
   //Edge symbol end:'TriMotion1Row'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28183762");