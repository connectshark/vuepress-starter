module.exports = {
	title: 'NoseGates', // 網站標題
	description: 'a site for frontend enginner', // 網站描述
	host:'localhost',
	head: [
		['link', { rel: 'icon', href: 'https://i.imgur.com/Qiuka6H.jpg' }]
	], // 內容會配置在<head/>內
	themeConfig: {
		logo: 'https://i.imgur.com/Qiuka6H.jpg',
		sidebar: [ // 側邊欄
			['./aboutMe', '關於我']
		],
		nav: [ // 導航列按鈕
			{ text: 'github', link: 'https://github.com/connectshark/vuepress-starter', target: '_blank' }
		],
		searchMaxSuggestions: 10, // 搜尋最大建議數量
		lastUpdated: '最後更新時間', // string | boolean,
		smoothScroll: true
	},
	extend: '@vuepress/theme-default',
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: 'components'
			}
		],
		[
			'@vuepress/pwa',{
				serviceWorker: true,
				updatePopup: true
			}
		],
		['flowchart'],
		[
      '@vuepress/google-analytics',
      {
        'ga': '' // id
      }
		],
	]
}