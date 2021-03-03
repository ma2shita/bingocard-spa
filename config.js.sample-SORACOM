const img_src_prefix = 'assets/';
const pickup_wait = 25;

/*
 $ ruby -rjson -e 'puts Dir.glob("*.png").shuffle.map.with_index.inject({}){|h, (i,n)|h[n]={src:i, text:i.split("-")[1].split(".")[0]};h}.to_json

 and Edit
*/
const bingo_items = {
  "0": {
    "src": "SISS002-SORACOM Platform B.png",
    "text": "SORACOM Platform B"
  },
  "1": {
    "src": "SISS010-SORACOM Door.png",
    "text": "SORACOM Door"
  },
  "2": {
    "src": "SIS0031-セキュリティC.png",
    "text": "セキュリティC"
  },
  "3": {
    "src": "SIS0114-トラック.png",
    "text": "トラック"
  },
  "4": {
    "src": "SIS0115-バス.png",
    "text": "バス"
  },
  "5": {
    "src": "SIS0093-LoRa ゲートウェイ A.png",
    "text": "LoRa ゲートウェイ A"
  },
  "6": {
    "src": "SISS015-SORACOM Inventory.png",
    "text": "SORACOM Inventory"
  },
  "7": {
    "src": "SIS0090-SBR A.png",
    "text": "SBR A"
  },
  "8": {
    "src": "SIS0118-オートバイ.png",
    "text": "オートバイ"
  },
  "9": {
    "src": "SIS0066-矢印C.png",
    "text": "矢印C"
  },
  "10": {
    "src": "SIS0124-ブルドーザー.png",
    "text": "ブルドーザー"
  },
  "11": {
    "src": "SISS014-SORACOM Harvest.png",
    "text": "SORACOM Harvest"
  },
  "12": {
    "src": "SISS004-Air SIM B.png",
    "text": "Air SIM B"
  },
  "13": {
    "src": "SIS0096-LoRa モジュール B.png",
    "text": "LoRa モジュール B"
  },
  "14": {
    "src": "SISS018-SORACOM Air.png",
    "text": "SORACOM Air"
  },
  "15": {
    "src": "SIS0047-夜間.png",
    "text": "夜間"
  },
  "16": {
    "src": "SIS0059-メール.png",
    "text": "メール"
  },
  "17": {
    "src": "SISS006-SORACOM Canal.png",
    "text": "SORACOM Canal"
  },
  "18": {
    "src": "SIS0109-Sigfox モジュール B.png",
    "text": "Sigfox モジュール B"
  },
  "19": {
    "src": "SIS0013-監視カメラ.png",
    "text": "監視カメラ"
  },
  "20": {
    "src": "SISS016-SORACOM Inventory client.png",
    "text": "SORACOM Inventory client"
  },
  "21": {
    "src": "SIS0099-VPG.png",
    "text": "VPG"
  },
  "22": {
    "src": "SISS007-SORACOM Direct.png",
    "text": "SORACOM Direct"
  },
  "23": {
    "src": "SISS009-SORACOM Funnel.png",
    "text": "SORACOM Funnel"
  },
  "24": {
    "src": "SIS0061-再読み込み.png",
    "text": "再読み込み"
  },
  "25": {
    "src": "SISS005-SORACOM Beam.png",
    "text": "SORACOM Beam"
  },
  "26": {
    "src": "SIS0122-ショベルカー.png",
    "text": "ショベルカー"
  },
  "27": {
    "src": "SIS0126-トラクター.png",
    "text": "トラクター"
  },
  "28": {
    "src": "SIS0121-ヘリコプター.png",
    "text": "ヘリコプター"
  },
  "29": {
    "src": "SIS0101-相互接続網.png",
    "text": "相互接続網"
  },
  "30": {
    "src": "SIS0042-送信.png",
    "text": "送信"
  },
  "31": {
    "src": "SIS0125-ダンプカー.png",
    "text": "ダンプカー"
  },
  "32": {
    "src": "SIS0128-ボート.png",
    "text": "ボート"
  },
  "33": {
    "src": "SISS017-SORACOM Junction.png",
    "text": "SORACOM Junction"
  },
  "34": {
    "src": "SIS0058-グラフ.png",
    "text": "グラフ"
  },
  "35": {
    "src": "SIS0107-Beer.png",
    "text": "Beer"
  },
  "36": {
    "src": "SIS0004-基地局.png",
    "text": "基地局"
  },
  "37": {
    "src": "SIS0132-スペースシャトル.png",
    "text": "スペースシャトル"
  },
  "38": {
    "src": "SIS0003-交換局.png",
    "text": "交換局"
  },
  "39": {
    "src": "SIS0050-認証.png",
    "text": "認証"
  },
  "40": {
    "src": "SIS0046-日中.png",
    "text": "日中"
  },
  "41": {
    "src": "SIS0057-ビックデータ.png",
    "text": "ビックデータ"
  },
  "42": {
    "src": "SIS0102-Safe.png",
    "text": "Safe"
  },
  "43": {
    "src": "SIS0134-衛星.png",
    "text": "衛星"
  },
  "44": {
    "src": "SIS0123-クレーン.png",
    "text": "クレーン"
  },
  "45": {
    "src": "SIS0131-気球.png",
    "text": "気球"
  },
  "46": {
    "src": "SIS0112-自動車.png",
    "text": "自動車"
  },
  "47": {
    "src": "SIS0113-タクシー.png",
    "text": "タクシー"
  },
  "48": {
    "src": "SIS0009-スマホ.png",
    "text": "スマホ"
  },
  "49": {
    "src": "SIS0016-基板.png",
    "text": "基板"
  },
  "50": {
    "src": "SIS0092-Global.png",
    "text": "Global"
  },
  "51": {
    "src": "SIS0035-コード.png",
    "text": "コード"
  },
  "52": {
    "src": "SIS0091-SBR B.png",
    "text": "SBR B"
  },
  "53": {
    "src": "SIS0070-システム処理C.png",
    "text": "システム処理C"
  },
  "54": {
    "src": "SIS0133-UFO.png",
    "text": "UFO"
  },
  "55": {
    "src": "SIS0129-船.png",
    "text": "船"
  },
  "56": {
    "src": "SIS0127-除雪車.png",
    "text": "除雪車"
  },
  "57": {
    "src": "SIS0055-コントローラブル.png",
    "text": "コントローラブル"
  },
  "58": {
    "src": "SIS0105-Connect B.png",
    "text": "Connect B"
  },
  "59": {
    "src": "SIS0116-電車.png",
    "text": "電車"
  },
  "60": {
    "src": "SIS0119-自転車.png",
    "text": "自転車"
  },
  "61": {
    "src": "SISS011-SORACOM Gate.png",
    "text": "SORACOM Gate"
  },
  "62": {
    "src": "SIS0025-サーバーC.png",
    "text": "サーバーC"
  },
  "63": {
    "src": "SIS0014-ドローン.png",
    "text": "ドローン"
  },
  "64": {
    "src": "SIS0120-飛行機.png",
    "text": "飛行機"
  },
  "65": {
    "src": "SIS0038-設定C.png",
    "text": "設定C"
  },
  "66": {
    "src": "SIS0130-タンカー.png",
    "text": "タンカー"
  },
  "67": {
    "src": "SIS0048-認証キー.png",
    "text": "認証キー"
  },
  "68": {
    "src": "SIS0087-通信経路（分岐）.png",
    "text": "通信経路（分岐）"
  },
  "69": {
    "src": "SIS0053-API.png",
    "text": "API"
  },
  "70": {
    "src": "SIS0045-時間.png",
    "text": "時間"
  },
  "71": {
    "src": "SISS008-SORACOM Endorse.png",
    "text": "SORACOM Endorse"
  },
  "72": {
    "src": "SISS013-Air SIM for Global B.png",
    "text": "Air SIM for Global B"
  },
  "73": {
    "src": "SIS0027-ユーザーA.png",
    "text": "ユーザーA"
  },
  "74": {
    "src": "SIS0008-LAPTOP.png",
    "text": "LAPTOP"
  },
  "75": {
    "src": "SIS0117-原付.png",
    "text": "原付"
  }
}
