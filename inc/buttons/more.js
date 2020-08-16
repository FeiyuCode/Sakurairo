(function() {
    tinymce.create('tinymce.plugins.highlight', {
        init : function(ed, url) {
            ed.addButton('highlight', {
                title : '代码高亮',
                image : url+'/images/highlight.png',
                onclick : function() {
                     ed.selection.setContent('<pre class="wp-block-code"><code>' + ed.selection.getContent() + '</code></pre>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('highlight', tinymce.plugins.highlight);
    tinymce.create('tinymce.plugins.accordion', {
        init : function(ed, url) {
            ed.addButton('accordion', {
                title : '展开收缩',
                image : url+'/images/accordion.png',
                onclick : function() {
                     ed.selection.setContent('[collapse title="标题内容"]' + ed.selection.getContent() + '[/collapse]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('accordion', tinymce.plugins.accordion);
    tinymce.create('tinymce.plugins.hide', {
        init : function(ed, url) {
            ed.addButton('hide', {
                title : '回复可见',
                image : url+'/images/hide.png',
                onclick : function() {
                     ed.selection.setContent('[hide reply_to_this="true"]' + ed.selection.getContent() + '[/hide]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('hide', tinymce.plugins.hide);
    tinymce.create('tinymce.plugins.mark', {
        init : function(ed, url) {
            ed.addButton('mark', {
                title : '内容标记',
                image : url+'/images/mark.png',
                onclick : function() {
                     ed.selection.setContent('[mark]' + ed.selection.getContent() + '[/mark]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('mark', tinymce.plugins.mark);
    tinymce.create('tinymce.plugins.bdbtn', {
        init : function(ed, url) {
            ed.addButton('bdbtn', {
                title : '本地下载',
                image : url+'/images/bdbtn.png',
                onclick : function() {
                     ed.selection.setContent('[bdbtn]' + ed.selection.getContent() + '[/bdbtn]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('bdbtn', tinymce.plugins.bdbtn);
    tinymce.create('tinymce.plugins.ypbtn', {
        init : function(ed, url) {
            ed.addButton('ypbtn', {
                title : '云盘下载',
                image : url+'/images/ypbtn.png',
                onclick : function() {
                     ed.selection.setContent('[ypbtn]' + ed.selection.getContent() + '[/ypbtn]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('ypbtn', tinymce.plugins.ypbtn);
    tinymce.create('tinymce.plugins.music', {
        init : function(ed, url) {
            ed.addButton('music', {
                title : '网易云音乐',
                image : url+'/images/music.png',
                onclick : function() {
                     ed.selection.setContent('[music autoplay="0"]' + ed.selection.getContent() + '[/music]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('music', tinymce.plugins.music);
    tinymce.create('tinymce.plugins.youku', {
        init : function(ed, url) {
            ed.addButton('youku', {
                title : '优酷视频',
                image : url+'/images/youku.png',
                onclick : function() {
                     ed.selection.setContent('[youku]' + ed.selection.getContent() + '[/youku]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('youku', tinymce.plugins.youku);
    tinymce.create('tinymce.plugins.tudou', {
        init : function(ed, url) {
            ed.addButton('tudou', {
                title : '土豆视频',
                image : url+'/images/tudou.png',
                onclick : function() {
                     ed.selection.setContent('[tudou code=""]' + ed.selection.getContent() + '[/tudou]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('tudou', tinymce.plugins.tudou);
    tinymce.create('tinymce.plugins.vqq', {
        init : function(ed, url) {
            ed.addButton('vqq', {
                title : '腾讯视频',
                image : url+'/images/vqq.png',
                onclick : function() {
                     ed.selection.setContent('[vqq auto="0"]' + ed.selection.getContent() + '[/vqq]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vqq', tinymce.plugins.vqq);
    tinymce.create('tinymce.plugins.bilibili', {
        init : function(ed, url) {
            ed.addButton('bilibili', {
                title : '哔哩哔哩',
                image : url+'/images/bilibili.png',
                onclick : function() {
                     ed.selection.setContent('[bilibili cid="" page="1"]' + ed.selection.getContent() + '[/bilibili]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('bilibili', tinymce.plugins.bilibili);
	tinymce.create('tinymce.plugins.myvideo', {
        init : function(ed, url) {
            ed.addButton('myvideo', {
                title : '本地mp4',
                image : url+'/images/mp4.png',
                onclick : function() {
                     ed.selection.setContent('[myvideo]' + ed.selection.getContent() + '[/myvideo]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('myvideo', tinymce.plugins.myvideo);
    tinymce.create('tinymce.plugins.youtube', {
        init : function(ed, url) {
            ed.addButton('youtube', {
                title : 'YouTube',
                image : url+'/images/youtube.png',
                onclick : function() {
                     ed.selection.setContent('[youtube]' + ed.selection.getContent() + '[/youtube]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('youtube', tinymce.plugins.youtube); 
})();