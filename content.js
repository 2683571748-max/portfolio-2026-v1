// 后续可将此处替换成内容管理系统的接口。封面路径支持本地图片。
window.portfolio = {
  name: '六六ui设计师',
  email: '', // 填入真实邮箱后，“获取联系方式”即可复制邮箱。
  compactPortfolioUrl: '', // 精简版作品集 PDF 路径
  resumeUrl: '', // 如 'assets/我的简历.pdf'
  social: [
    {name:'小红书', handle:'设计灵感与日常观察', url:'', mark:'红', tone:'red'},
    {name:'哔哩哔哩', handle:'设计分享与创作记录', url:'', mark:'哔', tone:'pink'},
    {name:'微信公众号', handle:'设计思考与长文记录', url:'', qr:'', mark:'微', tone:'green'}
  ],
  // 学习内容模板：替换标题、封面、正文后，将 example 改为 false。
  notes: [
  {
    "id": "note-1",
    "title": "从留白开始，建立界面的呼吸感",
    "topic": "视觉设计",
    "platform": "小红书",
    "style": "space",
    "kicker": "LESS, BUT BETTER.",
    "headline": "留白的\n力量",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-2",
    "title": "界面配色：找到恰好的平衡",
    "topic": "视觉设计",
    "platform": "小红书",
    "style": "palette",
    "kicker": "COLOR STUDY",
    "headline": "配色，\n有迹可循。",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-3",
    "title": "把复杂信息，整理成清晰层级",
    "topic": "交互体验",
    "platform": "小红书",
    "style": "type",
    "kicker": "VISUAL HIERARCHY",
    "headline": "层级\n决定秩序",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-4",
    "title": "设计师的灵感收集与整理方法",
    "topic": "设计思考",
    "platform": "小红书",
    "style": "orbit",
    "kicker": "DAILY INSPIRATION",
    "headline": "灵感不是\n偶然发生",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-5",
    "title": "Auto Layout 的布局练习",
    "topic": "工具与方法",
    "platform": "哔哩哔哩",
    "style": "layout",
    "kicker": "FIGMA PRACTICE",
    "headline": "让布局\n有章可循",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-6",
    "title": "微交互如何回应用户操作",
    "topic": "交互体验",
    "platform": "哔哩哔哩",
    "style": "motion",
    "kicker": "MOTION NOTES",
    "headline": "细节之中\n自有回应",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-7",
    "title": "从基础样式到可复用组件",
    "topic": "设计系统",
    "platform": "哔哩哔哩",
    "style": "blocks",
    "kicker": "BUILDING BLOCKS",
    "headline": "组件，\n构建一致",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-8",
    "title": "一页界面的视觉推演练习",
    "topic": "视觉设计",
    "platform": "哔哩哔哩",
    "style": "editorial",
    "kicker": "DESIGN EXPLORATION",
    "headline": "一页界面\n多种可能",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-9",
    "title": "设计复盘：从完成到想明白",
    "topic": "设计思考",
    "platform": "微信公众号",
    "style": "journal",
    "kicker": "THINKING IN DESIGN",
    "headline": "完成之后，\n再多想一步。",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-10",
    "title": "设计规范如何在协作中落地",
    "topic": "设计系统",
    "platform": "微信公众号",
    "style": "grid",
    "kicker": "SYSTEMATIC DESIGN",
    "headline": "从规范\n到共识",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-11",
    "title": "如何提出一个更好的设计问题",
    "topic": "设计思考",
    "platform": "微信公众号",
    "style": "question",
    "kicker": "ASK BETTER QUESTIONS",
    "headline": "好的设计\n始于提问",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  },
  {
    "id": "note-12",
    "title": "把观察转化为设计判断",
    "topic": "工具与方法",
    "platform": "微信公众号",
    "style": "observe",
    "kicker": "OBSERVE & REFLECT",
    "headline": "看见，\n然后理解。",
    "cover": "",
    "url": "",
    "body": "",
    "example": true
  }
],
  projects: [
    {id:'daily',industry:'生活方式',featured:true,title:'拾光 · 生活方式 App',category:'APP',subtitle:'用轻盈的界面，收藏生活里的小美好',theme:'mint',visual:'mobile',label:'MOBILE EXPERIENCE',tags:['UI 设计','交互体验']},
    {id:'workspace',industry:'企业服务',featured:true,title:'序 · 协同工作台',category:'后台系统',subtitle:'让信息各就其位，让协作清晰有序',theme:'lilac',visual:'dashboard',label:'WORKSPACE DESIGN',tags:['后台系统','数据可视化']},
    {id:'objects',industry:'生活方式',featured:true,title:'物集 · 家居灵感网站',category:'官网',subtitle:'在留白之间，发现日常之美',theme:'sand',visual:'web',label:'WEB EXPERIENCE',tags:['网页设计','品牌视觉']},
    {id:'finance',industry:'金融',featured:true,title:'有数 · 资产管理',category:'APP',subtitle:'从信息层级出发，探索清晰的数字体验',theme:'blue',visual:'finance',label:'FINANCE INTERFACE',tags:['移动端','信息设计']},
    {id:'system',industry:'通用',featured:true,title:'Forma · 界面设计系统',category:'设计系统',subtitle:'从基础规范到组件，建立一致的设计语言',theme:'rose',visual:'system',label:'DESIGN SYSTEM',tags:['组件库','设计规范']},
    {id:'travel',industry:'文旅',featured:true,title:'山野 · 旅行探索',category:'官网',subtitle:'让每一次出发，都有值得期待的目的地',theme:'olive',visual:'travel',label:'TRAVEL EXPERIENCE',tags:['响应式设计','视觉探索']}
  ]
};
