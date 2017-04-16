if (!LOLherojs)
	var LOLherojs = {
		champion : {}
	};
LOLherojs.champion.Ahri = {
	"data" : {
		"id" : "Ahri",
		"key" : "103",
		"name" : "\u4e5d\u5c3e\u5996\u72d0",
		"title" : "\u963f\u72f8",
		"tags" : [ "Mage", "Assassin" ],
		"image" : {
			"full" : "Ahri.png",
			"sprite" : "champion0.png",
			"group" : "champion",
			"x" : 48,
			"y" : 0,
			"w" : 48,
			"h" : 48
		},
		"skins" : [ {
			"id" : "103000",
			"num" : 0,
			"name" : "default",
			"chromas" : false
		}, {
			"id" : "103001",
			"num" : 1,
			"name" : "\u9ad8\u4e3d\u98ce\u60c5 \u963f\u72f8",
			"chromas" : false
		}, {
			"id" : "103002",
			"num" : 2,
			"name" : "\u6697\u5f71\u5996\u72d0 \u963f\u72f8",
			"chromas" : false
		}, {
			"id" : "103003",
			"num" : 3,
			"name" : "\u7130\u5c3e\u5996\u72d0 \u963f\u72f8",
			"chromas" : false
		}, {
			"id" : "103004",
			"num" : 4,
			"name" : "\u5076\u50cf\u6b4c\u624b \u963f\u72f8",
			"chromas" : false
		}, {
			"id" : "103005",
			"num" : 5,
			"name" : "\u52c7\u8005 \u963f\u72f8",
			"chromas" : false
		}, {
			"id" : "103006",
			"num" : 6,
			"name" : "\u98ce\u7eaa\u59d4\u5458 \u963f\u72f8",
			"chromas" : false
		} ],
		"info" : {
			"attack" : 3,
			"defense" : 4,
			"magic" : 8,
			"difficulty" : 5
		},
		"spells" : [
				{
					"id" : "AhriOrbofDeception",
					"name" : "\u6b3a\u8bc8\u5b9d\u73e0",
					"description" : "\u963f\u72f8\u653e\u51fa\u5e76\u6536\u56de\u5979\u7684\u5b9d\u73e0\uff0c\u5728\u653e\u51fa\u65f6\u4f1a\u6cbf\u9014\u5bf9\u654c\u4eba\u9020\u6210\u9b54\u6cd5\u4f24\u5bb3\uff0c\u5728\u6536\u56de\u65f6\u5219\u4f1a\u6cbf\u9014\u5bf9\u654c\u4eba\u9020\u6210\u771f\u5b9e\u4f24\u5bb3\u3002\u5728\u5b9d\u73e0\u88ab\u653e\u51fa\u7684\u671f\u95f4\u91cc\uff0c\u963f\u72f8\u4f1a\u83b7\u5f97\u6301\u7eed\u8870\u51cf\u7684\u79fb\u52a8\u901f\u5ea6\u52a0\u6210\u3002",
					"image" : {
						"full" : "AhriOrbofDeception.png",
						"sprite" : "spell0.png",
						"group" : "spell",
						"x" : 384,
						"y" : 48,
						"w" : 48,
						"h" : 48
					},
					"tooltip" : "\u963f\u72f8\u653e\u51fa\u5b9d\u73e0\uff0c\u9020\u621040\/65\/90\/115\/140<span class=\"color99FF99\">(+0.35)<\/span>\u9b54\u6cd5\u4f24\u5bb3\uff0c\u968f\u540e\u5c06\u5176\u6536\u56de\uff0c\u9020\u621040\/65\/90\/115\/140<span class=\"color99FF99\">(+0.35)<\/span>\u771f\u5b9e\u4f24\u5bb3\u3002<br><br>\u963f\u72f8\u5728\u5b9d\u73e0\u88ab\u653e\u51fa\u7684\u8fd9\u6bb5\u65f6\u95f4\u91cc\uff0c\u4f1a\u83b7\u5f97\u6301\u7eed\u8870\u51cf\u7684\u79fb\u52a8\u901f\u5ea6\u52a0\u6210\u3002",
					"leveltip" : {
						"label" : [ "\u4f24\u5bb3", "\u6cd5\u529b\u6d88\u8017" ],
						"effect" : [ "40\/65\/90\/115\/140",
								"  65\/70\/75\/80\/85" ]
					},
					"resource" : "65\/70\/75\/80\/85\u6cd5\u529b"
				},
				{
					"id" : "AhriFoxFire",
					"name" : "\u5996\u5f02\u72d0\u706b",
					"description" : "\u963f\u72f8\u653e\u51fa\u4e09\u56e2\u72d0\u706b\u3002\u77ed\u6682\u7684\u5ef6\u8fdf\u540e\uff0c\u5b83\u4eec\u4f1a\u9501\u5b9a\u9644\u8fd1\u7684\u4e09\u540d\u654c\u4eba\uff08\u82f1\u96c4\u4f18\u5148\uff09\u8fdb\u884c\u653b\u51fb\u3002",
					"image" : {
						"full" : "AhriFoxFire.png",
						"sprite" : "spell0.png",
						"group" : "spell",
						"x" : 432,
						"y" : 48,
						"w" : 48,
						"h" : 48
					},
					"tooltip" : "\u963f\u72f8\u653e\u51fa\u4e09\u56e2\u72d0\u706b\uff0c\u72d0\u706b\u4f1a\u9501\u5b9a\u9644\u8fd1\u7684\u4e09\u540d\u654c\u4eba\uff08\u82f1\u96c4\u4f18\u5148\uff09\u8fdb\u884c\u653b\u51fb\uff0c\u9020\u621040\/65\/90\/115\/140<span class=\"color99FF99\">(+0.4)<\/span>\u9b54\u6cd5\u4f24\u5bb3\u3002<br><br>\u5728\u547d\u4e2d\u540c\u4e00\u76ee\u6807\u65f6\uff0c\u989d\u5916\u7684\u72d0\u706b\u4f1a\u9020\u621030%\u7684\u4f24\u5bb3\uff0c\u6700\u591a\u5bf9\u540c\u4e00\u76ee\u6807\u9020\u6210\u4f24\u5bb3\u3002",
					"leveltip" : {
						"label" : [ "\u4f24\u5bb3", "\u51b7\u5374\u65f6\u95f4" ],
						"effect" : [ "40\/65\/90\/115\/140", "9\/8\/7\/6\/5" ]
					},
					"resource" : "50\u6cd5\u529b"
				},
				{
					"id" : "AhriSeduce",
					"name" : "\u9b45\u60d1\u5996\u672f",
					"description" : "\u963f\u72f8\u732e\u51fa\u7ea2\u5507\u70ed\u543b\uff0c\u5bf9\u547d\u4e2d\u7684\u7b2c\u4e00\u4e2a\u654c\u4eba\u9020\u6210\u4f24\u5bb3\uff0c\u5e76\u65bd\u52a0\u9b45\u60d1\u6548\u679c\uff0c\u8ba9\u654c\u4eba\u6beb\u65e0\u6076\u610f\u5730\u8d70\u5411\u963f\u72f8\u3002",
					"image" : {
						"full" : "AhriSeduce.png",
						"sprite" : "spell0.png",
						"group" : "spell",
						"x" : 0,
						"y" : 96,
						"w" : 48,
						"h" : 48
					},
					"tooltip" : "\u963f\u72f8\u732e\u51fa\u7ea2\u5507\u70ed\u543b\uff0c\u5bf9\u547d\u4e2d\u7684\u7b2c\u4e00\u4e2a\u654c\u4eba\u9020\u621060\/95\/130\/165\/200<span class=\"color99FF99\">(+0.5)<\/span>\u9b54\u6cd5\u4f24\u5bb3\u5e76\u5c06\u76ee\u6807\u9b45\u60d1\uff0c\u8ba9\u76ee\u6807\u610f\u4e71\u60c5\u8ff7\u5730\u8d70\u5411\u963f\u72f8\u3002\u9b45\u60d1\u6548\u679c\u6301\u7eed1\/1.25\/1.5\/1.75\/2\u79d2\u3002",
					"leveltip" : {
						"label" : [ "\u4f24\u5bb3", "\u6301\u7eed\u65f6\u95f4" ],
						"effect" : [ "60\/95\/130\/165\/200",
								" 1\/1.25\/1.5\/1.75\/2" ]
					},
					"resource" : "85\u6cd5\u529b"
				},
				{
					"id" : "AhriTumble",
					"name" : "\u7075\u9b44\u7a81\u88ad",
					"description" : "\u963f\u72f8\u5411\u524d\u731b\u51b2\uff0c\u5e76\u653e\u51fa\u5143\u6c14\u5f39\uff0c\u5bf9\u5468\u56f4\u7684\u4e09\u540d\u654c\u4eba\uff08\u82f1\u96c4\u4f18\u5148\uff09\u9020\u6210\u4f24\u5bb3\u3002\u7075\u9b44\u7a81\u88ad\u53ef\u4ee5\u5728\u8fdb\u5165\u51b7\u5374\u9636\u6bb5\u4ee5\u524d\u6700\u591a\u88ab\u65bd\u653e\u4e09\u6b21\u3002",
					"image" : {
						"full" : "AhriTumble.png",
						"sprite" : "spell0.png",
						"group" : "spell",
						"x" : 48,
						"y" : 96,
						"w" : 48,
						"h" : 48
					},
					"tooltip" : "\u963f\u72f8\u50cf\u5996\u9b45\u4e00\u822c\u5411\u524d\u51b2\u950b\uff0c\u5e76\u5411\u5468\u56f4\u76843\u540d\u654c\u4eba\uff08\u82f1\u96c4\u4f18\u5148\uff09\u53d1\u5c04\u5143\u6c14\u5f39\uff0c\u9020\u621070\/110\/150<span class=\"color99FF99\">(+0.3)<\/span>\u9b54\u6cd5\u4f24\u5bb3\u3002\u7075\u9b44\u7a81\u88ad\u53ef\u4ee5\u5728\u8fdb\u5165\u51b7\u5374\u9636\u6bb5\u524d\u768410\u79d2\u5185\u88ab\u65bd\u653e\u6700\u591a3\u6b21\u3002",
					"leveltip" : {
						"label" : [ "\u4f24\u5bb3", "\u51b7\u5374\u65f6\u95f4" ],
						"effect" : [ "70\/110\/150", "110\/95\/80" ]
					},
					"resource" : "100\u6cd5\u529b"
				} ],
		"passive" : {
			"name" : "\u6444\u9b42\u593a\u9b44",
			"description" : "\u5728\u7528\u6280\u80fd\u547d\u4e2d\u654c\u4eba\u540e\uff0c\u963f\u72f8\u4f1a\u83b7\u5f97\u4e00\u5c42\u6444\u9b42\u593a\u9b44\u7684\u5145\u80fd\uff08\u4e00\u4e2a\u6280\u80fd\u6700\u591a\u53ef\u83b7\u5f973\u5c42\u5145\u80fd\uff09\u3002\u5728\u83b7\u5f979\u5c42\u5145\u80fd\u6548\u679c\u4e4b\u540e\uff0c\u963f\u72f8\u7684\u4e0b\u4e00\u4e2a\u6280\u80fd\u5c06\u5728\u547d\u4e2d\u654c\u4eba\u540e\u5bf9\u963f\u72f8\u8fdb\u884c\u6cbb\u7597\u3002",
			"image" : {
				"full" : "Ahri_SoulEater.png",
				"sprite" : "passive0.png",
				"group" : "passive",
				"x" : 48,
				"y" : 0,
				"w" : 48,
				"h" : 48
			}
		},
		"lore" : "\u8ddf\u5176\u4ed6\u6e38\u8361\u5728\u827e\u6b27\u5c3c\u4e9a\u5357\u90e8\u4e1b\u6797\u4e2d\u7684\u72d0\u72f8\u4e0d\u540c\uff0c\u963f\u72f8\u603b\u89c9\u5f97\u5979\u8ddf\u9b54\u6cd5\u4e16\u754c\u6709\u4e00\u79cd\u8bf4\u4e0d\u6e05\u9053\u4e0d\u660e\u7684\u8054\u7cfb\uff0c\u4e00\u79cd\u4e0d\u5b8c\u6574\u7684\u8054\u7cfb\u3002\u5728\u5185\u5fc3\u6df1\u5904\uff0c\u5979\u89c9\u5f97\u5979\u96be\u4ee5\u9002\u5e94\u8fd9\u5177\u751f\u800c\u62e5\u6709\u7684\u8089\u4f53\uff0c\u68a6\u60f3\u6709\u4e00\u5929\u53ef\u4ee5\u53d8\u6210\u4eba\u7c7b\u3002\u8fd9\u4e2a\u68a6\u60f3\u770b\u8d77\u6765\u9065\u4e0d\u53ef\u53ca\uff0c\u76f4\u5230\u6709\u4e00\u5929\u4eba\u7c7b\u6218\u573a\u4e0a\u53d1\u751f\u7684\u4e8b\u60c5\u6539\u53d8\u4e86\u5979\u3002\u90a3\u662f\u4e00\u526f\u60e8\u70c8\u7684\u666f\u8c61\uff0c\u6218\u573a\u4e0a\u6a2a\u4e03\u7ad6\u516b\u5730\u8eba\u7740\u6216\u91cd\u4f24\u6216\u6b7b\u53bb\u7684\u58eb\u5175\u3002\u5979\u88ab\u5176\u4e2d\u4e00\u4eba\u5438\u5f15\u4e86\uff1a\u4e00\u4e2a\u8eab\u7a7f\u957f\u888d\u7684\u7537\u4eba\uff0c\u4ed6\u7684\u751f\u547d\u6b63\u5728\u6781\u901f\u5730\u6d41\u901d\uff0c\u8eab\u8fb9\u8426\u7ed5\u7740\u4e00\u4e2a\u6e10\u6e10\u8870\u706d\u7684\u9b54\u6cd5\u76fe\u3002\u963f\u72f8\u8d70\u8fd1\u4e86\u4ed6\u5e76\u611f\u5230\u81ea\u5df1\u5185\u5fc3\u6df1\u5904\u7684\u4e00\u4e9b\u4e1c\u897f\u88ab\u6fc0\u53d1\u4e86\uff0c\u4ee5\u67d0\u79cd\u5979\u96be\u4ee5\u7406\u89e3\u7684\u65b9\u5f0f\u5411\u8fd9\u4e2a\u7537\u4eba\u5c55\u5f00\u3002\u4ed6\u751f\u547d\u7684\u7cbe\u9b44\u901a\u8fc7\u65e0\u5f62\u7684\u9b54\u6cd5\u7ebd\u5e26\uff0c\u704c\u5165\u5230\u4e86\u963f\u72f8\u4f53\u5185\u3002\u8fd9\u79cd\u611f\u89c9\u4ee4\u4eba\u9676\u9189\u800c\u53c8\u4e0d\u53ef\u6297\u62d2\u3002\u5f53\u8fd9\u79cd\u9189\u4eba\u7684\u611f\u89c9\u6e10\u6e10\u6d88\u9000\u540e\uff0c\u963f\u72f8\u60ca\u559c\u5730\u53d1\u73b0\u5979\u5df2\u7ecf\u975e\u540c\u5f80\u65e5\u3002\u5979\u90a3\u987a\u7f8e\u6d01\u767d\u7684\u76ae\u6bdb\u5df2\u7ecf\u6d88\u51cf\uff0c\u5979\u7684\u4f53\u5f62\u9ad8\u6311\u81ea\u7136\uff0c\u770b\u8d77\u6765\u5c31\u50cf\u5012\u5728\u5979\u8eab\u5468\u7684\u4eba\u7c7b\u4e00\u6837\u3002<br><br>\u4e0d\u8fc7\uff0c\u5373\u4fbf\u5979\u5df2\u6210\u4eba\u5f62\uff0c\u5979\u4e5f\u77e5\u9053\u8fd9\u6b21\u5e7b\u5316\u5e76\u4e0d\u5b8c\u6574\u3002\u4f5c\u4e3a\u4e00\u53ea\u673a\u654f\u7684\u751f\u7269\uff0c\u5979\u5f88\u5feb\u5c31\u9002\u5e94\u4e86\u4eba\u7c7b\u793e\u4f1a\u7684\u98ce\u4fd7\u793c\u4eea\uff0c\u5e76\u4ee5\u5979\u4e0d\u53ef\u591a\u5f97\u7684\u5929\u751f\u4e3d\u8d28\u53bb\u5438\u5f15\u5fc3\u65e0\u6212\u5907\u7684\u7537\u4eba\u3002\u5f53\u4ed6\u4eec\u62dc\u5012\u5728\u5979\u7684\u9b45\u60d1\u8bf1\u672f\u4e4b\u4e0b\u7684\u65f6\u5019\uff0c\u963f\u72f8\u5c31\u53ef\u4ee5\u541e\u566c\u4ed6\u4eec\u7684\u7cbe\u9b44\uff0c\u628a\u81ea\u5df1\u7684\u68a6\u60f3\u5efa\u7acb\u5728\u522b\u4eba\u7684\u6b32\u671b\u4e4b\u4e0a\u3002\u4f46\u5979\u8d8a\u662f\u8fd9\u6837\u505a\uff0c\u90a3\u79cd\u53e4\u602a\u7684\u6094\u6068\u611f\u5c31\u8d8a\u662f\u96be\u4ee5\u904f\u5236\u3002\u5979\u5f00\u59cb\u6709\u4e86\u5979\u5728\u4f5c\u4e3a\u4e00\u53ea\u72d0\u72f8\u65f6\u4ece\u6ca1\u6709\u8fc7\u7684\u81ea\u6211\u7ea6\u675f\u3002\u5979\u610f\u8bc6\u5230\u5979\u4e0d\u80fd\u514b\u670d\u5979\u65e5\u76ca\u589e\u957f\u7684\u9053\u5fb7\u611f\u3002\u5728\u5bfb\u6c42\u89e3\u51b3\u4e4b\u9053\u7684\u65f6\u5019\uff0c\u963f\u72f8\u53d1\u73b0\u4e86\u6218\u4e89\u5b66\u9662\uff0c\u7b26\u6587\u5927\u9646\u4e0a\u5929\u624d\u6cd5\u5e08\u7684\u4e91\u96c6\u4e4b\u5730\u3002\u4ed6\u4eec\u7b54\u5e94\u5e2e\u52a9\u5979\u5728\u4e0d\u4f5c\u6076\u7684\u60c5\u51b5\u4e0b\u53d8\u6210\u771f\u6b63\u7684\u4eba\u7c7b\uff0c\u53ea\u8981\u963f\u72f8\u4e3a\u82f1\u96c4\u8054\u76df\u6548\u529b\u3002<br><br>\u201c\u6148\u60b2\u662f\u4eba\u7c7b\u7684\u5962\u4f88\u4e4b\u4e3e\uff0c\u4f46\u4e5f\u662f\u8d23\u4efb\u6240\u5728\u3002\u201d\u2014\u2014\u963f\u72f8",
		"blurb" : "\u8ddf\u5176\u4ed6\u6e38\u8361\u5728\u827e\u6b27\u5c3c\u4e9a\u5357\u90e8\u4e1b\u6797\u4e2d\u7684\u72d0\u72f8\u4e0d\u540c\uff0c\u963f\u72f8\u603b\u89c9\u5f97\u5979\u8ddf\u9b54\u6cd5\u4e16\u754c\u6709\u4e00\u79cd\u8bf4\u4e0d\u6e05\u9053\u4e0d\u660e\u7684\u8054\u7cfb\uff0c\u4e00\u79cd\u4e0d\u5b8c\u6574\u7684\u8054\u7cfb\u3002\u5728\u5185\u5fc3\u6df1\u5904\uff0c\u5979\u89c9\u5f97\u5979\u96be\u4ee5\u9002\u5e94\u8fd9\u5177\u751f\u800c\u62e5\u6709\u7684\u8089\u4f53\uff0c\u68a6\u60f3\u6709\u4e00\u5929\u53ef\u4ee5\u53d8\u6210\u4eba\u7c7b\u3002\u8fd9\u4e2a\u68a6\u60f3\u770b\u8d77\u6765\u9065\u4e0d\u53ef\u53ca\uff0c\u76f4\u5230\u6709\u4e00\u5929\u4eba\u7c7b\u6218\u573a\u4e0a\u53d1\u751f\u7684\u4e8b\u60c5\u6539\u53d8\u4e86\u5979\u3002\u90a3\u662f\u4e00\u526f\u60e8\u70c8\u7684\u666f\u8c61\uff0c\u6218\u573a\u4e0a\u6a2a\u4e03\u7ad6\u516b\u5730\u8eba\u7740\u6216\u91cd\u4f24\u6216\u6b7b\u53bb\u7684\u58eb\u5175\u3002\u5979\u88ab\u5176\u4e2d\u4e00\u4eba\u5438\u5f15\u4e86\uff1a\u4e00\u4e2a\u8eab\u7a7f\u957f\u888d\u7684\u7537\u4eba\uff0c\u4ed6\u7684\u751f\u547d\u6b63\u5728\u6781\u901f\u5730\u6d41\u901d\uff0c\u8eab\u8fb9\u8426\u7ed5\u7740\u4e00\u4e2a\u6e10\u6e10\u8870\u706d\u7684\u9b54\u6cd5\u76fe\u3002\u963f\u72f8\u8d70\u8fd1\u4e86\u4ed6\u5e76\u611f\u5230\u81ea\u5df1\u5185\u5fc3\u6df1\u5904\u7684\u4e00\u4e9b\u4e1c\u897f\u88ab\u6fc0\u53d1\u4e86\uff0c\u4ee5\u67d0\u79cd\u5979\u96be\u4ee5\u7406\u89e3\u7684\u65b9\u5f0f\u5411\u8fd9\u4e2a\u7537\u4eba\u5c55\u5f00\u3002...",
		"allytips" : [
				"- \u7528\u3010\u9b45\u60d1\u5996\u672f\u3011\u6765\u542f\u52a8\u4f60\u7684\u8fde\u62db\uff0c\u5b83\u5c06\u4f1a\u4f7f\u3010\u6b3a\u8bc8\u5b9d\u73e0\u3011\u548c\u3010\u5996\u5f02\u72d0\u706b\u3011\u66f4\u5bb9\u6613\u547d\u4e2d\u654c\u4eba\u3002",
				"- \u5728\u56e2\u6218\u4e2d\u7528\u9b45\u60d1\u5996\u672f\u5148\u624b\uff0c\u5e76\u7528\u3010\u7075\u9b44\u7a81\u88ad\u3011\u8ffd\u51fb\u843d\u5355\u7684\u654c\u4eba\u3002",
				"- \u3010\u7075\u9b44\u7a81\u88ad\u3011\u80fd\u591f\u4e3a\u963f\u72f8\u7684\u5176\u5b83\u6280\u80fd\u521b\u9020\u673a\u4f1a\uff0c\u5b83\u53ef\u4ee5\u4e3a\u3010\u9b45\u60d1\u5996\u672f\u3011\u6e05\u51fa\u4e00\u6761\u8def\uff0c\u6709\u52a9\u4e8e\u8ba9\u3010\u6b3a\u8bc8\u5b9d\u73e0\u3011\u6765\u56de\u547d\u4e2d\u654c\u4eba\u4e24\u6b21\uff0c\u5e76\u4e14\u7a81\u8fdb\u5230\u654c\u4eba\u8eab\u8fb9\u53ef\u4ee5\u8ba9\u3010\u5996\u5f02\u72d0\u706b\u3011\u66f4\u6613\u9009\u4e2d\u76ee\u6807\u3002" ],
		"enemytips" : [
				"- \u5728\u5927\u62db\u3010\u7075\u9b44\u7a81\u88ad\u3011\u8fdb\u5165\u51b7\u5374\u9636\u6bb5\u540e\uff0c\u963f\u72f8\u7684\u751f\u5b58\u80fd\u529b\u53ef\u8c13\u4f4e\u5f97\u4ee4\u4eba\u53d1\u6307\u3002",
				"- \u5446\u5728\u5c0f\u5175\u540e\u9762\uff0c\u6765\u8ba9\u3010\u9b45\u60d1\u5996\u672f\u3011\u96be\u4ee5\u547d\u4e2d\uff0c\u80fd\u591f\u663e\u8457\u5730\u964d\u4f4e\u963f\u72f8\u6f5c\u5728\u7684\u7206\u53d1\u4f24\u5bb3\u3002" ],
		"blocks" : [ {
			"map" : "1",
			"mode" : "CLASSIC",
			"recommended" : [ {
				"type" : "starting",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "1056",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "2003",
					"count" : 2,
					"hideCount" : false
				}, {
					"id" : "3340",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "early",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "1001",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3114",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "1058",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "essential",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3020",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3165",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3285",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "standard",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3089",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3157",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3135",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "situational",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3001",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3116",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3174",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "consumables",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "2003",
					"count" : 1,
					"hideCount" : true
				}, {
					"id" : "2043",
					"count" : 1,
					"hideCount" : true
				}, {
					"id" : "2139",
					"count" : 1,
					"hideCount" : true
				} ]
			} ]
		}, {
			"map" : "12",
			"mode" : "ARAM",
			"recommended" : [ {
				"type" : "starting",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3108",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3114",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "2003",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "essential",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3165",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3285",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3020",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "offensive",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3089",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3135",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3151",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "defensive",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "3116",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3157",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "3001",
					"count" : 1,
					"hideCount" : false
				} ]
			}, {
				"type" : "consumables",
				"recMath" : false,
				"recSteps" : false,
				"minSummonerLevel" : -1,
				"maxSummonerLevel" : -1,
				"showIfSummonerSpell" : "",
				"hideIfSummonerSpell" : "",
				"items" : [ {
					"id" : "2003",
					"count" : 1,
					"hideCount" : false
				}, {
					"id" : "2139",
					"count" : 1,
					"hideCount" : false
				} ]
			} ]
		} ]
	},
	"version" : "6.8.1",
	"updated" : "2016-04-26"
};