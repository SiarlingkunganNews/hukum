/* Headline News Script
 *
 * predefined variables are:
 *     hn_url_blog
 *     hn_jumlah_post
 *     hn_warna_teks
 *     hn_warna_latar
 *     hn_backlink
 */
var hn_entries; var hn_feed;
var hn_feed_url = hn_url_blog.match(/\/$/) ? hn_url_blog : hn_url_blog+"/";
hn_feed_url += "feeds/posts/default";

function hn_createEntries(){
    var entries = hn_feed.entry;
    var entriesArr = [];
    for(var i=0; i<hn_jumlah_post; i++){
        var entry = entries[i];
        var entryObj = new Object();
        entryObj.title = entry.title.$t;
        entryObj.href  = hn_getHref(entry.link);
        entriesArr.push(entryObj);
    }
    return entriesArr;
}
function hn_getBlogTitle(){
    return hn_feed.title.$t;
}
function hn_getBlogURL(){
    return hn_getHref(hn_feed.link);
}
function hn_getHref(links){
    for(var i=0; i<links.length; i++){
        var link = links[i];
        if(link.rel == "alternate"){return link.href;}
    }
    return null;
}
function hn_start(json){
    hn_feed = json.feed;
    hn_entries = hn_createEntries();
    hn_writeStyle();
    hn_writeContent();
}
function hn_writeScript(){
    var src = hn_feed_url+"?alt=json-in-script&callback=hn_start&max-results="+hn_jumlah_post;
    
    //var src = "json.php?c=hn_start";
    var s = "<script src='"+src+"'></script>";
    document.write(s);
}
function hn_writeStyle(){
    var s = "<style type='text/css'>";
    s += "#hn_headline{";
    s += "    position:fixed;";
    s += "    "+hn_posisi+":0px;";
    s += "    left:0px;";
    s += "    padding:5px;";
    s += "    width:100%;";
    s += "    background:" + hn_warna_latar + ";";
    s += "    border:1px solid "+ hn_warna_garis + ";";
    s += "}";
    s += "* html #hn_headline{position:relative;}";
    s += "</style>";
    document.write(s);
}
function hn_writeContent(){
    var s = "<div id='hn_headline' title='Headline news of "+hn_getBlogTitle()+"'>";
    s += "<div style='float:left'>";
    s += " <a href='"+hn_feed_url+"'>";
    s += "  <img src='https://lh3.googleusercontent.com/-h5PwWpgB8Jw/TgiACcF1vrI/AAAAAAAAA7Q/zXO3KnLk2YU/s288/news.rss.png'";
    s += " height='20'/>";
    s += " </a>";
    s += "</div>";
    if(hn_tampilkan_judul){
        s += "  <div style='float:left; font-size:8px; text-align:right; margin-left:10px;'>";
        s += "    Headline news of <br/>";
        s += "    <a href='" + hn_getBlogURL() + "'>" + hn_getBlogTitle() + "</a>";
        s += "  </div>";
    }
    s += "  <marquee style='float:left; margin-left:10px; width:80%' scrollAmount='3'>";
    for(var i=0; i<hn_jumlah_post; i++){
        var hn_entry = hn_entries[i];
        s += "<a href='"+hn_entry.href+"' ";
        s += "onmouseover='this.parentNode.stop()' onmouseout='this.parentNode.start()'";
        s += ">" + hn_entry.title + "</a>";
        if(i != hn_jumlah_post-1){s += " | ";}
    }
    s += "  </marquee>";
    s += "<div style='float:right; margin-right:10px;'>";
    s += "  <a href='javascript:void(0)' onclick='document.getElementById(\"hn_headline\").style.display=\"none\"'>";
    s += "    [x]";
    s += "  </a>";
    s += "</div>";
    if(hn_backlink == true | hn_backlink == undefined){
        s += "<div style='float:right; font-size:8px; text-align:right; margin-right:10px'>";
        s += "  Widget by <br/>";
        s += "  <a href='http://id-pemula.blogspot.com/'>";
        s += "    id-pemula";
        s += "  </a>";
        s += "</div>";
    }
    s += "</div>";
    document.write(s);
}
hn_writeScript();