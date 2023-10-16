// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {lineDetails, onTransfered} = props
  const {suggestion} = lineDetails
  const onTransfer = () => {
    onTransfered(suggestion)
  }
  return (
    <li className="each-line">
      <p className="paragraph">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-logo"
        alt="arrow"
        onClick={onTransfer}
      />
    </li>
  )
}
export default SuggestionItem
