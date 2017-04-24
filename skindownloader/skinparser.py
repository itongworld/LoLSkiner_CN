# -*- coding:utf-8 -*-



import PyV8
import os
import filedownloader
#from skindownloader.filedownloader import FileDownloader

class SkinParser(object):
    def __init__(self):
        self.heroamount = 0
        self.currentamount = 0


    def parse_id_fromjs(self):
        """ parse from official javascript file: champion.js
            generate herojs url file
            return the herosidlsit
        """
        ctxt = PyV8.JSContext()
        ctxt.enter()
        
        
        # main javascript file
        # http://lol.qq.com/biz/hero/champion.js
        print 'Downloading main javascript file: http://lol.qq.com/biz/hero/champion.js'
        self.downloadherojs('http://lol.qq.com/biz/hero/champion.js', '../herojs/champion.js')
        
        f = open('../herojs/champion.js', 'r')
        jscontent = f.read()
        ctxt.eval(jscontent)
        
        
        data = ctxt.eval(''' var datajs = LOLherojs.champion.data ''')
        #name = ctxt.eval(''' datajs["Ahri"]["id"] ''') # id attr is not a number but a string
        #print name
        
        # define javascript function
        getHerosId = ctxt.eval(""" (function(){function getHerosId(){var namestring = ''; for(var x in datajs){namestring = namestring + datajs[x].id + '\\n';} return namestring;} return getHerosId()}) """)
        herosid = getHerosId()


        herosidlist = herosid.strip("\n").split("\n")
        self.heroamount = len(herosidlist)
        print 'Heros id list:(%d totally): ' % self.heroamount , herosidlist
        
        # generate heros javascript url
        # http://lol.qq.com/biz/hero
        w = open('../herojs/herojs.txt', 'w')
        w.write("# League of Legends Hero javascript url address:")
        count = 0
        for heroid in herosidlist:
            count += 1
            jsurl = "http://lol.qq.com/biz/hero/" + heroid + ".js"
            w.write("\n[%d] %s" % (count, jsurl))

            #download hero js file
            print 'Downloading hero javascript: %s' % jsurl
            self.downloadherojs(jsurl, '../herojs/' + heroid + '.js')


        w.close()
        
        return herosidlist
    

        
        
    def parse_image_fromjs(self):
        ctxt = PyV8.JSContext()
        ctxt.enter()
        
        # hero avatar url
        avatar_url = 'http://ossweb-img.qq.com/images/lol/img/champion/'
        # http://ossweb-img.qq.com/images/lol/img/champion/Aatrox.png
        

        # hero skin url
        # skin_big = 'http://ossweb-img.qq.com/images/lol/web201310/skin/big103002.jpg'
        # skin_small = 'http://ossweb-img.qq.com/images/lol/web201310/skin/small103001.jpg'
        skin_url = 'http://ossweb-img.qq.com/images/lol/web201310/skin/'
        
        for fn in os.listdir('../herojs'):
            if fn == 'champion.js' or fn == 'herojs.txt':
                continue
            
            jsname = '../herojs/' + fn
            
            # javascript引用python中的变量方法
            ctxt.locals.heroid = fn.split(".")[0]
            f = open(jsname, 'r')
            jscontent = f.read()
            ctxt.eval(jscontent)
            
            # download hero avatar
            ctxt.eval(''' var data = LOLherojs.champion[heroid].data ''')
            
            name = ctxt.eval(''' data.name ''')
            title = ctxt.eval(''' data.title ''')


            self.currentamount += 1
            print '\n>>>(%d totally/%d)%s %s' % (self.heroamount, self.currentamount, name.decode('utf-8').encode('gbk'), title.decode('utf-8').encode('gbk'))
            avatar = ctxt.eval(''' data.image.full ''')
            fullavatarurl = avatar_url + avatar

            print 'Downloading hero avatar: %s' % fullavatarurl
            self.downloadheroskin(fullavatarurl, '../heroavatar/' + avatar)


            # download hero skin: big, small
            ctxt.eval(''' var skin = LOLherojs.champion[heroid].data.skins ''')
            getSkinsId = ctxt.eval(''' (function(){
                                        function getSkinsId(){
                                            skin_idstring = '';
                                            skin_namestring = '';
                                            for(var i=0,len=skin.length;i<len;i++){
                                                ids = skin[i].id;
                                                names = skin[i].name;

                                                skin_idstring = skin_idstring + ids + '|';
                                                skin_namestring = skin_namestring + names + '|';
                                            }
                                            return skin_idstring + '\\n' + skin_namestring;
                                        }
                                        return getSkinsId()
                            }) ''')


            raw_content = getSkinsId()

            #fixed the bug here: not strip(" ").split(" ")
            skinid_list = raw_content.split("\n")[0].strip("|").split("|")
            skinname_list = raw_content.split("\n")[1].strip("|").split("|")


            skinnumber = len(skinid_list)
            for x in xrange(skinnumber):
                fullskinurl_bg = skin_url + 'big' + skinid_list[x] + '.jpg'
                fullskinurl_sm = skin_url + 'small' + skinid_list[x] + '.jpg'
                dirname = name.decode("UTF-8").encode("GB18030") + ' ' + title.decode("UTF-8").encode("GB18030")
                pathname_big = '../heroskin_big/' + dirname
                if not os.path.exists(pathname_big):
                    os.makedirs(pathname_big)
                pathname_small = '../heroskin_small/' + dirname
                if not os.path.exists(pathname_small):
                    os.makedirs(pathname_small)

                fullskinname = skinname_list[x].decode("UTF-8").encode("GB18030")
                #fullskinname = fullskinname + '_' + fn.split(".")[0] if fullskinname == 'default' else fullskinname

                print 'Downloading hero skin(%d totally/%d): %s, %s' % (skinnumber, x+1, skinid_list[x], fullskinname)
                self.downloadheroskin(fullskinurl_bg, pathname_big + '/' + fullskinname + '.jpg')
                self.downloadheroskin(fullskinurl_sm, pathname_small + '/' + fullskinname + '.jpg')
            f.close()


    def downloadherojs(self, url, filename=''):
        if filename == '':
            filename = url.split('/')[len(url.split('/')) - 1]

        fdl = filedownloader.FileDownloader()
        fdl.download(url, filename)
    

    
    def downloadheroskin(self, url, filename = ''):
        if filename == '':
            filename = url.split('/')[len(url.split('/')) - 1]
        
        fdl = filedownloader.FileDownloader()
        fdl.download(url, filename)
        


# test module skinparser
# basic url: http://lol.qq.com/web201310/info-heros.shtml
if __name__ == '__main__':
    sp = SkinParser()
    sp.parse_id_fromjs()
    sp.parse_image_fromjs()
    
    
    
    
    
    
    
    
    
    
    