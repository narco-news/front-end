import {ghostAPI, postsPerPage} from '~/config/ghost';

export const state = () => ({
	postNavigation: [],
	postsIndex: [],
	postsIndexTagOne: [],
	postsIndexTagTwo: [],
	postsIndexFeatured: [],
	postsIndexOpinions: [],
	postsIndexAnalysis: [],
	postsIndexATW: [],
	postsIndexSIGACT: [],
	paginationIndex: [],
	singlePost: null,
	pageSettings: null,
	pageTags: null,
	pageAuthors: null,
	tagsIndex: []
});

export const mutations = {
	setPostNavigation(state, postNavigation) {
		state.postNavigation = postNavigation;
	},

	setPostsIndex(state, postsIndex) {
		state.postsIndex = postsIndex;
		state.paginationIndex = postsIndex.meta.pagination;
	},

	setPostsIndexTagOne(state, postsIndexTagOne) {
		state.postsIndexTagOne = postsIndexTagOne;
		state.paginationIndex = postsIndexTagOne.meta.pagination;
	},

	setPostsIndexTagTwo(state, postsIndexTagTwo) {
		state.postsIndexTagTwo = postsIndexTagTwo;
		state.paginationIndex = postsIndexTagTwo.meta.pagination;
	},

	setPostsIndexFeatured(state, postsIndexFeatured) {
		state.postsIndexFeatured = postsIndexFeatured;
		state.paginationIndex = postsIndexFeatured.meta.pagination;
	},

	setPostsIndexOpinions(state, postsIndexOpinions) {
		state.postsIndexOpinions = postsIndexOpinions;
		state.paginationIndex = postsIndexOpinions.meta.pagination;
	},

	setPostsIndexAnalysis(state, postsIndexAnalysis) {
		state.postsIndexAnalysis = postsIndexAnalysis;
		state.paginationIndex = postsIndexAnalysis.meta.pagination;
	},

	setPostsIndexATW(state, postsIndexATW) {
		state.postsIndexATW = postsIndexATW;
		state.paginationIndex = postsIndexATW.meta.pagination;
	},

	setPostsIndexSIGACT(state, postsIndexSIGACT) {
		state.postsIndexSIGACT = postsIndexSIGACT;
		state.paginationIndex = postsIndexSIGACT.meta.pagination;
	},

	setSinglePost(state, singlePost) {
		state.singlePost = singlePost;
	},

	setPageSettings(state, pageSettings) {
		state.pageSettings = pageSettings;
	},

	setPageTags(state, pageTags) {
		state.pageTags = pageTags;
	},

	setPageAuthors(state, pageAuthors) {
		state.pageAuthors = pageAuthors;
	}
};

export const actions = {
	async nuxtServerInit({commit}, {error}) {
		try {
			const settings = await ghostAPI().settings.browse();
			const tags = await ghostAPI().tags.browse({
				limit: 'all',
				filter: 'visibility:public',
				include: 'count.posts'
			});
			const authors = await ghostAPI().authors.browse({
				limit: 'all',
				include: 'count.posts'
			});
			const posts = await ghostAPI().posts.browse({
				limit: 'all',
				fields: 'slug,title'
			});

			const postsWithLinks = posts.map((post, index) => {
				const previousSlug = posts[index - 1] ? posts[index - 1].slug : null;
				const nextSlug = posts[index + 1] ? posts[index + 1].slug : null;

				return {
					...post,
					prevSlug: previousSlug,
					nextSlug
				};
			});

			commit('setPageSettings', settings);
			commit('setPageTags', tags);
			commit('setPageAuthors', authors);
			commit('setPostNavigation', postsWithLinks);
		} catch (error_) {
			error({
				statusCode: 500,
				message: error_.message
			});
			throw error_;
		}
	},

	async getPostsIndex({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndex', posts);
	},
	async getPostsIndexTagOne({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexTagOne', posts);
	},
	async getPostsIndexTagTwo({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexTagTwo', posts);
	},
	async getPostsIndexFeatured({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexFeatured', posts);
	},
	async getPostsIndexOpinions({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexOpinions', posts);
	},
	async getPostsIndexAnalysis({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexAnalysis', posts);
	},
	async getPostsIndexATW({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexATW', posts);
	},
	async getPostsIndexSIGACT({commit}, pagination) {
		const posts = await ghostAPI().posts.browse({
			limit: postsPerPage,
			page: pagination.pageNumber,
			include: 'tags,authors',
			filter: pagination.filter,
			order: 'featured DESC, published_at DESC'
		});
		commit('setPostsIndexSIGACT', posts);
	}
};
