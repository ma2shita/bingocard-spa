const img_src_prefix = 'assets/';
const pickup_wait = 25;
const bingo_items = {
  "0": {
    "src": "SISS002.png",
    "text": "SORACOM Platform B"
  },
  "1": {
    "src": "SISS021.png",
    "text": "SORACOM Lagoon"
  },
  "2": {
    "src": "SISS010.png",
    "text": "SORACOM Door"
  },
  "3": {
    "src": "SIS0129.png",
    "text": "船"
  },
  "4": {
    "src": "SISS026.png",
    "text": "SORACOM Peek"
  },
  "5": {
    "src": "SIS0091.png",
    "text": "SBR B"
  },
  "6": {
    "src": "SIS0160.png",
    "text": "ジャイロ"
  },
  "7": {
    "src": "SISS027.png",
    "text": "SORACOM Arc"
  },
  "8": {
    "src": "SIS0118.png",
    "text": "オートバイ"
  },
  "9": {
    "src": "SISS022.png",
    "text": "SORACOM Funk"
  },
  "10": {
    "src": "SIS0093.png",
    "text": "LoRa ゲートウェイ A"
  },
  "11": {
    "src": "SIS0031.png",
    "text": "セキュリティC"
  },
  "12": {
    "src": "SISS015.png",
    "text": "SORACOM Inventory"
  },
  "13": {
    "src": "SIS0217.png",
    "text": "5G デバイス B"
  },
  "14": {
    "src": "SIS0017.png",
    "text": "ドングル"
  },
  "15": {
    "src": "SISS006.png",
    "text": "SORACOM Canal"
  },
  "16": {
    "src": "SISS009.png",
    "text": "SORACOM Funnel"
  },
  "17": {
    "src": "SIS0221.png",
    "text": "診断"
  },
  "18": {
    "src": "SIS0220.png",
    "text": "バーチャルSIM"
  },
  "19": {
    "src": "SIS0055.png",
    "text": "コントローラブル"
  },
  "20": {
    "src": "SIS0196.png",
    "text": "ロボットアーム"
  },
  "21": {
    "src": "SIS0212.png",
    "text": "VPG Type"
  },
  "22": {
    "src": "SIS0161.png",
    "text": "機械学習エンジンA"
  },
  "23": {
    "src": "SISS019.png",
    "text": "SORACOM Krypton"
  },
  "24": {
    "src": "SISS024.png",
    "text": "SORACOM Napter"
  },
  "25": {
    "src": "SIS0197.png",
    "text": "ロボット"
  },
  "26": {
    "src": "SIS0092.png",
    "text": "Global"
  },
  "27": {
    "src": "SISS016.png",
    "text": "SORACOM Inventory client"
  },
  "28": {
    "src": "SISS012.png",
    "text": "Air SIM for Global A"
  },
  "29": {
    "src": "SIS0004.png",
    "text": "基地局"
  },
  "30": {
    "src": "SISS023.png",
    "text": "SORACOM Mosaic"
  },
  "31": {
    "src": "SIS0132.png",
    "text": "スペースシャトル"
  },
  "32": {
    "src": "SISS011.png",
    "text": "SORACOM Gate"
  },
  "33": {
    "src": "SIS0150.png",
    "text": "Wio LTE"
  },
  "34": {
    "src": "SIS0138.png",
    "text": "SORACOM Funnel アダプタ"
  },
  "35": {
    "src": "SISS025.png",
    "text": "SORACOM Orbit"
  },
  "36": {
    "src": "SISS007.png",
    "text": "SORACOM Direct"
  },
  "37": {
    "src": "SISS004.png",
    "text": "Air SIM B"
  },
  "38": {
    "src": "SIS0181.png",
    "text": "エクスカリバー"
  },
  "39": {
    "src": "SISS005.png",
    "text": "SORACOM Beam"
  },
  "40": {
    "src": "SISS013.png",
    "text": "Air SIM for Global B"
  },
  "41": {
    "src": "SIS0215.png",
    "text": "GPS マルチユニット SORACOM Edition"
  },
  "42": {
    "src": "SIS0152.png",
    "text": "プロセッサ"
  },
  "43": {
    "src": "SIS0201.png",
    "text": "マップ"
  },
  "44": {
    "src": "SISS008.png",
    "text": "SORACOM Endorse"
  },
  "45": {
    "src": "SIS0090.png",
    "text": "SBR A"
  },
  "46": {
    "src": "SISS020.png",
    "text": "SORACOM Krypton key"
  },
  "47": {
    "src": "SIS0213.png",
    "text": "VPG Type"
  },
  "48": {
    "src": "SIS0026.png",
    "text": "データベース"
  },
  "49": {
    "src": "SIS0005.png",
    "text": "インターネット"
  },
  "50": {
    "src": "SIS0113.png",
    "text": "タクシー"
  },
  "51": {
    "src": "SISS014.png",
    "text": "SORACOM Harvest"
  },
  "52": {
    "src": "SIS0209.png",
    "text": "S+Camera B"
  },
  "53": {
    "src": "SIS0107.png",
    "text": "Beer"
  },
  "54": {
    "src": "SIS0193.png",
    "text": "PLC"
  },
  "55": {
    "src": "SIS0014.png",
    "text": "ドローン"
  },
  "56": {
    "src": "SIS0202.png",
    "text": "有線LAN"
  },
  "57": {
    "src": "SIS0133.png",
    "text": "UFO"
  },
  "58": {
    "src": "SIS0027.png",
    "text": "ユーザーA"
  },
  "59": {
    "src": "SIS0207.png",
    "text": "不届き者"
  },
  "60": {
    "src": "SISS018.png",
    "text": "SORACOM Air"
  },
  "61": {
    "src": "SIS0087.png",
    "text": "通信経路(分岐)"
  },
  "62": {
    "src": "SIS0153.png",
    "text": "ボタン"
  },
  "63": {
    "src": "SIS0016.png",
    "text": "基板"
  },
  "64": {
    "src": "SIS0025.png",
    "text": "サーバーC"
  },
  "65": {
    "src": "SIS0156.png",
    "text": "温度計"
  },
  "66": {
    "src": "SIS0048.png",
    "text": "認証キー"
  },
  "67": {
    "src": "SIS0042.png",
    "text": "送信"
  },
  "68": {
    "src": "SIS0038.png",
    "text": "設定C"
  },
  "69": {
    "src": "SISS017.png",
    "text": "SORACOM Junction"
  },
  "70": {
    "src": "SIS0165.png",
    "text": "グラフB"
  },
  "71": {
    "src": "SIS0137.png",
    "text": "Air eSIM B"
  },
  "72": {
    "src": "SIS0214.png",
    "text": "S+Smart Notification Service"
  },
  "73": {
    "src": "SIS0134.png",
    "text": "衛星"
  },
  "74": {
    "src": "SIS0056.png",
    "text": "SDK"
  },
  "75": {
    "src": "SIS0182.png",
    "text": "スライム"
  }
}
