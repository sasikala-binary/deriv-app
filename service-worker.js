if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map((a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-4327e923"],(function(e){"use strict";importScripts("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/account/css/account-limits.css",revision:"7c87036c9650d8a52d59ffbeb80cbf38"},{url:"/account/css/account.css",revision:"ddf3394cb721fdf2eb70d2a452a3801c"},{url:"/account/css/api-token.css",revision:"7b2fc3e35a89e026fe31c43fbb34948f"},{url:"/account/css/demo-message.css",revision:"46bf329d48fa8d5eb72702dc8fefc5b9"},{url:"/account/css/financial-assessment.css",revision:"46bf329d48fa8d5eb72702dc8fefc5b9"},{url:"/account/css/self-exclusion.css",revision:"4da3032224acabe06001e0c2a9e12037"},{url:"/account/css/terms-of-use.css",revision:"dbc4498abd42d6e2911a2dc4a1ae2d8b"},{url:"/account/js/account-limits.js",revision:"0fc41cc6ab6a6f1cc2bf0946c819026b"},{url:"/account/js/account-limits.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/account.404.e26dbeae63b76b258fcd.js",revision:"fc524e448c4be965f0819bd115740c89"},{url:"/account/js/account.js.LICENSE.txt",revision:"d794db672f91992ce65735c200a06c39"},{url:"/account/js/address-details-config.js",revision:"3322fb794100e63a29e0eca0c296dd91"},{url:"/account/js/address-details.js",revision:"32dbf4a4365611fff369202cbdf931b8"},{url:"/account/js/address-details.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/account/js/api-token.js",revision:"2f57c5920a61dacc0877b88b8a05485a"},{url:"/account/js/api-token.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/currency-radio-button-group.js",revision:"f2602cd0159d063db8a4fab19a56da3a"},{url:"/account/js/currency-radio-button-group.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/currency-radio-button.js",revision:"578f3d4dce8ea42bb22cc42694b06a31"},{url:"/account/js/currency-radio-button.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/currency-selector-config.js",revision:"536377810ec6f11d65c4a735f215e542"},{url:"/account/js/currency-selector-schema.js",revision:"11cbd3949311172c750eb2b4ce75e98a"},{url:"/account/js/currency-selector.js",revision:"4c2d18fb0c2013cff98b376f29be37b9"},{url:"/account/js/currency-selector.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/demo-message.js",revision:"1f2df5a2376de18553acae3b91db25e0"},{url:"/account/js/demo-message.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/error-component.js",revision:"6d84cfaf8764350677e1e3ac1cf17938"},{url:"/account/js/file-uploader-container.js",revision:"b9da94ca72951f51f4f545fc63acb02d"},{url:"/account/js/file-uploader-container.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/financial-assessment.js",revision:"608a4a8c83aa409cdf7f37404413b038"},{url:"/account/js/financial-assessment.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/financial-details-config.js",revision:"a8a17024e98da47ed191d971c578468b"},{url:"/account/js/financial-details.js",revision:"3e7b3870d30e50e926956aaa2302e9a7"},{url:"/account/js/financial-details.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/form-body.js",revision:"b04471936f844e43fe9d335f72c4a838"},{url:"/account/js/form-body.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/form-footer.js",revision:"18cc4669c8f2f7c4f521f2d7f21dc1d4"},{url:"/account/js/form-footer.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/form-sub-header.js",revision:"a0e3af91c25d4944ccd4f90272b9adc1"},{url:"/account/js/form-sub-header.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/icon-message-content.js",revision:"3dea510e2664659deefeac7ef5c93657"},{url:"/account/js/icon-message-content.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/leave-confirm.js",revision:"ba8a72801fd1f3d757280a13ba0f50ac"},{url:"/account/js/leave-confirm.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/load-error-message.js",revision:"075858e1a4211302ab8c4472503f7e9f"},{url:"/account/js/load-error-message.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/personal-details-config.js",revision:"d180e75df5bbb3069b298bdff5acd353"},{url:"/account/js/personal-details.js",revision:"cdb061802508716880351e32a151fbed"},{url:"/account/js/personal-details.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/poa-expired.js",revision:"16203a6310241829fae868ca75aa50e8"},{url:"/account/js/poa-expired.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poa-needs-review.js",revision:"9c27e93c30b3ed62857cdf0c25fbbd55"},{url:"/account/js/poa-needs-review.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poa-status-codes.js",revision:"9ea6d09ac2839a30ef48dbc212a2369b"},{url:"/account/js/poa-submitted.js",revision:"b80917428b70de85d8315c10fc7b0861"},{url:"/account/js/poa-submitted.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poa-unverified.js",revision:"4150d2c2098ccb58e1dec6d464e0fc9d"},{url:"/account/js/poa-unverified.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poa-verified.js",revision:"69fd7d606059acefcd3c5bf85d51cd1d"},{url:"/account/js/poa-verified.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-expired.js",revision:"c603cb0ebc2d80eabf4c9cf7b5e8b336"},{url:"/account/js/poi-expired.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-missing-personal-details.js",revision:"7381ddade91572a4b8dd49c5a5c52ffb"},{url:"/account/js/poi-missing-personal-details.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-onfido-failed.js",revision:"7f788e905ae9e8b40149ebe12e8c6899"},{url:"/account/js/poi-onfido-failed.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-unsupported.js",revision:"be40d9a4d0bac9ce4dbc6735d7a86184"},{url:"/account/js/poi-unsupported.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-unverified.js",revision:"00fe20939d387fccc470c041337c789f"},{url:"/account/js/poi-unverified.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-upload-complete.js",revision:"ae2ca7aea0c853d4b3303774a3503a57"},{url:"/account/js/poi-upload-complete.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/poi-verified.js",revision:"e931e0666b77b8d12c8c56c9c6a292d2"},{url:"/account/js/poi-verified.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/proof-of-address-container.js",revision:"1fbb6f318a9e175616b700f5e726fc63"},{url:"/account/js/proof-of-address-container.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/proof-of-identity-container.js",revision:"09ce2858f923d67347a77d7b9ff84df2"},{url:"/account/js/proof-of-identity-container.js.LICENSE.txt",revision:"d794db672f91992ce65735c200a06c39"},{url:"/account/js/scrollbars-container.js",revision:"ceaab7ab948de79d522a7940216f2bd5"},{url:"/account/js/scrollbars-container.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/account/js/self-exclusion.js",revision:"ec39d54916282974f0918db0298446ce"},{url:"/account/js/self-exclusion.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/terms-of-use-config.js",revision:"6d2a156e96f3bd6b27ab13089e125154"},{url:"/account/js/terms-of-use.js",revision:"b43a23f858dd6d22b9350597fa75ce37"},{url:"/account/js/terms-of-use.js.LICENSE.txt",revision:"a7be164640a98ad548d77ef52146abc6"},{url:"/account/js/text-container.js",revision:"98906bc9bf991b0e14bedd3069360420"},{url:"/css/bot-web-ui.main.css",revision:"bb0e128c6f850c8b5e23b53a74763299"},{url:"/css/cashier.css",revision:"f99567afc13c07c3fe6f0b937d032242"},{url:"/css/core.account-signup-modal.3ad7780a41f942db09b1.css",revision:null},{url:"/css/core.account-types-modal.9fb5789d54f10cb4b6e7.css",revision:null},{url:"/css/core.complaints-policy.534593bc10f7858d0094.css",revision:null},{url:"/css/core.set-residence-modal.8e89934bfa926e22a7cc.css",revision:null},{url:"/css/coremain~182f79bf.main.css",revision:"bc5666938de04100ad7faa6aadf8d2e3"},{url:"/css/coremain~703a1da7.main.css",revision:"c41a6b4a4b8e8b500c2cf21c5eb16b84"},{url:"/css/coremain~85fa0c87.main.css",revision:"77c9f3f88979946e920a7a23b800510f"},{url:"/css/coremain~9a8b795a.main.css",revision:"28287c97288964b7f4bc81de65f1d843"},{url:"/css/coremain~a97549ed.main.css",revision:"ee4bbad14d9a3f0d31dfdbe71d9de2a8"},{url:"/css/smartcharts.css",revision:"ad32c32b5a6aaf42cf15ada473705d7c"},{url:"/css/trader.main.css",revision:"8f78d55660da0b91120b86c641b38ef7"},{url:"/css/trader.mt5.10625a919aff6c80dcef.css",revision:"3e245e2e22c7c6213d70626b2d6b4ce3"},{url:"/css/trader.reports.ac2871d76e5ead817a21.css",revision:"2af4f998213b21f9ccc6de94b0201a51"},{url:"/css/trader.screen-small.fd30d856dc74cd7a717a.css",revision:"24ec0b4752506599e1f7385015f1ce8d"},{url:"/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/js/bot/bot-web-ui.main.css",revision:"bb0e128c6f850c8b5e23b53a74763299"},{url:"/js/bot/bot-web-ui.main.js.LICENSE.txt",revision:"dc6f0d184a1dbe0a3658cb435b49ad7e"},{url:"/js/bot/bot.dalembert-xml.abe64e37e5360a0ba434.js",revision:"f313249f096587d1f6f6eaa4a2ad2e84"},{url:"/js/bot/bot.dbot-collection.f14820dbd61c06f9575b.js",revision:"12260052fccdf4f76ccd7a910c63a7be"},{url:"/js/bot/bot.martingale-xml.83bb7a242dae3db3b78a.js",revision:"64de3d5f6f1259eb73bacbcded656607"},{url:"/js/bot/bot.oscars_grind-xml.99a58197afae1b3a8a0b.js",revision:"b9f75da0d3b10525b3ff81ffb94e8c6c"},{url:"/js/bot/media/1x1.gif",revision:"4b252c2abb0553eeb61ed061862f7540"},{url:"/js/bot/media/announcement.ogg",revision:"bf20f0e94bcd21609994e7b3a2d4f056"},{url:"/js/bot/media/arrow.svg",revision:"e349301923b796d8dd6b56b6203c5188"},{url:"/js/bot/media/arrow_button.svg",revision:"af12c5eec2bd1f1e25d072869364cced"},{url:"/js/bot/media/break_out.png",revision:"7136a5373223a91c18286b95446f5400"},{url:"/js/bot/media/candle_list.png",revision:"6731a9817675d2c9af92fd8f7d94f350"},{url:"/js/bot/media/candle_list_1.png",revision:"65363b9ef41319203773a89135475380"},{url:"/js/bot/media/check_result.png",revision:"5062d7b730603d4ff483789af756a5f0"},{url:"/js/bot/media/click.mp3",revision:"f71910b391538a67231e088bba0d47eb"},{url:"/js/bot/media/click.ogg",revision:"abef65ecb98a4828172f263fd5ff7064"},{url:"/js/bot/media/click.wav",revision:"39c900d2154fec42201e998bcf305a4f"},{url:"/js/bot/media/coins.ogg",revision:"325e609d9f1edadf54834c923661e872"},{url:"/js/bot/media/comment-arrow-down.svg",revision:"aadef3963f6809f568d1636b18db9fc9"},{url:"/js/bot/media/comment-arrow-up.svg",revision:"042c1606da7d32266486aa8145ea8bf1"},{url:"/js/bot/media/compare_logic.png",revision:"4942d3e32d32c0ac27f5098c2ce2712f"},{url:"/js/bot/media/constrain.png",revision:"0a749db62da7ef29cc882b782e6e27ed"},{url:"/js/bot/media/continue.png",revision:"2f3fdd8055b3adf0f99ef5daf31a89d7"},{url:"/js/bot/media/control_forever.svg",revision:"11e7bf044cf13076eb1f9f63309017cc"},{url:"/js/bot/media/control_repeat.svg",revision:"35db6c180f639644f5bbd79d658eaf64"},{url:"/js/bot/media/control_stop.svg",revision:"0a513fecbaa8fb54d5d105d529f158c6"},{url:"/js/bot/media/control_wait.svg",revision:"55c2a2baaf2a4508b7d883a71e6606fe"},{url:"/js/bot/media/controls_for.png",revision:"b29dc93cf41b36864d794f0f0f446467"},{url:"/js/bot/media/controls_forEach.png",revision:"9abbbb0a89b3bfd555166e6c5466ae0b"},{url:"/js/bot/media/controls_if.png",revision:"ebb9f3b6a450a1d0321a48e3f32337b9"},{url:"/js/bot/media/create_variable.jpg",revision:"283ae499b47bbed2275a00917059ef39"},{url:"/js/bot/media/delete-x.svg",revision:"5a9a12bb1fe78336cae295c1746a82ce"},{url:"/js/bot/media/delete.mp3",revision:"611d9f6a9392bb80d2000e143aa64323"},{url:"/js/bot/media/delete.ogg",revision:"404bc7b7f1119d2eae0532a228814cf3"},{url:"/js/bot/media/delete.wav",revision:"f079a6272c75b7ddce61f72a98a07731"},{url:"/js/bot/media/dropdown-arrow-dark.svg",revision:"000650484bd9fc536153dc5d7d064996"},{url:"/js/bot/media/dropdown-arrow.svg",revision:"be850da552699b8705b5902cb59c6d37"},{url:"/js/bot/media/epoch.png",revision:"86ad967965e792168fac0c3379459015"},{url:"/js/bot/media/event_broadcast_blue.svg",revision:"66d4fdeb552c48adb936dd134f9a7cc3"},{url:"/js/bot/media/event_broadcast_coral.svg",revision:"1c866d5fc9b809e085f815d4cc528c3d"},{url:"/js/bot/media/event_broadcast_green.svg",revision:"07fc1baf5962aa6035c259dedfbdf10b"},{url:"/js/bot/media/event_broadcast_magenta.svg",revision:"4288ba3e3534c6c3bf065f888c74276a"},{url:"/js/bot/media/event_broadcast_orange.svg",revision:"fe7e38133cf1be78f504777da6864807"},{url:"/js/bot/media/event_broadcast_purple.svg",revision:"97e3a8d9596074ccb0f02f888e290920"},{url:"/js/bot/media/event_when-broadcast-received_blue.svg",revision:"a1c3ec8129337cdc6a0e00d51ba75b75"},{url:"/js/bot/media/event_when-broadcast-received_coral.svg",revision:"5cddf42acdb787c2cf03bdd5c3507e16"},{url:"/js/bot/media/event_when-broadcast-received_green.svg",revision:"7fdc28bcbc5bae41c0e55e8c1009bf6a"},{url:"/js/bot/media/event_when-broadcast-received_magenta.svg",revision:"1ada6afd03b601a82d0f7650f72b39b3"},{url:"/js/bot/media/event_when-broadcast-received_orange.svg",revision:"fcd47384fbb6dc6e136a6961b042bb0e"},{url:"/js/bot/media/event_when-broadcast-received_purple.svg",revision:"0da127529cc813e1f615b87cdcf87d28"},{url:"/js/bot/media/event_whenflagclicked.svg",revision:"b93d2d06ce25b6a10a8af6caac0890f3"},{url:"/js/bot/media/eyedropper.svg",revision:"ad88aac393c2d7d9e88f7229ac5bcdde"},{url:"/js/bot/media/get_candle.png",revision:"573a923a50a3b5406b104227759689b1"},{url:"/js/bot/media/green-flag.svg",revision:"6a025d288965050155abca89738f6b10"},{url:"/js/bot/media/handclosed.cur",revision:"6b45ea439228cba3afaa23022f1246a2"},{url:"/js/bot/media/handdelete.cur",revision:"b0b4b0b44ed0136f7899c8b2957ca68f"},{url:"/js/bot/media/handopen.cur",revision:"505cbb975d6102c374ec64aa92397051"},{url:"/js/bot/media/i-am-being-serious.ogg",revision:"e30f2b4c60fe2bebd35a68e7bff30cae"},{url:"/js/bot/media/ic-chevron-down-bold.svg",revision:"377a922e30f1374322f2b50cc4f13e2a"},{url:"/js/bot/media/if-return.png",revision:"f40ad8d7911151c28c99fbb22a995ee3"},{url:"/js/bot/media/in_candle_list_read.png",revision:"b70d2e963e038514149bd426945c5c06"},{url:"/js/bot/media/is_candle_black.jpeg",revision:"51be3a2c0fbef85906ae894c5f9675f7"},{url:"/js/bot/media/is_candle_black_1.jpeg",revision:"d72d98eff294937daeec896afd174776"},{url:"/js/bot/media/job-done.ogg",revision:"c6fe905aba6de69f8458dbca11774ff2"},{url:"/js/bot/media/logic.png",revision:"530e0991f3e7618036a777b22be9a70d"},{url:"/js/bot/media/microbit-block-icon.svg",revision:"762e3f99bc602ad35add07a3d34cc177"},{url:"/js/bot/media/music-block-icon.svg",revision:"9d9e41ee9e7df510bcbb5c65cc927526"},{url:"/js/bot/media/notify_telegram.png",revision:"49d3755ee63c99f5eb8795f7b7b0f779"},{url:"/js/bot/media/out-of-bounds.ogg",revision:"e34801c4a60c325b6dbd89730793cb60"},{url:"/js/bot/media/pen-block-icon.svg",revision:"2d0b6dcc703fcf4cdfd2c9c19c407f9f"},{url:"/js/bot/media/read_candle_value.png",revision:"ac13c900a08bbc2d0f52989995571f92"},{url:"/js/bot/media/remove.svg",revision:"c9b4db61d6901dc5326d8af8f00eb770"},{url:"/js/bot/media/repeat.svg",revision:"faeda723162340d506d259eab15a57fc"},{url:"/js/bot/media/repeat_until.png",revision:"fe1f767ffb1ba889fe9ce287d0b44453"},{url:"/js/bot/media/repeat_while.png",revision:"4f5181432be99001e73dbdce8c4675bb"},{url:"/js/bot/media/rotate-left.svg",revision:"09b2fa9a323038e25e0d71f2e204c714"},{url:"/js/bot/media/rotate-right.svg",revision:"68c6346a929214004666a69407245ce4"},{url:"/js/bot/media/sell_available.png",revision:"110496a9bb1c0677a704facfdaf305f8"},{url:"/js/bot/media/sell_pl.png",revision:"57b40d0c77adefc7dd73fa96b1585b12"},{url:"/js/bot/media/set-led_blue.svg",revision:"64e271cacd79c04f51e4140976ed69aa"},{url:"/js/bot/media/set-led_coral.svg",revision:"0f819c06f38eec93562e8a7e0390aa8d"},{url:"/js/bot/media/set-led_green.svg",revision:"95d552a2bf92aaf29ea7b7850efc1e78"},{url:"/js/bot/media/set-led_magenta.svg",revision:"bab1714e185b0cce2134c239d7f9dad4"},{url:"/js/bot/media/set-led_mystery.svg",revision:"7f11f033db1a2764ba822a9492113802"},{url:"/js/bot/media/set-led_orange.svg",revision:"8b9ac813216487a8c0ab20120d55e22c"},{url:"/js/bot/media/set-led_purple.svg",revision:"208edc4045ede72b45a4242e9237dde4"},{url:"/js/bot/media/set-led_white.svg",revision:"a8a2fcc4c60a3c2c4a093081568c2456"},{url:"/js/bot/media/set-led_yellow.svg",revision:"59a03bf890f2c2223b47faa092451e3c"},{url:"/js/bot/media/set_variable.png",revision:"8bcedb494505f49c136cb24140697d6b"},{url:"/js/bot/media/sma_array.png",revision:"ce4d8202e8ec96c43209d1d061e673e0"},{url:"/js/bot/media/sma_array_explanation.jpeg",revision:"79c52881f915825a5e9ed0e54b56fdc1"},{url:"/js/bot/media/sma_block_example.png",revision:"21359adbe220385acf434fe3eef1bb76"},{url:"/js/bot/media/sma_block_example_1.png",revision:"7d1e9625e386a0e2f253f960c884ec52"},{url:"/js/bot/media/sma_chart_1.png",revision:"3a31f9b46813ac814bc3fb312e7361ad"},{url:"/js/bot/media/sma_chart_2.png",revision:"7a7e8de40b21134a0be32ca8687ef689"},{url:"/js/bot/media/sma_formula.png",revision:"15c459793534844fda8711db850b728d"},{url:"/js/bot/media/sprites.png",revision:"525a87801f9b33ec2cf606683aefed54"},{url:"/js/bot/media/sprites.svg",revision:"911d25e52cb1d95f2d942ec5b7670d06"},{url:"/js/bot/media/status-not-ready.svg",revision:"f78900031c49204a86c16c7bf733b88f"},{url:"/js/bot/media/status-ready.svg",revision:"48ce534fd447c2be7e4e914640a29f01"},{url:"/js/bot/media/todatetime.png",revision:"abc631e876465668224030fab5b3ef5e"},{url:"/js/bot/media/totimestamp.png",revision:"b4f4ad88b5f72780a962b0b356158bc3"},{url:"/js/bot/media/trade_again.png",revision:"41e774083470e843152a338ccdeab9e3"},{url:"/js/bot/media/wedo2-block-icon.svg",revision:"1a0ef9e4545e669d48764fc8af37adf9"},{url:"/js/bot/media/wedo_motor-clockwise.svg",revision:"4829ed554af2e113d3893e7ddfcacdec"},{url:"/js/bot/media/wedo_motor-counterclockwise.svg",revision:"ff174bda55c2cbd90fa98409845454eb"},{url:"/js/bot/media/wedo_motor-speed_fast.svg",revision:"c6ccc23958f6f1f63bf3da24397ce6d0"},{url:"/js/bot/media/wedo_motor-speed_med.svg",revision:"043ca7700cb3d77feb7c961e20902445"},{url:"/js/bot/media/wedo_motor-speed_slow.svg",revision:"5d36448f0913922583b23bbda55723f6"},{url:"/js/bot/media/wedo_when-distance_close.svg",revision:"a0a0a92846810f59ef052cea7335a80e"},{url:"/js/bot/media/wedo_when-tilt-backward.svg",revision:"9fbb87c4587ecaf99818cf2e32aa121c"},{url:"/js/bot/media/wedo_when-tilt-forward.svg",revision:"50ad4484043907a264ddd3d8959845c4"},{url:"/js/bot/media/wedo_when-tilt-left.svg",revision:"e37ddacb2f596649efccf371b6ea14af"},{url:"/js/bot/media/wedo_when-tilt-right.svg",revision:"1a3d9d81b6d8844a8a1442c4d2601861"},{url:"/js/bot/media/wedo_when-tilt.svg",revision:"eda90cb35927caf62a93effa8139cf1b"},{url:"/js/bot/media/zoom-in.svg",revision:"db8254dc60f8e2b5190a2f19440ddf74"},{url:"/js/bot/media/zoom-out.svg",revision:"6dcc03cf4f57ffe8e5738cc0fc0ca731"},{url:"/js/bot/media/zoom-reset.svg",revision:"c70243f271cbeec1c06acbff9d525dd5"},{url:"/js/cashier-store.js",revision:"1789e2098ec63f98aa78e367fbae89f6"},{url:"/js/cashier.404.d5f5d3aa0d8c53532e50.js",revision:"c608575a5f0c6dfe6286e65bd478d65a"},{url:"/js/cashier.js",revision:"006a55b4e6c7123f8cdbd07c95dd9293"},{url:"/js/cashier.js.LICENSE.txt",revision:"48938f1ddb2bfcce16176da1bdd860db"},{url:"/js/cashier.loadjs.4b458ac4203eb84dc516.js",revision:"c35a80c8d8b97d9bcf1d7b535fb45842"},{url:"/js/core.16.6dbe06eeecc0acc3bd3a.js",revision:null},{url:"/js/core.16.6dbe06eeecc0acc3bd3a.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/js/core.190.9de90a6bd75101e5cfcb.js",revision:null},{url:"/js/core.258.74632254ca4d692d6a9e.js",revision:null},{url:"/js/core.258.74632254ca4d692d6a9e.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"/js/core.268.f33e31432c9f114d2c56.js",revision:null},{url:"/js/core.317.454a3f771c87ffc44460.js",revision:null},{url:"/js/core.374.22a1a4c95827b3a5e04f.js",revision:null},{url:"/js/core.374.22a1a4c95827b3a5e04f.js.LICENSE.txt",revision:"c47fb89f944fc413937f1d857df6495a"},{url:"/js/core.400.c8268847295020872a65.js",revision:null},{url:"/js/core.534.1580ab7479e4e8baa708.js",revision:null},{url:"/js/core.534.1580ab7479e4e8baa708.js.LICENSE.txt",revision:"2790296856ec583b5b8467fdb58cf01c"},{url:"/js/core.594.2ad5627cd7aac5db86ba.js",revision:null},{url:"/js/core.605.a5946f841a431b79db0f.js",revision:null},{url:"/js/core.605.a5946f841a431b79db0f.js.LICENSE.txt",revision:"52d07faf3fab71c4ad7e9f1a3a00aa4f"},{url:"/js/core.673.faf6da09903177de0278.js",revision:null},{url:"/js/core.673.faf6da09903177de0278.js.LICENSE.txt",revision:"9e0f7c35959dd8ea3f4c31c88b3bbf88"},{url:"/js/core.705.e88764fca8cc380fda32.js",revision:null},{url:"/js/core.719.95bcab43c0fd94cff59e.js",revision:null},{url:"/js/core.719.95bcab43c0fd94cff59e.js.LICENSE.txt",revision:"4c2d093f8a0341fa734da626db3306dc"},{url:"/js/core.73.c26b5e512afebed57d3c.js",revision:null},{url:"/js/core.73.c26b5e512afebed57d3c.js.LICENSE.txt",revision:"e06c76b946e200416936274c3f9abdce"},{url:"/js/core.761.2dff8ea4806588b78bef.js",revision:null},{url:"/js/core.761.2dff8ea4806588b78bef.js.LICENSE.txt",revision:"411548f347b07fd9b880024b1215db1d"},{url:"/js/core.806.f4d489e5a0d1ef60572e.js",revision:null},{url:"/js/core.806.f4d489e5a0d1ef60572e.js.LICENSE.txt",revision:"8e7fa176b006150306288bd092a696c0"},{url:"/js/core.823.a1acc743e7064316e9a2.js",revision:null},{url:"/js/core.823.a1acc743e7064316e9a2.js.LICENSE.txt",revision:"9048b1757255eadd33395e6e79746ece"},{url:"/js/core.888.eec70f0a7bca168b8b96.js",revision:null},{url:"/js/core.888.eec70f0a7bca168b8b96.js.LICENSE.txt",revision:"c596b9bc42e90862d01bf5a9dd44f555"},{url:"/js/core.991.2d075b80623f520612e6.js",revision:null},{url:"/js/core.account-info.745f1792d581429a8d6d.js",revision:null},{url:"/js/core.account-signup-modal.97254a38f88e60517d51.js",revision:null},{url:"/js/core.account-types-modal.febcda5658a3afd74731.js",revision:null},{url:"/js/core.cashier.b67f424c8c3db46a9e1d.js",revision:null},{url:"/js/core.complaints-policy.a2e690bb96ea72c1f715.js",revision:null},{url:"/js/core.dashboard.f114d3f13b15b03e6b97.js",revision:null},{url:"/js/core.main~182f79bf.1beca570e488ebfdb134.js",revision:null},{url:"/js/core.main~28ed2440.bc30b636f2d79fc3df1d.js",revision:null},{url:"/js/core.main~4e43d1b7.e2408fb552e0979aac8b.js",revision:null},{url:"/js/core.main~703a1da7.f1b355fc43ae40961e91.js",revision:null},{url:"/js/core.main~85fa0c87.84bef6d71e542b04ed19.js",revision:null},{url:"/js/core.main~9a79028c.989aaa87ea77f6736e04.js",revision:null},{url:"/js/core.main~9a8b795a.7d5f9118e697d005ab3f.js",revision:null},{url:"/js/core.main~a97549ed.13f3bfcc79827ea7181a.js",revision:null},{url:"/js/core.main~ba165128.43ab6d20e8cda97a2633.js",revision:null},{url:"/js/core.main~d5ef20ee.da7f0b1382bf4f27e23b.js",revision:null},{url:"/js/core.main~fc854bfa.46795e0697f530a34de9.js",revision:null},{url:"/js/core.reality-check-modal.19c8be5fbd57a2a159bc.js",revision:null},{url:"/js/core.reset-password-modal.55f1f21d3685eae56ced.js",revision:null},{url:"/js/core.set-residence-modal.59ef56078009fb06ee50.js",revision:null},{url:"/js/core.settings-language.c34ba64f98c968f460a9.js",revision:null},{url:"/js/core.settings-theme.a5c9ac14f70886ddf799.js",revision:null},{url:"/js/core.trader~32aceb85.4c91aa014c8360a85a14.js",revision:null},{url:"/js/core.trader~886d9876.0cb7b79d70af7f258063.js",revision:null},{url:"/js/core.trader~e46fc02a.f2561fb6317bfade9b4f.js",revision:null},{url:"/js/core.welcome-modal.8d158942f9f35ded6339.js",revision:null},{url:"/js/dashboard/assets/images/app-card-bg.svg",revision:"02fe09332de06de3f2b3701cbef058ef"},{url:"/js/dashboard/assets/images/check.svg",revision:"140d8a027b87e5e434c7b3dd25d1ee46"},{url:"/js/dashboard/assets/images/placeholder.png",revision:"cd98598f356f0afa5cc6d3002627b719"},{url:"/js/dashboard/assets/images/platforms/dmt5-synthetic-1.png",revision:"ab0ff7bd29a80036a20e8690ea452f85"},{url:"/js/dashboard/assets/images/platforms/dmt5-synthetic-2.png",revision:"1219ca44c130d7a0b344fdd2cd259cd0"},{url:"/js/dashboard/assets/images/qrcode-placeholder.png",revision:"a541741197fd5ae09040352686f1ea33"},{url:"/js/dashboard/assets/images/wallet-banner-desktop.svg",revision:"ce12897069cde40ef2273cfe8a65a3b1"},{url:"/js/dashboard/assets/images/wallet-banner-responsive.svg",revision:"2fa26226728543fb8bcf9598487b444f"},{url:"/js/favicon.ico",revision:"e0543288c8157aeb3bdd984219c150ee"},{url:"/js/smartcharts/chartiq-776126.smartcharts.js",revision:"bd8b1e81d8cbf94c08e5bc47f3f3a225"},{url:"/js/smartcharts/de-json-ec472b.smartcharts.js",revision:"fa42e5399cdc15d1271581f354e4151d"},{url:"/js/smartcharts/es-json-52c923.smartcharts.js",revision:"d395d523076757819a0d6f3f5ae1ad49"},{url:"/js/smartcharts/fr-json-c881bb.smartcharts.js",revision:"7fd5a6cba8bfdab4b9bdc33a3b7f58c5"},{url:"/js/smartcharts/html2canvas-4447b3.smartcharts.js",revision:"8a936b561971d3eefdff637671a5e715"},{url:"/js/smartcharts/id-json-a814c2.smartcharts.js",revision:"b6645d3f129141685a0f706368baf16e"},{url:"/js/smartcharts/it-json-01b804.smartcharts.js",revision:"dc1f2dc82842754e8259c3d867ad3015"},{url:"/js/smartcharts/messages-json-d6f83a.smartcharts.js",revision:"3a8843d507d4486243d28dae110b92e0"},{url:"/js/smartcharts/nl-json-3603de.smartcharts.js",revision:"6d66281164cf32a8c3c82d539fc14210"},{url:"/js/smartcharts/pl-json-42dc00.smartcharts.js",revision:"f12c748551deed66f03093381dfe218b"},{url:"/js/smartcharts/pt-json-777018.smartcharts.js",revision:"61dad82e06982d9b73fe387c51d40214"},{url:"/js/smartcharts/ru-json-36a436.smartcharts.js",revision:"af6aa8b1054f276080f4e6a3b2e5400d"},{url:"/js/smartcharts/sprite-7e3422.smartcharts.svg",revision:"5d2dae390f714710ba244edf8428fb96"},{url:"/js/smartcharts/th-json-158cae.smartcharts.js",revision:"f4193aa3fa1c325d08b39cd535511caa"},{url:"/js/smartcharts/vendors~resize-observer-polyfill-b3c6fb.smartcharts.js",revision:"3db12ac4fdea6045ac83eed11fc63bf3"},{url:"/js/smartcharts/vi-json-49b938.smartcharts.js",revision:"c2442749540fbaa9c3215af572d040ef"},{url:"/js/smartcharts/zh-json-841475.smartcharts.js",revision:"815641d987f687524174eb4eeb9eb350"},{url:"/js/smartcharts/zh_cn-json-6c628d.smartcharts.js",revision:"f200706fe4399274401ac8c0daf6460c"},{url:"/js/smartcharts/zh_tw-json-0f23b4.smartcharts.js",revision:"8aa325c171bc108c08bd0c1b99805044"},{url:"/js/trader.Modules_Trading_Components_Form_TradeParams_Multiplier_info_jsx-Modules_Trading_Components_Fo-bd55fc.3f4f611eda14dcbbf57c.js",revision:"04aa1015424376373746992e1d0c98b2"},{url:"/js/trader.contract.01e458f11ff43af67cb1.js",revision:"ecaaf5289b5b837f8bc7059f20696491"},{url:"/js/trader.error-component.bfcbcfac17718a184942.js",revision:"bb00d67ca034e22fdd23cea323ab36b9"},{url:"/js/trader.mt5.fbcff5bc3d8007a4340a.js",revision:"e09d8cb7e2431e1ba7e2889775e8bc1e"},{url:"/js/trader.reports.a51d424124fc7cd3a9ad.js",revision:"ebbb61f7b669d58b612f2c958f6910e3"},{url:"/js/trader.screen-large.18243760bb633ed77353.js",revision:"3bf7d39ccdfb1c5179fee918b7ae9b6f"},{url:"/js/trader.screen-small.d2aec5a78322d2bef6e3.js",revision:"43c36efc746f50250135529ce5407334"},{url:"/js/trader.settings-chart.d098c727d283940e6dd1.js",revision:"3ada41147601423152b525022dc20451"},{url:"/js/trader.trade-modals.57c4efc4b6404cdfc9a4.js",revision:"d45d86978b4342b410bacee007bdf6eb"},{url:"/js/trader.two-month-picker.59e08f165de0b35d1211.js",revision:"ee1504a006849afcf713fd085a12d8ad"},{url:"/js/trader.vendors-node_modules_formik_dist_formik_esm_js.67be62ce083c9c4df1b1.js",revision:"a1b92e008fb27a3a74f6b8373127e1b6"},{url:"/js/trader.vendors-node_modules_formik_dist_formik_esm_js.67be62ce083c9c4df1b1.js.LICENSE.txt",revision:"b1cbb61d052b673568a0d661fcc32683"},{url:"/manifest.json",revision:"978702155e434434609cf6dfdc5448df"},{url:"/public/i18n/ach.json",revision:"ff86a672a339622116a0d3d51a212533"},{url:"/public/i18n/es.json",revision:"9c223e59ddb8dd99795ed157a106356d"},{url:"/public/i18n/fr.json",revision:"2d1619f80de806215403d920fd7f054c"},{url:"/public/i18n/id.json",revision:"f8e2521d61955edcc2cffba09c0fe0d4"},{url:"/public/i18n/it.json",revision:"36022f9cc70752340d019551726b5973"},{url:"/public/i18n/ko.json",revision:"d3e970e25314ebfb58faaf905f7dfa1c"},{url:"/public/i18n/pl.json",revision:"f89750a2f8bff5e74ef389137945d7b5"},{url:"/public/i18n/pt.json",revision:"ca1697bfac5f0fd7e62c735147099c69"},{url:"/public/i18n/ru.json",revision:"2705fd6b355644a08773803eff2343eb"},{url:"/public/i18n/th.json",revision:"b0611d721ba9099ad087ce21bc970fb3"},{url:"/public/i18n/vi.json",revision:"a381a8758c130fd0d6d9d8ba7cfd9e1d"},{url:"/public/i18n/zh_cn.json",revision:"4b2d47459b118613fef259b0cd2fadb6"},{url:"/public/i18n/zh_tw.json",revision:"f9f51e30acc3a14a234076445f836503"},{url:"/public/images/app/header/dbot-logo.svg",revision:"74dd603772623201c277552d07db9dea"},{url:"/public/images/app/header/dmt5-logo.svg",revision:"bb9d72a69387257a410f35d42763287d"},{url:"/public/images/app/header/dtrader-logo.svg",revision:"e0d36a7365f13540be65f2ba83781f83"},{url:"/public/images/app/portfolio/ic_no_resale.svg",revision:"b34c177c2a8dd29227ed4b73890944e3"},{url:"/public/images/app/portfolio/ic_price_down.svg",revision:"002fdbdfdf687cbbbd665ad2ed4e2271"},{url:"/public/images/app/portfolio/ic_price_stable_light.svg",revision:"6c8b02bfff4862edb63a5995801e02c5"},{url:"/public/images/app/portfolio/ic_price_up.svg",revision:"f5ce1b9a4f239983cf96f1b886ccfbb0"},{url:"/public/images/app/portfolio/ic_purchase_light.svg",revision:"f4198eca77a4a8d7609e94bd99ff49c8"},{url:"/public/images/cashier-demo-dark.svg",revision:"d146119888cb8bab7632d8ae275185b9"},{url:"/public/images/cashier-demo-light.svg",revision:"d619edec18e323c16199d19f2a09953e"},{url:"/public/images/common/404.png",revision:"b2fd89fd64d75b5b75bb7e75f2bb9029"},{url:"/public/images/common/dp2p_banner.png",revision:"efbd723ab548be783bb6411d18cf168a"},{url:"/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",revision:"8b90a2d122bd63b19b2987d8fca2c75d"},{url:"/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",revision:"cc6cdd9391b053108005c72f5dcc3a57"},{url:"/public/images/common/welcome-bg-blue.svg",revision:"d3de1dd75990ffc283952ec5e747d03c"},{url:"/public/images/common/welcome-bg-red.svg",revision:"f4e868a5a4c6bdab25fab2aaa04dbac5"},{url:"/public/images/favicons/apple-touch-icon-114.png",revision:"effff3cb7c7aa7890a0f613252d40b8c"},{url:"/public/images/favicons/apple-touch-icon-120.png",revision:"30ea8aae4db71e707571a615a1207462"},{url:"/public/images/favicons/apple-touch-icon-144.png",revision:"1fbf7ddfba9aa060af026c6856ffec44"},{url:"/public/images/favicons/apple-touch-icon-152.png",revision:"816388a881453a30d4c2b2711fa05e64"},{url:"/public/images/favicons/apple-touch-icon-180.png",revision:"a8db9d4eb2e09a4357ecd6a87a1dd6d9"},{url:"/public/images/favicons/apple-touch-icon-57.png",revision:"535f09e679b29d21c3c5b9d6447d2585"},{url:"/public/images/favicons/apple-touch-icon-60.png",revision:"56a21b5a2b088cbcf26912c17061b612"},{url:"/public/images/favicons/apple-touch-icon-72.png",revision:"6786ed4ef1e2e96e3d4edebc3be12fd5"},{url:"/public/images/favicons/apple-touch-icon-76.png",revision:"796a1bbc9a1a6ebdf0a002af495f9233"},{url:"/public/images/favicons/favicon-16.png",revision:"8cf977893d6011fc63021bb7ce461544"},{url:"/public/images/favicons/favicon-160.png",revision:"45fe97d84d1923f3e05626ea79971262"},{url:"/public/images/favicons/favicon-192.png",revision:"3975b58ec899147249328917c81a90f4"},{url:"/public/images/favicons/favicon-32.png",revision:"5bf792f88750e72e5e5ed56fc96c6efb"},{url:"/public/images/favicons/favicon-96.png",revision:"bbaa020b9ae1944f52a684c311edda66"},{url:"/public/images/favicons/favicon.ico",revision:"e0543288c8157aeb3bdd984219c150ee"},{url:"/public/images/sprite/common.svg",revision:"879157c6c20ce8fadb7ed953d65f2c24"},{url:"/public/images/sprite/currency.svg",revision:"3955f98d0403f371acffa892627a39c6"},{url:"/public/images/sprite/flag.svg",revision:"0b6be63adf18362585e1f439d7d20bae"},{url:"/public/images/sprite/mt5.svg",revision:"18d39661b2341a066c12c6d34996caf2"},{url:"/public/images/sprite/tradetype.svg",revision:"04d969ea5b62d0ad45915b5ace954021"},{url:"/public/images/sprite/underlying.svg",revision:"46264d8b921a1db0c1b97979b1265353"},{url:"/robots.txt",revision:"089ebc0dcc218ff0acfb984a7275dff7"},{url:"/sitemap.xml",revision:"4f36bf94ff485e6aeb5881b5166a137f"}],{}),e.cleanupOutdatedCaches()}));
