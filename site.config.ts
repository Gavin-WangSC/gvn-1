import siteConfig from "./src/lib/config";

const config = siteConfig({
	title: "Gavin Wang",
	prologue: "Student · Researcher · Builder.\nNotes from the edge of\nmath, code, and moving images.",
	author: {
		name: "Gavin Wang",
		email: "gavin.wangsc@gmail.com",
		link: "https://Gavin-WangSC.github.io/gvn-1"
	},
	description: "Personal site of Gavin Wang — work and notes on AI/ML, number theory, theoretical physics, economics, and film.",
	copyright: {
		type: "CC BY-NC 4.0",
		year: "2026"
	},
	timezone: "Asia/Shanghai",
	i18n: {
		locales: ["en", "zh-cn", "ja"],
		defaultLocale: "en"
	},
	pagination: {
		note: 10,
		jotting: 24
	},
	heatmap: {
		unit: "week"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
