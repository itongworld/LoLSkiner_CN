# Instructions about *LoLSkiner_CN* script

*LoLSkiner_CN* is a script program to download LoL skins of all heroes automatically from [official website(CN)](http://lol.qq.com/web201310/info-heros.shtml) using python[2.6] language.

## Usage:
### Installation
To make very sure you can easily get all skins via this script, the prerequisites for your computer environment to run the script are as follows:

| Module | Url |
| ------ | --- |
| PyV8 | https://pypi.python.org/pypi/PyV8/1.0-dev |
| Requests | https://pypi.python.org/pypi/requests/2.13.0 |

### Run
Clone the repo or just download the zip code above. In *skindownloader* directory, run ```python main.py``` in the command line. And you will get three dirs containing the skins you may want.

### Result
Three dirs are explained as below:
- *heroavatar*: containing all heroes' avatars in size 120*120
- *heroskin_big*: containing all heroes' skins in size 980*500
- *heroskin_small*: containing all heroes' skins in size 60*60
