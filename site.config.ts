import siteConfig from "./src/lib/config";

const config = siteConfig({
	title: "Gavin Wang",
	prologue: "Student.\nProjects and notes on\ntechnology, people, and learning.",
	author: {
		name: "Gavin Wang",
		email: "wangsc1124@gmail.com",
		link: "https://Gavin-WangSC.github.io/gvn-1"
	},
	description: "Personal site of Gavin Wang — projects and notes on technology, people, and learning.",
	copyright: {
		type: "CC BY-NC 4.0",
		year: "2026"
	},
	timezone: "America/Phoenix",
	i18n: {
		locales: ["en"],
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

// Keep locale-aware content paths because this repo stores information and
// preface entries under src/content/*/en even though the public site is English-only for now.
export const monolocale = false;

export default config;
