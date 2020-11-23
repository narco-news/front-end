export const state = () => ({
  changedToSpanish: null,
  tag: 'tags:-hash-es+featured:false'
});

export const mutations = {
  setBack(state) {
      state.changedToSpanish = false
      state.tag = 'tags:-hash-es+featured:false'
  },
  changeFilter(state) {
      state.changedToSpanish = true
      if (state.changedToSpanish === true) {
          state.tag = 'tags:hash-es'
      }
  },
}