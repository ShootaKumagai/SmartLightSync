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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28183762");