const img_src_prefix = 'assets/';
const pickup_wait = 25;
const bingo_items = {
  "0": {
    "src": "SISS002.png",
    "text": "SORACOM Platform B"
  },
  "1": {
    "src": "SIS0003.png",
    "text": "交換局"
  },
  "2": {
    "src": "SIS0004.png",
    "text": "基地局"
  },
  "3": {
    "src": "SIS0008.png",
    "text": "LAPTOP"
  },
  "4": {
    "src": "SIS0013.png",
    "text": "監視カメラ"
  },
  "5": {
    "src": "SIS0016.png",
    "text": "基板"
  },
  "6": {
    "src": "SIS0017.png",
    "text": "ドングル"
  },
  "7": {
    "src": "SIS0021.png",
    "text": "コントローラーB"
  },
  "8": {
    "src": "SIS0025.png",
    "text": "サーバーC"
  },
  "9": {
    "src": "SIS0026.png",
    "text": "データベース"
  },
  "10": {
    "src": "SIS0027.png",
    "text": "ユーザーA"
  },
  "11": {
    "src": "SIS0035.png",
    "text": "コード"
  },
  "12": {
    "src": "SIS0040.png",
    "text": "監視"
  },
  "13": {
    "src": "SIS0042.png",
    "text": "送信"
  },
  "14": {
    "src": "SIS0045.png",
    "text": "時間"
  },
  "15": {
    "src": "SIS0052.png",
    "text": "ブロック（鍵あり）"
  },
  "16": {
    "src": "SIS0056.png",
    "text": "SDK"
  },
  "17": {
    "src": "SIS0070.png",
    "text": "システム処理C"
  },
  "18": {
    "src": "SIS0087.png",
    "text": "通信経路（分岐）"
  },
  "19": {
    "src": "SIS0090.png",
    "text": "SBR A"
  },
  "20": {
    "src": "SIS0091.png",
    "text": "SBR B"
  },
  "21": {
    "src": "SIS0094.png",
    "text": "LoRa ゲートウェイ B"
  },
  "22": {
    "src": "SIS0107.png",
    "text": "Beer"
  },
  "23": {
    "src": "SIS0113.png",
    "text": "タクシー"
  },
  "24": {
    "src": "SIS0116.png",
    "text": "電車"
  },
  "25": {
    "src": "SIS0117.png",
    "text": "原付"
  },
  "26": {
    "src": "SIS0123.png",
    "text": "クレーン"
  },
  "27": {
    "src": "SIS0132.png",
    "text": "スペースシャトル"
  },
  "28": {
    "src": "SIS0133.png",
    "text": "UFO"
  },
  "29": {
    "src": "SIS0134.png",
    "text": "衛星"
  },
  "30": {
    "src": "SIS0137.png",
    "text": "Air eSIM B"
  },
  "31": {
    "src": "SIS0150.png",
    "text": "Wio LTE"
  },
  "32": {
    "src": "SIS0156.png",
    "text": "温度計"
  },
  "33": {
    "src": "SIS0162.png",
    "text": "機械学習モデルA"
  },
  "34": {
    "src": "SIS0166.png",
    "text": "グラフC"
  },
  "35": {
    "src": "SIS0176.png",
    "text": "ルーターC"
  },
  "36": {
    "src": "SIS0181.png",
    "text": "エクスカリバー"
  },
  "37": {
    "src": "SIS0182.png",
    "text": "スライム"
  },
  "38": {
    "src": "SIS0183.png",
    "text": "住居"
  },
  "39": {
    "src": "SIS0185.png",
    "text": "工場 A"
  },
  "40": {
    "src": "SIS0188.png",
    "text": "自動販売機"
  },
  "41": {
    "src": "SIS0189.png",
    "text": "踏切"
  },
  "42": {
    "src": "SIS0192.png",
    "text": "発電機"
  },
  "43": {
    "src": "SIS0193.png",
    "text": "PLC"
  },
  "44": {
    "src": "SIS0195.png",
    "text": "7セグパネル"
  },
  "45": {
    "src": "SIS0197.png",
    "text": "ロボット"
  },
  "46": {
    "src": "SIS0198.png",
    "text": "ベルトコンベア"
  },
  "47": {
    "src": "SIS0201.png",
    "text": "マップ"
  },
  "48": {
    "src": "SIS0207.png",
    "text": "不届き者"
  },
  "49": {
    "src": "SIS0209.png",
    "text": "S+Camera B"
  },
  "50": {
    "src": "SIS0211.png",
    "text": "VPG Type-D"
  },
  "51": {
    "src": "SIS0214.png",
    "text": "S+Smart Notification Service"
  },
  "52": {
    "src": "SIS0215.png",
    "text": "GPS マルチユニット SORACOM Edition"
  },
  "53": {
    "src": "SISS004.png",
    "text": "Air SIM B"
  },
  "54": {
    "src": "SISS005.png",
    "text": "SORACOM Beam"
  },
  "55": {
    "src": "SISS006.png",
    "text": "SORACOM Canal"
  },
  "56": {
    "src": "SISS007.png",
    "text": "SORACOM Direct"
  },
  "57": {
    "src": "SISS008.png",
    "text": "SORACOM Endorse"
  },
  "58": {
    "src": "SISS009.png",
    "text": "SORACOM Funnel"
  },
  "59": {
    "src": "SISS010.png",
    "text": "SORACOM Door"
  },
  "60": {
    "src": "SISS011.png",
    "text": "SORACOM Gate"
  },
  "61": {
    "src": "SISS012.png",
    "text": "Air SIM for Global A"
  },
  "62": {
    "src": "SISS014.png",
    "text": "SORACOM Harvest"
  },
  "63": {
    "src": "SISS015.png",
    "text": "SORACOM Inventory"
  },
  "64": {
    "src": "SISS016.png",
    "text": "SORACOM Inventory client"
  },
  "65": {
    "src": "SISS017.png",
    "text": "SORACOM Junction"
  },
  "66": {
    "src": "SISS018.png",
    "text": "SORACOM Air"
  },
  "67": {
    "src": "SISS019.png",
    "text": "SORACOM Krypton"
  },
  "68": {
    "src": "SISS020.png",
    "text": "SORACOM Krypton key"
  },
  "69": {
    "src": "SISS021.png",
    "text": "SORACOM Lagoon"
  },
  "70": {
    "src": "SISS022.png",
    "text": "SORACOM Funk"
  },
  "71": {
    "src": "SISS023.png",
    "text": "SORACOM Mosaic"
  },
  "72": {
    "src": "SISS024.png",
    "text": "SORACOM Napter"
  },
  "73": {
    "src": "SISS025.png",
    "text": "SORACOM Orbit"
  },
  "74": {
    "src": "SISS026.png",
    "text": "SORACOM Peek"
  },
  "75": {
    "src": "SIS0001.png",
    "text": "Cloud A"
  }
}
