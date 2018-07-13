**使用 Node.js + cheerio 取得 [Coinmarketcap](https://coinmarketcap.com/) 歷史每日前 N 大加密幣資訊**  
由於系統開發上需取得歷史上每日前 N 大之加密幣資訊，  
但 Coinmarketcap 官方僅提供單一貨幣單一日期查詢，  
或歷史上每週一筆貨幣排序清單，且兩者皆無公開之 API 得以呼叫，
故透過爬蟲取得兩種形式頁面之資料並合併。
