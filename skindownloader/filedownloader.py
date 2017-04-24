# -*- coding:utf-8 -*-


import urllib2

# basic javascript file: champion.js
# http://lol.qq.com/biz/hero/champion.js
# http://lol.qq.com/web201310/info-heros.shtml


class FileDownloader(object):
    """Download any files in this class, js, html, jpg, png"""

    def download(self, url, filename = ''):
        if filename == '':
            filename = url.split('/')[len(url.split('/')) - 1]

        response = urllib2.urlopen(url)
        if response.getcode() != 200:
            print 'Download file {%s} failed.' % url
            return None

        fw = open(filename, 'wb')
        fw.write(response.read())
        fw.close()
        print 'Download file {%s} succeed.' % url


# test module filedownloader
if __name__ == '__main__':
    url = 'http://lol.qq.com/biz/hero/champion.js'
    d = FileDownloader()
    d.download(url, '../herojs/champion.js')
