const OPEN_FILTER_MODAL = 'mysubway/sandwich/OPEN_FILTER_MODAL'
const CLOSE_FILTER_MODAL = 'mysubway/sandwich/CLOSE_FILTER_MODAL'

export const actionTypes = {
  OPEN_FILTER_MODAL,
  CLOSE_FILTER_MODAL
}

const openFilterModal = () => ({
  type: OPEN_FILTER_MODAL
})

const closeFilterModal = () => ({
  type: CLOSE_FILTER_MODAL
})

export const actionCreators = {
  openFilterModal,
  closeFilterModal
}
