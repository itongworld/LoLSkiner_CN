# -*- coding:utf-8 -*-



'''
To download the official hero skins in url: http://lol.qq.com/web201310/info-heros.shtml
This project depends on the specific javascript files and the website is dynamic
'''

import os
import skinparser
#from skindownloader.skinparser import SkinParser


if __name__ == '__main__':
    
    # make dirs
    if not os.path.exists("../herojs"):
        print "Making directory ../herojs"
        os.makedirs("../herojs")
        print "Directory ../herojs created successfully."
    if not os.path.exists("../heroavatar"):
        print "Making directory ../heroavatar"
        os.makedirs("../heroavatar")
        print "Directory ../heroavatar created successfully."
    if not os.path.exists("../heroskin_big"):
        print "Making directory ../heroskin_big"
        os.makedirs("../heroskin_big")
        print "Directory ../heroskin_big created successfully."
    if not os.path.exists("../heroskin_small"):
        print "Making directory ../heroskin_small"
        os.makedirs("../heroskin_small")
        print "Directory ../heroskin_small created successfully."
    
    
    
    sp = skinparser.SkinParser()
    sp.parse_id_fromjs()
    sp.parse_image_fromjs()
