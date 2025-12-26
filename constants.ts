import { Article, TabItem } from './types';

export const TABS: TabItem[] = [
  { id: '全部', label: '全部资讯' },
  { id: '新闻', label: '行业新闻' },
  { id: '活动', label: '展会活动' },
  { id: '社区', label: '社区作品' },
  { id: '焦点', label: '深度焦点' },
  { id: '技术博客', label: '技术博客' },
  { id: '面试', label: '开发者访谈' },
  { id: '学习', label: '学习资源' },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'hero-1',
    title: '《星际公民：边境》实机演示：下一代开放宇宙的技术突破',
    summary: '独家解析：开发团队如何利用 Nanite 虚拟几何体技术构建无缝衔接的星球表面，以及全新的动态全局光照系统如何改变了太空探索的沉浸感。点击查看 4K 实机演示与技术拆解。',
    date: '2025年12月8日',
    category: '焦点',
    // Space / Nebula - Very reliable ID
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '1',
    title: '黑神话美术总监专访：如何用数字技术重塑东方神话美学',
    summary: '我们深入探讨了游戏中的场景设计理念，从古建筑的激光扫描还原到体积雾的艺术化处理，揭秘这趟西行之路背后的视觉工程。',
    date: '2025年12月5日',
    category: '面试',
    // Ancient Chinese Architecture style
    imageUrl: 'https://images.unsplash.com/photo-1542256038-f94d216f9474?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Unity 6 与 Godot 4.2：独立游戏开发者的引擎选择指南',
    summary: '在渲染管线、C# 性能优化以及 2D 工具集方面，两大引擎各有哪些优劣？本文对比了它们在 2025 年的最新特性，助你做出最佳选择。',
    date: '2025年12月3日',
    category: '技术博客',
    // Coding screen
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: '赛博朋克风格的光影艺术：霓虹灯与雨夜的渲染技巧',
    summary: '学习如何在着色器中实现湿润路面的反射效果，以及如何配置高动态范围（HDR）的霓虹灯光，打造极致的赛博朋克氛围。',
    date: '2025年12月1日',
    category: '学习',
    // Neon City
    imageUrl: 'https://images.unsplash.com/photo-1565507963483-3ddc16768393?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'GDC 2025 前瞻：AI 如何改变 NPC 的行为逻辑',
    summary: '旧金山游戏开发者大会即将开幕，今年的核心议题聚焦于生成式 AI 在非玩家角色（NPC）对话与行为树中的应用。',
    date: '2025年11月28日',
    category: '活动',
    // Conference / Tech Event
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d43f703fb8f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: '社区精选：玩家在《我的世界》中复刻 1:1 纽约城',
    summary: '历时三年的宏大工程，数千名玩家协作。查看这个惊人的体素艺术项目背后的组织方式与地图渲染图。',
    date: '2025年11月25日',
    category: '社区',
    // City Model / Voxel style
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-164391603c43?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: '次世代音频：杜比全景声在恐怖游戏中的应用',
    summary: '声音是恐怖的灵魂。了解《寂静岭》重制版如何利用空间音频技术，让玩家仅凭听觉就能感受到怪物的方位。',
    date: '2025年11月20日',
    category: '技术博客',
    // Studio Microphone
    imageUrl: 'https://images.unsplash.com/photo-1525430192078-43093b584093?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    title: '任天堂发布新款 Switch 后继机型原型机谍照？',
    summary: '虽然官方尚未证实，但供应链流出的渲染图显示了更大的屏幕与磁吸式手柄设计。',
    date: '2025年11月15日',
    category: '新闻',
    // Nintendo Switch
    imageUrl: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    title: '关卡设计复盘：《艾尔登法环》的垂直地图结构',
    summary: '从史东薇尔城到深根底层，分析 FromSoftware 如何利用垂直空间构建复杂而迷人的探索体验。',
    date: '2025年11月10日',
    category: '学习',
    // Dark Castle
    imageUrl: 'https://images.unsplash.com/photo-1533038590840-75a45073bd72?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '9',
    title: '电竞快讯：T1 战队确认参战 2025 季中冠军赛',
    summary: '卫冕冠军将再次出征。查看完整的参赛队伍名单以及赛程安排。',
    date: '2025年11月05日',
    category: '新闻',
    // Esports Arena
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '10',
    title: '3D 建模入门：Blender 4.0 中的几何节点基础',
    summary: '无需编写代码，通过节点连线生成复杂的程序化建筑。适合初学者的 3D 艺术入门教程。',
    date: '2025年11月01日',
    category: '学习',
    // Abstract 3D
    imageUrl: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800&auto=format&fit=crop',
  },
];