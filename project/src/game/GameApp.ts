class GameApp {

	private mCallback: Function

	public constructor(callback: Function) {
		this.mCallback = callback
		var groupName = "preload";
		var subGroups = [];

		let keys = ["cm_json", "zjm_json", "ui_zc_jz_ditu", "ui_bm_icombg1-46"]

		let groupDicList = RES["configInstance"].groupDic[groupName]
		if (groupDicList) {
			let keyMap = RES["configInstance"].keyMap
			for (let j = 0, len = keys.length; j < len; j++) {
				let name:string = keys[j].trim();
				let item = keyMap[name];
				if (item && groupDicList.indexOf(item) == -1) {
					groupDicList.push(item);
				}
			}
		}

		RES.setMaxLoadingThread(5)
		ResourceUtils.ins().loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
	}

	/**
     * 资源组加载完成
     */
	public onResourceLoadComplete() {
		this.init();
		//预加载某些东西。
		// RES.getResByUrl(ResDataPath.GetMapThumbnailPath("map001"),()=>{},this);
		//=============================

		if (this.mCallback) {
			this.mCallback()
			this.mCallback = null
		}
	}
	
    /**
     * 初始化函数
     */
	private init() {
		Main.Instance.UpdateLoadingUI(false, "Initializing Game", 0.8, 1, 5000)
		// 配置
		GlobalConfig.DecompressZip()
		// 物品配置
		ItemConfig.InitConfig()
		// 显示层级
		LayerManager.Init()
		// 地图网格初始化
		GameMap.Init();

		Deblocking.Init()
		GameGlobal.GuideUtil.Init()
		GameGlobal.ActivityKaiFuModel.init();

		GameGlobal.ViewManagerImpl.Init()
		
		let t = egret.getTimer();
		GameGlobal.InitConfig()

		// 特殊处理的代码
		let serId = Main.Instance.mConnectServerData.id
		if (serId == 17 || serId == 18) {
			GameGlobal.Config.FuncOpenConfig[DeblockingType.TYPE_32].conditionnum2 = 3
			GameGlobal.Config.FuncOpenConfig[DeblockingType.TYPE_137].conditionnum2 = 3
		}

		console.log("GameApp Initialized:" + (egret.getTimer() - t));
	}

    /**
     * 资源组加载进度
     */
	public onResourceLoadProgress(itemsLoaded, itemsTotal) {
		Main.Instance.UpdateLoadingUI(true, "Loading Resources", 0.8, itemsLoaded / itemsTotal, 200)
	};
}