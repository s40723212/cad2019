var tipuesearch = {"pages": [{'title': 'weekly progress', 'text': 'week2 \n week3 \n week4 \n week5 \n week6 \n week7 \n week8 \n week9 \n week10 \n', 'tags': '', 'url': 'weekly progress.html'}, {'title': 'week1', 'text': '使用github 建立網站\xa0 https://pages.github.com/ \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': 'IPV4與IPV6之間之差異 \n 建立倉儲之步驟 \n 1.登錄github帳號，同時創建一個新的倉儲cad2019 \n \n 2.進入cad2019的github頁面並同時將cad2019之分支改為master分支 \n 3.將新的倉儲git clone 至隨身碟裡 \n \n 4.用黑窗進入隨身碟裡的倉儲並且將這串指令輸入 \n git submodule add https://github.com/mdescourse/cmsimde.git\xa0cmsimde \n 這串指令可將遠端網站架構克隆至隨身碟裡 \n \n 5.因在舊版的可攜系統中無此模組, 執行 CMSiMDE 之前必須透過 \n python -m pip install flask_cors \n 安裝，以利近端開啟 \n \n 6.在URL列輸入https://localhsot:9443即可開啟近端 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'IPV4與IPV6之間差異', 'text': '何謂IP? \n 網路通訊協定（Internet Protocol，IP）是用於網路交換封包的一種協定，它定義了定址方式及資料的封裝結構。 \n 位址的數量 \n IPV4之位置數量為2的32次方個 \n IPV6之位置數量為2的128次方個 \n \n 位址表示方式 \n IPv4的IP位址是由32位元所組成，原始的表示方式是8個位元為一個單位，分4個部分。每個部分以2進位表示，並以「.」做區隔，譬如：「10110110.11101001.01001100.11111111」。 \n 不過這樣的表示法太長，不便記憶。所以通常都以10進位的方法表示，而每個部份的數字會呈現0至255的整數。 \n 而IPv6的IP位址則是128位元組成，表示方式是使用8組數字，每組為4個字元的16進位方法表示。而區隔每個部分的方式亦與IPv4不同，是以「:」表示。譬如「1079:0BD3:6ED4:1D71:414B:2E2A:7144:72BE」，這樣就是一組標準的IPv6網路位址。 \n 不過IPv6的位址表示法太長，所以位址有所謂的省略規則，以下為2個位址省略規則： \n 規則1：為每組數字的第一個0可以省略，若整組皆為0，則以0表示。譬如，「0DB8」可以省略為「DB8」，「0000」則為「0」。 \n 規則2：為連續出現的0000可以省略成「::」。譬如：「:0000:0000:0000:0000:」可以省略成「:0000:0000:0000::」、「:0:0:0:0:」、「:0::0:」或「::」。 \n 但需注意的是，由於「::」表示為連續且數量多的0，所以如果位址中出現2個「::」時，會讓人搞不清楚實際代表的位址。因為這樣，在位址省略規則中有明訂，對於一個IPv6位址，只能出現一次「::」來省略0。 \n 由於IPv6的位址經過省略後，依舊不方便一般人記憶。所以在網頁存取位址，或撰寫應用程式呼叫網址時，建議不要直接使用IPv6位址，應該使用DNS網域名稱會較為方便。 \n 除了表示方式不同外，兩者間的位址型態也有些許差異。像IPv6提供Unicast、Anycast及Multicast，三種位址型態。其中Unicast對應單點傳送、Multicast則取代廣播，只有這兩點與IPv4類似。而Anycast則是發送給群組，但只有最近的介面會接收到。 \n 表頭格式與功能 \n IPv6的表頭格式是改良自IPv4，它有大幅度的修改，讓表頭格式更為簡化及具有擴充性。IPv6與IPv4共同的欄位有Version、Source Address、Destination Address，還有部分欄位功能類似，名稱卻不同。譬如Payload Length取代了Datagram Length、Next Header取代Protocol，以及Hop Limit取代TTL。 \n 而IPv6亦增加了Flow Label及Priority等兩個欄位，它們的功能是用來支援像視訊、語音這類即時服務的需求，以提高QoS的品質。 \n 就Flow Label欄位來說，IPv6的封包能夠在該欄位留下標記。在傳輸時，一連串的封包會要求所經過的路由器，提供特別的處理。而路由器則會透過該欄位，辨識封包的Flow Level；而Priority則可以設定封包傳輸的優先順序，透過這欄位的檢查，讓較重要的封包優先傳送。 \n 除此之外，IPv6在安全、擴充等功能上，加強了IPv4缺乏的部份。像安全性方面，IPv6預設有IPSec，來提升安全性。相較之下，IPv4的IPSec則需要額外開啟。而擴充方面，IPv4只能使用Option欄位，而IPv6除了將基本表頭簡化外，還可以任意加上多個擴充表頭使用。 \n 參考資料 https://www.ithome.com.tw/tech/92046 \n https://www.ibm.com/support/knowledgecenter/zh-tw/ssw_ibm_i_71/rzai2/rzai2compipv4ipv6.htm#rzai2compipv4ipv6__compportrestrict \n', 'tags': '', 'url': 'IPV4與IPV6之間差異.html'}, {'title': 'week3', 'text': 'solve編譯 \n 1.先將目錄切換至tmp \n cd tmp \n 2.進入solvespace \n cd\xa0espace \n 3.進入extlib \n cd\xa0extlib \n 4.進入 libpng \n cd libpng \n 5.製造build \n mkdir build \n 6.將路徑切換至build \n cd build \n 7.輸入 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 8.再輸入 \n mingw32-make \n 9.從這裡要將路徑切換至solvespace 原始碼 \n cd ..*3 \n 10. 製造build \n mkdir build \n 11. 將路徑切換至build \n cd build \n 12. 輸入 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 13. 再輸入 \n mingw32-make \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': 'slovespace 手冊研讀 http://solvespace.com/index.pl \n', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'week8', 'text': '', 'tags': '', 'url': 'week8.html'}, {'title': 'week9', 'text': '', 'tags': '', 'url': 'week9.html'}, {'title': 'week10', 'text': '\n', 'tags': '', 'url': 'week10.html'}, {'title': 'Website Design platform', 'text': '\n ApproveMe \n Zedity \n Xfive \n UptimeRobot \n Themify \n WPForms \n Codester \n MonsterInsights \n OptinMonster \n Colorlib Newspaper X \n Logo123 \n Meridian Themes \n Super Website Builders \n RumbleTalk \n SiteGround \n WP Engine \n 40 Dollar Logo \n InvoiceBerry \n EvergreenFeed \n Host Tracker \n SnapPages \n \n', 'tags': '', 'url': 'Website Design platform.html'}, {'title': 'Q&A', 'text': '無法提交近端網頁所編輯之內容 \n \n 這張圖片大致上說目前線上版本比你現有的版本還新因此無法推送。 \n 生成原因 \n 通常好發於多人開發的環境 \n \n \n Sherly 跟 Eddie 兩個人在差不多的時間都從 Git Server 上拉了一份資料下來準備進行開發。 \n Sherly 手腳比較快，先完成了，於是先把做好的成果推一份上去。 \n Eddie 不久後也完成了，但當他要推上去的時候發現推不上去了… \n \n 解決方法 \n 1.先拉在推 \n 因為你電腦裡的內容是比較舊的，所以先拉一份線上版本的回來更新，然後再推一次 \n \n 因此只要下git pull 指令即可成功提交 \n 2.強制提交 \n 在上面的例子中，Sherly 先推上去的內容，後推的人就是應該拉一份下來更新，不然照規定是推不上去的。不過這規則也是有例外，只要加上了git\xa0 --force \xa0 或是git \xa0 -f \xa0 參數，它就會強迫硬推上去把 Sherly 之前的內容蓋掉 \n \n 參考資料 \n https://gitbook.tw/chapters/github/fail-to-push.html', 'tags': '', 'url': 'Q&A.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};