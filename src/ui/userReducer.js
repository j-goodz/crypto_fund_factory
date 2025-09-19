const initialState = {
  data: null,
  timer: 0,
  userAccount: '',
  userPortfolioContracts: [],
  confirmations: 0,
  openAllocation: [],
  closeAllocation: [],
  newAccountState: null,
  interval: 60,
  btc_price: 0,
  eth_price: 0

}

const userReducer = (state = initialState, action) => {

	if (action.type === 'UPDATE_BTC_PRICE') {
		return{
			...state,
			btc_price: action.btc_price
		} 
  } 
  
  if (action.type === 'UPDATE_ETH_PRICE') {
		return{
			...state,
			eth_price: action.eth_price
		}
  }  
  
  if (action.type === 'USER_LOGGED_IN') {
    return Object.assign({}, state, {
      data: action.payload
    })
  }
  
  if (action.type === 'USER_LOGGED_OUT') {
    return Object.assign({}, state, {
      data: null
    })
  } 
  
  // else {
  // return{
  //   ...state
  // }
  
  return state
}

export default userReducer
