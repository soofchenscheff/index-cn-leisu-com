// assets/content-map.js

const siteUrl = "https://index-cn-leisu.com";
const siteKeyword = "雷速";

const categories = [
  { id: 1, name: "首页", slug: "home", keywords: ["首页", "雷速", "导航"] },
  { id: 2, name: "新闻", slug: "news", keywords: ["新闻", "雷速", "资讯", "更新"] },
  { id: 3, name: "产品", slug: "products", keywords: ["产品", "雷速", "服务", "工具"] },
  { id: 4, name: "关于", slug: "about", keywords: ["关于", "雷速", "团队", "联系"] }
];

const tags = [
  "雷速",
  "推荐",
  "热门",
  "最新",
  "技术",
  "教程",
  "下载",
  "帮助"
];

const contentItems = [
  { id: 101, categoryId: 1, title: "欢迎来到雷速", tags: ["雷速", "首页"], url: siteUrl + "/" },
  { id: 102, categoryId: 2, title: "雷速新闻动态", tags: ["新闻", "雷速"], url: siteUrl + "/news" },
  { id: 103, categoryId: 3, title: "雷速产品列表", tags: ["产品", "雷速"], url: siteUrl + "/products" },
  { id: 104, categoryId: 4, title: "关于雷速团队", tags: ["关于", "雷速"], url: siteUrl + "/about" },
  { id: 105, categoryId: 2, title: "雷速技术教程", tags: ["技术", "教程", "雷速"], url: siteUrl + "/news/tech" },
  { id: 106, categoryId: 3, title: "雷速工具下载", tags: ["下载", "雷速"], url: siteUrl + "/products/tools" }
];

function getCategoryNameById(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : "未知";
}

function searchContentByTag(tag) {
  const lowerTag = tag.toLowerCase();
  return contentItems.filter(item =>
    item.tags.some(t => t.toLowerCase() === lowerTag)
  );
}

function searchContentByKeyword(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return contentItems.filter(item =>
    item.title.toLowerCase().includes(lowerKeyword) ||
    item.tags.some(t => t.toLowerCase().includes(lowerKeyword))
  );
}

function getAllKeywordsFromCategories() {
  const keywordSet = new Set();
  categories.forEach(cat => {
    cat.keywords.forEach(kw => keywordSet.add(kw));
  });
  return Array.from(keywordSet);
}

function getContentByCategory(categoryId) {
  return contentItems.filter(item => item.categoryId === categoryId);
}

function displayContentList(list) {
  if (list.length === 0) {
    console.log("没有找到匹配的内容。");
    return;
  }
  list.forEach(item => {
    console.log(`[${item.id}] ${item.title} (${getCategoryNameById(item.categoryId)}) - ${item.url}`);
  });
}

const allKeywords = getAllKeywordsFromCategories();
console.log("站点关键词列表:", allKeywords.join(", "));
console.log("站点标签列表:", tags.join(", "));

const searchResult = searchContentByKeyword("雷速");
console.log("\n搜索关键词 '雷速' 的结果:");
displayContentList(searchResult);

const tagResult = searchContentByTag("教程");
console.log("\n按标签 '教程' 搜索的结果:");
displayContentList(tagResult);

const categoryContent = getContentByCategory(3);
console.log("\n产品分类下的内容:");
displayContentList(categoryContent);